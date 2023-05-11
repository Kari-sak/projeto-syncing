import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal'
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'
import { FiMapPin, FiPhone } from 'react-icons/fi'

import { PageContext } from "../../contexts/PageContext";

import { Button } from "../../components/Button";
import { Carousel } from "./Carousel";

import HomeImg from '../../assets/home.png'
import AboutImg from '../../assets/about.png'
import ApplicantImg from '../../assets/applicant-icon.png'
import ComapanyImg from '../../assets/company-icon.png'
import { useContext } from "react";

export function Home() {
  const { setPage } = useContext(PageContext)
  
  return (
      <main className="pt-[4.5rem]">
        <section id="home" className="overflow-hidden pb-[10rem] pt-[4.5rem] font-body text-gray-900">
          <div className="flex flex-col items-center mx-auto max-w-6xl sm:flex-row-reverse sm:justify-between">
            <Fade direction="right" triggerOnce>
              <img src={HomeImg} alt="Imagem ilustrativa sobre análise de trabalho" className="w-full h-auto"/>
            </Fade>
            <Fade direction="left" cascade triggerOnce>
              <div className="flex flex-col text-center mx-auto sm:max-w-sm sm:mx-6 sm:text-left">
                <h2 className="mb-4 font-title text-4xl leading-normal font-bold text-purple-700">
                  Dê agora o <span className="text-orange-500">próximo passo</span> em seu futuro profissional
                </h2>
                <p className="mb-8">
                  Encontre o emprego ideal para você entre milhares de ofertas!
                </p>
                <Fade direction="left" triggerOnce>
                  <a href="#register">
                    <Button>
                      Vamos lá!
                    </Button>
                  </a>
                </Fade>
              </div>
            </Fade>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-gray-900 to-purple-300"></div>

        <section id="register" className="overflow-hidden py-[10rem] font-body text-gray-900">
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

        <div className="h-[1px] bg-gradient-to-r from-purple-300 to-gray-900"></div>

        <section id="about" className="overflow-hidden py-[10rem] font-body text-gray-900">
          <div className="flex flex-col justify-between items-center mx-auto max-w-6xl lg:flex-row">
            <Fade direction="left" triggerOnce>
              <img src={AboutImg} alt="Três pessoas da equipe SoulCoderz" className="w-full h-auto"/>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div className="items-center flex flex-col mx-6">
                <h2 className="mb-4 font-body text-4xl font-bold text-purple-700">
                  Sobre nós
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure provident reiciendis nihil ipsa nostrum rem illum, magnam sapiente mollitia dolorem blanditiis facilis non? Ea fugiat dolorum ratione expedita nulla!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure provident reiciendis nihil ipsa nostrum rem illum, magnam sapiente mollitia dolorem blanditiis facilis non? Ea fugiat dolorum ratione expedita nulla!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure provident reiciendis nihil ipsa nostrum rem illum, magnam sapiente mollitia dolorem blanditiis facilis non? Ea fugiat dolorum ratione expedita nulla!
                </p>
              </div>
            </Fade>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-gray-900 to-purple-300"></div>

        <section id="ratings" className="overflow-hidden py-[10rem] font-body text-gray-900">
          <div className="flex flex-col gap-8 items-center mx-auto max-w-6xl">
            <Fade direction="down" cascade triggerOnce>
              <h2 className="mb-4 max-w-lg text-center font-body text-4xl font-bold text-purple-700">
                Empresas que recomendam nossa plataforma
              </h2>
            </Fade>
            <Carousel />
          </div>
        </section>

        <div className="h-[1px] bg-gradient-to-r from-purple-300 to-gray-900"></div>

        <section id="contact" className="overflow-hidden py-[10rem] font-body text-gray-900">
          <div className="flex flex-col gap-16 justify-between mx-auto max-w-6xl px-6 md:flex-row md:items-center">
            <Fade direction="left" cascade triggerOnce>
              <div className="max-w-sm">
                <h2 className="mb-4 font-title text-4xl font-bold text-purple-700">
                  Entre em contato com a gente!
                </h2>
                <p className="mb-8">
                  Entre em contato com a 
                  <span className="text-purple-300"> SoulCoderz. </span>
                  Queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
                </p>
                <Fade direction="left" triggerOnce>
                  <Button>
                    <a 
                      href="https://api.whatsapp.com/send?phone=+551199999-8888&text=Oi,%20seja%20bem%20vindo(a)%20a%20central%20de%20atendimento%20da%20SoulCoderz." className="flex"
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaWhatsapp size={24} className="mr-2"/>
                      Entrar em contato
                    </a>
                  </Button>
                </Fade>
              </div>
            </Fade>
            <Fade direction="right" cascade triggerOnce>
              <ul className="flex flex-col gap-8">
                <li className="flex items-center">
                  <FiPhone size={24} color='#a152ef' className="mr-2 hover:-translate-y-1 transition-transform"/>
                  11 99999-8888
                </li>
                <li className="flex items-center">
                  <FiMapPin size={24} color='#a152ef' className="mr-2 hover:-translate-y-1 transition-transform"/>
                  R. Nome da Rua, 000/Cidade - UF
                </li>
                <li className="flex items-center">
                  <FaRegEnvelope size={24} color='#a152ef' className="mr-2 hover:-translate-y-1 transition-transform"/>
                  contato@soulcoderz.com.br
                </li>
              </ul>
            </Fade>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-gray-900 to-purple-300"></div>
      </main>
  )
}