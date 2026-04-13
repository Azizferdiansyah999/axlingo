import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

/**
 * Middleware untuk proteksi route.
 * Route yang dilindungi: /dashboard, /shop, /chat
 * Jika user belum login, diarahkan ke /login.
 */
export async function middleware(req) {
  const res = NextResponse.next()

  // Buat Supabase client khusus untuk middleware (menggunakan cookies)
  const supabase = createMiddlewareClient({ req, res })

  // Cek sesi user aktif
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { pathname } = req.nextUrl

  // Jika user belum login dan mencoba akses route yang dilindungi, redirect ke /login
  if (!session) {
    // Simpan halaman yang ingin dikunjungi untuk redirect setelah login
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('redirectedFrom', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Jika user sudah login tapi mencoba membuka /login, redirect ke /dashboard
  return res
}

export async function middlewareForLogin(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/dashboard'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

/**
 * Konfigurasi: Tentukan route mana yang akan diperiksa oleh middleware.
 * Matcher hanya akan aktif untuk route yang diawali dengan:
 * - /dashboard (dan semua sub-routenya)
 * - /shop
 * - /chat
 */
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/shop/:path*',
    '/chat/:path*',
  ],
}
