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
        'bg-white inset-shadow-sm text-[#333] w-[250px] min-h-screen p-5 flex flex-col z-50 fixed top-0 transition-transform duration-300',
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
        <a href="">
          <img src="/momentum_logo.png" width={90} alt="" />
        </a>
      </div>

      <ul className="space-y-1 text-[15px]">
        <li className="mr-5 text-gray-500 shadow-xs py-2 px-3 rounded hover:bg-gray-200 hover:text-violet-600 transition">
          <Link href="#" className="flex items-center gap-2 font-medium" onClick={closeSidebar}>
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
              className="mr-8 text-gray-500 p-5 cursor-pointer shadow-xs py-2 px-3 rounded hover:bg-gray-200 hover:text-violet-600 transition"
              onClick={() => toggleSubmenu(menu.id)}
            >
              <i className={`bi ${menu.icon}`}></i> {menu.label}
              <i className={`bi ${openMenu === menu.id ? 'bi-chevron-down' : 'bi-chevron-right'} ml-auto`}></i>
            </div>
            <ul className={`${openMenu === menu.id ? 'flex' : 'hidden'} flex-col ml-5 mt-2`}>
              {menu.links.map((link, index) => (
                <li key={index} className="cursor-pointer text-sm text-gray-500 py-1 hover:text-violet-600">
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

        <li className="text-gray-500 cursor-pointer shadow-xs py-2 px-3 rounded hover:bg-gray-200 hover:text-violet-600 transition">
          <Link href="/logout" className="flex items-center gap-2 font-medium" onClick={closeSidebar}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </Link>
        </li>
      </ul>

      <div className="mt-5 m-1 p-1 rounded-xl border border-gray-300 pt-4 text-center">
        <p className="text-sm text-violet-500">Bem-vindo,</p>
        <button
          className="mt-5 mb-5 bg-white text-gray-600 shadow-xs rounded px-3 py-1 text-sm hover:bg-violet-600 hover:text-white transition"
          onClick={closeSidebar}
        >
          🌙 Modo Escuro
        </button>
      </div>
    </aside>
  )
}
