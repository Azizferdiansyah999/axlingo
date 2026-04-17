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
 * Fetch the complete Learning Path with user progress
 */
export async function getLearningPath(userId) {
  // 1. Fetch units with their parent section info
  const { data: units, error: unitError } = await supabase
    .from('units')
    .select(`
      *,
      sections (
        title,
        tier,
        theme_color
      )
    `)
    .order('order_index', { ascending: true })

  if (unitError) throw unitError

  // 2. Fetch all lessons
  const { data: lessons, error: lessonError } = await supabase
    .from('lessons')
    .select('*')
    .order('order_index', { ascending: true })

  if (lessonError) throw lessonError

  // 3. Fetch user progress for lessons
  const { data: progress, error: progError } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)

  if (progError) throw progError

  // 4. Map data
  let foundActive = false

  return units.map(unit => {
    const unitLessons = lessons.filter(l => l.unit_id === unit.id)
    
    const nodes = unitLessons.map(lesson => {
      const userProg = progress?.find(p => p.lesson_id === lesson.id)
      
      let status = 'locked'
      if (userProg && userProg.status === 'completed') {
        status = 'completed'
      } else if (!foundActive) {
        status = 'active'
        foundActive = true
      }

      return {
        id: lesson.id,
        label: lesson.title,
        status: status,
        type: lesson.type.includes('boss') ? 'boss' : 'lesson',
        xpReward: lesson.xp_reward || 30
      }
    })

    return {
      id: unit.id,
      title: unit.title,
      description: unit.description,
      tier: unit.sections?.tier,
      theme_color: unit.sections?.theme_color,
      nodes
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
