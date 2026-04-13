'use client'

import React from 'react'
import TierBanner from '@/components/learning-path/TierBanner'
import PathMap from '@/components/learning-path/PathMap'
import RankCard from '@/components/dashboard/RankCard'
import BountyList from '@/components/dashboard/BountyList'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

// Mock data for Chapter 1
const CHAPTER_1_NODES = [
  { id: 'n1', status: 'completed', label: 'The Basics', type: 'lesson' },
  { id: 'n2', status: 'active', label: 'Greeting Tech', type: 'lesson' },
  { id: 'n3', status: 'locked', label: 'System Syntax', type: 'lesson' },
  { id: 'n4', status: 'locked', label: 'Data Flows', type: 'lesson' },
  { id: 'n5', status: 'locked', label: 'Neon Slang', type: 'lesson' },
  { id: 'n6', status: 'boss', label: 'The Grand Synthesis', type: 'boss' }
]

export default function LearningPathPage() {
  
  const handleNodeClick = (node) => {
    console.log('Node clicked:', node)
    // Future: Open NodeModal
    alert(`Starting: ${node.label}`)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Left Column: Learning Path */}
      <div className="flex-1">
        {/* Global Progress HUD (Top of Path) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-[#1a1a1a]/40 backdrop-blur-md p-5 rounded-2xl border border-white/5"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-white/40 font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] font-bold">
              Global Ranking Progress
            </span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#5cb8fd] fill-current" />
              <span className="text-[#5cb8fd] font-['Space_Grotesk'] font-bold">1,240 XP</span>
            </div>
          </div>
          <div className="h-2 w-full bg-[#0e0e0e] rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#5cb8fd] to-[#e67aff] shadow-[0_0_10px_rgba(92,184,253,0.5)]"
            />
          </div>
        </motion.div>

        {/* Tier Section 1 */}
        <section>
          <TierBanner 
            title="STREET LEVEL" 
            subtitle="Chapter 2 of 10" 
            tierLabel="Beginner"
            progress={0.4}
          />
          
          <PathMap 
            nodes={CHAPTER_1_NODES} 
            onNodeClick={handleNodeClick} 
          />
        </section>

        {/* Future: Tier Section 2, 3... */}
      </div>

      {/* Right Column: Desktop Sidebar Widgets */}
      <aside className="hidden xl:flex w-80 flex-col gap-8">
        <RankCard />
        <BountyList />
        
        {/* Bento Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1a1a1a]/40 p-5 rounded-2xl flex flex-col gap-3 border border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
            <div className="w-8 h-8 bg-[#e67aff]/20 rounded-lg flex items-center justify-center text-[#e67aff] group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-['Space_Grotesk'] text-white/40 uppercase tracking-widest font-bold">Achievements</p>
              <p className="text-2xl font-['Space_Grotesk'] font-bold text-white">42</p>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a]/40 p-5 rounded-2xl flex flex-col gap-3 border border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
            <div className="w-8 h-8 bg-[#5cb8fd]/20 rounded-lg flex items-center justify-center text-[#5cb8fd] group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-['Space_Grotesk'] text-white/40 uppercase tracking-widest font-bold">Nodes Clear</p>
              <p className="text-2xl font-['Space_Grotesk'] font-bold text-white">128</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Floating Action Button - Mobile Only Shortcut */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-[#5cb8fd] to-[#e67aff] rounded-2xl shadow-[0_10px_40px_rgba(92,184,253,0.4)] flex items-center justify-center text-white lg:hidden z-40 border-t border-white/20"
      >
        <Zap className="w-8 h-8 fill-current" />
      </motion.button>
    </div>
  )
}
