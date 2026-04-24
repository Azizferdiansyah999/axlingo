'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Lock, Loader2 } from 'lucide-react';
import { useUser } from '@/hooks/useUser';
import { getLearningPath } from '@/lib/db';

export default function LearningPathPage() {
  const { user, profile, loading: authLoading } = useUser();
  const [pathData, setPathData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedUnitId, setExpandedUnitId] = useState(null);
  const [expandedSubtopicId, setExpandedSubtopicId] = useState(null);

  useEffect(() => {
    const loadPath = async () => {
      if (!user) return;
      try {
        const data = await getLearningPath(user.id);
        if (data && data.length > 0) {
          setPathData(data);
          
          // Find and expand the active unit
          outer: for (const section of data) {
            for (const unit of section.units) {
              if (unit.hasActive) {
                setExpandedUnitId(unit.id);
                // Also find and expand the first active subtopic
                for (const sub of unit.subtopics) {
                  if (sub.nodes.some(n => n.status === 'active')) {
                    setExpandedSubtopicId(sub.id);
                  }
                }
                
                // Update Navbar Section Title dynamically
                const navTitle = document.getElementById('nav-section-title');
                if (navTitle) navTitle.innerText = section.title;
                
                break outer;
              }
            }
          }
        }
      } catch (err) {
        console.error('Error loading learning path:', err);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) loadPath();
  }, [user, authLoading]);

  // Logic: Filter 4 Units (1 Done, 1 Active, 2 Locked)
  const filteredUnits = useMemo(() => {
    const allUnits = pathData.flatMap(section => 
      section.units.map(unit => ({ ...unit, sectionTitle: section.title }))
    );
    
    const activeIdx = allUnits.findIndex(u => u.hasActive);
    if (activeIdx === -1) return allUnits.slice(0, 4);
    
    const start = Math.max(0, activeIdx - 1);
    return allUnits.slice(start, start + 4);
  }, [pathData]);

  const currentUnit = filteredUnits.find(u => u.hasActive) || filteredUnits[0];

  const handleNodeClick = (nodeId) => {
    window.location.href = `/dashboard/quiz?lessonId=${nodeId}`;
  };

  if (loading || authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-[#5cb8fd] animate-spin" />
          <p className="text-[#adaaaa] font-mono animate-pulse text-sm tracking-widest uppercase">Initializing Neural Path...</p>
        </div>
      </div>
    );
  }

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

      {/* Page Header - Unit Title */}
      <header className="mb-12 mt-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-headline font-bold text-[#92ccff] uppercase tracking-[0.4em] mb-2">Current Unit</p>
              <h1 className="text-4xl font-black font-headline text-white italic tracking-tighter uppercase leading-none">
                {currentUnit?.title || 'Course Overview'}
              </h1>
            </div>
            <div className="bg-[#2a2a2a] px-4 py-2 rounded-xl flex items-center gap-3 border border-white/5">
                <span className="material-symbols-outlined text-[#4ae183]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="font-headline font-bold text-[#4ae183]">STREAK: {profile?.user_stats?.streak || 0}</span>
            </div>
          </div>
      </header>

      <div className="flex flex-1 gap-10 font-body pb-20">
        
        {/* CENTER COLUMN */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-2xl space-y-4">
            {filteredUnits.map((unit) => (
              <UnitCard 
                key={unit.id}
                unit={unit}
                isExpanded={expandedUnitId === unit.id}
                onToggle={() => !unit.isLocked && setExpandedUnitId(expandedUnitId === unit.id ? null : unit.id)}
                expandedSubtopicId={expandedSubtopicId}
                setExpandedSubtopicId={setExpandedSubtopicId}
                onNodeClick={handleNodeClick}
              />
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="hidden xl:flex w-80 flex-col gap-6 shrink-0">
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f9acff]/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#f9acff] bg-[#0e0e0e]">
                <img 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  src={profile?.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
                />
              </div>
              <div>
                <h3 className="font-headline text-white font-bold truncate w-40">{profile?.username || 'Cyber Runner'}</h3>
                <p className="text-[#f9acff] font-headline text-[10px] uppercase tracking-widest font-bold">Diamond League</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">Unit Mastery</span>
                <span className="text-white font-bold font-headline">{Math.round((currentUnit?.completedCount / currentUnit?.totalCount) * 100) || 0}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#0e0e0e] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentUnit?.completedCount / currentUnit?.totalCount) * 100 || 0}%` }}
                  className="h-full bg-gradient-to-r from-[#f9acff] to-[#92ccff]" 
                />
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a]/40 p-5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
               <span className="material-symbols-outlined text-[#4ae183] text-lg">track_changes</span>
               <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active Stats</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <StatBox icon="workspace_premium" color="#92ccff" label="Level" value={profile?.user_stats?.level || 1} />
               <StatBox icon="language" color="#f9acff" label="Diamonds" value={profile?.user_stats?.diamonds || 0} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

function UnitCard({ unit, isExpanded, onToggle, expandedSubtopicId, setExpandedSubtopicId, onNodeClick }) {
  const isLocked = unit.isLocked;
  const isCompleted = unit.completedCount === unit.totalCount && unit.totalCount > 0;
  const subtopicsCount = unit.subtopics.length;
  const completedSubtopics = unit.subtopics.filter(s => s.nodes.every(n => n.status === 'completed')).length;

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
              <span className="text-2xl">{unit.iconEmoji || '📚'}</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wider">{unit.title}</h3>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(completedSubtopics / (subtopicsCount || 1)) * 100}%` }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#92ccff] via-[#d4f0ff] to-[#4ae183] shadow-[0_0_12px_rgba(146,204,255,0.6)] rounded-full transition-all duration-700"
                  />
                </div>
                <span className="text-[10px] font-headline font-bold text-[#92ccff] min-w-[35px] text-right">
                  {completedSubtopics}/{subtopicsCount}
                </span>
              </div>
            </div>
          </div>
          {isLocked ? <Lock className="w-4 h-4 text-white/20" /> : (
             <span className={`material-symbols-outlined text-white/20 transition-transform ${isExpanded ? 'rotate-180 text-[#92ccff]' : ''}`}>
               keyboard_arrow_down
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
            <div className="mt-2 pl-6 space-y-2 pb-6 pr-2">
              {unit.subtopics && unit.subtopics.length > 0 ? (
                unit.subtopics.map(subtopic => (
                  <div key={subtopic.id} className="relative">
                    <button 
                      onClick={() => setExpandedSubtopicId(expandedSubtopicId === subtopic.id ? null : subtopic.id)}
                      className={`w-full flex items-center justify-between py-4 px-5 rounded-xl border transition-all
                        ${expandedSubtopicId === subtopic.id ? 'bg-[#92ccff]/5 border-[#92ccff]/20 shadow-inner' : 'bg-transparent border-white/5'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                         <div className={`w-1 h-1 rounded-full ${expandedSubtopicId === subtopic.id ? 'bg-[#92ccff] shadow-[0_0_5px_#92ccff]' : 'bg-white/20'}`}></div>
                         <span className={`text-[10px] font-bold font-headline uppercase tracking-widest ${expandedSubtopicId === subtopic.id ? 'text-white' : 'text-white/40'}`}>
                           {subtopic.title}
                         </span>
                      </div>
                      <span className="material-symbols-outlined text-white/20 text-sm">
                         {expandedSubtopicId === subtopic.id ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedSubtopicId === subtopic.id && (
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden py-14 flex flex-col items-center"
                        >
                           <SnakePath nodes={subtopic.nodes || []} onNodeClick={onNodeClick} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))
              ) : (
                <p className="text-[10px] text-white/20 font-mono italic p-4">No neural paths detected in this unit...</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SnakePath({ nodes, onNodeClick }) {
  const NODE_SIZE = 64;
  const H_OFFSET = 70;
  const V_SPACING = 110;
  
  const getPos = (idx) => {
    const isRight = idx % 2 !== 0;
    const x = 160 + (isRight ? H_OFFSET : -H_OFFSET);
    const y = idx * V_SPACING + 40;
    return { x, y };
  };

  const totalHeight = nodes.length > 0 ? (nodes.length - 1) * V_SPACING + 100 : 100;

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
          <div key={node.id} className="absolute cursor-pointer" style={{ left: x - 32, top: y - 32 }} onClick={() => onNodeClick(node.id)}>
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
                    <span className="material-symbols-outlined text-[#92ccff] text-3xl">terminal</span>
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
    <div className="bg-[#0e0e0e] p-4 rounded-xl border border-white/5 flex flex-col gap-2">
      <span className="material-symbols-outlined text-xl" style={{ color }}>{icon}</span>
      <p className="text-[9px] font-headline text-white/40 uppercase font-bold tracking-widest">{label}</p>
      <p className="text-xl font-headline font-black text-white">{value}</p>
    </div>
  );
}
