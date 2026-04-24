'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * TierBanner Component — Section-level header banner
 * @param {string} title - E.g. "SECTION 1: FOUNDATION & DAILY BASICS"
 * @param {string} subtitle - E.g. "Learn everyday greetings and basics"
 * @param {string} tierLabel - E.g. "STREET LEVEL"
 * @param {number} progress - 0.0 to 1.0
 * @param {string} themeColor - Hex color for the accent
 */
export default function TierBanner({ title, subtitle, tierLabel, progress = 0, themeColor = '#5cb8fd' }) {
  const segments = 5
  const activeSegments = Math.round(progress * segments)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#1a1a1a]/50 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-xl"
      style={{ borderTop: `2px solid ${themeColor}33` }}
    >
      {/* Decorative Blur Background */}
      <div 
        className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl"
        style={{ backgroundColor: `${themeColor}15` }}
      />
      
      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <h2 className="font-['Space_Grotesk'] font-bold text-xl lg:text-2xl tracking-tight text-white uppercase italic">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[#adaaaa] text-sm font-medium mt-1 truncate">{subtitle}</p>
            )}
          </div>
          
          {tierLabel && (
            <span 
              className="shrink-0 px-4 py-1.5 rounded-full text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest border"
              style={{ 
                backgroundColor: `${themeColor}20`,
                color: themeColor,
                borderColor: `${themeColor}30`
              }}
            >
              {tierLabel}
            </span>
          )}
        </div>

        {/* Segmented Progress Bar */}
        <div className="flex gap-2 h-1.5">
          {Array.from({ length: segments }).map((_, i) => (
            <div 
              key={i} 
              className="flex-1 rounded-full transition-all duration-700"
              style={{
                backgroundColor: i < activeSegments ? themeColor : '#262626',
                boxShadow: i < activeSegments ? `0 0 8px ${themeColor}` : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
