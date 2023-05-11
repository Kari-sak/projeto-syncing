import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'

import { PageContext } from '../contexts/PageContext'

import { Button } from '../components/Button'

import LoginImg from '../assets/login.png'

export function Login() {
  const { setPage } = useContext(PageContext)

  const [isMobile, setIsMobile] = useState(false)
  function handleCheckIfIsMobile() {
    if (window.innerWidth <= 1024)
      setIsMobile(true)
    else
      setIsMobile(false)
  }
  useEffect(() =>{
    handleCheckIfIsMobile()
  }, [])
  window.addEventListener('resize', handleCheckIfIsMobile)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(true)
  const [isUserInvalid, setIsUserInvalid] = useState(false)
  const navigate = useNavigate()
  async function handleLogIn(event) {
    event.preventDefault()

    await axios('http://localhost:8086/JavaChallenge/rest/candidato').then(response => {
      const user = response.data
      if (user.email === email && user.senha === password) {
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/profile')
      }
      else
        setIsUserInvalid(true)
    })
  }


  return (
    <main className="flex flex-col lg:flex-row items-center lg:items-start justify-center mb-6 p-10 pt-[6rem] w-full gap-10
      font-title text-gray-900"
    >
      {!isMobile && 
        <Fade direction='left' triggerOnce>
          <div className="items-center justify-center flex flex-col max-h-[38.75rem] w-auto
            font-title text-purple-700"
          >
            <h1 className='text-[2vw] font-bold'>
              Conecte-se com as&nbsp;
              <span className="text-orange-500">
                oportunidade
              </span>
            </h1>
            <img src={LoginImg} 
              alt="Duas pessoas apoiadas em um smartphone de 2,5 metros em um tela de login. Uma das pessoas é uma mulher que segura um tablet. A outra é um homem sentado com um notebook no colo."
              className='max-w-lg h-auto'
            />
          </div>
        </Fade>
      }
      <Fade direction={isMobile ? 'up' : 'right'} className="w-full max-w-2xl" triggerOnce>
        <div className='max-w-2xl w-full px-5 py-6 font-title text-purple-700 border border-purple-300 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300'
        >
          <h2 className='text-2xl text-center font-medium'>
            Login
          </h2>
          <hr className='mt-[0.2rem] mb-7 mx-auto overflow-hidden w-[30%] bg-purple-300 border border-purple-300'/>
          <form onSubmit={handleLogIn}>
            <div>
              <span className={`text-red-600 ${isUserInvalid ? "select-none" : ""}`}>{isUserInvalid ? 'Email ou senha inválidos. Verifique novamente, por favor' : ''}&nbsp;</span>
              <div>
                <label htmlFor='email'>Email</label>
                <input 
                  type='email' 
                  required 
                  id='email'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  className={`inline-block h-10 mb-1 mt-[0.0625rem] pl-4 w-full border border-b-2 ${email.trim() ? 'border-purple-300' : 'border-gray-400'} focus-visible:border-purple-300 transition-colors rounded outline-none`}
                />
              </div>
              <div>
                <label htmlFor='password'>Senha</label>
                <input 
                  type='password' 
                  required 
                  id='password'
                  min={6}
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  className={`inline-block h-10 mb-1 mt-[0.0625rem] pl-4 w-full border border-b-2 ${password.trim() ? 'border-purple-300' : 'border-gray-400'} focus-visible:border-purple-300 transition-colors rounded outline-none`}
                />
              </div>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  id='remember-me'
                  checked={rememberPassword}
                  onChange={() => setRememberPassword(!rememberPassword)}
                  className='accent-purple-300'
                />
                Lembrar de mim
              </label>
              <div className='flex justify-end text-purple-300 w-full mt-4'>
                <Link 
                  to={'/register'} 
                  className="hover:text-purple-500 transition-colors" 
                  onClick={() => setPage('home')}
                >
                  Não possui conta? Registre&#8209;se!
                </Link>
              </div>
            </div>
            <Button className='my-9 mx-auto w-full'>
              <input type='submit' value='Entrar'/>
            </Button>
          </form>
        </div>
      </Fade>
    </main>
  )
}