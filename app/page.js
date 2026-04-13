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
    <div className="bg-surface selection:bg-primary/30 text-white min-h-screen flex flex-col overflow-x-hidden" data-mode="connect">
      {/* Container utama dengan cyber-grid mobile dan desktop */}
      <main className="flex-grow w-full flex flex-col relative cyber-bg cyber-grid md:grid-pattern items-center justify-center pt-24 md:pt-0 pb-12 md:pb-0 px-6 md:px-0">
        
        {/* Left Section Background (Desktop Only) */}
        <section className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface opacity-60"></div>
        </section>

        {/* Ambient Glow Effects (Mobile & Desktop) */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 md:hidden"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10 md:hidden"></div>

        {/* Right Section: Google Login Card */}
        <section className="flex items-center justify-center w-full md:p-12 relative z-10">
          {/* Decorative Glow Elements (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="w-full max-w-md relative">
            
            {/* Main Glass Card: Gabungan Responsive */}
            <div className="bg-surface-variant/40 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none border border-white/5 md:border-none rounded-3xl md:rounded-xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:shadow-2xl relative overflow-hidden md:glass-card">
              
              {/* Neon Top-Stroke Highlight (Mobile Only) */}
              <div className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              {/* Subtle Interior Glow (Desktop Only) */}
              <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

              {/* Header Title AXLINGO */}
              <div className="text-center mb-8 relative z-10">
                <h1 className="text-2xl md:text-3xl font-headline font-black md:font-bold tracking-tighter md:tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 md:from-primary md:to-secondary uppercase md:normal-case">
                  AXLINGO
                </h1>
              </div>

              {/* Icon Container */}
              <div className="text-center mb-10 relative z-10">
                {/* Mobile: Brand Visual Anchor with Pulse */}
                <div className="md:hidden relative w-24 h-24 mx-auto flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="z-10 bg-surface-container-highest w-16 h-16 rounded-2xl flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(92,184,253,0.3)]">
                    <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
                  </div>
                </div>

                {/* Desktop: Lock Icon */}
                <div className="hidden md:flex w-16 h-16 bg-surface-container-highest rounded-xl items-center justify-center mx-auto mb-6 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>lock_open</span>
                </div>

                <h3 className="text-3xl font-headline font-bold tracking-tight mb-2 text-on-surface md:text-white">Google Secure<span className="hidden md:inline"> Uplink</span></h3>
                <p className="text-on-surface-variant font-body leading-relaxed text-base md:text-sm max-w-xs mx-auto md:max-w-none">
                  Verifikasi identitas untuk sinkronisasi modul bahasa Indonesia-Inggris.
                </p>
              </div>

              {/* Buttons and Info */}
              <div className="space-y-4 relative z-10">
                
                {/* Desktop and Mobile Google Login Button */}
                <button 
                  onClick={handleGoogleLogin}
                  className="w-full md:h-14 py-4 md:py-0 bg-white hover:bg-white/90 text-neutral-900 transition-all duration-300 rounded-xl md:rounded-lg flex items-center justify-center gap-3 md:gap-4 group active:scale-[0.98] shadow-[0_0_15px_rgba(255,255,255,0.2)] md:shadow-lg md:shadow-white/5"
                >
                  <svg className="w-6 h-6 md:hidden" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  <img alt="Google G" className="hidden md:block w-6 h-6" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" />
                  <span className="font-headline font-bold tracking-tight text-gray-900">Login with Google</span>
                </button>

                {/* Mobile Back Button */}
                <button className="md:hidden w-full bg-surface-container-high/50 border border-white/5 py-4 px-6 rounded-xl text-on-surface-variant font-medium text-sm flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors mt-2">
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back to Portal
                </button>

                {/* Protocol Check (Desktop Only) */}
                <div className="hidden md:flex items-center gap-4 py-4">
                  <div className="h-px flex-1 bg-outline-variant/20"></div>
                  <span className="text-on-surface-variant text-xs font-headline uppercase tracking-widest">Protocol Check</span>
                  <div className="h-px flex-1 bg-outline-variant/20"></div>
                </div>

                {/* Micro-Information Grid (Mobile Only) */}
                <div className="md:hidden grid grid-cols-2 gap-3 w-full pt-4">
                  <div className="bg-surface-container-low p-3 rounded-lg border-l-2 border-primary/50 text-left">
                    <div className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary mb-1">ENCRYPTION</div>
                    <div className="text-xs text-on-surface-variant font-medium">AES-256 Cloud</div>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg border-l-2 border-tertiary/50 text-left">
                    <div className="text-[10px] font-headline font-bold uppercase tracking-widest text-tertiary mb-1">SYNC_MODE</div>
                    <div className="text-xs text-on-surface-variant font-medium">Real-time Delta</div>
                  </div>
                </div>

                {/* Secondary Info/Action (Desktop Only) */}
                <div className="hidden md:flex bg-surface-container-low/50 rounded-lg p-4 border border-outline-variant/10 items-start gap-3">
                  <span className="material-symbols-outlined text-primary-dim text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    By proceeding, you acknowledge the <span className="text-primary cursor-pointer hover:underline">Neural Data Policy</span> and the <span className="text-primary cursor-pointer hover:underline">Terms of Service</span>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card Accent: Neon corner (Desktop Only) */}
            <div className="hidden md:block absolute -bottom-2 -right-2 w-24 h-24 border-b-2 border-r-2 border-tertiary/40 rounded-br-xl pointer-events-none z-0"></div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      {/* Desktop Footer */}
      <footer className="fixed bottom-0 w-full z-10 px-8 py-6 hidden md:flex pointer-events-none justify-between items-center bg-transparent">
        <div className="flex gap-6 pointer-events-auto">
          <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-on-surface-variant/40">Akses matriks linguistik global</span>
          <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-on-surface-variant/40">Neural Link established for bilingual mastery</span>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden w-full px-8 pb-10 text-center relative z-10 w-full">
        <p className="text-[11px] leading-relaxed text-on-surface-variant/60 font-body max-w-xs mx-auto">
          By proceeding, you acknowledge the <span className="text-primary hover:underline cursor-pointer">Neural Data Policy</span> and the <span className="text-primary hover:underline cursor-pointer">Terms of Service</span>.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-white/20">
          <span>SECURE_STATUS: READY</span>
          <span className="text-tertiary/40">●</span>
          <span>ID_7729-AX</span>
        </div>
      </footer>
    </div>
  )
}