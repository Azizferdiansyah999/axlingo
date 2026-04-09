'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session) {
        // Cek dan buat profile secara aman jika belum ada
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', session.user.id)
          .maybeSingle() // Gunakan maybeSingle agar tidak error jika kosong

        if (!profile) {
          try {
            // Proses inisialisasi user baru
            await supabase.from('profiles').upsert([
              { id: session.user.id, username: session.user.email?.split('@')[0] || 'vibe_user' }
            ])
            
            await supabase.from('user_stats').upsert([
              { user_id: session.user.id, xp: 0, level: 1, diamonds: 10 }
            ])

            await supabase.from('user_hearts').upsert([
              { user_id: session.user.id, current_hearts: 5 }
            ])
          } catch (e) {
            console.error("Initialization error:", e)
          }
        }
        
        router.push('/dashboard')
      } else {
        setLoading(false)
      }
    }

    checkUser()
  }, [router])

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    })
    if (error) console.error("Login gagal:", error.message)
  }

  if (loading) return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-purple-500 font-mono animate-pulse tracking-widest uppercase">
        Initializing Vibe...
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="vibe-glass p-12 rounded-2xl flex flex-col items-center gap-8 max-w-md w-full text-center">
        <h1 className="text-5xl font-extrabold neon-purple-text">axlingo</h1>
        <p className="text-gray-400">
          Master the slang, earn diamonds, and build your vibe.
        </p>
        
        <button 
          onClick={handleGoogleLogin}
          className="glow-button vibe-glass px-8 py-4 rounded-xl border border-[#2ecc71] text-[#2ecc71] font-bold tracking-widest uppercase hover:bg-[#2ecc71] hover:text-[#121212]"
        >
          Begin Journey
        </button>
      </div>
    </div>
  )
}
