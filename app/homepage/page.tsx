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
        <main className="p-6 bg-[#f4f7fc] pt-[72px] md:pt-6 overflow-auto">
          <Home />
        </main>
      </div>
    </div>
  )
}

function Home() {
  return (
    <section className="dashboard">
      <h1 className="text-4xl text-violet-600 font-bold mb-6">Dashboard</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="card bg-white p-6 rounded-xl shadow flex-1 min-w-[250px] flex items-center justify-evenly shadow-md">
          <i className="bi bi-people-fill text-5xl text-violet-600"></i>
          <p className="text-gray-600" title="Usuários registrados">
            <b>Usuários</b>
            <br />
            200
          </p>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow flex-1 min-w-[250px] flex items-center justify-evenly shadow-md">
          <i className="bi bi-houses-fill text-5xl text-violet-600"></i>
          <p className="text-gray-600" title="Lojas cadastradas">
            <b>Lojas</b>
            <br />
            10
          </p>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow flex-1 min-w-[250px] flex items-center justify-evenly shadow-md">
          <i className="bi bi-wallet-fill text-5xl text-violet-600"></i>
          <p className="text-gray-600" title="Receita estimada">
            <b>Receita estimada</b>
            <br />
            R$ 10.000.000,00
          </p>
        </div>
        <div className="card bg-white p-6 rounded-xl shadow flex-1 min-w-[250px] flex items-center justify-evenly shadow-md">
          <i className="bi bi-cart-fill text-5xl text-violet-600"></i>
          <p className="text-gray-600" title="Pedidos totais">
            <b>Pedidos totais</b>
            <br />
            12.4380
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-violet-600 font-semibold mb-4">Resultados</h2>
        <div className="rounded-xl overflow-hidden shadow border border-gray-200">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-violet-500 text-white">
                <th className="p-2 rounded-tl-md">Vendas Totais</th>
                <th className="p-2">Pedidos</th>
                <th className="p-2">Entrega média</th>
                <th className="p-2 rounded-tr-md">Avaliações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-gray-600">70.093,41</td>
                <td className="p-2 text-gray-600">1.123</td>
                <td className="p-2 text-gray-600">R$ 3,42</td>
                <td className="p-2 text-gray-600">4,8</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 text-gray-600">60.100,41</td>
                <td className="p-2 text-gray-600">2.500</td>
                <td className="p-2 text-gray-600">R$ 10,42</td>
                <td className="p-2 text-gray-600">5,0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
