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
