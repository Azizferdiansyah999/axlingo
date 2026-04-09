'use client'

import { useEffect, useState, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { getUserData } from '@/lib/db'

export function useUser() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const isFetching = useRef(false) // Mencegah double fetching

  useEffect(() => {
    const fetchFullProfile = async (userId) => {
      if (isFetching.current) return
      isFetching.current = true
      try {
        const data = await getUserData(userId)
        setProfile(data)
      } catch (err) {
        console.error('Error fetching user profile:', err)
      } finally {
        isFetching.current = false
      }
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user)
        await fetchFullProfile(session.user.id)
      } else {
        setUser(null)
        setProfile(null)
      }
      setLoading(false)
    })

    // Initial check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user)
        fetchFullProfile(session.user.id)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, profile, loading }
}
