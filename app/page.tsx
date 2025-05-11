'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 sm:px-8 py-2 bg-white shadow-md fixed w-full z-40 bg-[#fff] shadow-lg">
        <div className="flex items-center gap-2">
          <Image src="/momentum_logo.png" alt="Logo" width={70} height={40} />
          <h1 className="text-base font-semibold text-gray-700">Momentum Soluções</h1>
        </div>
        <div>
          <Link
          href="/login"
          className="mr-2 text-sm cursor-pointer bg-violet-600 text-center border-2 border-gray-400 text-white rounded-lg py-2 px-4 transition-colors duration-200 hover:bg-white hover:text-violet-600"
        >
          Entrar
        </Link>
        <Link
          href="/cadastro"
          className="text-sm cursor-pointer text-center border-2 border-gray-400 text-violet-600 rounded-lg py-2 px-4 transition-colors duration-200 hover:bg-violet-600 hover:text-white"
        >
          Cadastrar
        </Link>
        </div>
        
        
      </header>

      {/* Main content */}
      <main className="flex-1 mt-24 px-6 sm:px-20 py-16 bg-white text-center">
        
        <h2 className="text-4xl font-bold text-gray-600 mb-6">
          Conecte. Desenvolva. Integre.
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Sua plataforma central para <span className="text-violet-600">integração de dados</span>, <span className="text-violet-600">gestão operacional</span> e <span className="text-violet-600">desenvolvimento sob demanda</span>. Ideal para equipes que buscam <span className="text-violet-600">agilidade</span>, <span className="text-violet-600">eficiência</span> e <span className="text-violet-600">controle total</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/login"
            className="text-xl cursor-pointer text-center bg-violet-600 border-2 border-gray-400 text-white rounded-lg py-2 px-4 transition-colors duration-200 hover:bg-white hover:text-violet-600"
          >
            Acessar Plataforma
          </Link>
          <a
            href="#beneficios"
            className="text-xl cursor-pointer bg-white text-center border-2 border-gray-400 text-violet-600 rounded-lg py-2 px-4 transition-colors duration-200 hover:bg-violet-800 hover:text-white"
          >
            Saiba mais
          </a>
        </div>
      </main>

      {/* Highlights */}
      <section
        id="beneficios"
        className="bg-white py-20 px-6 sm:px-20 text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-600 mb-12">
          O que oferecemos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 rounded shadow shadow-xl">
            <h4 className="font-semibold text-violet-600 text-lg mb-2 ">Integração de Sistemas</h4>
            <p className="text-sm text-gray-600">
              Conecte ERPs, CRMs, APIs externas e bancos de dados com fluidez e segurança.
            </p>
          </div>
          <div className="p-6 rounded shadow shadow-xl">
            <h4 className="font-semibold text-violet-600 text-lg mb-2 ">Ambiente de Desenvolvimento</h4>
            <p className="text-sm text-gray-600">
              Ferramentas, métricas e recursos para sua equipe técnica inovar e evoluir continuamente.
            </p>
          </div>
          <div className="p-6 rounded shadow shadow-xl">
            <h4 className="font-semibold text-violet-600 text-lg mb-2">Gestão Unificada</h4>
            <p className="text-sm text-gray-600">
              Gerencie processos, usuários, integrações e muito mais em um único lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-2  text-sm text-gray-600">
        © {new Date().getFullYear()} Momentum Soluções. Todos os direitos reservados.
      </footer>
    </div>
  )
}
