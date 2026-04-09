'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, Hexagon } from 'lucide-react'

// Dummy Data untuk Leaderboard (Nantinya diganti fetch dari DB)
const MOCK_LEADERBOARD = [
  { id: 1, rank: 1, username: 'VibeCoder', xp: 12450, avatar: 'V' },
  { id: 2, rank: 2, username: 'CyberNinja', xp: 11200, avatar: 'C' },
  { id: 3, rank: 3, username: 'NeonGhost', xp: 10800, avatar: 'N' },
  { id: 4, rank: 4, username: 'SlangMaster', xp: 9500, avatar: 'S' },
  { id: 5, rank: 5, username: 'DigitalNomad', xp: 8200, avatar: 'D' },
  { id: 6, rank: 6, username: 'ByteMe', xp: 7100, avatar: 'B' },
  { id: 7, rank: 7, username: 'HackerKid', xp: 6400, avatar: 'H' },
]

export default function LeaderboardPage() {
  const topThree = MOCK_LEADERBOARD.slice(0, 3)
  const others = MOCK_LEADERBOARD.slice(3)

  return (
    <div className="p-6 lg:p-12 max-w-5xl mx-auto flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center mb-16 w-full">
        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Global <span className="text-[#5cb8fd]">Rank</span>
        </h1>
        <p className="text-[#adaaaa] mt-2 font-mono text-sm tracking-[0.2em] uppercase">Season 01: The Awakening</p>
      </div>

      {/* The Podium */}
      <div className="flex items-end justify-center gap-4 lg:gap-8 mb-16 h-64 w-full">
        {/* Rank 2 (Silver/Secondary) */}
        <PodiumPlace user={topThree[1]} height="h-40" color="#e67aff" delay={0.2} />
        
        {/* Rank 1 (Gold/Primary-Emerald hybrid) */}
        <PodiumPlace user={topThree[0]} height="h-56" color="#c3ffcd" delay={0.1} isWinner />
        
        {/* Rank 3 (Bronze/Blue) */}
        <PodiumPlace user={topThree[2]} height="h-32" color="#5cb8fd" delay={0.3} />
      </div>

      {/* The List (Ranks 4+) */}
      <div className="w-full flex flex-col gap-4">
        {others.map((user, idx) => (
          <motion.div 
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (idx * 0.1) }}
            className="flex items-center justify-between p-4 px-6 bg-[#131313] rounded-2xl border-l-[3px] border-[#1a1a1a] hover:border-[#5cb8fd] hover:bg-[#1a1a1a] transition-colors group cursor-default"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-2xl font-bold text-[#565555] opacity-50 group-hover:text-[#5cb8fd] transition-colors w-8">
                {user.rank}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center font-black text-[#5cb8fd]">
                {user.avatar}
              </div>
              <span className="text-lg font-bold text-white tracking-wide">{user.username}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[#c3ffcd] font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{user.xp}</span>
              <span className="text-[#adaaaa] text-xs font-mono uppercase tracking-widest">XP</span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

function PodiumPlace({ user, height, color, delay, isWinner = false }) {
  if (!user) return null

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      className={`flex flex-col items-center justify-end w-28 lg:w-40 ${height}`}
    >
      <div className="relative mb-4 flex flex-col items-center">
        {isWinner && <Trophy className="absolute -top-10 w-8 h-8 text-[#c3ffcd] drop-shadow-[0_0_15px_#c3ffcd]" />}
        <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center font-black text-2xl text-[#0e0e0e] shadow-lg`} 
             style={{ background: color, boxShadow: `0 0 20px ${color}40` }}>
          {user.avatar}
        </div>
        <div className="text-center mt-3">
          <p className="font-bold text-white text-sm lg:text-base tracking-wide truncate max-w-full">{user.username}</p>
          <p className={`text-[${color}] text-xs font-bold font-mono mt-1`}>{user.xp} XP</p>
        </div>
      </div>

      <div className={`w-full flex-1 rounded-t-xl bg-gradient-to-t`} 
           style={{ borderTop: `2px solid ${color}`, backgroundImage: `linear-gradient(to top, #131313, ${color}20)` }}>
        <p className={`text-center font-black text-6xl mt-4 opacity-20`} style={{ color, fontFamily: "Space Grotesk, sans-serif" }}>
          {user.rank}
        </p>
      </div>
    </motion.div>
  )
}
