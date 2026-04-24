'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Play, Lock, Trophy, Zap, Terminal, Layers } from 'lucide-react';

/**
 * dummy_design_b/page.js
 * Implementation of Option B: The Tactical Map
 * Focus on tabbed navigation for subtopics inside a unit.
 */

export default function DesignBPage() {
  const [activeTab, setActiveTab] = useState(0);

  const subtopics = [
    { 
      id: 'sub-1', 
      title: 'Decoding Subnet', 
      nodes: [
        { id: 'n1', label: 'Intro', status: 'completed' },
        { id: 'n2', label: 'Basics', status: 'completed' },
        { id: 'n3', label: 'Syntax', status: 'completed' },
        { id: 'n4', label: 'Logic', status: 'active' },
        { id: 'n5', label: 'Advanced', status: 'locked' },
        { id: 'n6', label: 'Mastery', status: 'locked' },
        { id: 'n7', label: 'Final Quiz', status: 'locked', type: 'boss' },
      ]
    },
    { 
      id: 'sub-2', 
      title: 'Quantum Greeting', 
      nodes: Array.from({ length: 7 }, (_, i) => ({ id: `s2n${i}`, label: `L${i+1}`, status: 'locked' }))
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
      <div className="flex-1">
        <header className="mb-8 flex justify-between items-center bg-[#1a1a1a]/40 p-6 rounded-2xl border border-white/5 backdrop-blur-xl">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#92ccff] to-[#006599] flex items-center justify-center shadow-[0_0_20px_rgba(146,204,255,0.3)]">
                 <Terminal className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white font-headline tracking-tight uppercase">Unit 4: Neon Syntax</h1>
                <p className="text-[10px] text-[#92ccff] font-mono tracking-widest uppercase">72% Completed</p>
              </div>
           </div>
           <div className="flex gap-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-1.5 h-6 rounded-full ${i <= 3 ? 'bg-[#4ae183]' : 'bg-white/10'}`}></div>
              ))}
           </div>
        </header>

        {/* Subtopic Tabs */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
           {subtopics.map((sub, idx) => (
             <button 
               key={sub.id}
               onClick={() => setActiveTab(idx)}
               className={`px-6 py-3 rounded-xl font-headline text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border
                 ${activeTab === idx 
                   ? 'bg-[#92ccff] text-[#001d31] border-[#92ccff] shadow-[0_0_20px_rgba(146,204,255,0.4)]' 
                   : 'bg-[#1a1a1a]/60 text-white/40 border-white/5 hover:border-white/20'}
               `}
             >
               {sub.title}
             </button>
           ))}
        </div>

        {/* Node Area */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center py-10 relative"
          >
             <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <path d="M 320 0 Q 380 150 320 300 Q 260 450 320 600 Q 380 750 320 900" fill="transparent" stroke="#92ccff" strokeWidth="4" strokeDasharray="10 10" />
             </svg>

             <div className="relative w-[320px] h-[750px]">
                {subtopics[activeTab].nodes.map((node, i) => {
                  const isRight = i % 2 !== 0;
                  const x = 160 + (isRight ? 60 : -60);
                  const y = i * 100;
                  return (
                    <div key={node.id} className="absolute" style={{ left: x - 28, top: y }}>
                       <div className={`w-14 h-14 octagon flex items-center justify-center transition-all
                          ${node.status === 'completed' ? 'bg-[#4ae183]' : 
                            node.status === 'active' ? 'bg-[#92ccff] scale-125' : 'bg-[#2a2a2a]'}
                       `}>
                          {node.status === 'completed' && <Check className="w-5 h-5 text-white" />}
                          {node.status === 'active' && <Play className="w-5 h-5 text-[#001d31] fill-current" />}
                          {node.status === 'locked' && <Lock className="w-4 h-4 text-white/20" />}
                       </div>
                       {node.status === 'active' && (
                         <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-32 glass-panel p-2 rounded-lg border-l-2 border-[#92ccff]">
                            <p className="text-[8px] font-bold text-[#92ccff] uppercase">Mission</p>
                            <p className="text-[9px] text-white leading-tight">{node.label}</p>
                         </div>
                       )}
                    </div>
                  );
                })}
             </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <aside className="w-80 flex flex-col gap-6">
         <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-6">
               <Layers className="w-5 h-5 text-[#f9acff]" />
               <h3 className="font-headline font-bold text-xs text-white uppercase tracking-widest">Tactical Brief</h3>
            </div>
            <div className="space-y-4">
               <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                  <p className="text-[9px] text-white/40 uppercase mb-1">Unit Progress</p>
                  <p className="text-xl font-bold text-white">72% <span className="text-[10px] text-[#4ae183] ml-2">+12% Today</span></p>
               </div>
               <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                  <p className="text-[9px] text-white/40 uppercase mb-1">Next Objective</p>
                  <p className="text-xs font-bold text-[#92ccff]">Advanced Logic Patterns</p>
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
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
