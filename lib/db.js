import { supabase } from './supabase'

/**
 * Fetch user profile, stats, and hearts in one go
 */
export async function getUserData(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      *,
      user_stats (*),
      user_hearts (*)
    `)
    .eq('id', userId)
    .maybeSingle()

  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }
  return data
}

/**
 * Update user XP and handle level up logic
 */
export async function addXp(userId, xpToAdd) {
  // Get current stats
  const { data: stats } = await supabase
    .from('user_stats')
    .select('xp, level')
    .eq('user_id', userId)
    .maybeSingle()

  const newXp = stats.xp + xpToAdd
  // Simple level up logic: level = floor(newXp / 100) + 1
  const newLevel = Math.floor(newXp / 100) + 1

  const { data, error } = await supabase
    .from('user_stats')
    .update({ 
      xp: newXp, 
      level: newLevel 
    })
    .eq('user_id', userId)
    .select()

  if (error) throw error
  return data[0]
}

/**
 * Handle Diamond transactions
 */
export async function updateDiamonds(userId, amount) {
  const { data: stats } = await supabase
    .from('user_stats')
    .select('diamonds')
    .eq('user_id', userId)
    .maybeSingle()

  const { data, error } = await supabase
    .from('user_stats')
    .update({ diamonds: stats.diamonds + amount })
    .eq('user_id', userId)
    .select()

  if (error) throw error
  return data[0]
}

/**
 * Fetch the complete Learning Path with proper hierarchy:
 * sections → units → subtopics → lessons (7 per subtopic)
 */
export async function getLearningPath(userId) {
  // Fetch all curriculum data in parallel
  const [sectionsRes, unitsRes, subtopicsRes, lessonsRes, progressRes] = await Promise.all([
    supabase.from('sections').select('*').order('order_index', { ascending: true }),
    supabase.from('units').select('*').order('order_index', { ascending: true }),
    supabase.from('subtopics').select('*').order('order_index', { ascending: true }),
    supabase.from('lessons').select('*').order('order_index', { ascending: true }),
    supabase.from('user_progress').select('*').eq('user_id', userId)
  ])

  if (sectionsRes.error) throw sectionsRes.error
  if (unitsRes.error) throw unitsRes.error
  if (subtopicsRes.error) throw subtopicsRes.error
  if (lessonsRes.error) throw lessonsRes.error
  if (progressRes.error) throw progressRes.error

  const sections = sectionsRes.data || []
  const units = unitsRes.data || []
  const subtopics = subtopicsRes.data || []
  const lessons = lessonsRes.data || []
  const progress = progressRes.data || []

  const progressMap = new Map(progress.map(p => [p.lesson_id, p]))
  let foundActive = false

  // Build hierarchy: sections → units → subtopics → lessons
  return sections.map(section => {
    const sectionUnits = units.filter(u => u.section_id === section.id)

    const mappedUnits = sectionUnits.map(unit => {
      const unitId = unit.id.toString().toLowerCase().trim();
      const unitSubtopics = subtopics.filter(st => st.unit_id?.toString().toLowerCase().trim() === unitId)
      
      let unitCompleted = 0
      let unitTotal = 0

      const mappedSubtopics = unitSubtopics.map(subtopic => {
        const subtopicId = subtopic.id.toString().toLowerCase().trim();
        const subLessons = lessons.filter(l => l.subtopic_id?.toString().toLowerCase().trim() === subtopicId)

        const nodes = subLessons.map(lesson => {
          const userProg = progressMap.get(lesson.id)
          unitTotal++

          let status = 'locked'
          if (userProg && userProg.status === 'completed') {
            status = 'completed'
            unitCompleted++
          } else if (!foundActive) {
            status = 'active'
            foundActive = true
          }

          return {
            id: lesson.id,
            label: lesson.title,
            status,
            type: lesson.type?.includes('boss') ? 'boss' : 'lesson',
            xpReward: lesson.xp_reward || 10,
            crownLevel: lesson.crown_level || 1
          }
        })

        return {
          id: subtopic.id,
          title: subtopic.title,
          description: subtopic.description,
          orderIndex: subtopic.order_index,
          nodes
        }
      })

      return {
        id: unit.id,
        title: unit.title,
        description: unit.description,
        iconEmoji: unit.icon_emoji || '📚',
        orderIndex: unit.order_index,
        isLocked: unit.is_locked,
        subtopics: mappedSubtopics,
        completedCount: unitCompleted,
        totalCount: unitTotal,
        hasActive: mappedSubtopics.some(st => st.nodes.some(n => n.status === 'active'))
      }
    })

    const sectionCompleted = mappedUnits.reduce((s, u) => s + u.completedCount, 0)
    const sectionTotal = mappedUnits.reduce((s, u) => s + u.totalCount, 0)

    return {
      id: section.id,
      title: section.title,
      description: section.description,
      tier: section.tier,
      themeColor: section.theme_color || '#5cb8fd',
      units: mappedUnits,
      completedCount: sectionCompleted,
      totalCount: sectionTotal
    }
  })
}

/**
 * Update user profile (username, avatar_url, etc.)
 */
export async function updateProfile(userId, updates) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()

  if (error) throw error
  return data[0]
}

/**
 * Fetch user achievements with achievement details
 */
export async function getUserAchievements(userId) {
  const { data, error } = await supabase
    .from('user_achievements')
    .select(`
      earned_at,
      achievements (
        id,
        name,
        description,
        icon_url,
        reward_xp
      )
    `)
    .eq('user_id', userId)
    .order('earned_at', { ascending: false })

  if (error) throw error
  return data
}
