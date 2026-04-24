'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Lock } from 'lucide-react';

/**
 * dummy_design/page.js - PREMIUM REVISION
 * - Section Title moved to Global Navbar (via Layout)
 * - Page Header shows current Unit Title
 * - Premium Rounded Dash Indicators (replacing crowns)
 * - 4 Filtered Units
 */

export default function PremiumDummyDesign() {
  const [expandedUnit, setExpandedUnit] = useState('unit-2'); // Focus on active unit
  const [expandedSubtopic, setExpandedSubtopic] = useState('sub-1');

  const unitsData = [
    {
      id: 'unit-1',
      title: 'Digital Greetings & Basics',
      emoji: '👋',
      progress: 100,
      status: 'completed',
      subtopicsCount: 3,
      completedSubtopics: 3,
      subtopics: []
    },
    {
      id: 'unit-2',
      title: 'Cyber-Slang & Neon Syntax',
      emoji: '📚',
      progress: 72,
      status: 'active',
      subtopicsCount: 5,
      completedSubtopics: 3,
      subtopics: [
        {
          id: 'sub-1',
          title: 'Decoding Subnet Protocols',
          nodes: [
            { id: 'n1', label: 'Intro', status: 'completed' },
            { id: 'n2', label: 'Basics', status: 'completed' },
            { id: 'n3', label: 'Syntax', status: 'completed' },
            { id: 'n4', label: 'Logic', status: 'active', icon: 'terminal' },
            { id: 'n5', label: 'Advanced', status: 'locked' },
            { id: 'n6', label: 'Mastery', status: 'locked' },
            { id: 'n7', label: 'Final Quiz', status: 'locked', type: 'boss' },
          ]
        },
        { id: 'sub-2', title: 'Quantum Patterns', nodes: [] }
      ]
    },
    {
      id: 'unit-3',
      title: 'Neural Networks 101',
      emoji: '🧠',
      progress: 0,
      status: 'locked',
      subtopicsCount: 4,
      completedSubtopics: 0,
      subtopics: []
    },
    {
      id: 'unit-4',
      title: 'Mainframe Infiltration',
      emoji: '🔓',
      progress: 0,
      status: 'locked',
      subtopicsCount: 6,
      completedSubtopics: 0,
      subtopics: []
    }
  ];

  const currentUnit = unitsData.find(u => u.status === 'active') || unitsData[0];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <style jsx global>{`
        .font-headline { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Be Vietnam Pro', sans-serif; }
        .glass-panel {
            background: rgba(42, 42, 42, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        .octagon {
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
      `}</style>

      {/* Page Header - Showing Current Unit Title */}
      <header className="mb-12 mt-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-headline font-bold text-[#92ccff] uppercase tracking-[0.4em] mb-2">Current Mission</p>
              <h1 className="text-4xl font-black font-headline text-white italic tracking-tighter uppercase leading-none">
                {currentUnit.title}
              </h1>
            </div>
            <div className="bg-[#2a2a2a] px-4 py-2 rounded-xl flex items-center gap-3 border border-white/5">
                <span className="material-symbols-outlined text-[#4ae183]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="font-headline font-bold text-[#4ae183]">8 DAY STREAK</span>
            </div>
          </div>
      </header>

      <div className="flex flex-1 gap-10 font-body pb-20">
        
        {/* CENTER COLUMN */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-2xl space-y-4">
            {unitsData.map((unit) => (
              <UnitCard 
                key={unit.id}
                unit={unit}
                isExpanded={expandedUnit === unit.id}
                onToggle={() => unit.status !== 'locked' && setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                expandedSubtopic={expandedSubtopic}
                setExpandedSubtopic={setExpandedSubtopic}
              />
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="w-80 flex flex-col gap-6 shrink-0">
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f9acff]/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#f9acff]">
                <img 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmwLkS5LuH2o7OsvqdatrJ3dQj7q3iseu4Dzn3RKa0OgrqMBzoJCfGLIsFqwLeBmu_mryLzUjOlvnMCZeZWhU7TMngCihIhyomCBM-ahfPt7CBpOf7piY6sllu3muT0oVbRNegGAESWrGxKFVFbNsGaFqbQS1biW_Jrf_2lAAuOKQzs959QoWQJJvBZQEPfnpqmMgxSbdfBFujggSt0hM0urAlM9Wdo2hAnAKHb0MJEqSP9hmqg59vX8EEKy3Ro9qNR1N1G046qtw" 
                />
              </div>
              <div>
                <h3 className="font-headline text-white font-bold">Kaelen_Void</h3>
                <p className="text-[#f9acff] font-headline text-[10px] uppercase tracking-widest font-bold">Diamond League</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60 font-body">Rank Position</span>
                <span className="text-white font-bold font-headline">#14 / 250</span>
              </div>
              <div className="w-full h-1.5 bg-[#0e0e0e] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#f9acff] to-[#92ccff] w-[72%]"></div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-[#0e0e0e] rounded-xl flex items-center gap-4 border border-[#514250]/10">
              <span className="material-symbols-outlined text-[#f9acff] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
              <div>
                <p className="text-xs font-bold text-white">Diamond Rank</p>
                <p className="text-[10px] text-white/60">Top 3% of global runners</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0e0e0e] rounded-2xl p-6 border border-white/5">
            <h4 className="font-headline text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4ae183] text-lg">track_changes</span>
              Active Bounties
            </h4>
            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="mt-1 w-2 h-2 rounded-full bg-[#4ae183] shadow-[0_0_8px_rgba(74,225,131,0.6)]"></div>
              <div className="flex-1">
                <p className="text-xs font-body text-white group-hover:text-[#4ae183]">Perfect 10 Quiz Streak</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4ae183] w-2/3"></div>
                  </div>
                  <span className="text-[10px] text-white/40">7/10</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatBox icon="workspace_premium" color="#92ccff" label="Achievements" value="42" />
            <StatBox icon="language" color="#f9acff" label="Nodes Clear" value="128" />
          </div>
        </aside>
      </div>
    </>
  );
}

function UnitCard({ unit, isExpanded, onToggle, expandedSubtopic, setExpandedSubtopic }) {
  const isLocked = unit.status === 'locked';
  const isCompleted = unit.status === 'completed';

  return (
    <div className={`relative transition-all duration-300 ${isExpanded ? 'z-10' : 'z-0'}`}>
      <button 
        onClick={onToggle}
        className={`w-full text-left rounded-2xl transition-all duration-300 group relative overflow-hidden
          ${isExpanded 
            ? 'bg-[#1a1a1a] shadow-[0_0_40px_rgba(146,204,255,0.08)] border-l-4 border-[#92ccff]' 
            : 'bg-[#1a1a1a]/50 border border-white/5 hover:bg-[#1a1a1a]/80'}
          ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className={`w-14 h-14 octagon flex items-center justify-center transition-all 
              ${isCompleted ? 'bg-[#4ae183]/20 border border-[#4ae183]/40' : 
                isExpanded ? 'bg-[#92ccff]/10 border border-[#92ccff]/40' : 'bg-[#2a2a2a]'}`}>
              <span className="text-2xl">{unit.emoji}</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wider">{unit.title}</h3>
              
              {/* Premium Progress Indicator - Rounded Dashed Bars */}
              <div className="flex items-center gap-1.5 mt-2">
                 {Array.from({ length: unit.subtopicsCount }).map((_, i) => (
                   <div 
                    key={i} 
                    className={`h-1 w-6 rounded-full transition-all duration-500
                      ${isCompleted || i < unit.completedSubtopics 
                        ? 'bg-[#92ccff] shadow-[0_0_8px_#92ccff]' 
                        : 'bg-white/10'}`}
                   />
                 ))}
                 <span className="text-[9px] text-white/30 font-mono ml-2 uppercase">
                   {unit.completedSubtopics}/{unit.subtopicsCount} SUBTOPICS
                 </span>
              </div>
            </div>
          </div>
          {isLocked ? <Lock className="w-4 h-4 text-white/20" /> : (
             <span className={`material-symbols-outlined text-white/20 transition-transform ${isExpanded ? 'rotate-180 text-[#92ccff]' : ''}`}>
               {isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
             </span>
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-2 pl-6 space-y-2 pb-6">
              {unit.subtopics.map(subtopic => (
                <div key={subtopic.id} className="relative">
                  <button 
                    onClick={() => setExpandedSubtopic(expandedSubtopic === subtopic.id ? null : subtopic.id)}
                    className={`w-full flex items-center justify-between py-4 px-5 rounded-xl border transition-all
                      ${expandedSubtopic === subtopic.id ? 'bg-[#92ccff]/5 border-[#92ccff]/20 shadow-inner' : 'bg-transparent border-white/5'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                       <div className={`w-1 h-1 rounded-full ${expandedSubtopic === subtopic.id ? 'bg-[#92ccff] shadow-[0_0_5px_#92ccff]' : 'bg-white/20'}`}></div>
                       <span className={`text-[10px] font-bold font-headline uppercase tracking-widest ${expandedSubtopic === subtopic.id ? 'text-white' : 'text-white/40'}`}>
                         {subtopic.title}
                       </span>
                    </div>
                    <span className="material-symbols-outlined text-white/20 text-sm">
                       {expandedSubtopic === subtopic.id ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {expandedSubtopic === subtopic.id && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden py-14 flex flex-col items-center"
                      >
                         <SnakePath nodes={subtopic.nodes} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SnakePath({ nodes }) {
  const NODE_SIZE = 64;
  const H_OFFSET = 70;
  const V_SPACING = 110;
  
  const getPos = (idx) => {
    const isRight = idx % 2 !== 0;
    const x = 160 + (isRight ? H_OFFSET : -H_OFFSET);
    const y = idx * V_SPACING + 40;
    return { x, y };
  };

  const totalHeight = (nodes.length - 1) * V_SPACING + 100;

  return (
    <div className="relative" style={{ width: 320, height: totalHeight }}>
      <svg className="absolute inset-0 pointer-events-none opacity-20" width="320" height={totalHeight}>
        <path 
           d="M 160 0 Q 240 150 160 300 Q 80 450 160 600 Q 240 750 160 900" 
           fill="transparent" 
           stroke="#92ccff" 
           strokeDasharray="8 8" 
           strokeWidth="4"
        />
      </svg>

      {nodes.map((node, i) => {
        const { x, y } = getPos(i);
        const isActive = node.status === 'active';
        const isCompleted = node.status === 'completed';

        return (
          <div key={node.id} className="absolute" style={{ left: x - 32, top: y - 32 }}>
            <div className="relative group flex flex-col items-center">
              <div 
                className={`w-16 h-16 octagon flex items-center justify-center transition-all duration-300
                  ${isCompleted ? 'bg-[#4ae183] shadow-[0_0_30px_rgba(74,225,131,0.4)]' : 
                    isActive ? 'bg-gradient-to-br from-[#92ccff] to-[#006599] p-1 shadow-[0_0_40px_rgba(146,204,255,0.5)] scale-110' : 
                    'bg-[#2a2a2a] opacity-50'}
                `}
              >
                {isActive ? (
                  <div className="w-full h-full octagon bg-[#131313] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#92ccff] text-3xl">{node.icon || 'terminal'}</span>
                  </div>
                ) : (
                  <span className="material-symbols-outlined text-white text-3xl">
                     {isCompleted ? 'check' : 'lock'}
                  </span>
                )}
              </div>

              <div className="absolute -bottom-8">
                <span className={`text-[8px] font-headline uppercase font-bold tracking-widest whitespace-nowrap
                  ${isCompleted ? 'text-[#4ae183]' : isActive ? 'text-[#92ccff]' : 'text-white/20'}
                `}>
                  {isCompleted ? 'Mastered' : isActive ? 'Active' : node.label}
                </span>
              </div>

              {isActive && (
                <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-40 glass-panel p-3 rounded-xl border-l-2 border-[#92ccff] z-30">
                  <p className="text-[10px] font-headline text-[#92ccff] uppercase font-bold">Current Mission</p>
                  <p className="text-[10px] font-body text-white mt-1 leading-tight">{node.label}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StatBox({ icon, label, value, color }) {
  return (
    <div className="bg-[#1a1a1a]/60 p-4 rounded-xl border border-white/5 flex flex-col gap-2">
      <span className="material-symbols-outlined text-xl" style={{ color }}>{icon}</span>
      <p className="text-[9px] font-headline text-white/40 uppercase font-bold tracking-widest">{label}</p>
      <p className="text-xl font-headline font-black text-white">{value}</p>
    </div>
  );
}
