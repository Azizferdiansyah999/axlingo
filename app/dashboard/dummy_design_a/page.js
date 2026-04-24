'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Play, Lock, Trophy, Star, BookOpen, Zap } from 'lucide-react';

/**
 * dummy_design_a/page.js
 * Implementation of Option A: The Linear Journey
 * Everything flows along a single continuous path.
 */

export default function DesignAPage() {
  const dummyNodes = [
    { id: 'n1', label: 'Intro', status: 'completed' },
    { id: 'n2', label: 'Basics', status: 'completed' },
    { id: 'n3', label: 'Syntax', status: 'completed' },
    { id: 'n4', label: 'Logic', status: 'active' },
    { id: 'n5', label: 'Advanced', status: 'locked' },
    { id: 'n6', label: 'Mastery', status: 'locked' },
    { id: 'n7', label: 'Final Quiz', status: 'locked', type: 'boss' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
      <div className="flex-1 flex flex-col items-center">
        <header className="w-full max-w-2xl mb-12">
          <p className="text-[10px] font-mono font-bold text-[#92ccff] uppercase tracking-[0.4em] mb-2">Section 1 / Unit 4</p>
          <h1 className="text-4xl font-black text-white italic font-headline uppercase tracking-tighter">Cyber-Slang</h1>
        </header>

        <div className="relative flex flex-col items-center w-full max-w-2xl py-12">
          {/* Continuous SVG Path */}
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
            <path d="M 320 0 Q 400 200 320 400 Q 240 600 320 800 Q 400 1000 320 1200" fill="transparent" stroke="#92ccff" strokeDasharray="8 8" strokeWidth="4"></path>
          </svg>

          {/* Subtopic Milestone */}
          <div className="relative z-10 mb-16 flex flex-col items-center">
             <div className="bg-[#92ccff]/10 border border-[#92ccff]/30 px-6 py-2 rounded-full backdrop-blur-md">
                <span className="text-[10px] font-bold font-headline text-white uppercase tracking-[0.3em]">Decoding Subnet Protocols</span>
             </div>
             <div className="w-px h-16 bg-gradient-to-b from-[#92ccff] to-transparent mt-2"></div>
          </div>

          {/* Zigzag Nodes */}
          <div className="relative w-[320px] h-[800px]">
            {dummyNodes.map((node, i) => {
              const isRight = i % 2 !== 0;
              const x = 160 + (isRight ? 70 : -70);
              const y = i * 110;
              const isActive = node.status === 'active';

              return (
                <div key={node.id} className="absolute" style={{ left: x - 32, top: y }}>
                   <div className="relative group flex flex-col items-center">
                      <div className={`w-16 h-16 octagon flex items-center justify-center transition-all duration-300
                        ${node.status === 'completed' ? 'bg-[#4ae183] shadow-[0_0_20px_#4ae18355]' : 
                          node.status === 'active' ? 'bg-gradient-to-br from-[#92ccff] to-[#006599] shadow-[0_0_30px_#92ccff88] scale-110' : 
                          'bg-[#2a2a2a] opacity-40'}
                      `}>
                        {node.status === 'completed' && <Check className="w-6 h-6 text-white" />}
                        {node.status === 'active' && <Play className="w-6 h-6 text-white fill-current" />}
                        {node.status === 'locked' && <Lock className="w-5 h-5 text-white/40" />}
                        {node.type === 'boss' && <Trophy className="w-6 h-6 text-white/20" />}
                      </div>
                      
                      <span className={`mt-3 text-[8px] font-bold uppercase tracking-widest whitespace-nowrap
                        ${node.status === 'active' ? 'text-[#92ccff]' : 'text-white/30'}
                      `}>
                        {node.label}
                      </span>

                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute -right-44 top-1/2 -translate-y-1/2 w-36 glass-panel p-3 rounded-xl border-l-2 border-[#92ccff] z-30"
                        >
                           <p className="text-[8px] font-bold text-[#92ccff] uppercase">Mission Focus</p>
                           <p className="text-[10px] text-white mt-1 leading-tight">{node.label}</p>
                        </motion.div>
                      )}
                   </div>
                </div>
              );
            })}
          </div>

          {/* Next Subtopic Marker */}
          <div className="mt-20 opacity-30 flex flex-col items-center">
             <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/20 mb-2"></div>
             <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full">
                <span className="text-[10px] font-bold font-headline text-white/40 uppercase tracking-[0.3em]">Quantum Patterns</span>
             </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Persistent Style */}
      <aside className="w-80 flex flex-col gap-6 shrink-0">
        <div className="glass-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#92ccff]/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
           <h3 className="font-headline text-[10px] text-white/40 uppercase tracking-widest font-bold mb-6">Course Stream</h3>
           <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs text-white/60">Overall Unit 4</span>
                <span className="text-xl font-bold font-headline text-[#92ccff]">42%</span>
              </div>
              <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-[#92ccff] w-[42%]"></div>
              </div>
           </div>
        </div>
        <div className="bg-[#1a1a1a]/60 p-5 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-4 h-4 text-[#4ae183]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active Stats</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
               <p className="text-[9px] text-white/30 uppercase">XP Today</p>
               <p className="text-xl font-bold text-white">+840</p>
             </div>
             <div>
               <p className="text-[9px] text-white/30 uppercase">Streak</p>
               <p className="text-xl font-bold text-[#4ae183]">8 Days</p>
             </div>
          </div>
        </div>
      </aside>

      <style jsx global>{`
        .font-headline { font-family: 'Space Grotesk', sans-serif; }
        .glass-panel {
          background: rgba(26, 26, 26, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .octagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
      `}</style>
    </div>
  );
}
