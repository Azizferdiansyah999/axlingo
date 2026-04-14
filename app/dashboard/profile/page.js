'use client'

import React, { useState, useEffect } from 'react'
import { useUser } from '@/hooks/useUser'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, Trophy, Flame, Target, Star, Shield, Edit2, Check, X, Camera } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { updateProfile, getUserAchievements } from '@/lib/db'

const AVATARS = [
  '/avatars/avatar_1.png',
  '/avatars/avatar_2.png',
  '/avatars/avatar_3.png',
  '/avatars/avatar_4.png'
]

export default function ProfilePage() {
  const { profile, loading } = useUser()
  const router = useRouter()
  
  const [isEditingUsername, setIsEditingUsername] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [showAvatarGallery, setShowAvatarGallery] = useState(false)
  const [achievements, setAchievements] = useState([])
  const [isSaving, setIsSaving] = useState(false)
  
  // Realtime display states (allows immediate UI update before refetch)
  const [displayUsername, setDisplayUsername] = useState('')
  const [displayAvatar, setDisplayAvatar] = useState('')

  useEffect(() => {
    if (profile) {
      setDisplayUsername(profile.username || 'Vibe_User')
      setDisplayAvatar(profile.avatar_url || '')
      setNewUsername(profile.username || 'Vibe_User')
      
      // Fetch achievements
      getUserAchievements(profile.id).then(data => {
        if(data) setAchievements(data)
      }).catch(console.error)
    }
  }, [profile])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleSaveUsername = async () => {
    if(!newUsername.trim() || newUsername === displayUsername) {
      setIsEditingUsername(false)
      return
    }
    setIsSaving(true)
    try {
      await updateProfile(profile.id, { username: newUsername })
      setDisplayUsername(newUsername)
      setIsEditingUsername(false)
    } catch (err) {
      console.error(err)
      alert("Failed to update username")
    } finally {
      setIsSaving(false)
    }
  }

  const handleSelectAvatar = async (path) => {
    setIsSaving(true)
    try {
      await updateProfile(profile.id, { avatar_url: path })
      setDisplayAvatar(path)
      setShowAvatarGallery(false)
    } catch (err) {
      console.error(err)
      alert("Failed to update avatar")
    } finally {
      setIsSaving(false)
    }
  }

  if (loading || !profile) return <div className="p-8 text-[#adaaaa] animate-pulse">Loading Profile...</div>

  // Connect real database stats
  const stats = profile.user_stats?.[0] || { level: 1, xp: 0, diamonds: 0, current_streak: 0 }
  const streakData = { current_streak: stats.current_streak || 0 }
  const joinDate = new Date(profile.created_at).toLocaleDateString()
  
  // Example Level Progress Logic
  const xpForNextLevel = stats.level * 100
  const progressPercent = Math.min((stats.xp / xpForNextLevel) * 100, 100)

  // Framer motion variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto pb-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Operative <span className="text-[#e67aff]">Profile</span>
          </h1>
          <p className="text-[#adaaaa] mt-2 font-mono text-sm tracking-widest">ID: {profile.id.split('-')[0]}</p>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-[#ff6e84] hover:text-[#ffb2b9] font-bold px-4 py-2 bg-[#1a1a1a] rounded-xl border border-transparent hover:border-[#ff6e84]/30 transition-all">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {/* User ID Tag Card */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-2 bg-[#131313] rounded-3xl p-8 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Shield className="w-32 h-32 text-[#5cb8fd]" />
           </div>
           
           <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
             {/* AVATAR BOX */}
             <div 
               onClick={() => setShowAvatarGallery(true)}
               className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#5cb8fd] to-[#c3ffcd] flex items-center justify-center shadow-[0_0_30px_#5cb8fd50] cursor-pointer relative overflow-hidden group/avatar"
             >
               {displayAvatar ? (
                 <img src={displayAvatar} alt="Avatar" className="w-full h-full object-cover" />
               ) : (
                 <span className="text-4xl font-black text-[#0e0e0e]">{displayUsername.charAt(0).toUpperCase()}</span>
               )}
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/avatar:opacity-100 flex flex-col items-center justify-center transition-all">
                 <Camera className="w-6 h-6 text-white mb-1" />
                 <span className="text-[10px] font-bold text-white uppercase">Change</span>
               </div>
             </div>
             
             {/* USERNAME & INFO */}
             <div className="flex-1">
               <div className="flex items-center gap-3 mb-1">
                 {isEditingUsername ? (
                   <div className="flex items-center gap-2">
                     <input 
                       type="text"
                       value={newUsername}
                       onChange={e => setNewUsername(e.target.value)}
                       className="bg-[#1a1a1a] border border-[#5cb8fd] text-white px-3 py-1 rounded-lg outline-none font-bold text-2xl w-48"
                       autoFocus
                       onKeyDown={e => e.key === 'Enter' && handleSaveUsername()}
                     />
                     <button onClick={handleSaveUsername} disabled={isSaving} className="p-2 bg-[#c3ffcd] text-black rounded-lg hover:scale-105 transition-transform"><Check className="w-4 h-4"/></button>
                     <button onClick={() => setIsEditingUsername(false)} disabled={isSaving} className="p-2 bg-[#2a2a2a] text-white rounded-lg hover:scale-105 transition-transform"><X className="w-4 h-4"/></button>
                   </div>
                 ) : (
                   <>
                     <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{displayUsername}</h2>
                     <button onClick={() => setIsEditingUsername(true)} className="text-[#adaaaa] hover:text-[#5cb8fd] transition-colors"><Edit2 className="w-4 h-4" /></button>
                   </>
                 )}
               </div>
               
               <div className="flex items-center gap-3 text-[#adaaaa] text-sm mt-3">
                 <span className="bg-[#1a1a1a] px-3 py-1 rounded-md text-[#5cb8fd] font-mono border border-[#5cb8fd]/20">Rank: Initiated</span>
                 <span>Joined {joinDate}</span>
               </div>
             </div>
           </div>
        </motion.div>

        {/* Level Card */}
        <motion.div variants={item} className="bg-gradient-to-b from-[#1a1a1a] to-[#131313] rounded-3xl p-8 flex flex-col items-center justify-center border-t-2 border-[#c3ffcd]">
           <span className="text-[#adaaaa] font-bold uppercase tracking-widest text-xs mb-2">Current Level</span>
           <span className="text-6xl font-black text-[#c3ffcd]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{stats.level}</span>
           <div className="w-full mt-6 bg-[#262626] h-2 rounded-full overflow-hidden">
             <div className="h-full bg-[#c3ffcd] shadow-[0_0_10px_#c3ffcd]" style={{ width: `${progressPercent}%` }}></div>
           </div>
           <span className="text-xs text-[#adaaaa] mt-2">{xpForNextLevel - stats.xp} XP to Level {stats.level + 1}</span>
        </motion.div>

        {/* Streak Card */}
        <motion.div variants={item} className="bg-gradient-to-b from-[#1a1a1a] to-[#131313] rounded-3xl p-8 flex flex-col items-center justify-center border-t-2 border-[#e67aff]">
           <Flame className="w-12 h-12 text-[#e67aff] mb-4 drop-shadow-[0_0_15px_rgba(230,122,255,0.6)]" />
           <span className="text-4xl font-black text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{streakData.current_streak}</span>
           <span className="text-[#adaaaa] font-bold uppercase tracking-widest text-xs mt-1">Day Streak</span>
        </motion.div>

        {/* Badges/Trophy Area */}
        <motion.div variants={item} className="md:col-span-3 lg:col-span-4 bg-[#131313] rounded-3xl p-8 mt-6">
           <div className="flex items-center gap-3 mb-8">
             <Trophy className="w-6 h-6 text-[#5cb8fd]" />
             <h3 className="text-2xl font-bold text-white">Digital Relics</h3>
           </div>
           
           {achievements.length > 0 ? (
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
               {achievements.map((record, idx) => (
                 <div key={idx} className="p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all bg-[#1a1a1a] border border-[#5cb8fd]/20 hover:scale-105 hover:border-[#5cb8fd] group">
                   <div className="text-[#5cb8fd] drop-shadow-[0_0_10px_#5cb8fd80] group-hover:scale-110 transition-transform">
                     <Star className="w-10 h-10"/>
                   </div>
                   <span className="font-bold text-sm text-center text-white">{record.achievements.name}</span>
                 </div>
               ))}
             </div>
           ) : (
             <div className="p-12 text-center border-2 border-dashed border-[#2a2a2a] rounded-2xl">
               <Trophy className="w-12 h-12 text-[#2a2a2a] mx-auto mb-4" />
               <p className="text-[#adaaaa] font-bold">No Relics Acquired Yet</p>
               <p className="text-sm text-[#adaaaa]/60 mt-1">Complete courses to unlock digital relics.</p>
             </div>
           )}
        </motion.div>

      </motion.div>

      {/* AVATAR GALLERY MODAL */}
      <AnimatePresence>
        {showAvatarGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#131313] border border-[#2a2a2a] rounded-3xl p-8 max-w-2xl w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Choose Identity</h3>
                  <p className="text-[#adaaaa] text-sm mt-1">Select your digital avatar.</p>
                </div>
                <button onClick={() => setShowAvatarGallery(false)} className="p-2 text-[#adaaaa] hover:text-white transition-colors bg-[#1a1a1a] rounded-xl"><X className="w-5 h-5"/></button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {AVATARS.map((path, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleSelectAvatar(path)}
                    disabled={isSaving}
                    className={`relative rounded-2xl overflow-hidden aspect-square border-2 transition-all cursor-pointer group
                      ${displayAvatar === path ? 'border-[#c3ffcd] shadow-[0_0_20px_#c3ffcd40]' : 'border-transparent hover:border-[#5cb8fd]'}
                    `}
                  >
                    <img src={path} alt={`Avatar ${idx+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {displayAvatar === path && (
                      <div className="absolute top-2 right-2 bg-[#c3ffcd] rounded-full p-1 shadow-md">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
