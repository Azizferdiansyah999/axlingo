'use client';

import { useState, useRef, useEffect } from 'react';

export default function TTSTestPage() {
  const [text, setText] = useState('Hello, welcome to Axlingo. This is a ElevenLabs test.');
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [source, setSource] = useState(null);
  const [cacheUrl, setCacheUrl] = useState(null);
  const audioRef = useRef(null);

  // Auto play saat audioUrl berubah
  useEffect(() => {
    if (audioUrl && audioRef.current) {
      audioRef.current.load(); // Paksa reload source baru
      audioRef.current.play().catch(e => {
        console.error("Audio Play Error:", e);
      });
    }
  }, [audioUrl]);

  const handleSpeak = async () => {
    if (!text) return;

    setIsLoading(true);
    setSource(null);
    setAudioUrl(null);
    try {
      const response = await fetch(`/api/tts?text=${encodeURIComponent(text)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate audio');
      }

      const data = await response.json();
      
      // Ambil metadata
      setSource(data.source);
      setCacheUrl(data.url);

      if (data.url) {
        setAudioUrl(data.url);
      } else {
        throw new Error('API tidak mengembalikan URL audio');
      }

    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-orange-600">ElevenLabs TTS + R2 Cache</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <textarea
          className="w-full p-4 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Masukkan teks di sini..."
        />
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleSpeak}
              disabled={isLoading}
              className={`px-6 py-2 rounded-lg font-medium text-white transition-all ${
                isLoading ? 'bg-orange-600' : 'bg-orange-600 hover:bg-orange-700'
              }`}
            >
              {isLoading ? 'Sedang Memproses...' : 'Suarakan (ElevenLabs)'}
            </button>
            
            {audioUrl && (
              <audio ref={audioRef} src={audioUrl} controls className="h-10" />
            )}
          </div>

          {source && (
            <div className={`text-sm p-3 rounded-lg border ${
              source === 'cache' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <span className="font-bold uppercase">{source === 'cache' ? '⚡️ Cache (Gratis)' : '☁️ ElevenLabs API (Pakai Kredit)'}</span>
              {cacheUrl && cacheUrl !== 'none' && (
                <div className="mt-1 text-xs opacity-70 break-all">
                  R2 Path: {cacheUrl}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 p-4 bg-orange-50 rounded-lg text-orange-800 text-sm border border-orange-100">
        <p className="font-bold mb-2">Cara Setup ElevenLabs:</p>
        <ol className="list-decimal ml-4 space-y-1">
          <li>Buka file <code>.env.local</code> di root folder proyek Anda.</li>
          <li>Tambahkan baris: <code>ELEVENLABS_API_KEY=api_key_anda_disini</code></li>
          <li>Dapatkan API Key di <a href="https://elevenlabs.io" target="_blank" className="underline">ElevenLabs Dashboard</a> (Profile Settings).</li>
          <li>Restart server (<code>npm run dev</code>) setelah mengubah file .env.local.</li>
        </ol>
      </div>
    </div>
  );
}
