'use client'

import React, { useEffect, useState } from 'react'
import TierBanner from '@/components/learning-path/TierBanner'
import PathMap from '@/components/learning-path/PathMap'
import RankCard from '@/components/dashboard/RankCard'
import BountyList from '@/components/dashboard/BountyList'
import { useUser } from '@/hooks/useUser'
import { getLearningPath } from '@/lib/db'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Loader2 } from 'lucide-react'

export default function LearningPathPage() {
  const { user, profile, loading: authLoading } = useUser()
  const [pathData, setPathData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPath = async () => {
      if (!user) return
      try {
        const data = await getLearningPath(user.id)
        setPathData(data)
      } catch (err) {
        console.error('Error loading learning path:', err)
      } finally {
        setLoading(false)
      }
    }

    if (!authLoading) {
      loadPath()
    }
  }, [user, authLoading])

  const handleNodeClick = (node) => {
    console.log('Node clicked:', node)
    // Route to Quiz with lessonId
    if (node.status !== 'locked') {
      window.location.href = `/dashboard/quiz?lessonId=${node.id}`
    } else {
      alert('Selesaikan misi sebelumnya terlebih dahulu!')
    }
  }

  if (loading || authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-[#5cb8fd] animate-spin" />
          <p className="text-[#adaaaa] font-mono animate-pulse">SYNCING PROGRESS...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Left Column: Learning Path */}
      <div className="flex-1">
        {/* Global Progress HUD */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-[#1a1a1a]/40 backdrop-blur-md p-5 rounded-2xl border border-white/5"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-white/40 font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] font-bold">
              Global XP Progress
            </span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#5cb8fd] fill-current" />
              <span className="text-[#5cb8fd] font-['Space_Grotesk'] font-bold">
                {profile?.user_stats?.xp || 0} XP
              </span>
            </div>
          </div>
          <div className="h-2 w-full bg-[#0e0e0e] rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((profile?.user_stats?.xp || 0) / 10, 100)}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#5cb8fd] to-[#e67aff] shadow-[0_0_10px_rgba(92,184,253,0.5)]"
            />
          </div>
        </motion.div>

        {/* Dynamic Tier Sections */}
        <div className="space-y-16">
          <AnimatePresence>
            {pathData.length > 0 ? (
              pathData.map((section, sIndex) => (
                <motion.section 
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: sIndex * 0.1 }}
                >
                  <TierBanner 
                    title={section.title || "CHAPTER"} 
                    subtitle={section.description || "Infiltrating the System"} 
                    tierLabel={section.tier?.replace('_', ' ') || "Runner"}
                    progress={section.nodes.filter(n => n.status === 'completed').length / (section.nodes.length || 1)}
                    themeColor={section.theme_color}
                  />
                  
                  <PathMap 
                    nodes={section.nodes} 
                    onNodeClick={handleNodeClick} 
                  />
                </motion.section>
              ))
            ) : (
              <div className="text-center py-20 bg-[#1a1a1a]/20 rounded-3xl border border-white/5 italic text-white/40 font-mono">
                NO SECTIONS FOUND. PLEASE INITIALIZE CURRICULUM.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column: Widgets */}
      <aside className="hidden xl:flex w-80 flex-col gap-8">
        <RankCard />
        <BountyList />
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1a1a1a]/40 p-5 rounded-2xl flex flex-col gap-3 border border-white/5">
            <Zap className="w-5 h-5 text-[#e67aff]" />
            <div>
              <p className="text-[10px] text-white/40 uppercase font-bold">Level</p>
              <p className="text-2xl font-bold text-white">{profile?.user_stats?.level || 1}</p>
            </div>
          </div>
          <div className="bg-[#1a1a1a]/40 p-5 rounded-2xl flex flex-col gap-3 border border-white/5">
            <div className="w-5 h-5 bg-[#5cb8fd] octagon"></div>
            <div>
              <p className="text-[10px] text-white/40 uppercase font-bold">Diamonds</p>
              <p className="text-2xl font-bold text-white">{profile?.user_stats?.diamonds || 0}</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
