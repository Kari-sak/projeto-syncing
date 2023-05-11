import { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from "react-router-dom";

import { PageContext } from '../contexts/PageContext';

import ApplicantImg from '../assets/applicant-icon.png'
import ComapanyImg from '../assets/company-icon.png'

export function Register() {
  const { setPage } = useContext(PageContext)
  
  return (
    <section id="register" className="overflow-hidden py-[5.6rem] font-body text-gray-900">
      <div className="flex flex-col gap-8 items-center mx-auto max-w-6xl">
        <Fade direction="down" triggerOnce>
          <div className="max-w-lg text-center">
            <h2 className="mb-4 font-body text-4xl font-bold text-purple-700">
              Quem é você?
            </h2>
            <p className="text-lg">
              Com mais de 10 anos no mercado, a
              <span className="text-purple-300"> SoulCoderz </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet magni nulla consequatur accusamusrepellendus voluptate laudantium explicabo
            </p>
          </div>
        </Fade>
        <div className="flex flex-col gap-6 px-6 md:flex-row">
          <Fade direction="left" triggerOnce>
            <Link to={'/register/applicant'} onClick={() => setPage('register')}>
              <div className="flex flex-col items-center h-[30rem] py-14 px-8 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 border-b-8 border-purple-300">
                <img src={ApplicantImg} alt="Imagem ilustrativa de um candidato" className="w-28 h-auto"/>
                <h3 className="mb-3 font-title text-2xl text-purple-700 font-bold">
                  Candidato
                </h3>
                <p className="text-purple-300 w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum in error doloremque odit, ullam repellendus corrupti, doloribus quas distinctio dolorem fugiat magnam officiis mollitia minima soluta perspiciatis officia, amet necessitatibus?
                </p>
              </div>
            </Link>
          </Fade>
          <Fade direction="right" triggerOnce>
            <Link to={'/register/company'} onClick={() => setPage('register')}>
              <div className="flex flex-col items-center h-[30rem] py-14 px-8 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 border-b-8 border-purple-300">
                <img src={ComapanyImg} alt="Imagem ilustrativa de uma empresa" className="w-28 h-auto"/>
                <h3 className="mb-3 font-title text-2xl text-purple-700 font-bold">
                  Empresa
                </h3>
                <p className="text-purple-300 w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum in error doloremque odit, ullam repellendus corrupti, doloribus quas distinctio dolorem fugiat magnam officiis mollitia minima soluta perspiciatis officia, amet necessitatibus?
                </p>
              </div>
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  )
}