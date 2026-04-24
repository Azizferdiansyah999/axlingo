'use client';

import React from 'react';
import Head from 'next/head';

/**
 * Step 1: Implementation of vibe/dummy/lp_page/dekstop.html 
 * converted to Next.js based on Convert_to_nextjs.md instructions.
 */
export default function DummyLearningPath() {
  return (
    <>
      {/* Import specific fonts and icons for this page */}
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <style jsx global>{`
        .font-headline { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Be Vietnam Pro', sans-serif; }
        .font-label { font-family: 'Space Grotesk', sans-serif; }
        
        .glass-panel {
            background: rgba(42, 42, 42, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }

        .octagon {
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }

        .data-glow {
            text-shadow: 0 0 10px rgba(146, 204, 255, 0.4);
        }
        
        .neon-border-bottom {
            box-shadow: 0 2px 0 0 #92ccff;
        }
      `}</style>

      <div className="flex flex-1 gap-8 font-body">
        {/* Learning Path Center Column */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline text-4xl font-bold text-white mb-2">Unit 4</h2>
                <p className="text-white/60 font-body text-lg">Cyber-Slang & Neon Syntax</p>
              </div>
              <div className="bg-[#2a2a2a] px-4 py-2 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4ae183]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="font-headline font-bold text-[#4ae183]">8 DAY STREAK</span>
              </div>
            </div>

            {/* The Path */}
            <div className="relative flex flex-col items-center gap-16 py-12">
              {/* Decorative SVG Path Line */}
              <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
                <path d="M 320 0 Q 400 150 320 300 Q 240 450 320 600 Q 400 750 320 900" fill="transparent" stroke="#92ccff" strokeDasharray="8 8" strokeWidth="4"></path>
              </svg>

              {/* Node 1: Completed */}
              <div className="relative z-10 flex flex-col items-center group cursor-pointer -translate-x-[40px]">
                <div className="w-24 h-24 octagon bg-[#4ae183] flex items-center justify-center shadow-[0_0_30px_rgba(74,225,131,0.4)] transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-white text-4xl">check</span>
                </div>
                <div className="absolute -bottom-8 bg-[#353534] px-3 py-1 rounded-full border border-[#4ae183]/30 whitespace-nowrap">
                  <span className="text-[10px] font-headline text-[#4ae183] uppercase font-bold tracking-widest">Mastered</span>
                </div>
              </div>

              {/* Node 2: Current */}
              <div className="relative z-10 flex flex-col items-center group cursor-pointer translate-x-[60px]">
                <div className="w-28 h-28 octagon bg-gradient-to-br from-[#92ccff] to-[#006599] p-1 shadow-[0_0_40px_rgba(146,204,255,0.5)] transition-transform group-hover:scale-110">
                  <div className="w-full h-full octagon bg-[#131313] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#92ccff] text-4xl">terminal</span>
                  </div>
                </div>
                <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-40 glass-panel p-3 rounded-xl border-l-2 border-[#92ccff]">
                  <p className="text-[10px] font-headline text-[#92ccff] uppercase font-bold">Current Mission</p>
                  <p className="text-xs font-body text-white mt-1">Decoding Subnet Protocols</p>
                </div>
              </div>

              {/* Node 3: Locked */}
              <div className="relative z-10 flex flex-col items-center group opacity-50 -translate-x-[20px]">
                <div className="w-24 h-24 octagon bg-[#2a2a2a] flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-white/40 text-3xl">lock</span>
                </div>
                <div className="absolute -bottom-8">
                  <span className="text-[10px] font-headline text-white/30 uppercase tracking-widest whitespace-nowrap">Node 03</span>
                </div>
              </div>

              {/* Node 4: Locked */}
              <div className="relative z-10 flex flex-col items-center group opacity-50 translate-x-[40px]">
                <div className="w-24 h-24 octagon bg-[#2a2a2a] flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-white/40 text-3xl">lock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar / Profile Column */}
        <div className="w-80 flex flex-col gap-6">
          {/* Diamond Rank Profile Card */}
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
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
              <p className="text-[10px] text-white/40 italic">2,450 XP until Elite promotion</p>
            </div>
            <div className="mt-8 p-4 bg-[#0e0e0e] rounded-xl flex items-center gap-4 border border-[#514250]/10">
              <span className="material-symbols-outlined text-[#f9acff] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
              <div>
                <p className="text-xs font-bold text-white">Diamond Rank</p>
                <p className="text-[10px] text-white/60">Top 3% of global runners</p>
              </div>
            </div>
          </div>

          {/* Daily Quests */}
          <div className="bg-[#0e0e0e] rounded-2xl p-6 border border-[#514250]/5">
            <h4 className="font-headline text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4ae183] text-lg">track_changes</span>
              Active Bounties
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#4ae183] shadow-[0_0_8px_rgba(74,225,131,0.6)]"></div>
                <div className="flex-1">
                  <p className="text-xs font-body text-white group-hover:text-[#4ae183] transition-colors">Perfect 10 Quiz Streak</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ae183] w-2/3"></div>
                    </div>
                    <span className="text-[10px] text-white/40">7/10</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#92ccff] shadow-[0_0_8px_rgba(146,204,255,0.6)]"></div>
                <div className="flex-1">
                  <p className="text-xs font-body text-white group-hover:text-[#92ccff] transition-colors">Chat with 5 Citizens</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div className="h-full bg-[#92ccff] w-1/5"></div>
                    </div>
                    <span className="text-[10px] text-white/40">1/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Info Card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#2a2a2a] p-4 rounded-xl flex flex-col gap-2">
              <span className="material-symbols-outlined text-[#92ccff] text-xl">workspace_premium</span>
              <p className="text-[10px] font-headline text-white/60 uppercase">Achievements</p>
              <p className="text-lg font-headline font-bold text-white">42</p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-xl flex flex-col gap-2">
              <span className="material-symbols-outlined text-[#f9acff] text-xl">language</span>
              <p className="text-[10px] font-headline text-white/60 uppercase">Nodes Clear</p>
              <p className="text-lg font-headline font-bold text-white">128</p>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-[#92ccff] to-[#006599] rounded-2xl shadow-[0_10px_40px_rgba(0,101,153,0.5)] flex items-center justify-center text-on-primary hover:scale-105 active:scale-95 transition-all group z-50">
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">play_arrow</span>
        </button>
      </div>
    </>
  );
}
