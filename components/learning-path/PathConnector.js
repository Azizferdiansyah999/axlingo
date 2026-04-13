'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * PathConnector Component
 * Renders the curved decorative lines between nodes.
 * @param {string} variant - 'solid' | 'dashed'
 * @param {string} color - SVG stroke color
 */
export default function PathConnector({ variant = 'dashed', color = '#5cb8fd' }) {
  const isDashed = variant === 'dashed'

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      style={{ minHeight: '100%' }}
    >
      {/* 
        This is a simplified version. In a real dynamic path, 
        we would calculate these paths based on node positions.
        For now, we implement the visual style from the mockup.
      */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M 50% 100 Q 80% 150 50% 200" // Example path, logic will be handled in PathMap
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={isDashed ? "8 8" : "0"}
      />
    </svg>
  )
}

/**
 * PathLines Component
 * Specialized component to render all lines for a section.
 */
export function PathLines({ nodeCount = 6 }) {
  // Logic to render SVG paths between node positions
  // This will be used as a background in PathMap
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
       <svg width="100%" height="100%" viewBox="0 0 400 1000" preserveAspectRatio="none">
          {/* Example paths based on node indices */}
          <path d="M 200 80 Q 280 160 200 240" fill="none" stroke="#c3ffcd" strokeWidth="4" strokeLinecap="round" />
          <path d="M 200 240 Q 120 320 200 400" fill="none" stroke="#5cb8fd" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
          <path d="M 200 400 Q 280 480 200 560" fill="none" stroke="#262626" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
          {/* Add more as needed */}
       </svg>
    </div>
  )
}
