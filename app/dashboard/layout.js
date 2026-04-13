'use client'

import React from 'react'
import { Home, ShoppingBag, MessageSquare, Trophy, User, Zap, Heart } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from '@/components/dashboard/MobileNav'
import { motion } from 'framer-motion'

export default function DashboardLayout({ children }) {
  const { profile, loading } = useUser()
  const pathname = usePathname()

  if (loading) return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
      <div className="text-[#5cb8fd] font-mono italic animate-pulse">BOOTING SYSTEM...</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col lg:flex-row">
      {/* Sidebar: Desktop Only */}
      <aside className="hidden lg:flex w-72 bg-[#0e0e0e] border-r border-white/5 flex-col p-8 fixed h-full z-40">
        <div className="mb-12 px-2">
          <h2 className="text-2xl font-black bg-gradient-to-br from-[#5cb8fd] via-[#e67aff] to-[#5cb8fd] bg-clip-text text-transparent italic tracking-tighter" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            AXLINGO
          </h2>
          <p className="font-['Space_Grotesk'] uppercase tracking-[0.3em] text-[10px] text-white/40 mt-2 font-bold">
            Level {profile?.user_stats?.level || 1} Runner
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem icon={<Home className="w-5 h-5" />} label="Learning Path" active={pathname === '/dashboard/path' || pathname === '/dashboard'} href="/dashboard/path" />
          <NavItem icon={<MessageSquare className="w-5 h-5" />} label="AI Buddy" active={pathname === '/dashboard/chat'} href="/dashboard/chat" />
          <NavItem icon={<Trophy className="w-5 h-5" />} label="Leaderboard" active={pathname === '/dashboard/leaderboard'} href="/dashboard/leaderboard" />
          <NavItem icon={<ShoppingBag className="w-5 h-5" />} label="Gem Store" active={pathname === '/dashboard/shop'} href="/dashboard/shop" />
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <NavItem icon={<User className="w-5 h-5" />} label="Profile" active={pathname === '/dashboard/profile'} href="/dashboard/profile" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen relative pb-24 lg:pb-0">
        {/* Topbar: HUD with Glassmorphism */}
        <header className="h-20 flex items-center justify-between lg:justify-end px-6 lg:px-10 sticky top-0 bg-[#0e0e0e]/80 backdrop-blur-xl z-30 border-b border-white/5">
          {/* Mobile Logo */}
          <div className="lg:hidden">
             <span className="text-xl font-black bg-gradient-to-r from-[#5cb8fd] to-[#e67aff] bg-clip-text text-transparent italic">AXL</span>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            {/* XP HUD */}
            <div className="flex items-center gap-2.5 bg-[#131313] px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl border border-white/5 shadow-inner">
              <Zap className="w-4 h-4 fill-[#c3ffcd] text-[#c3ffcd]" />
              <span className="text-white font-bold text-sm lg:text-base font-['Space_Grotesk']">
                {profile?.user_stats?.xp || 0}
              </span>
            </div>
            
            {/* Hearts HUD */}
            <div className="flex items-center gap-2.5 bg-[#131313] px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl border border-white/5 shadow-inner">
              <Heart className="w-4 h-4 fill-[#ff6e84] text-[#ff6e84]" />
              <span className="text-white font-bold text-sm lg:text-base font-['Space_Grotesk']">
                {profile?.user_hearts?.current_hearts || 0}
              </span>
            </div>

            {/* Diamonds HUD */}
            <div className="flex items-center gap-2.5 bg-[#131313] px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl border border-white/5 shadow-inner">
              <div className="w-4 h-4 bg-[#5cb8fd] octagon shadow-[0_0_8px_#5cb8fd]"></div>
              <span className="text-white font-bold text-sm lg:text-base font-['Space_Grotesk']">
                {profile?.user_stats?.diamonds || 0}
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <section className="flex-1 p-4 lg:p-10">
          {children}
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  )
}

function NavItem({ icon, label, active, href }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-5 px-5 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden
        ${active ? 'bg-white/5 text-white' : 'text-[#adaaaa] hover:text-white hover:bg-white/[0.02]'}`}
    >
      {active && (
        <motion.div 
          layoutId="activeNav"
          className="absolute left-0 top-2 bottom-2 w-1 bg-[#5cb8fd] shadow-[0_0_15px_#5cb8fd] rounded-r-full" 
        />
      )}
      <div className={`transform transition-transform ${active ? 'text-[#5cb8fd] scale-110' : 'group-hover:text-[#5cb8fd] group-hover:scale-110'}`}>
        {icon}
      </div>
      <span className="font-bold text-sm uppercase tracking-wide font-['Space_Grotesk']">{label}</span>
    </Link>
  )
}
