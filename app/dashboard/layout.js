'use client'

import React from 'react'
import { Home, ShoppingBag, MessageSquare, Trophy, User, Zap, Heart } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }) {
  const { profile, loading } = useUser()
  const pathname = usePathname()

  if (loading) return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
      <div className="text-[#5cb8fd] font-mono italic animate-pulse">BOOTING SYSTEM...</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex">
      {/* Sidebar: Midnight Ether */}
      <aside className="w-20 lg:w-72 border-r border-[#1a1a1a] bg-[#0e0e0e] flex flex-col p-6 fixed h-full z-20">
        <div className="mb-14 px-2">
          <h2 className="text-3xl font-black text-[#ffffff] hidden lg:block tracking-tighter" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            ax<span className="text-[#5cb8fd]">lingo</span>
          </h2>
          <div className="w-10 h-10 lg:hidden bg-[#5cb8fd] rounded-lg flex items-center justify-center font-bold text-[#0e0e0e]">A</div>
        </div>

        <nav className="flex-1 space-y-4">
          <NavItem icon={<Home className="w-6 h-6" />} label="Learning Path" active={pathname === '/dashboard'} href="/dashboard" />
          <NavItem icon={<MessageSquare className="w-6 h-6" />} label="AI Buddy" active={pathname === '/dashboard/chat'} href="/dashboard/chat" />
          <NavItem icon={<Trophy className="w-6 h-6" />} label="Leaderboard" active={pathname === '/dashboard/leaderboard'} href="/dashboard/leaderboard" />
          <NavItem icon={<ShoppingBag className="w-6 h-6" />} label="Gem Store" active={pathname === '/dashboard/shop'} href="/dashboard/shop" />
        </nav>

        <div className="mt-auto pt-6 border-t border-[#1a1a1a]">
          <NavItem icon={<User className="w-6 h-6" />} label="Profile" active={pathname === '/dashboard/profile'} href="/dashboard/profile" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 lg:ml-72 flex flex-col min-h-screen relative">
        {/* Topbar: Glassmorphism HUD */}
        <header className="h-20 flex items-center justify-end px-8 gap-6 sticky top-0 bg-[#0e0e0e]/80 backdrop-blur-xl z-10 border-b border-[#1a1a1a]">
          {/* XP */}
          <div className="flex items-center gap-3 bg-[#131313] px-5 py-2.5 rounded-xl border-t border-[#c3ffcd]/50 shadow-[0_4px_20px_rgba(195,255,205,0.05)]">
            <Zap className="w-5 h-5 fill-[#c3ffcd] text-[#c3ffcd]" />
            <span className="text-[#ffffff] font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{profile?.user_stats?.xp || 0}</span>
          </div>
          
          {/* Hearts */}
          <div className="flex items-center gap-3 bg-[#131313] px-5 py-2.5 rounded-xl border-t border-[#ff6e84]/50 shadow-[0_4px_20px_rgba(255,110,132,0.05)]">
            <Heart className="w-5 h-5 fill-[#ff6e84] text-[#ff6e84]" />
            <span className="text-[#ffffff] font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{profile?.user_hearts?.current_hearts || 0}</span>
          </div>

          {/* Diamonds */}
          <div className="flex items-center gap-3 bg-[#131313] px-5 py-2.5 rounded-xl border-t border-[#5cb8fd]/50 shadow-[0_4px_20px_rgba(92,184,253,0.05)]">
            <div className="w-5 h-5 bg-[#5cb8fd] octagon shadow-[0_0_10px_#5cb8fd]"></div>
            <span className="text-[#ffffff] font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{profile?.user_stats?.diamonds || 0}</span>
          </div>
        </header>

        <section className="flex-1 overflow-x-hidden">
          {children}
        </section>
      </main>
    </div>
  )
}

function NavItem({ icon, label, active, href }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-5 px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
        ${active ? 'bg-[#1a1a1a] text-white' : 'text-[#adaaaa] hover:text-white hover:bg-[#131313]'}`}
    >
      {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5cb8fd] shadow-[0_0_15px_#5cb8fd]"></div>}
      <div className={`transform transition-transform ${active ? 'text-[#5cb8fd]' : 'group-hover:text-[#5cb8fd] group-hover:scale-110'}`}>
        {icon}
      </div>
      <span className="font-bold hidden lg:block tracking-wide">{label}</span>
    </Link>
  )
}
