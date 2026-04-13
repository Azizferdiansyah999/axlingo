'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Crosshair } from 'lucide-react'

export default function BountyList({ missions }) {
  const data = missions || [
    { id: 1, title: 'Perfect 10 Quiz Streak', progress: 7, total: 10, color: '#4ae183' },
    { id: 2, title: 'Chat with 5 Citizens', progress: 1, total: 5, color: '#5cb8fd' },
    { id: 3, title: 'Complete Chapter 2 Boss', progress: 0, total: 1, color: '#e67aff' }
  ]

  return (
    <div className="bg-[#131313]/50 rounded-2xl p-6 border border-white/5">
      <h4 className="font-['Space_Grotesk'] text-white font-bold text-sm mb-6 flex items-center gap-3">
        <Crosshair className="w-5 h-5 text-[#4ae183] animate-pulse" />
        <span className="uppercase tracking-widest">Active Bounties</span>
      </h4>

      <div className="flex flex-col gap-6">
        {data.map((mission) => (
          <div key={mission.id} className="flex gap-4 items-start group cursor-pointer">
            <div 
              className="mt-1.5 w-2 h-2 rounded-full shadow-lg shrink-0" 
              style={{ backgroundColor: mission.color, boxShadow: `0 0 10px ${mission.color}` }}
            />
            <div className="flex-1">
              <p className="text-xs font-['Be_Vietnam_Pro'] text-white group-hover:text-[#5cb8fd] transition-colors duration-300">
                {mission.title}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex-1 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(mission.progress / mission.total) * 100}%` }}
                    transition={{ duration: 1, delay: mission.id * 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: mission.color }}
                  />
                </div>
                <span className="text-[10px] text-[#adaaaa] font-bold font-mono">
                  {mission.progress}/{mission.total}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
