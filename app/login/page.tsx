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
      router.push('/homepage')
    }
  }

  return (
    <>
    <header className="w-full bg-[#fff] shadow-xl py-2 flex justify-start">
    <a href="/login"><img src="/momentum_logo.png" alt="Logo" className="ml-12 max-w-[70px]" /></a>
      
    </header>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] p-4 shadow-xl">

      {error && (
        <div className="fixed top-6 right-6 bg-red-500 text-white px-4 py-2 rounded z-50 font-bold">
          {error}
        </div>
      )}

      <div className="bg-white border border-none rounded-lg mt-16 p-8 w-[350px] shadow-xl">
        <h3 className="text-2xl  mb-6 text-center">Login</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
  <div className="relative ">
    <input
      type="text"
      id="email"
      placeholder=" "
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      maxLength={40}
      required
      className="cursor-pointer peer w-full px-2 py-3 text-base border border-gray-300 rounded-md outline-none focus:border-violet-500 inset-shadow-sm"
    
    />
    <label
      htmlFor="email"
      className="text-xs absolute left-2 top-3 text-gray-500 text-base transition-all duration-200 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-xs 
        peer-focus:text-violet-500 peer-focus:bg-white peer-focus:px-1"
    >
      E-mail
    </label>
  </div>

  <div className="relative">
    <input
      type="password"
      id="password"
      placeholder=" "
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      maxLength={10}
      required
      className="cursor-pointer peer w-full px-2 py-3 text-base border border-gray-300 rounded-md outline-none focus:border-violet-500 inset-shadow-sm"
    />
    <label
      htmlFor="password"
      className="text-xs cursor-pointer absolute left-2 top-3 text-gray-500 text-base transition-all duration-200 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-xs 
        peer-focus:text-violet-500 peer-focus:bg-white peer-focus:px-1"
    >
      Senha
    </label>
  </div>

  <a href="#" className="text-xs text-gray-600 transition duration-200 hover:underline">
    <i>Esqueci minha senha</i> 
  </a>

  <button
  type="submit"
  className="text-sm cursor-pointer text-center border-2 border-gray-400 text-violet-600 rounded-lg py-2 px-4 transition-colors duration-200 hover:bg-violet-800 hover:text-white"
>
  Entrar
</button>

  <a
    href="/cadastro"
    className="text-sm cursor-pointer text-center border-2 border-gray-400 text-violet-600 rounded-lg py-2 px-4 transition-colors duration-200 hover:bg-violet-800 hover:text-white"
  >
    Cadastrar
  </a>
</form>
      </div>
    </div>
    </>
  )
}
