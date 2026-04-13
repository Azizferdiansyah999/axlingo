'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Redirection page to unify the dashboard experience.
 * All dashboard traffic is moved to /dashboard/path.
 */
export default function DashboardIndex() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard/path')
  }, [router])

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
      <div className="text-[#5cb8fd] font-mono italic animate-pulse tracking-widest">
        REDIRECTING TO LEARNING PATH...
      </div>
    </div>
  )
}
