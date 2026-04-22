import { NextResponse } from 'next/server';
import { generateElevenLabsTTS } from '@/lib/elevenlabs';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get('text');
  // voiceId opsional, bisa dikirim dari frontend
  const voiceId = searchParams.get('voiceId') || '21m00Tcm4TlvDq8ikWAM'; 

  if (!text) {
    return NextResponse.json({ error: 'Text is required' }, { status: 400 });
  }

  try {
    const result = await generateElevenLabsTTS(text, voiceId);

    return NextResponse.json({ 
      url: result.url, 
      source: result.source,
      // Jika baru saja digenerate, kita beri tahu frontend
      hasBuffer: !!result.buffer 
    }, {
      headers: {
        'X-Source': result.source,
        'X-Cache-URL': result.url || 'none',
      }
    });


  } catch (error) {
    console.error('ElevenLabs Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate audio' },
      { status: 500 }
    );
  }
}
