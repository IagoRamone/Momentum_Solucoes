'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleSubmenu = (menuId: string) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId))
  }

  return (
    <aside className="bg-gray-300 text-[#333] w-[250px] min-h-screen p-5 flex flex-col transition-all duration-300 font-[Poppins] fixed z-50">
      <div className="logo mb-10">
        <Link href="/">
          <h2 className="text-[25px] font-semibold hover:text-[#fdd028] transition">Momentum</h2>
        </Link>
      </div>

      <ul className="space-y-1 text-[15px]">
        <li className="py-2 px-3 rounded hover:bg-gray-400">
          <Link href="/" className="flex items-center gap-2">
            <i className="bi bi-house"></i> Home
          </Link>
        </li>

        {/* Desempenho */}
        <li className="menuprincipal">
          <div
            className="py-2 px-3 rounded hover:bg-gray-400 cursor-pointer flex items-center gap-2"
            onClick={() => toggleSubmenu('menu2')}
          >
            <i className="bi bi-credit-card"></i> Desempenho
          </div>
          <ul className={`${openMenu === 'menu2' ? 'flex' : 'hidden'} flex-col ml-5`}>
            <li className="py-1 hover:text-[#fdd028]">
              <Link href="/desempenho/vendasloja">Visão Geral</Link>
            </li>
            <li className="py-1 hover:text-[#fdd028]">Cupons</li>
            <li className="py-1 hover:text-[#fdd028]">Repasses</li>
          </ul>
        </li>

        {/* Operacional */}
        <li className="menuprincipal">
          <div
            className="py-2 px-3 rounded hover:bg-gray-400 cursor-pointer flex items-center gap-2"
            onClick={() => toggleSubmenu('menu1')}
          >
            <i className="bi bi-bag"></i> Visão operacional
          </div>
          <ul className={`${openMenu === 'menu1' ? 'flex' : 'hidden'} flex-col ml-5`}>
            <li className="py-1 hover:text-[#fdd028]">Visão Geral das lojas</li>
            <li className="py-1 hover:text-[#fdd028]">
              <Link href="/operacional/items">Itens pausados</Link>
            </li>
            <li className="py-1 hover:text-[#fdd028]">
              <Link href="/operacional/statuslojas">Status das lojas</Link>
            </li>
          </ul>
        </li>

        {/* Clientes */}
        <li className="menuprincipal">
          <div
            className="py-2 px-3 rounded hover:bg-gray-400 cursor-pointer flex items-center gap-2"
            onClick={() => toggleSubmenu('menu3')}
          >
            <i className="bi bi-person"></i> Clientes
          </div>
          <ul className={`${openMenu === 'menu3' ? 'flex' : 'hidden'} flex-col ml-5`}>
            <li className="py-1 hover:text-[#fdd028]">Visão Geral</li>
            <li className="py-1 hover:text-[#fdd028]">Por Bairro</li>
            <li className="py-1 hover:text-[#fdd028]">Por Cidade</li>
          </ul>
        </li>

        {/* Avaliações */}
        <li className="menuprincipal">
          <div
            className="py-2 px-3 rounded hover:bg-gray-400 cursor-pointer flex items-center gap-2"
            onClick={() => toggleSubmenu('menu4')}
          >
            <i className="bi bi-star"></i> Avaliações
          </div>
          <ul className={`${openMenu === 'menu4' ? 'flex' : 'hidden'} flex-col ml-5`}>
            <li className="py-1 hover:text-[#fdd028]">
              <Link href="/avaliacao/visaogeral">Visão Geral</Link>
            </li>
            <li className="py-1 hover:text-[#fdd028]">Comentários</li>
          </ul>
        </li>

        {/* Conta */}
        <li className="menuprincipal">
          <div
            className="py-2 px-3 rounded hover:bg-gray-400 cursor-pointer flex items-center gap-2"
            onClick={() => toggleSubmenu('menu5')}
          >
            <i className="bi bi-person"></i> Conta
          </div>
          <ul className={`${openMenu === 'menu5' ? 'flex' : 'hidden'} flex-col ml-5`}>
            <li className="py-1 hover:text-[#fdd028]">
              <Link href="/conta/perfil">Perfil</Link>
            </li>
            <li className="py-1 hover:text-[#fdd028]">
              <Link href="/conta/lojas">Lojas</Link>
            </li>
            {/* <li className="py-1 hover:text-[#fdd028]"><Link href="/conta/admin">Admin</Link></li> */}
          </ul>
        </li>

        <li className="py-2 px-3 rounded hover:bg-gray-400 mt-2">
          <Link href="/logout" className="flex items-center gap-2">
            <i className="bi bi-box-arrow-right"></i> Logout
          </Link>
        </li>
      </ul>

      <div className="mt-auto border-t pt-4 text-center">
        <p className="text-sm">Bem-vindo,</p>
        <button
          className="mt-2 bg-gray-700 text-white rounded px-3 py-1 text-sm hover:bg-[#fdd028] hover:text-black transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
        </button>
      </div>
    </aside>
  )
}
