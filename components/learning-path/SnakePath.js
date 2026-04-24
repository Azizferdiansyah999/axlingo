'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Play, Lock, Trophy, Star } from 'lucide-react'

/**
 * SnakePath — The main zigzag snake component for a subtopic's lesson nodes.
 * Renders N nodes (default 10) in an alternating left-right snake pattern,
 * connected by curved SVG bezier path lines (like Duolingo).
 *
 * @param {Array}    nodes        - Array of node objects { id, label, status, type }
 * @param {function} onNodeClick  - Click handler
 */
export default function SnakePath({ nodes = [], onNodeClick }) {
  const NODE_SIZE = 56        // px — octagon diameter
  const H_OFFSET  = 80        // px — horizontal offset from center (zigzag width)
  const V_SPACING = 100       // px — vertical distance between node centers
  const CONTAINER_W = 320     // px — total container width
  const CENTER_X = CONTAINER_W / 2

  // Calculate pixel position for each node
  const getPos = (index) => {
    const isRight = index % 2 === 0
    const x = CENTER_X + (isRight ? H_OFFSET : -H_OFFSET)
    const y = index * V_SPACING + NODE_SIZE / 2
    return { x, y }
  }

  const totalHeight = (nodes.length - 1) * V_SPACING + NODE_SIZE + 40

  // Build one smooth cubic bezier path segment between two nodes
  const buildPath = (from, to) => {
    const midY = (from.y + to.y) / 2
    const cX = CENTER_X // control point x always at centre
    return `M ${from.x} ${from.y} C ${cX} ${midY}, ${cX} ${midY}, ${to.x} ${to.y}`
  }

  return (
    <div
      className="relative mx-auto"
      style={{ width: CONTAINER_W, height: totalHeight }}
    >
      {/* ── SVG connector lines ── */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={CONTAINER_W}
        height={totalHeight}
        style={{ zIndex: 0 }}
      >
        {nodes.map((node, i) => {
          if (i === nodes.length - 1) return null
          const from = getPos(i)
          const to   = getPos(i + 1)
          const isCompleted = node.status === 'completed' || node.status === 'perfect'
          return (
            <path
              key={`line-${i}`}
              d={buildPath(from, to)}
              fill="none"
              stroke={isCompleted ? '#c3ffcd' : '#262626'}
              strokeWidth={isCompleted ? 3 : 2}
              strokeLinecap="round"
              strokeDasharray={isCompleted ? '0' : '6 6'}
              style={{
                filter: isCompleted
                  ? 'drop-shadow(0 0 6px rgba(195,255,205,0.4))'
                  : 'none',
              }}
            />
          )
        })}
      </svg>

      {/* ── Nodes ── */}
      {nodes.map((node, index) => {
        const { x, y } = getPos(index)
        return (
          <div
            key={node.id || index}
            className="absolute"
            style={{
              left: x - NODE_SIZE / 2,
              top:  y - NODE_SIZE / 2,
              zIndex: 10,
            }}
          >
            <SnakeNode node={node} size={NODE_SIZE} onClick={() => onNodeClick?.(node)} />
          </div>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────── */
/*  Single Snake Node                          */
/* ─────────────────────────────────────────── */
function SnakeNode({ node, size = 56, onClick }) {
  const isCompleted = node.status === 'completed'
  const isActive    = node.status === 'active'
  const isLocked    = node.status === 'locked'
  const isBoss      = node.type   === 'boss'
  const isPerfect   = node.status === 'perfect'

  const nodeSize = isBoss ? size * 1.25 : size

  const bgVariants = {
    completed : 'bg-[#c3ffcd] shadow-[0_0_16px_rgba(195,255,205,0.35)]',
    active    : 'bg-[#5cb8fd] shadow-[0_0_20px_rgba(92,184,253,0.5)]',
    locked    : 'bg-[#262626] border border-white/[0.06] opacity-40',
    perfect   : 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_16px_rgba(251,191,36,0.35)]',
    boss      : 'bg-[#e67aff] shadow-[0_0_24px_rgba(230,122,255,0.45)]',
  }

  const getStyle = () => {
    if (isPerfect) return bgVariants.perfect
    if (isBoss)    return bgVariants.boss
    if (isCompleted) return bgVariants.completed
    if (isActive)    return bgVariants.active
    return bgVariants.locked
  }

  const iconColor = isCompleted ? 'text-[#006834]'
    : isActive    ? 'text-[#003351]'
    : isPerfect   ? 'text-white'
    : isBoss      ? 'text-[#47005a]'
    : 'text-white/20'

  return (
    <div className="relative flex flex-col items-center group" style={{ width: size, height: size }}>
      {/* Floating "START" badge above active node */}
      {isActive && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -8 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.8 }}
          className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#5cb8fd] text-[#003351] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-20 whitespace-nowrap"
        >
          START
        </motion.div>
      )}

      {/* Pulse ring for active */}
      {isActive && (
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute inset-0 bg-[#5cb8fd]/20 rounded-full"
        />
      )}

      {/* Octagon Node */}
      <motion.button
        whileHover={!isLocked ? { scale: 1.12 } : {}}
        whileTap={!isLocked ? { scale: 0.92 } : {}}
        onClick={!isLocked ? onClick : undefined}
        className={`flex items-center justify-center transition-all duration-300 ${getStyle()} ${!isLocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        style={{
          width: nodeSize,
          height: nodeSize,
          clipPath: 'polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)',
        }}
        title={node.label}
      >
        {isCompleted && <Check  className={`w-5 h-5 stroke-[3px] ${iconColor}`} />}
        {isActive    && <Play   className={`w-5 h-5 fill-current ${iconColor}`} />}
        {isLocked    && <Lock   className={`w-4 h-4 ${iconColor}`} />}
        {isPerfect   && <Star   className={`w-5 h-5 fill-current ${iconColor}`} />}
        {isBoss      && <Trophy className={`w-6 h-6 fill-current ${iconColor}`} />}
      </motion.button>

      {/* Tiny label below node */}
      {node.label && (
        <div className={`absolute mt-1 text-center w-28 transition-opacity duration-300 pointer-events-none ${isLocked ? 'opacity-30' : 'opacity-80'}`}
          style={{ top: nodeSize + 4 }}
        >
          <span className="font-['Space_Grotesk'] text-[8px] font-bold tracking-widest uppercase leading-tight block truncate"
            style={{ color: isCompleted ? '#c3ffcd' : isActive ? '#5cb8fd' : '#adaaaa' }}
          >
            {node.label}
          </span>
        </div>
      )}
    </div>
  )
}
