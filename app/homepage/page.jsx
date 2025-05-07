'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function Principal() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="flex bg-[#f4f7fc] min-h-screen relative">
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-6 pt-[72px] md:pt-6 overflow-auto">
          <Home />
        </main>
      </div>
    </div>
  )
}

function Home() {
  return (
    <section className="dashboard">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="card bg-white p-6 rounded shadow flex-1 min-w-[250px] flex items-center justify-between">
          <i className="fas fa-store text-2xl text-blue-600"></i>
          <p>10 Lojas<br />Cadastradas</p>
        </div>
        <div className="card bg-white p-6 rounded shadow flex-1 min-w-[250px] flex items-center justify-between">
          <i className="fas fa-layer-group text-2xl text-blue-600"></i>
          <p>Maior grupo: Grupo X<br />5 lojas</p>
        </div>
        <div className="card bg-white p-6 rounded shadow flex-1 min-w-[250px] flex items-center justify-between">
          <i className="fas fa-users text-2xl text-blue-600"></i>
          <p>200 Usuários<br />Registrados</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Tabela Completa</h2>
        <table className="w-full text-left border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Vendas Totais</th>
              <th className="p-2">Pedidos</th>
              <th className="p-2">Entrega média</th>
              <th className="p-2">Avaliações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">70.093,41</td>
              <td className="p-2">1.123</td>
              <td className="p-2">R$ 3,42</td>
              <td className="p-2">4,8</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-2">60.100,41</td>
              <td className="p-2">2.500</td>
              <td className="p-2">R$ 10,42</td>
              <td className="p-2">5,0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
