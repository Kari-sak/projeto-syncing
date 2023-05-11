import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal';
import { Fade as MobFade } from 'react-reveal'
import { FiMenu, FiX } from 'react-icons/fi'
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';


export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);
  
  function handleShowMenuButton() {
    if (window.innerWidth <= 768)
      setIsMobile(true)
    else
      setIsMobile(false)
  }

  function handleShowHeaderShadow() {
    if (window.scrollY > 160)
      setIsScreenScrolled(true)
    else
      setIsScreenScrolled(false)
  }

  useEffect(() => {
    handleShowMenuButton()
    handleShowHeaderShadow()
  }, [])

  const {page, setPage} = useContext(PageContext)
  useEffect(() => {
    const url = window.location.href
    if (url.endsWith('/'))
      setPage('home')
    else if (url.endsWith('/login'))
      setPage('login')
    else if (url.endsWith('/jobs'))
      setPage('jobs')
    else if (url.endsWith('/register'))
      setPage('register')
  }, [setPage])
  
  window.addEventListener('resize', handleShowMenuButton)
  window.addEventListener('scroll', handleShowHeaderShadow)

  return(
    <header 
      className={`flex fixed w-full z-40 font-body text-base font-normal text-gray-300 border-b border-gray-500 bg-gray-300
      ${isScreenScrolled ? 'shadow' : ''}`}
    >
      <nav className="items-center flex h-[4.5rem] justify-between mx-auto w-4/5 2xl:max-w-[70rem]">
        <Fade direction="left" triggerOnce>
          {page === 'home' ?
            <a href='#home' className="font-title text-2xl font-bold text-purple-700">
              Soul
              <span className='text-purple-300'>
                Coderz
              </span>
              .
            </a> :
            <Link to={'/'} onClick={() => setPage('home')} className="font-title text-2xl font-bold text-purple-700">
            Soul
            <span className='text-purple-300'>
              Coderz
            </span>
            .
          </Link>
          }
        </Fade>
        {
          (!isMobile || isMenuOpen) ?
            <div
              className={
                !isMenuOpen ? 
                "flex gap-8 font-body text-gray-900" :
                "fixed flex flex-col pt-[1.75rem] px-[10%] items-center bg-gray-300 w-screen h-screen z-50 top-0 left-0"
              }
            >
              {isMenuOpen &&
              <MobFade top>
                <div className='flex justify-end w-full'>
                  <FiX
                    className="cursor-pointer"
                    size={25}
                    color='#a152ef'
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
              </MobFade>}
              <MobFade bottom cascade>
                <ul
                  className={isMenuOpen ? 
                    "flex flex-col justify-around items-center w-screen h-screen p-16 text-purple-700 font-bold text-center text-4xl" : 
                    "flex-row flex gap-8"}
                >
                  <li onClick={() => setIsMenuOpen(false)} className={isMobile ? 'order-3' : 'order-1'}>
                    <Link
                      to={'/'}
                      onClick={() => setPage('home')}
                      className={`pb-4 text-center 
                        ${page === 'home' ? 
                        "after:w-full" : 
                        "after:w-0"} 
                        hover:text-purple-300 transition-color duration-300 after:content-[''] hover:after:w-full after:h-0.5 after:bg-purple-300 after:absolute after:-bottom-6 after:left-0 after:transition-[width] after:duration-300`
                      }
                    >
                      Menu principal
                    </Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)} className={isMobile ? 'order-3' : 'order-1'}>
                    <Link
                      to={'/jobs'} //TODO: Atualizar link
                      onClick={() => setPage('jobs')}
                      className={`pb-4 text-center 
                        ${page === 'jobs' ? 
                        "after:w-full" : 
                        "after:w-0"} 
                        hover:text-purple-300 transition-color duration-300 after:content-[''] hover:after:w-full after:h-0.5 after:bg-purple-300 after:absolute after:-bottom-6 after:left-0 after:transition-[width] after:duration-300`
                      }
                    >
                      Procurar vagas
                    </Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)} className={isMobile ? 'order-1' : 'order-2'}>
                    <Link
                      to={'/login'}
                      onClick={() => setPage('login')}
                      className={`pb-4 text-center 
                        ${page === 'login' ? 
                        "text-purple-500 hover:text-purple-700 after:w-full" : 
                        "after:w-0"} 
                        text-purple-300 hover:text-purple-500 transition-color duration-300 after:content-[''] hover:after:w-full after:h-0.5 after:bg-purple-500 after:absolute after:-bottom-6 after:left-0 after:transition-[width] after:duration-300`
                      }
                    >
                      Login
                    </Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)} className={isMobile ? 'order-2' : 'order-3'}>
                    <Link
                      to={'/register'}
                      onClick={() => setPage('register')}
                      className={`pb-4 text-center 
                        ${page === 'register' ? 
                        "text-purple-500 hover:text-purple-700 after:w-full" : 
                        "after:w-0"} 
                        text-purple-300 hover:text-purple-500 transition-color duration-300 after:content-[''] hover:after:w-full after:h-0.5 after:bg-purple-500 after:absolute after:-bottom-6 after:left-0 after:transition-[width] after:duration-300`
                      }
                    >
                      Registrar-se
                    </Link>
                  </li>
                </ul>
              </MobFade>
            </div> :
          <Fade direction='right' triggerOnce>
            <FiMenu 
              className="cursor-pointer"
              size={25}
              color='#a152ef'
              onClick={() => setIsMenuOpen(true)}
            />
          </Fade>
        }
      </nav>
    </header>
  )
}