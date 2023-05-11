/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"

import { PageContext } from "../contexts/PageContext"

import { Button } from "../components/Button"
import { Job } from "../components/Job"

export function Profile() {
  const { setPage } = useContext(PageContext)
  const user = JSON.parse(localStorage.getItem('user'))

  const [userData, setUserData] = useState({})
  async function getUser() {
    await axios(`http://localhost:8086/JavaChallenge/rest/candidato/${user.id}`).then(response => {
      setUserData(response.data)
    })
  }

  const [jobs, setJobs] = useState({})
  async function getJobs() {
    await axios(`http://localhost:8086/JavaChallenge/rest/vaga-candidato/${user.id}`).then(response => {
      setJobs(response.data)
    }
    )
  }

  useEffect(() => {
    getUser()
    getJobs()
  }, []) // Acontece somente na renderização
  
  
  return(
    <main className="pt-[4.5rem]"
    >
      <section className="pb-[9.5rem] pt-10 max-w-6xl mx-auto">
        <div className="px-6">
          <Fade direction="left" triggerOnce>
            <h2 className="mb-4 font-title text-3xl font-bold text-purple-700">
              Informações
            </h2>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div className="flex flex-col sm:flex-row gap-8">
              <img src={`${userData.github}.png`} alt={`Foto de perfil de ${userData.name}`} className="w-40 h-40 rounded-full border-2 border-purple-300" />
              <div className="flex flex-col justify-between w-full gap-8 md:flex-row md:items-end">
                <div className="flex flex-col text-purple-700 font-body"> {/* TODO: Retirar flex e flex col para testar */}
                  <div>
                    <span className="font-bold">Nome: </span>
                    <span>{userData.nome}</span>
                  </div>
                  <div>
                    <span className="font-bold">Email: </span>
                    <span>{userData.email}</span>
                  </div>
                  <div>
                    <span className="font-bold">Senha: </span>
                    <span>{userData.senha.split('').map(() => { return '*' })}</span>
                  </div>
                  <div>
                    <span className="font-bold">Celular: </span>
                    <span>{userData.telefone}</span>
                  </div>
                  <div>
                    <span className="font-bold">Cidade/UF: </span>
                    <span>{userData.cidade}</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="font-bold flex items-center"><FaLinkedinIn size={16} />: </span>
                    <span>{userData.linkedin}</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="font-bold flex items-center"><FaGithub size={16} />: </span>
                    <span>{userData.github}</span>
                  </div>
                </div>
                <Link to={'/profile/edit'} className="w-full sm:flex sm:justify-end md:w-fit">
                  <Button className="w-full sm:w-fit" onClick={() => setPage('edit')}>
                    Editar perfil
                  </Button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-gray-900 to-purple-300"></div>

      <section className="pb-[9.5rem] pt-10 max-w-7xl mx-auto">
        <div className="px-6">
          <Fade direction="left" triggerOnce>
            <h2 className="mb-4 font-title text-3xl font-bold text-purple-700">
              Minhas candidaturas ({jobs.length})
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce>
          {jobs.map(job => {
            return (
              <Job
                id={job.id}
                logo={job.logo}
                company={job.empresa}
                role={job.cargo}
                seniority={job.nivel}
                salary={job.salario}
                scheme={job.regime}
                location={job.endereco}
                schedule={job.horario}
                benefits={job.beneficios}
              />
            )
          })}
          </Fade>
        </div>
      </section>
    </main>
  )
}