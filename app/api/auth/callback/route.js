import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    // Tukar code dengan session menggunakan client utama
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Setelah login, arahkan kembali ke halaman utama
  return NextResponse.redirect(requestUrl.origin)
}
