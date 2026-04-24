'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Crown, Lock } from 'lucide-react'

/**
 * UnitCard — Accordion card for one curriculum unit.
 * Header shows emoji, title, crown progress, and subtopic count.
 * Expands to reveal a vertical list of SubtopicRow components.
 */
export default function UnitCard({ unit, isExpanded, onToggle, children }) {
  const progress    = unit.totalCount > 0 ? unit.completedCount / unit.totalCount : 0
  const crownsFilled = Math.floor(progress * 5)
  const isClickable  = !unit.isLocked || unit.hasActive

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${isExpanded ? 'z-20' : 'z-0'}`}
    >
      {/* ── Card Header (always visible) ── */}
      <button
        onClick={isClickable ? onToggle : undefined}
        disabled={!isClickable}
        className={`w-full text-left rounded-2xl transition-all duration-300 group
          ${isExpanded
            ? 'bg-[#1a1a1a]/80 backdrop-blur-md shadow-[0_0_24px_rgba(92,184,253,0.08)]'
            : 'bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 backdrop-blur-md'}
          ${!isClickable ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
        `}
        style={isExpanded
          ? { borderLeft: '3px solid #5cb8fd' }
          : { border: '1px solid rgba(255,255,255,0.05)' }
        }
      >
        <div className="p-4 lg:p-5">
          {/* Top row: emoji + title + badges + chevron */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xl shrink-0">{unit.iconEmoji}</span>
              <div className="min-w-0">
                <h3 className="font-['Space_Grotesk'] font-bold text-[13px] text-white uppercase tracking-wide leading-tight truncate">
                  {unit.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] text-white/40 font-mono">
                    {unit.completedCount}/{unit.totalCount} lessons
                  </span>
                  {/* Crown row */}
                  <div className="flex gap-0.5 items-center">
                    {[...Array(5)].map((_, i) => (
                      <Crown
                        key={i}
                        className={`w-3 h-3 ${i < crownsFilled ? 'text-yellow-400 fill-current' : 'text-white/10'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {!isClickable && <Lock className="w-3.5 h-3.5 text-white/30" />}
              <ChevronDown
                className={`w-4 h-4 text-white/40 transition-transform duration-300
                  ${isExpanded ? 'rotate-180 text-[#5cb8fd]' : ''}`}
              />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-1 w-full bg-[#0e0e0e] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#5cb8fd] to-[#e67aff] shadow-[0_0_6px_rgba(92,184,253,0.4)] rounded-full"
            />
          </div>
        </div>
      </button>

      {/* ── Expandable Subtopic List ── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Vertical connector line on left */}
            <div className="relative pl-4 lg:pl-6 mt-1 space-y-2 pb-2">
              <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5cb8fd]/30 to-transparent rounded-full" />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
