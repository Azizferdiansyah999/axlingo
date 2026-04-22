import crypto from 'crypto';
import { getCachedAudioUrl, uploadAudioToR2 } from './storage';

/**
 * ElevenLabs TTS Integration with R2 Caching
 */
export async function generateElevenLabsTTS(text, voiceId = '21m00Tcm4TlvDq8ikWAM') {
  const API_KEY = process.env.ELEVENLABS_API_KEY;
  
  if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
    throw new Error('ElevenLabs API Key belum dikonfigurasi di .env.local');
  }

  // 1. Buat hash unik untuk kombinasi text + voiceId
  const hash = crypto.createHash('md5').update(`${voiceId}:${text}`).digest('hex');
  
  // 2. Cek apakah sudah ada di cache R2
  const cachedUrl = await getCachedAudioUrl(hash);
  if (cachedUrl) {
    console.log('Using cached TTS audio:', cachedUrl);
    return { url: cachedUrl, source: 'cache' };
  }

  // 3. Jika tidak ada, panggil ElevenLabs
  console.log('Generating new TTS audio from ElevenLabs (Flash v2.5)...');
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: text,
      model_id: 'eleven_flash_v2_5', // Model Flash lebih murah & cepat
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail?.message || 'Gagal mengambil suara dari ElevenLabs');
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // 4. Upload hasil ke R2 untuk pemakaian berikutnya
  const uploadedUrl = await uploadAudioToR2(hash, buffer);
  
  return { 
    url: uploadedUrl || null, 
    buffer: buffer, // Tetap kembalikan buffer untuk fallback
    source: 'api' 
  };
}

