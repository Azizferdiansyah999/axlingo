'use client'

import React from 'react'
import { Home, ShoppingBag, MessageSquare, Trophy, User, Zap, Heart } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'

export default function DashboardLayout({ children }) {
  const { profile, loading } = useUser()

  if (loading) return <div className="min-h-screen bg-[#121212] flex items-center justify-center text-purple-500 font-mono italic animate-pulse">BOOTING SYSTEM...</div>

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 border-r border-white/5 bg-[#121212] flex flex-col p-4 fixed h-full z-20">
        <div className="mb-12 px-2">
          <h2 className="text-2xl font-black neon-purple-text hidden lg:block tracking-tighter">axlingo</h2>
          <div className="w-8 h-8 lg:hidden bg-purple-600 rounded-lg flex items-center justify-center font-bold">A</div>
        </div>

        <nav className="flex-1 space-y-4">
          <NavItem icon={<Home className="w-6 h-6" />} label="Learning Path" active href="/dashboard" />
          <NavItem icon={<MessageSquare className="w-6 h-6" />} label="AI Buddy" href="/dashboard/chat" />
          <NavItem icon={<Trophy className="w-6 h-6" />} label="Leaderboard" href="/dashboard/leaderboard" />
          <NavItem icon={<ShoppingBag className="w-6 h-6" />} label="Vibe Shop" href="/dashboard/shop" />
        </nav>

        <div className="mt-auto pt-4 border-t border-white/5">
          <NavItem icon={<User className="w-6 h-6" />} label="Profile" href="/dashboard/profile" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 lg:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 border-b border-white/5 flex items-center justify-end px-8 gap-6 sticky top-0 bg-[#121212]/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-2 vibe-glass px-4 py-1.5 rounded-full border border-emerald-500/30 text-emerald-400 font-bold">
            <Zap className="w-4 h-4 fill-emerald-400" />
            <span>{profile?.user_stats?.xp || 0} XP</span>
          </div>
          
          <div className="flex items-center gap-2 vibe-glass px-4 py-1.5 rounded-full border border-pink-500/30 text-pink-400 font-bold">
            <Heart className="w-4 h-4 fill-pink-400" />
            <span>{profile?.user_hearts?.current_hearts || 0}</span>
          </div>

          <div className="flex items-center gap-2 vibe-glass px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-400 font-bold">
            <div className="w-4 h-4 bg-blue-400 octagon" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}></div>
            <span>{profile?.user_stats?.diamonds || 0}</span>
          </div>
        </header>

        <section className="p-8 flex-1">
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
      className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 group
        ${active ? 'bg-purple-600/20 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(155,89,182,0.1)]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
    >
      <div className={active ? 'text-purple-400' : 'group-hover:text-purple-400 transform group-hover:scale-110 transition-transform'}>
        {icon}
      </div>
      <span className="font-bold hidden lg:block">{label}</span>
    </Link>
  )
}
