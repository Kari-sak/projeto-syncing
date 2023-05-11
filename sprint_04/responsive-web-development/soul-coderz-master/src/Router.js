import { useState, useEffect } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'

import { PageContext } from './contexts/PageContext'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { RegisterCompany } from './pages/RegisterCompany'
import { RegisterApplicant } from './pages/RegisterApplicant'
import { InProgress } from './pages/InProgress'
import { Profile } from './pages/Profile'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

export function Router() {
  const [page, setPage] = useState('')

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return(
    <>
      <PageContext.Provider value={{page, setPage}}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/register/applicant' element={<RegisterApplicant />} />
          <Route path='/register/company' element={<RegisterCompany />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<InProgress />} />
        </Routes>
      </PageContext.Provider>
      <Footer />
    </>
  )
}