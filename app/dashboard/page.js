'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Check, Play } from 'lucide-react'

const MOCK_CHAPTERS = [
  { id: 1, title: 'Slang Foundation', status: 'completed' },
  { id: 2, title: 'Street Chat 101', status: 'active' },
  { id: 3, title: 'Advanced Vibes', status: 'locked' },
  { id: 4, title: 'Cyber Dialects', status: 'locked' },
  { id: 5, title: 'The Master Slang', status: 'locked' },
]

export default function PathPage() {
  return (
    <div className="max-w-md mx-auto py-12 flex flex-col items-center">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black neon-purple-text mb-2 tracking-tighter uppercase">The Slang Path</h1>
        <p className="text-gray-500 uppercase text-xs tracking-[0.2em]">Ascend to Masterhood</p>
      </div>

      <div className="relative flex flex-col items-center gap-24 w-full">
        {/* Connection Line Background */}
        <div className="absolute top-0 bottom-0 w-1 bg-white/5 left-1/2 -translate-x-1/2"></div>
        
        {MOCK_CHAPTERS.map((chapter, index) => (
          <Node 
            key={chapter.id} 
            chapter={chapter} 
            index={index} 
            total={MOCK_CHAPTERS.length}
          />
        ))}
      </div>
    </div>
  )
}

function Node({ chapter, index, total }) {
  const isActive = chapter.status === 'active'
  const isCompleted = chapter.status === 'completed'
  const isLocked = chapter.status === 'locked'

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative z-10 flex flex-col items-center group"
    >
      {/* Label Tooltip */}
      <div className="absolute -left-48 lg:-left-64 top-1/2 -translate-y-1/2 hidden lg:flex items-center group-hover:opacity-100 opacity-60 transition-opacity">
         <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-right vibe-glass">
            <p className="text-[10px] text-purple-400 font-mono mb-1">UNIT 0{index + 1}</p>
            <h3 className="font-black text-lg">{chapter.title}</h3>
         </div>
         <div className="w-8 h-[1px] bg-white/10"></div>
      </div>

      <button
        disabled={isLocked}
        className={`
          w-20 h-20 octagon transform transition-all duration-500 hover:scale-110
          ${isCompleted ? 'bg-emerald-500/20 border-2 border-emerald-500 pulse-emerald' : ''}
          ${isActive ? 'bg-purple-600 border-2 border-purple-400 pulse-primary' : ''}
          ${isLocked ? 'bg-white/5 border-2 border-white/10 text-gray-700' : 'text-white'}
        `}
      >
        {isCompleted && <Check className="w-8 h-8 text-emerald-400" />}
        {isActive && <Play className="w-8 h-8 fill-white ml-1" />}
        {isLocked && <Lock className="w-8 h-8" />}
      </button>

      {/* Side Title for Mobile */}
      <div className="mt-4 lg:hidden text-center">
        <h3 className={`font-bold ${isLocked ? 'text-gray-600' : 'text-white'}`}>{chapter.title}</h3>
      </div>
    </motion.div>
  )
}
