'use client'

import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Sidebar({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean
  closeSidebar: () => void
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleSubmenu = (menuId: string) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId))
  }

  return (
    <aside
      className={clsx(
        'bg-gray-300 text-[#333] w-[250px] min-h-screen p-5 flex flex-col font-[Poppins] z-50 fixed top-0 transition-transform duration-300',
        'md:translate-x-0 md:static',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Botão fechar no mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={closeSidebar} className="text-2xl">
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <div className="logo mb-10">
        <Link href="/" onClick={closeSidebar}>
          <h2 className="text-[25px] font-semibold hover:text-[#fdd028] transition">Momentum</h2>
        </Link>
      </div>

      <ul className="space-y-1 text-[15px]">
        <li className="py-2 px-3 rounded hover:bg-gray-200 transition">
          <Link href="/" className="flex items-center gap-2 font-medium" onClick={closeSidebar}>
            <i className="bi bi-house"></i> Home
          </Link>
        </li>

        {/* Menus com submenu */}
        {[
          { id: 'menu2', label: 'Desempenho', icon: 'bi-bar-chart', links: [
            { label: 'Visão Geral', href: '/desempenho/vendasloja' },
            { label: 'Cupons' },
            { label: 'Repasses' },
          ]},
          { id: 'menu1', label: 'Visão operacional', icon: 'bi-gear', links: [
            { label: 'Visão Geral das lojas' },
            { label: 'Itens pausados', href: '/operacional/items' },
            { label: 'Status das lojas', href: '/operacional/statuslojas' },
          ]},
          { id: 'menu3', label: 'Clientes', icon: 'bi-people', links: [
            { label: 'Visão Geral' },
            { label: 'Por Bairro' },
            { label: 'Por Cidade' },
          ]},
          { id: 'menu4', label: 'Avaliações', icon: 'bi-chat-left-text', links: [
            { label: 'Visão Geral', href: '/avaliacao/visaogeral' },
            { label: 'Comentários' },
          ]},
          { id: 'menu5', label: 'Conta', icon: 'bi-person-gear', links: [
            { label: 'Perfil', href: '/conta/perfil' },
            { label: 'Lojas', href: '/conta/lojas' },
          ]}
        ].map(menu => (
          <li key={menu.id} className="menuprincipal">
            <div
              className="py-2 px-3 rounded hover:bg-gray-200 cursor-pointer flex items-center gap-2 font-medium"
              onClick={() => toggleSubmenu(menu.id)}
            >
              <i className={`bi ${menu.icon}`}></i> {menu.label}
              <i className={`bi ${openMenu === menu.id ? 'bi-chevron-down' : 'bi-chevron-right'} ml-auto`}></i>
            </div>
            <ul className={`${openMenu === menu.id ? 'flex' : 'hidden'} flex-col ml-5 mt-2`}>
              {menu.links.map((link, index) => (
                <li key={index} className="py-1 hover:text-[#fdd028]">
                  {link.href ? (
                    <Link href={link.href} onClick={closeSidebar}>{link.label}</Link>
                  ) : (
                    link.label
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}

        <li className="py-2 px-3 rounded hover:bg-gray-200 mt-2 transition">
          <Link href="/logout" className="flex items-center gap-2 font-medium" onClick={closeSidebar}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </Link>
        </li>
      </ul>

      <div className="mt-auto border-t pt-4 text-center">
        <p className="text-sm">Bem-vindo,</p>
        <button
          className="mt-2 bg-gray-700 text-white rounded px-3 py-1 text-sm hover:bg-[#fdd028] hover:text-black transition"
          onClick={closeSidebar}
        >
          🌙 Modo Escuro
        </button>
      </div>
    </aside>
  )
}
