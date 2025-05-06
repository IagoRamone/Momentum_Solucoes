'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Preencha todos os campos!')
      setTimeout(() => setError(''), 3000)
    } else {
      console.log('Login enviado:', { email, password })
      // redireciona para homepage
      router.push('/homepage')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] p-4">
      <header className="w-full bg-black py-2 flex justify-start">
        <img src="/assets/img/2.png" alt="Logo" className="ml-12 max-w-[150px]" />
      </header>

      {error && (
        <div className="fixed top-6 right-6 bg-red-500 text-white px-4 py-2 rounded z-50 font-bold">
          {error}
        </div>
      )}

      <div className="bg-white border border-black rounded-lg mt-16 p-8 w-[300px] shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-left text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={40}
            required
            className="border border-black rounded px-3 py-2"
          />

          <label htmlFor="password" className="text-left text-sm font-medium">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={10}
            required
            className="border border-black rounded px-3 py-2"
          />

          <a href="#" className="text-xs text-black font-bold hover:underline">
            Esqueci minha senha
          </a>

          <button type="submit" className="bg-white border-2 border-black rounded-full py-2 font-bold hover:bg-black hover:text-white transition">
            Entrar
          </button>

          <a
            href="/cadastro"
            className="btn text-center border-2 border-black rounded-full py-2 font-bold hover:bg-black hover:text-white transition"
          >
            Cadastrar
          </a>
        </form>
      </div>
    </div>
  )
}
