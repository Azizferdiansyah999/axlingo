'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Check, Play, Zap } from 'lucide-react'

const MOCK_CHAPTERS = [
  { id: 1, title: 'Slang Foundation', status: 'completed', xp: 50 },
  { id: 2, title: 'Street Chat 101', status: 'completed', xp: 120 },
  { id: 3, title: 'Advanced Vibes', status: 'active', xp: 0 },
  { id: 4, title: 'Cyber Dialects', status: 'locked', xp: 0 },
  { id: 5, title: 'The Master Slang', status: 'locked', xp: 0 },
]

export default function PathPage() {
  return (
    <div className="max-w-xl mx-auto py-12 flex flex-col items-center">
      <div className="w-full mb-16 px-4">
        <h1 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter uppercase" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Learning <span className="text-[#5cb8fd]">Path</span>
        </h1>
        <p className="text-[#adaaaa] uppercase text-xs font-bold tracking-[0.2em]">Ascend to Masterhood</p>
      </div>

      <div className="relative flex flex-col items-center gap-24 w-full">
        {/* Connection Line Background */}
        <div className="absolute top-0 bottom-0 w-1 bg-[#1a1a1a] left-1/2 -translate-x-1/2"></div>
        {/* Glow Line for Completed */}
        <div className="absolute top-0 h-[45%] w-1 bg-gradient-to-b from-[#5cb8fd] to-[#c3ffcd] left-1/2 -translate-x-1/2 shadow-[0_0_15px_#5cb8fd]"></div>
        
        {MOCK_CHAPTERS.map((chapter, index) => (
          <Node 
            key={chapter.id} 
            chapter={chapter} 
            index={index} 
          />
        ))}
      </div>
    </div>
  )
}

function Node({ chapter, index }) {
  const isActive = chapter.status === 'active'
  const isCompleted = chapter.status === 'completed'
  const isLocked = chapter.status === 'locked'

  // Alternating sides for desktop
  const isEven = index % 2 === 0

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="relative z-10 flex flex-col items-center group w-full"
    >
      {/* Label Tooltip - Alternating Desktop */}
      <div className={`absolute top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4 transition-all duration-300
        ${isEven ? 'right-1/2 pr-20 flex-row' : 'left-1/2 pl-20 flex-row-reverse'}
        ${isLocked ? 'opacity-40' : 'opacity-100'}
      `}>
         <div className={`
           bg-[#1a1a1a]/80 backdrop-blur-xl border-t p-4 rounded-xl shadow-lg w-56
           ${isCompleted ? 'border-[#c3ffcd]' : isActive ? 'border-[#5cb8fd]' : 'border-white/10'}
         `}>
            <div className="flex justify-between items-center mb-1">
              <p className="text-[10px] text-[#e67aff] font-mono tracking-widest">CHAPTER 0{index + 1}</p>
              {isCompleted && <span className="text-[#c3ffcd] text-xs font-bold flex items-center gap-1"><Zap className="w-3 h-3 fill-current"/>{chapter.xp}</span>}
            </div>
            <h3 className={`font-bold text-lg ${isLocked ? 'text-[#adaaaa]' : 'text-white'}`}>{chapter.title}</h3>
         </div>
         {/* Connecting pointer line */}
         <div className={`h-[2px] w-8 ${isCompleted ? 'bg-[#c3ffcd]' : isActive ? 'bg-[#5cb8fd]' : 'bg-[#1a1a1a]'}`}></div>
      </div>

      <button
        disabled={isLocked}
        onClick={() => {
          if (isActive || isCompleted) window.location.href = '/dashboard/quiz'
        }}
        className={`
          w-24 h-24 octagon transform transition-all duration-500 hover:scale-110 shadow-xl flex items-center justify-center
          ${isCompleted ? 'bg-[#131313] border-t-2 border-b-2 border-[#c3ffcd] shadow-[0_0_30px_rgba(195,255,205,0.2)] cursor-pointer' : ''}
          ${isActive ? 'bg-gradient-to-br from-[#5cb8fd] to-[#49a8ec] text-[#0e0e0e] shadow-[0_0_40px_rgba(92,184,253,0.4)] cursor-pointer' : ''}
          ${isLocked ? 'bg-[#1a1a1a] border-2 border-[#262626] text-[#565555]' : 'text-white'}
        `}
      >
        <div className="w-20 h-20 octagon bg-[#0e0e0e]/40 flex items-center justify-center backdrop-blur-sm">
          {isCompleted && <Check className="w-8 h-8 text-[#c3ffcd]" />}
          {isActive && <Play className="w-8 h-8 fill-current ml-1" />}
          {isLocked && <Lock className="w-8 h-8" />}
        </div>
      </button>

      {/* Side Title for Mobile */}
      <div className="mt-4 lg:hidden text-center max-w-[200px]">
        <h3 className={`font-bold ${isLocked ? 'text-[#565555]' : 'text-white'}`}>{chapter.title}</h3>
      </div>
    </motion.div>
  )
}
