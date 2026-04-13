// app/api/auth/callback/route.js
import { createServerClient } from '@supabase/ssr'  // ✅ changed
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = await cookies()  // ✅ await in Next.js 15+

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          },
        },
      }
    )

    // Tukar code dengan session dan simpan cookies secara otomatis
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Error exchanging code in callback:', error)
    }
  }

  // Setelah login, arahkan ke unified dashboard path
  return NextResponse.redirect(new URL('/dashboard/path', request.url))
}