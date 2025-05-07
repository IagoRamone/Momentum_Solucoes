'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CadastroPage() {
  const router = useRouter()
  const [empresa, setEmpresa] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!empresa || !cnpj || !email || !telefone || !senha || !confirmarSenha) {
      setError('Preencha todos os campos!')
    } else if (!validateEmail(email)) {
      setError('Email inválido!')
    } else if (senha !== confirmarSenha) {
      setError('As senhas não coincidem!')
    } else {
      console.log('Cadastro enviado:', {
        empresa, cnpj, email, telefone, senha
      })
      router.push('/homepage')
    }

    if (error) {
      setTimeout(() => setError(''), 3000)
    }
  }

  return (
    <>
      <header className="w-full bg-[#f1f1f1] border-b border-gray-300 py-2 flex justify-start shadow-sm">
        <img src="/momentum_logo.png" alt="Logo" className="ml-12 max-w-[100px]" />
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] p-4">

        {error && (
          <div className="fixed top-6 right-6 bg-red-500 text-white px-4 py-2 rounded z-50 font-bold">
            {error}
          </div>
        )}

        <div className="bg-white border border-black rounded-lg mt-12 p-8 w-[300px] shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-left text-sm font-medium">Nome da Empresa</label>
            <input
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              maxLength={50}
              className="border border-black rounded px-3 py-2"
              required
            />

            <label className="text-left text-sm font-medium">CNPJ</label>
            <input
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              maxLength={18}
              className="border border-black rounded px-3 py-2"
              required
            />

            <label className="text-left text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={40}
              className="border border-black rounded px-3 py-2"
              required
            />

            <label className="text-left text-sm font-medium">Telefone</label>
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              maxLength={15}
              className="border border-black rounded px-3 py-2"
              required
            />

            <label className="text-left text-sm font-medium">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              maxLength={20}
              className="border border-black rounded px-3 py-2"
              required
            />

            <label className="text-left text-sm font-medium">Confirmar Senha</label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              maxLength={20}
              className="border border-black rounded px-3 py-2"
              required
            />

            <button
              type="submit"
              className="bg-white border-2 border-black rounded-full py-2 font-bold hover:bg-black hover:text-white transition"
            >
              Cadastrar
            </button>

            <a
              href="/"
              className="text-center border-2 border-black rounded-full py-2 font-bold hover:bg-black hover:text-white transition"
            >
              Voltar
            </a>
          </form>
        </div>
      </div>
    </>
  )
}
