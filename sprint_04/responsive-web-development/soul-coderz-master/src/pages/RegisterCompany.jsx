import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import { PageContext } from '../contexts/PageContext'

import { Button } from '../components/Button'

import CompanyImg from '../assets/register-company.png'

export function RegisterCompany() {
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

  const [name, setName] = useState('')
  const [verifiedName, setVerifiedName] = useState('')
  useEffect(() => {
    const verifiedName = name.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
    setVerifiedName(verifiedName)
  }, [name])

  const [cnpj, setCNPJ] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isMatchPassword, setIsMatchPassword] = useState(true)
  useEffect(() => {
    if (password === confirmPassword)
      setIsMatchPassword(true)
    else
      setIsMatchPassword(false)
  }, [password, confirmPassword])

  const navigate = useNavigate()

  const companyData = {
    nome: verifiedName,
    senha: confirmPassword,
    email: email,
    telefone: telephone,
    cnpj: cnpj
  }

  async function handleSubmit() {
    await axios.post(`http://localhost:8086/JavaChallenge/rest/candidato/`, companyData)
    navigate('/profile')
  }
  
  return(
    <main className='flex flex-col lg:flex-row items-center lg:items-start justify-center mb-6 p-10 pt-[6rem] w-full gap-10
      font-title text-gray-900'
    >
      {!isMobile && 
        <Fade direction='left' triggerOnce>
          <div className='items-center justify-center flex flex-col max-h-[38.75rem] mt-20 max-w-[38.75rem]
            font-title text-purple-700'
          >
            <h1 className='text-[2vw] font-bold'>
              Encontre os <span className='text-orange-500'>canidatos qualifidados</span> que está procurando
            </h1>
            <img src={CompanyImg} 
              alt='Duas pessoas se cumprimentando e um documento assinado atrás. Parece que elas fecharam um negócio'
              className='max-w-lg h-auto'
            />
          </div>
        </Fade>
      }
      <Fade direction={isMobile ? 'up' : 'right'} className='w-full max-w-xl' triggerOnce>
        <div className='w-full px-5 pb-6 font-title text-purple-700 border border-purple-300 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300'
        >
          <div className='flex justify-end text-purple-300 w-full my-4'>
            <Link 
              to={'/register/applicant'} 
              className='hover:text-purple-500 transition-colors' 
              onClick={() => setPage('register')}
            >
              Quer se registrar como Candidato?
            </Link>
          </div>
          <h2 className='text-2xl text-center font-medium'>
            Empresa
          </h2>
          <hr className='mt-[0.2rem] mb-7 mx-auto overflow-hidden w-[30%] bg-purple-300 border border-purple-300'/>
          <form className='text-purple-700' onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor='name'>Nome da empresa</label>
                <input 
                  type='text' 
                  required 
                  id='name'
                  value={verifiedName}
                  onChange={event => setName(event.target.value)}
                  className={`inline-block h-10 mb-1 mt-[0.0625rem] pl-4 w-full border border-b-2 ${name.trim() ? 'border-purple-300' : 'border-gray-400'} focus-visible:border-purple-300 transition-colors rounded outline-none`}
                />
              </div>
              <div>
                <label htmlFor='cnpj'>CNPJ</label>
                <InputMask
                  mask='99.999.999/9999\-99'
                  maskChar={null}
                  min={14}
                  type='text'
                  required 
                  id='cnpj'
                  value={cnpj}
                  onChange={event => setCNPJ(event.target.value)}
                  className={`inline-block h-10 mb-1 mt-[0.0625rem] pl-4 w-full border border-b-2 ${cnpj.trim() ? 'border-purple-300' : 'border-gray-400'} focus-visible:border-purple-300 invalid:border-gray-400 transition-colors rounded outline-none`}
                />
              </div>
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
                <label htmlFor='telephone'>Telefone</label>
                <InputMask
                  mask='+55 (99) 9999-9999'
                  min={10}
                  maskChar={null}
                  type='text'
                  required 
                  id='telephone'
                  value={telephone}
                  onChange={event => setTelephone(event.target.value)}
                  className={`inline-block h-10 mb-1 mt-[0.0625rem] pl-4 w-full border border-b-2 ${telephone.trim() ? 'border-purple-300' : 'border-gray-400'} focus-visible:border-purple-300 transition-colors rounded outline-none`}
                />
              </div>
              <div>
                <label htmlFor='password'>Senha</label>
                <input 
                  type='password' 
                  required 
                  id='password'
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  className={`inline-block h-10 mb-1 mt-[0.0625rem] pl-4 w-full border border-b-2 ${password.trim() ? 'border-purple-300' : 'border-gray-400'} focus-visible:border-purple-300 transition-colors rounded outline-none`}
                />
              </div>
              <div>
                <label htmlFor='confirmPassword'>Confirmar senha</label>
                <input 
                  type='password' 
                  required 
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={event => setConfirmPassword(event.target.value)}
                  className={`inline-block h-10 mb-1 mt-[0.0625rem] pl-4 w-full border border-b-2 
                    ${confirmPassword.trim() ? 'border-purple-300' : 'border-gray-400'}
                  focus-visible:border-purple-300 transition-colors rounded outline-none
                    ${!isMatchPassword ? 'border-red-500 focus-visible:border-red-600' : ''}`}
                />
                <span className={`text-red-600 ${isMatchPassword ? 'select-none' : ''}`}>{!isMatchPassword ? 'As senhas não correspondem' : ''}&nbsp;</span>
              </div>
            </div>
            <Button className='mt-9 mx-auto w-full'>
              <input type='submit' value='Cadastrar-se' disabled={!isMatchPassword}/>
            </Button>
          </form>
        </div>
      </Fade>
    </main>
  )
}