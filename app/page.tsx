'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 sm:px-16 py-4 bg-white border-b border-gray-200 shadow-sm fixed w-full z-50">
        <div className="flex items-center gap-2">
          <Image src="/momentum_logo.png" alt="Logo" width={100} height={40} />
          <h1 className="text-xl font-semibold text-gray-900">Momentum Soluções</h1>
        </div>
        <Link
          href="/login"
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Entrar
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 mt-24 px-6 sm:px-20 py-16 bg-[#f9fafb] text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Conecte. Desenvolva. Integre.
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          A <strong>Momentum Soluções</strong> é a sua plataforma centralizada para
          integração de dados, gestão operacional e desenvolvimento sob demanda. Uma
          solução para equipes que querem agilidade e controle.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/login"
            className="bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-gray-800 transition"
          >
            Acessar Plataforma
          </Link>
          <a
            href="#beneficios"
            className="border-2 border-black text-black font-medium py-3 px-6 rounded-full hover:bg-black hover:text-white transition"
          >
            Saiba mais
          </a>
        </div>
      </main>

      {/* Highlights */}
      <section
        id="beneficios"
        className="bg-white py-20 px-6 sm:px-20 text-center border-t"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-12">
          O que oferecemos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 rounded shadow border">
            <h4 className="font-semibold text-lg mb-2">Integração de Sistemas</h4>
            <p className="text-sm text-gray-600">
              Conecte ERPs, CRMs, APIs externas e bases de dados de forma fluida.
            </p>
          </div>
          <div className="p-6 rounded shadow border">
            <h4 className="font-semibold text-lg mb-2">Ambiente de Desenvolvimento</h4>
            <p className="text-sm text-gray-600">
              Um espaço com ferramentas e métricas para sua equipe técnica criar e evoluir.
            </p>
          </div>
          <div className="p-6 rounded shadow border">
            <h4 className="font-semibold text-lg mb-2">Gestão Unificada</h4>
            <p className="text-sm text-gray-600">
              Tudo em um só lugar: controle de processos, usuários, integrações e mais.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 border-t text-sm text-gray-600">
        © {new Date().getFullYear()} Momentum Soluções. Todos os direitos reservados.
      </footer>
    </div>
  )
}
