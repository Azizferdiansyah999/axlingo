'use client'

import React from 'react'
import { useUser } from '@/hooks/useUser'
import { motion } from 'framer-motion'
import { LogOut, Trophy, Flame, Target, Star, Shield } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const { profile, loading } = useUser()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading || !profile) return <div className="p-8 text-[#adaaaa] animate-pulse">Loading Profile...</div>

  // Dummy stats for simulation
  const stats = profile.user_stats || { level: 1, xp: 0, diamonds: 0 }
  const username = profile.username || 'Vibe_User'
  const joinDate = new Date(profile.created_at).toLocaleDateString()

  // Framer motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Operative <span className="text-[#e67aff]">Profile</span>
          </h1>
          <p className="text-[#adaaaa] mt-2 font-mono text-sm tracking-widest">ID: {profile.id.split('-')[0]}</p>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-[#ff6e84] hover:text-[#ffb2b9] font-bold px-4 py-2 bg-[#1a1a1a] rounded-xl border border-transparent hover:border-[#ff6e84]/30 transition-all">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {/* User ID Tag Card (Large, spans 2 cols) */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-2 bg-[#131313] rounded-3xl p-8 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-32 h-32 text-[#5cb8fd]" />
           </div>
           <div className="relative z-10 flex items-center gap-8">
             <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#5cb8fd] to-[#c3ffcd] flex items-center justify-center shadow-[0_0_30px_#5cb8fd50]">
               <span className="text-4xl font-black text-[#0e0e0e]">{username.charAt(0).toUpperCase()}</span>
             </div>
             <div>
               <h2 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{username}</h2>
               <div className="flex items-center gap-3 text-[#adaaaa] text-sm">
                 <span className="bg-[#1a1a1a] px-3 py-1 rounded-md text-[#5cb8fd] font-mono">Rank: Initiated</span>
                 <span>Joined {joinDate}</span>
               </div>
             </div>
           </div>
        </motion.div>

        {/* Level Card */}
        <motion.div variants={item} className="bg-gradient-to-b from-[#1a1a1a] to-[#131313] rounded-3xl p-8 flex flex-col items-center justify-center border-t-2 border-[#c3ffcd]">
           <span className="text-[#adaaaa] font-bold uppercase tracking-widest text-xs mb-2">Current Level</span>
           <span className="text-6xl font-black text-[#c3ffcd]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{stats.level}</span>
           <div className="w-full mt-6 bg-[#262626] h-2 rounded-full overflow-hidden">
             <div className="h-full bg-[#c3ffcd] shadow-[0_0_10px_#c3ffcd]" style={{ width: '40%' }}></div>
           </div>
           <span className="text-xs text-[#adaaaa] mt-2">400 XP to Level {stats.level + 1}</span>
        </motion.div>

        {/* Streak Card */}
        <motion.div variants={item} className="bg-gradient-to-b from-[#1a1a1a] to-[#131313] rounded-3xl p-8 flex flex-col items-center justify-center border-t-2 border-[#e67aff]">
           <Flame className="w-12 h-12 text-[#e67aff] mb-4 drop-shadow-[0_0_15px_rgba(230,122,255,0.6)]" />
           <span className="text-4xl font-black text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>12</span>
           <span className="text-[#adaaaa] font-bold uppercase tracking-widest text-xs mt-1">Day Streak</span>
        </motion.div>

        {/* Badges/Trophy Area (Spans 4 columns on large) */}
        <motion.div variants={item} className="md:col-span-3 lg:col-span-4 bg-[#131313] rounded-3xl p-8 mt-6">
           <div className="flex items-center gap-3 mb-8">
             <Trophy className="w-6 h-6 text-[#5cb8fd]" />
             <h3 className="text-2xl font-bold text-white">Digital Relics</h3>
           </div>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { name: "First Login", icon: <Target className="w-8 h-8"/>, color: "#5cb8fd", active: true },
               { name: "7 Day Streak", icon: <Flame className="w-8 h-8"/>, color: "#e67aff", active: true },
               { name: "Slang Master", icon: <Star className="w-8 h-8"/>, color: "#c3ffcd", active: false },
               { name: "Rank 1", icon: <Trophy className="w-8 h-8"/>, color: "#e67aff", active: false }
             ].map((badge, idx) => (
               <div key={idx} className={`p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all
                 ${badge.active ? 'bg-[#1a1a1a] border border-['+badge.color+']/20 hover:scale-105' : 'bg-[#0e0e0e] opacity-40 grayscale'}
               `}>
                 <div className={`text-[${badge.active ? badge.color : '#adaaaa'}] drop-shadow-[0_0_10px_${badge.active ? badge.color+'80' : 'transparent'}]`}>
                   {badge.icon}
                 </div>
                 <span className="font-bold text-sm text-center">{badge.name}</span>
               </div>
             ))}
           </div>
        </motion.div>

      </motion.div>
    </div>
  )
}
