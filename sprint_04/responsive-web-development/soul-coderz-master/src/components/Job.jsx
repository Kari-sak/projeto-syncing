import { Link } from 'react-router-dom'
import { DiHtml5, DiCss3, DiJavascript } from 'react-icons/di'

import { Button } from './Button'

export function Job({
  id,
  logo,
  company,
  role,
  seniority,
  salary,
  scheme,
  location,
  schedule,
  benefits = []
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-8 p-5 gap-4 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 font-body text-purple-700">
      <div className="flex flex-col sm:flex-row items-center justify-around lg:justify-start w-full lg:w-2/5 lg:gap-2">
        <img src={logo} alt={`${company} logo`} className="w-[12.5rem] h-[12.5rem]" />
        <div className="flex flex-col gap-5 font-body text-gray-900">
          <div className="flex flex-col w-full font-body text-gray-900">
            <h3 className="font-title text-3xl font-bold text-purple-700 ">
              {company}
            </h3>
            <div className="text-base flex flex-wrap">
              {role.split(' ').map(word => { return (<p>{word}&nbsp;</p>)})}
            </div>
          </div>
          <div className='flex items-center'>
            {/* TODO: Adicionar skills */}
            <DiHtml5 className='text-purple-300 hover:text-purple-500 transition-colors duration-300' size={56}/>
            <DiCss3 className='text-purple-300 hover:text-purple-500 transition-colors duration-300' size={56}/>
            <DiJavascript className='text-purple-300 hover:text-purple-500 transition-colors duration-300' size={56}/>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-around md:flex-row gap-5 md:w-full lg:w-3/5'>
        <div>
          <div>
            <span className="font-bold">Nível: </span>
            <span>{seniority}</span>
          </div>
          <div>
            <span className="font-bold">Salário: </span>
            <span>R${salary}</span>
          </div>
          <div>
            <span className="font-bold">Regime: </span>
            <span>{scheme}</span>
          </div>
          <div>
            <span className="font-bold">Local: </span>
            <span>{location}</span>
          </div>
          <div>
            <span className="font-bold">Horário: </span>
            <span>{schedule}</span>
          </div>
          <div>
            <span className="font-bold">Benefícios: </span>
            <span>{benefits.join(', ')}</span>
          </div>
        </div>
        <Link to={`/jobs/${id}`} className='w-full md:w-fit md:flex md:items-end lg:items-center'>
          <Button className="w-full md:w-fit">
            Ver mais detalhes
          </Button>
        </Link>
      </div>
    </div>
  )
}