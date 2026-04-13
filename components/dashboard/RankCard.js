'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Diamond, ChevronRight } from 'lucide-react'

export default function RankCard({ user }) {
  // Mock data if user prop is missing
  const data = user || {
    username: 'Kaelen_Void',
    avatar_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmwLkS5LuH2o7OsvqdatrJ3dQj7q3iseu4Dzn3RKa0OgrqMBzoJCfGLIsFqwLeBmu_mryLzUjOlvnMCZeZWhU7TMngCihIhyomCBM-ahfPt7CBpOf7piY6sllu3muT0oVbRNegGAESWrGxKFVFbNsGaFqbQS1biW_Jrf_2lAAuOKQzs959QoWQJJvBZQEPfnpqmMgxSbdfBFujggSt0hM0urAlM9Wdo2hAnAKHb0MJEqSP9hmqg59vX8EEKy3Ro9qNR1N1G046qtw',
    league: 'Diamond League',
    rank: 14,
    total_participants: 250,
    xp_to_next: 2450,
    next_league: 'Elite'
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[#1a1a1a]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#e67aff]/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#e67aff] shadow-[0_0_15px_rgba(230,122,255,0.3)]">
          <img 
            src={data.avatar_url} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-['Space_Grotesk'] text-white font-bold text-lg leading-tight">{data.username}</h3>
          <p className="text-[#e67aff] font-['Space_Grotesk'] text-[10px] uppercase tracking-widest font-bold mt-1">
            {data.league}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-[#adaaaa] font-medium">Rank Position</span>
          <span className="text-white font-bold font-['Space_Grotesk']">#{data.rank} / {data.total_participants}</span>
        </div>
        
        <div className="w-full h-1.5 bg-[#0e0e0e] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '72%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#e67aff] to-[#5cb8fd]"
          />
        </div>
        <p className="text-[10px] text-[#adaaaa] italic">
          {data.xp_to_next.toLocaleString()} XP until {data.next_league} promotion
        </p>
      </div>

      <div className="mt-8 p-4 bg-[#0e0e0e]/50 rounded-xl flex items-center gap-4 border border-white/5 group cursor-pointer hover:bg-[#1a1a1a] transition-all">
        <div className="w-10 h-10 bg-[#e67aff]/20 rounded-lg flex items-center justify-center">
          <Diamond className="w-6 h-6 text-[#e67aff] fill-current" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-white">Diamond Rank</p>
          <p className="text-[10px] text-[#adaaaa]">Top 3% of global runners</p>
        </div>
        <ChevronRight className="w-4 h-4 text-[#adaaaa] group-hover:text-white transition-colors" />
      </div>
    </motion.div>
  )
}
