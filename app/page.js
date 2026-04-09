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
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', session.user.id)
          .maybeSingle()

        if (!profile) {
          try {
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
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="text-primary font-headline animate-pulse tracking-widest uppercase font-bold">
        SIMULATING NEURAL LINK...
      </div>
    </div>
  )

  return (
    <div className="bg-surface selection:bg-primary/30 text-white" data-mode="connect">
      <main className="min-h-[1024px] min-h-screen w-full flex flex-col relative cyber-bg grid-pattern items-center justify-center">
        
        {/* Left Section Background */}
        <section className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface opacity-60"></div>
        </section>

        {/* Right Section: Google Login Card */}
        <section className="flex items-center justify-center p-6 md:p-12 relative z-10 w-full">
          {/* Decorative Glow Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="w-full max-w-md relative">
            
            {/* Main Glass Card - Menggunakan class persis seperti HTML */}
            <div className="glass-card rounded-xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="text-center mb-8 relative z-10">
                <h1 className="text-3xl font-headline font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Axlingo
                </h1>
              </div>
              
              {/* Subtle Interior Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              
              <div className="text-center mb-10 relative z-10">
                <div className="w-16 h-16 bg-surface-container-highest rounded-xl flex items-center justify-center mx-auto mb-6 border border-outline-variant/30">
                  {/* Icon dikembalikan ke Material Symbols agar identik */}
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                    lock_open
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold tracking-tight mb-2">Google Secure Uplink</h3>
                <p className="text-on-surface-variant font-body leading-relaxed text-sm">
                  Verifikasi identitas untuk sinkronisasi modul bahasa Indonesia-Inggris.
                </p>
              </div>

              <div className="space-y-4 relative z-10">
                {/* Primary Google Button */}
                <button 
                  onClick={handleGoogleLogin}
                  className="w-full h-14 bg-white hover:bg-white/90 transition-all duration-300 rounded-lg flex items-center justify-center gap-4 group active:scale-[0.98] shadow-lg shadow-white/5"
                >
                  <img alt="Google G" className="w-6 h-6" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" />
                  <span className="text-gray-900 font-headline font-bold tracking-tight">Login with Google</span>
                </button>

                <div className="flex items-center gap-4 py-4">
                  <div className="h-px flex-1 bg-outline-variant/20"></div>
                  <span className="text-on-surface-variant text-xs font-headline uppercase tracking-widest">Protocol Check</span>
                  <div className="h-px flex-1 bg-outline-variant/20"></div>
                </div>

                {/* Secondary Info/Action */}
                <div className="bg-surface-container-low/50 rounded-lg p-4 border border-outline-variant/10 flex items-start gap-3">
                  {/* Icon info dikembalikan ke Material Symbols */}
                  <span className="material-symbols-outlined text-primary-dim text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                    info
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    By proceeding, you acknowledge the <span className="text-primary cursor-pointer hover:underline">Neural Data Policy</span> and the <span className="text-primary cursor-pointer hover:underline">Terms of Service</span>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card Accent: Neon corner */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-b-2 border-r-2 border-tertiary/40 rounded-br-xl pointer-events-none z-0"></div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="fixed bottom-0 w-full z-10 px-8 py-6 hidden md:block pointer-events-none">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-6 pointer-events-auto">
            <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-on-surface-variant/40">Akses matriks linguistik global</span>
            <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-on-surface-variant/40">Neural Link established for bilingual mastery</span>
          </div>
        </div>
      </footer>
    </div>
  )
}