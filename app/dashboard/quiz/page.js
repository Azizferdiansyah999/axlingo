'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Lightbulb } from 'lucide-react'
import { useRouter } from 'next/navigation'
import lessonData from '@/data/lessons.json'

export default function QuizPage() {
  const router = useRouter()
  // Mock loading the first lesson from our JSON
  const currentLesson = lessonData.units[0].lessons[0]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [hearts, setHearts] = useState(4)

  const currentQuestion = currentLesson.questions[currentQuestionIndex]
  const progressPercent = ((currentQuestionIndex) / currentLesson.questions.length) * 100

  const handleSelect = (id) => {
    if (isAnswered) return
    setSelectedOption(id)
  }

  const handleSubmit = () => {
    if (!selectedOption) return

    const correct = selectedOption === currentQuestion.correctAnswer
    setIsCorrect(correct)
    setIsAnswered(true)

    if (!correct) {
      setHearts(prev => Math.max(0, prev - 1))
    }

    // Auto-next for demo purposes
    setTimeout(() => {
      handleNext()
    }, 2000)
  }

  const handleNext = () => {
    setSelectedOption(null)
    setIsAnswered(false)
    setIsCorrect(null)
    if (currentQuestionIndex < currentLesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      // Lesson Finished
      router.push('/dashboard')
    }
  }

  if (!currentQuestion) return null

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col fixed inset-0 z-50">
      
      {/* Top Section */}
      <header className="flex items-center justify-between p-6 gap-6">
        <button onClick={() => router.push('/dashboard')} className="text-[#adaaaa] hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>
        
        {/* Progress Bar */}
        <div className="flex-1 bg-[#262626] h-3 rounded-full relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-[#c3ffcd] shadow-[2px_0_10px_#c3ffcd]"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ></motion.div>
        </div>

        {/* Hearts */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{hearts}</span>
          <Heart className="w-8 h-8 fill-[#ff6e84] text-[#ff6e84] drop-shadow-[0_0_10px_rgba(255,110,132,0.6)] animate-pulse" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full flex flex-col items-center"
          >
            {/* The Question Card (Glassmorphism) */}
            <div className={`w-full bg-[#262626]/60 backdrop-blur-xl p-12 rounded-[2rem] border mb-12 flex items-center justify-center text-center transition-colors duration-300
              ${isAnswered && isCorrect ? 'border-[#c3ffcd] shadow-[0_0_40px_rgba(195,255,205,0.2)] bg-[#c3ffcd]/10' : ''}
              ${isAnswered && !isCorrect ? 'border-[#ff6e84] shadow-[0_0_40px_rgba(255,110,132,0.2)] bg-[#ff6e84]/10' : 'border-[#1a1a1a] shadow-xl'}
            `}>
              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                "{currentQuestion.prompt}"
              </h1>
            </div>

            {/* Answer Options */}
            <div className="w-full flex flex-col gap-4">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedOption === opt.id
                let stateClass = 'bg-[#131313] border-[#262626] text-[#adaaaa]'
                
                if (isSelected && !isAnswered) {
                  stateClass = 'bg-[#1a1a1a] border-[#5cb8fd] text-white shadow-[0_0_15px_rgba(92,184,253,0.3)]'
                } else if (isAnswered) {
                  if (opt.id === currentQuestion.correctAnswer) {
                    stateClass = 'bg-[#1a1a1a] border-[#c3ffcd] text-white shadow-[0_0_15px_rgba(195,255,205,0.4)]'
                  } else if (isSelected && opt.id !== currentQuestion.correctAnswer) {
                    stateClass = 'bg-[#1a1a1a] border-[#ff6e84] text-[#ff6e84] shadow-[0_0_15px_rgba(255,110,132,0.4)]'
                  }
                }

                return (
                  <button 
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    disabled={isAnswered}
                    className={`w-full p-6 p rounded-2xl border-2 text-left font-bold text-xl transition-all duration-300 transform ${stateClass} ${!isAnswered ? 'hover:scale-[1.02] hover:bg-[#1a1a1a]' : ''}`}
                  >
                    {opt.text}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </main>

      {/* Bottom Action Area */}
      <footer className="p-6 flex justify-between items-center max-w-2xl mx-auto w-full">
        <button className="w-16 h-16 rounded-full bg-[#131313] border border-[#ffb2b9]/20 flex items-center justify-center hover:bg-[#262626] transition-colors group">
          <Lightbulb className="w-8 h-8 text-[#e67aff] group-hover:drop-shadow-[0_0_10px_#e67aff]" />
        </button>

        <button 
          onClick={handleSubmit}
          disabled={!selectedOption || isAnswered}
          className={`px-12 py-5 rounded-2xl font-black text-xl tracking-widest uppercase transition-all duration-300
            ${selectedOption && !isAnswered 
              ? 'bg-gradient-to-r from-[#5cb8fd] to-[#49a8ec] text-[#0e0e0e] hover:shadow-[0_0_30px_rgba(92,184,253,0.5)] hover:scale-105' 
              : 'bg-[#1a1a1a] text-[#565555] cursor-not-allowed'}
          `}
        >
          {isAnswered ? 'Wait...' : 'Submit'}
        </button>
      </footer>
    </div>
  )
}
