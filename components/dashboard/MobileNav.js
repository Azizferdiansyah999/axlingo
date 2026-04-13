'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MessageSquare, ShoppingBag, User, Trophy } from 'lucide-react'

export default function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: <Home />, label: 'Path', href: '/dashboard/path' },
    { icon: <Trophy />, label: 'Rank', href: '/dashboard/leaderboard' },
    { icon: <MessageSquare />, label: 'Chat', href: '/dashboard/chat' },
    { icon: <ShoppingBag />, label: 'Shop', href: '/dashboard/shop' },
    { icon: <User />, label: 'Profile', href: '/dashboard/profile' },
  ]

  return (
    <nav className="lg:hidden bg-[#0e0e0e]/95 backdrop-blur-2xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-4 pb-8 z-50 rounded-t-[2.5rem] border-t border-white/5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link 
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all duration-300 active:scale-90
              ${isActive ? 'text-[#5cb8fd] drop-shadow-[0_0_8px_rgba(92,184,253,0.8)]' : 'text-white/40 hover:text-white'}
            `}
          >
            <div className={`p-1 ${isActive ? 'scale-110' : ''}`}>
              {React.cloneElement(item.icon, { size: 24, strokeWidth: isActive ? 2.5 : 2 })}
            </div>
            <span className="font-['Be_Vietnam_Pro'] text-[9px] uppercase tracking-widest font-bold mt-1.5">
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
