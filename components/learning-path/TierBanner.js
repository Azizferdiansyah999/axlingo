'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * TierBanner Component
 * @param {string} title - E.g. "STREET LEVEL"
 * @param {string} subtitle - E.g. "Chapter 2 of 10"
 * @param {string} tierLabel - E.g. "Beginner"
 * @param {number} progress - 0.0 to 1.0
 */
export default function TierBanner({ title, subtitle, tierLabel, progress = 0.5 }) {
  // Number of segment bars in the banner progress
  const segments = 5
  const activeSegments = Math.round(progress * segments)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#1a1a1a]/50 backdrop-blur-md rounded-2xl p-6 mb-12 border-t-2 border-[#5cb8fd]/20 shadow-xl"
    >
      {/* Decorative Blur Background */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#5cb8fd]/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl tracking-tight text-white uppercase italic">
              {title}
            </h2>
            <p className="text-[#adaaaa] text-sm font-medium mt-1">{subtitle}</p>
          </div>
          
          {tierLabel && (
            <span className="bg-[#5cb8fd]/20 text-[#5cb8fd] px-4 py-1.5 rounded-full text-[10px] font-bold font-['Space_Grotesk'] border border-[#5cb8fd]/30 uppercase tracking-widest">
              {tierLabel}
            </span>
          )}
        </div>

        {/* Segmented Progress Bar */}
        <div className="flex gap-2 h-1.5">
          {Array.from({ length: segments }).map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 rounded-full transition-all duration-700 ${
                i < activeSegments 
                ? 'bg-[#5cb8fd] shadow-[0_0_8px_#5cb8fd]' 
                : 'bg-[#262626]'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
