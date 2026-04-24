'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import SnakePath from './SnakePath'

/**
 * SubtopicRow — Shows a subtopic label with a collapsible zigzag snake of lesson nodes.
 * Collapsed by default to keep the UI clean; expands on click to reveal the snake.
 */
export default function SubtopicRow({ subtopic, onNodeClick, index = 0 }) {
  const [expanded, setExpanded] = useState(false)

  const completedCount = subtopic.nodes.filter(n => n.status === 'completed').length
  const hasActive      = subtopic.nodes.some(n => n.status === 'active')
  const total          = subtopic.nodes.length
  const progress       = total > 0 ? completedCount / total : 0

  // Auto-expand if this subtopic has the active lesson
  React.useEffect(() => {
    if (hasActive) setExpanded(true)
  }, [hasActive])

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className={`relative rounded-xl border transition-all duration-300 ${expanded ? 'z-30' : 'z-0'}
        ${hasActive
          ? 'border-[#5cb8fd]/20 bg-[#0e1a24]/60'
          : 'border-white/[0.04] bg-[#131313]/40'}
      `}
    >
      {/* ── Header row ── */}
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left group"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Index number */}
          <span className="text-[10px] font-mono font-bold text-white/20 shrink-0 w-5 text-right">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Title */}
          <h4 className="font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-widest text-white/60 truncate group-hover:text-white/80 transition-colors">
            {subtopic.title}
          </h4>
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-2">
          {/* Progress fraction */}
          <span className={`text-[10px] font-mono font-bold
            ${completedCount === total && total > 0 ? 'text-[#c3ffcd]' : 'text-white/30'}`}>
            {completedCount}/{total}
          </span>

          {/* Mini progress bar */}
          <div className="w-14 h-1 bg-[#262626] rounded-full overflow-hidden hidden sm:block">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#5cb8fd] to-[#c3ffcd] transition-all duration-700"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* Chevron */}
          <div className="text-white/30 group-hover:text-white/60 transition-colors">
            {expanded
              ? <ChevronDown className="w-4 h-4" />
              : <ChevronRight className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* ── Expandable Snake ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pt-2">
              <SnakePath nodes={subtopic.nodes} onNodeClick={onNodeClick} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
