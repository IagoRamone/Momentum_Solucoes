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

    setTimeout(() => setError(''), 3000)
  }

  const inputClass =
    'peer w-full px-2 py-3 text-base border border-gray-300 rounded-md outline-none focus:border-[#9834E4] inset-shadow-sm'

  const labelClass =
    'bg-white text-xs cursor-pointer absolute left-2 top-3 text-gray-500 text-base transition-all duration-200 peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#9834E4] peer-focus:bg-white peer-focus:px-1'

  return (
    <>
      <header className="w-full bg-white shadow-xl py-2 flex justify-start">
        <a href="/">
          <img src="/momentum_logo.png" alt="Logo" className="ml-12 max-w-[70px]" />
        </a>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] p-4">
        {error && (
          <div className="fixed top-6 right-6 bg-red-500 text-white px-4 py-2 rounded z-50 font-bold">
            {error}
          </div>
        )}

        <div className="bg-white shadow-xl rounded-lg mt-12 p-8 w-full max-w-md shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {[ 
              { label: 'Nome da Empresa', value: empresa, set: setEmpresa, type: 'text', max: 60, id: 'empresa' },
              { label: 'CNPJ', value: cnpj, set: setCnpj, type: 'text', max: 18, id: 'cnpj' },
              { label: 'E-mail', value: email, set: setEmail, type: 'email', max: 40, id: 'email' },
              { label: 'Telefone', value: telefone, set: setTelefone, type: 'text', max: 15, id: 'telefone' },
              { label: 'Senha', value: senha, set: setSenha, type: 'password', max: 20, id: 'senha' },
              { label: 'Confirmar Senha', value: confirmarSenha, set: setConfirmarSenha, type: 'password', max: 20, id: 'confirmarSenha' }
            ].map((field, idx) => (
              <div className="relative" key={idx}>
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.set(e.target.value)}
                  maxLength={field.max}
                  required
                  placeholder=" "
                  className={inputClass}
                />
                <label
                  htmlFor={field.id}
                  className={`${labelClass} ${field.value ? 'top-[-10px] text-xs' : 'top-3 text-base'}`}
                >
                  {field.label}
                </label>
              </div>
            ))}

            <button
              type="submit"
              className="text-sm cursor-pointer text-center border-2 rounded-lg py-2 text-[#9834E4] border-gray-400 hover:bg-violet-800 hover:text-white transition-colors duration-200"
            >
              Cadastrar
            </button>

            <a
              href="/login"
              className="text-sm cursor-pointer text-gray-600 text-center rounded-lg py-2 hover:text-violet-600 transition"
            >
              Já tenho <u>cadastro</u>
            </a>
          </form>
        </div>
      </div>
    </>
  )
}
