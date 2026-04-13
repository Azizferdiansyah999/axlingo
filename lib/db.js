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
  // 1. Fetch all sections
  const { data: sections, error: secError } = await supabase
    .from('sections')
    .select('*')
    .order('order_index', { ascending: true })

  if (secError) throw secError

  // 2. Fetch all units for ini sections
  const { data: units, error: unitError } = await supabase
    .from('units')
    .select('*')
    .order('order_index', { ascending: true })

  if (unitError) throw unitError

  // 3. Fetch user progress to determine status
  const { data: progress, error: progError } = await supabase
    .from('unit_crown_progress')
    .select('*')
    .eq('user_id', userId)

  if (progError) throw progError

  // 4. Map data into the structure expected by the UI
  let foundActive = false

  return sections.map(section => {
    const sectionUnits = units.filter(u => u.section_id === section.id)
    
    const nodes = sectionUnits.map(unit => {
      const userProg = progress?.find(p => p.unit_id === unit.id)
      
      let status = 'locked'
      if (userProg && userProg.crown_level > 0) {
        status = 'completed'
      } else if (!foundActive) {
        status = 'active'
        foundActive = true
      }

      return {
        id: unit.id,
        label: unit.title,
        status: status,
        type: unit.is_bonus ? 'bonus' : 'lesson',
        xpReward: unit.xp_per_crown || 30
      }
    })

    return {
      ...section,
      nodes
    }
  })
}
