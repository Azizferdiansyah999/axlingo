"use client";

import { useState, useRef, useEffect } from "react";

// Mock Data for the 12 Quiz Types based on quiz_types.md
const mockExercises = [
  {
    id: "1",
    type: "mc_text",
    prompt: 'Apa arti dari "Good Morning"?',
    correct_answer: "Selamat Pagi",
    choices: [
      { id: "a", text: "Selamat Siang" },
      { id: "b", text: "Selamat Pagi" },
      { id: "c", text: "Selamat Sore" },
      { id: "d", text: "Selamat Malam" },
    ],
  },
  {
    id: "2",
    type: "mc_image",
    prompt: 'Pilih gambar yang mewakili "Hello"',
    correct_answer: "img1",
    choices: [
      { id: "img1", image_url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=300&h=300&fit=crop", label: "Wave" },
      { id: "img2", image_url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=300&fit=crop", label: "Abstract" },
      { id: "img3", image_url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=300&h=300&fit=crop", label: "Nature" },
    ],
  },
  {
    id: "3",
    type: "translate",
    prompt: 'Terjemahkan ke Bahasa Inggris: "Hai, selamat pagi"',
    correct_answer: "Hi, good morning",
  },
  {
    id: "4",
    type: "word_bank",
    prompt: 'Susun kalimat: "Selamat pagi semuanya"',
    correct_answer: "Good morning everyone",
    choices: [
      { id: "1", text: "morning" },
      { id: "2", text: "everyone" },
      { id: "3", text: "Good" },
      { id: "4", text: "night" },
    ],
  },
  {
    id: "5",
    type: "fill_blank",
    prompt: 'Good ___, how are you?',
    correct_answer: "morning",
    choices: [
      { id: "a", text: "morning" },
      { id: "b", text: "eat" },
      { id: "c", text: "blue" },
    ],
  },
  {
    id: "6",
    type: "listening_mc",
    prompt: 'Apa yang kamu dengar?',
    correct_answer: "Hello",
    audio_text: "Hello", // We use text for TTS instead of actual audio_url for prototyping
    choices: [
      { id: "a", text: "Hello" },
      { id: "b", text: "Goodbye" },
      { id: "c", text: "Hi" },
    ],
  },
  {
    id: "7",
    type: "match_pairs",
    prompt: 'Pasangkan kata yang sesuai',
    correct_answer: JSON.stringify({ Hello: "Halo", "Good Morning": "Selamat Pagi", Hi: "Hai" }),
    choices: [
      { left: "Hello", right: "Halo" },
      { left: "Good Morning", right: "Selamat Pagi" },
      { left: "Hi", right: "Hai" },
    ],
  },
  {
    id: "8",
    type: "true_false",
    prompt: '"Good Night" digunakan untuk menyapa orang di pagi hari.',
    correct_answer: "false",
    choices: [
      { id: "true", text: "Benar" },
      { id: "false", text: "Salah" },
    ],
  },
  {
    id: "9",
    type: "listening_type",
    prompt: 'Ketik apa yang kamu dengar',
    correct_answer: "Good morning",
    audio_text: "Good morning", // TTS placeholder
  },
  {
    id: "10",
    type: "dialogue",
    prompt: "A: Hello! \nB: ___",
    correct_answer: "Hi!",
    choices: [
      { id: "a", text: "Goodbye!" },
      { id: "b", text: "Hi!" },
      { id: "c", text: "Thank you" },
    ],
  },
  {
    id: "11",
    type: "flashcard",
    prompt: "Selamat Pagi",
    correct_answer: "Good Morning",
  },
  {
    id: "12",
    type: "speak",
    prompt: "Good morning, how are you?",
    correct_answer: "Good morning, how are you?",
  },
];

export default function QuizTestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  
  // Word bank specific state
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);

  const currentExercise = mockExercises[currentIndex];

  useEffect(() => {
    // Reset states when changing exercise
    setUserAnswer("");
    setIsSubmitted(false);
    setIsCorrect(null);
    
    if (currentExercise.type === "word_bank") {
      setAvailableWords([...currentExercise.choices].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < mockExercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const playTTS = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-Speech tidak didukung di browser ini.");
    }
  };

  const checkAnswer = () => {
    let correct = false;
    
    switch (currentExercise.type) {
      case "mc_text":
      case "mc_image":
      case "fill_blank":
      case "listening_mc":
      case "dialogue":
      case "true_false":
        // Correct answer is the text of the choice or ID for image
        correct = userAnswer === currentExercise.correct_answer;
        break;
      case "translate":
      case "listening_type":
        // Basic case-insensitive text match
        correct = userAnswer.trim().toLowerCase() === currentExercise.correct_answer.toLowerCase();
        break;
      case "word_bank":
        const sentence = selectedWords.map(w => w.text).join(" ");
        correct = sentence === currentExercise.correct_answer;
        break;
      case "flashcard":
      case "speak":
      case "match_pairs":
        // For prototyping, just mark it true if they click check
        correct = true; 
        break;
      default:
        break;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  // Render logic for different types
  const renderExerciseContent = () => {
    switch (currentExercise.type) {
      case "mc_text":
      case "fill_blank":
      case "true_false":
      case "dialogue":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentExercise.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => setUserAnswer(currentExercise.type === 'true_false' ? choice.id : choice.text)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium text-white
                  ${userAnswer === (currentExercise.type === 'true_false' ? choice.id : choice.text)
                    ? "border-[#e67aff] bg-[#e67aff]/20" 
                    : "border-gray-600 bg-gray-800 hover:border-gray-400"
                  }`}
              >
                {choice.text}
              </button>
            ))}
          </div>
        );
        
      case "mc_image":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentExercise.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => setUserAnswer(choice.id)}
                className={`p-2 rounded-xl border-2 transition-all duration-200 overflow-hidden group
                  ${userAnswer === choice.id ? "border-[#5cb8fd]" : "border-gray-600 hover:border-gray-400"}`}
              >
                <img 
                  src={choice.image_url} 
                  alt={choice.label} 
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <span className="text-white">{choice.label}</span>
              </button>
            ))}
          </div>
        );

      case "translate":
      case "listening_type":
        return (
          <div className="w-full">
            {currentExercise.type === "listening_type" && (
              <button 
                onClick={() => playTTS(currentExercise.audio_text)}
                className="mb-6 mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#5cb8fd] hover:bg-[#3a9ae3] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5 19h4.586a1 1 0 00.707-.293l5.414-5.414a1 1 0 00.293-.707V7.414a1 1 0 00-.293-.707L10.293 5.293A1 1 0 009.586 5H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            )}
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Ketik jawabanmu di sini..."
              className="w-full bg-gray-800 border-2 border-gray-600 rounded-xl p-4 text-white text-lg focus:border-[#e67aff] outline-none min-h-[120px]"
            />
          </div>
        );

      case "word_bank":
        return (
          <div className="w-full space-y-6">
            {/* Answer Box */}
            <div className="min-h-[60px] p-4 border-b-2 border-gray-600 flex flex-wrap gap-2 items-center">
              {selectedWords.length === 0 && <span className="text-gray-500 italic">Pilih kata di bawah ini...</span>}
              {selectedWords.map((word, idx) => (
                <button
                  key={`sel-${word.id}-${idx}`}
                  onClick={() => {
                    const newSelected = [...selectedWords];
                    newSelected.splice(idx, 1);
                    setSelectedWords(newSelected);
                    setAvailableWords([...availableWords, word]);
                  }}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow border border-gray-500 hover:bg-gray-600"
                >
                  {word.text}
                </button>
              ))}
            </div>
            
            {/* Word Bank */}
            <div className="flex flex-wrap gap-3 justify-center min-h-[100px]">
              {availableWords.map((word, idx) => (
                <button
                  key={`avail-${word.id}-${idx}`}
                  onClick={() => {
                    setSelectedWords([...selectedWords, word]);
                    const newAvailable = [...availableWords];
                    newAvailable.splice(idx, 1);
                    setAvailableWords(newAvailable);
                  }}
                  className="px-5 py-3 bg-gray-800 text-white rounded-lg shadow-lg border-2 border-gray-600 hover:border-gray-400 font-medium"
                >
                  {word.text}
                </button>
              ))}
            </div>
          </div>
        );

      case "listening_mc":
        return (
          <div className="flex flex-col items-center">
            <button 
              onClick={() => playTTS(currentExercise.audio_text)}
              className="mb-8 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#5cb8fd] to-[#e67aff] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(230,122,255,0.4)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {currentExercise.choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => setUserAnswer(choice.text)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium text-white
                    ${userAnswer === choice.text ? "border-[#e67aff] bg-[#e67aff]/20" : "border-gray-600 bg-gray-800 hover:border-gray-400"}`}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </div>
        );

      case "match_pairs":
        return (
          <div className="text-center p-8 bg-gray-800 rounded-xl border-2 border-gray-600 border-dashed">
            <p className="text-gray-400">Untuk UI Prototype ini, klik "Cek Jawaban" untuk melanjutkan.</p>
            <p className="text-sm text-gray-500 mt-2">Logika drag-and-drop / klik pasangan membutuhkan komponen yang lebih kompleks.</p>
          </div>
        );

      case "flashcard":
        return (
          <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
            <div 
              className={`w-full h-64 cursor-pointer relative preserve-3d transition-transform duration-500 ${userAnswer === "flipped" ? "rotate-y-180" : ""}`}
              onClick={() => setUserAnswer("flipped")}
            >
              {/* Front */}
              <div className={`absolute inset-0 backface-hidden flex items-center justify-center bg-gray-800 border-2 border-gray-600 rounded-2xl shadow-xl ${userAnswer === "flipped" ? "hidden" : "block"}`}>
                <h2 className="text-3xl font-bold text-white">{currentExercise.prompt}</h2>
              </div>
              {/* Back */}
              <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#5cb8fd] to-[#e67aff] rounded-2xl shadow-xl ${userAnswer === "flipped" ? "block" : "hidden"}`}>
                <h2 className="text-3xl font-bold text-white">{currentExercise.correct_answer}</h2>
              </div>
            </div>
            <p className="text-gray-400 mt-6 animate-pulse">Klik kartu untuk membalik</p>
          </div>
        );

      case "speak":
        return (
          <div className="flex flex-col items-center">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-600 w-full mb-8 text-center shadow-lg">
              <p className="text-2xl font-bold text-white">{currentExercise.prompt}</p>
            </div>
            <button 
              onClick={() => setUserAnswer("recorded")}
              className={`flex items-center justify-center w-24 h-24 rounded-full transition-all duration-300
                ${userAnswer === "recorded" 
                  ? "bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)] scale-110" 
                  : "bg-gray-700 hover:bg-gray-600 border-4 border-gray-500 hover:border-gray-400"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <p className="text-gray-400 mt-6">{userAnswer === "recorded" ? "Merekam suara..." : "Tahan tombol untuk bicara"}</p>
          </div>
        );

      default:
        return <div>UI untuk tipe "{currentExercise.type}" belum diimplementasi.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 flex flex-col font-sans">
      {/* Header / Progress bar */}
      <header className="p-4 border-b border-gray-800 bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-10 flex items-center gap-4">
        <button className="text-gray-400 hover:text-white transition-colors" title="Kembali">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#5cb8fd] to-[#e67aff] transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / mockExercises.length) * 100}%` }}
          />
        </div>
        <div className="text-sm font-bold text-gray-400">
          <span className="text-[#e67aff]">❤</span> 5
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 w-full max-w-4xl mx-auto py-12">
        <div className="w-full">
          {/* Question Header */}
          <div className="mb-10 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-gray-800 text-gray-400 rounded-lg text-sm font-bold tracking-widest uppercase mb-4 shadow-inner">
              Tipe: {currentExercise.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white whitespace-pre-line">
              {currentExercise.prompt}
            </h1>
          </div>

          {/* Dynamic Component Area */}
          <div className="mb-12">
            {renderExerciseContent()}
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <footer className={`border-t transition-colors duration-300 ${
          isSubmitted 
            ? isCorrect 
              ? "bg-[#10b981]/10 border-[#10b981]" 
              : "bg-[#ef4444]/10 border-[#ef4444]"
            : "bg-[#0a0a0f] border-gray-800"
        } p-4 sm:p-6 sticky bottom-0`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed bg-gray-800 rounded-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {isSubmitted && (
              <div className="hidden sm:block">
                <h3 className={`text-2xl font-bold ${isCorrect ? "text-[#10b981]" : "text-[#ef4444]"}`}>
                  {isCorrect ? "Benar sekali!" : "Kurang tepat."}
                </h3>
              </div>
            )}
          </div>

          {!isSubmitted ? (
            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-gradient-to-r from-[#5cb8fd] to-[#e67aff] text-white font-bold rounded-xl text-lg hover:shadow-[0_0_15px_rgba(230,122,255,0.4)] transition-all"
            >
              Cek Jawaban
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentIndex === mockExercises.length - 1}
              className={`px-8 py-3 font-bold rounded-xl text-lg transition-all text-white
                ${isCorrect ? "bg-[#10b981] hover:bg-[#059669]" : "bg-[#ef4444] hover:bg-[#dc2626]"}
                disabled:opacity-50`}
            >
              Lanjut
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
