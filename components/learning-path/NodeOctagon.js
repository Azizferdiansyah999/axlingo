'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Play, Lock, Star, Trophy } from 'lucide-react'

/**
 * NodeOctagon Component
 * @param {string} status - 'completed' | 'active' | 'locked' | 'boss' | 'perfect'
 * @param {string} label - Node label/title
 * @param {function} onClick - Click handler
 * @param {string} position - 'left' | 'center' | 'right' (for zig-zag positioning)
 */
export default function NodeOctagon({ status = 'locked', label, onClick, position = 'center' }) {
  const isCompleted = status === 'completed'
  const isActive = status === 'active'
  const isLocked = status === 'locked'
  const isBoss = status === 'boss'
  const isPerfect = status === 'perfect'

  // Position styles
  const positionClasses = {
    left: '-translate-x-12',
    center: 'translate-x-0',
    right: 'translate-x-12'
  }

  // Visual variants
  const variants = {
    completed: 'bg-[#c3ffcd] shadow-[0_0_20px_rgba(195,255,205,0.3)]',
    active: 'bg-[#5cb8fd] neon-glow-primary border-4 border-white/20',
    locked: 'bg-[#262626] border-2 border-white/5 opacity-40',
    boss: 'bg-[#e67aff] shadow-[0_0_30px_rgba(230,122,255,0.4)] border-t-4 border-white/30',
    perfect: 'bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 shadow-[0_0_25px_rgba(251,191,36,0.3)]'
  }

  const iconColors = {
    completed: 'text-[#006834]',
    active: 'text-[#003351]',
    locked: 'text-[#adaaaa]',
    boss: 'text-[#47005a]',
    perfect: 'text-white'
  }

  return (
    <div className={`relative z-10 flex flex-col items-center group ${positionClasses[position]}`}>
      {/* Active Indicator Badge */}
      {isActive && (
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#5cb8fd] text-[#003351] px-4 py-1 rounded-full font-bold text-xs shadow-lg uppercase tracking-tight z-20"
        >
          START
        </motion.div>
      )}

      {/* Main Node Shape */}
      <motion.div
        whileHover={!isLocked ? { scale: 1.1 } : {}}
        whileTap={!isLocked ? { scale: 0.95 } : {}}
        onClick={!isLocked ? onClick : undefined}
        className={`octagon relative cursor-pointer transition-all duration-300 flex items-center justify-center
          ${isBoss ? 'w-32 h-32' : 'w-24 h-24'}
          ${variants[status]}
        `}
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}
      >
        {/* Pulse Rings for Boss */}
        {isBoss && (
          <div className="absolute inset-0 octagon border-2 border-[#e67aff]/30 scale-125 animate-pulse"></div>
        )}

        {/* Icons */}
        {isCompleted && <Check className={`w-10 h-10 ${iconColors.completed} stroke-[3px]`} />}
        {isActive && <Play className={`w-12 h-12 ${iconColors.active} fill-current`} />}
        {isLocked && <Lock className={`w-8 h-8 ${iconColors.locked}`} />}
        {isPerfect && <Star className={`w-10 h-10 ${iconColors.perfect} fill-current`} />}
        {isBoss && <Trophy className={`w-14 h-14 ${iconColors.boss} fill-current`} />}

        {/* Perfect Badge */}
        {isPerfect && (
          <div className="absolute -top-2 -right-2 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#0e0e0e] shadow-lg">
            <Trophy className="w-4 h-4 text-black fill-current" />
          </div>
        )}
      </motion.div>

      {/* Label */}
      {label && (
        <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-opacity duration-300 ${isLocked ? 'opacity-40' : 'opacity-100'}`}>
          <span className={`font-['Space_Grotesk'] text-[10px] font-bold tracking-widest uppercase
            ${isBoss ? 'text-[#e67aff] text-sm block mb-1' : ''}
            ${status === 'completed' ? 'text-[#c3ffcd]' : ''}
            ${status === 'active' ? 'text-[#5cb8fd]' : ''}
            ${status === 'locked' ? 'text-[#adaaaa]' : ''}
            ${status === 'perfect' ? 'text-yellow-400' : ''}
          `}>
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
