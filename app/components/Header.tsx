'use client'

import Image from 'next/image'

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <div className="md:hidden bg-white p-4 shadow flex items-center justify-between fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="text-2xl">
          <i className="bi bi-list"></i>
        </button>
        <Image
          src="/momentum_logo.png" 
          alt="Momentum Logo"
          width={35}
          height={40}
        />
      </div>
      <h1 className="text-lg font-semibold">Momentum</h1>
    </div>
  )
}
