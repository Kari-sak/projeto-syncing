import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'

import IBMLogoImg from '../../../assets/ibm-logo.png'
import FIAPLogoImg from '../../../assets/fiap-logo.png'
import MicrosoftLogoImg from '../../../assets/microsoft-logo.png'
import AluraLogoImg from '../../../assets/alura-logo.png'

export function Carousel() {
  return(
    <Swiper
      modules={[Pagination]} 
      slidesPerView={1}
      spaceBetween={10} 
      pagination={{clickable: true}}
      breakpoints={{
        1024: {
          slidesPerView: 2,
          spaceBetween: 32
        }
      }}
      className="max-w-6xl w-full"
    >
      <SwiperSlide>
        <div className='py-16 px-4'>
          <blockquote className='p-8 shadow-lg'>
            <p className='mb-6 indent-10 text-purple-700'>
              <span className='absolute left-6 top-20 text-purple-300 font-cite text-5xl'>“</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ipsam eligendi eaque minus voluptatum labore error, earum esse alias nam eum distinctio nostrum mollitia repellendus porro harum. Quos, corporis dolorem.
            </p>
            <img 
              src={IBMLogoImg} 
              alt="Logo da IBM. IBM escrito em azul com faixas horizontais brancas cortando as letras"
              className='w-auto h-12'
            />
          </blockquote>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='py-16 px-4'>
          <blockquote className='p-8 shadow-lg'>
            <p className='mb-6 indent-10 text-purple-700'>
              <span className='absolute left-6 top-20 text-purple-300 font-cite text-5xl'>“</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ipsam eligendi eaque minus voluptatum labore error, earum esse alias nam eum distinctio nostrum mollitia repellendus porro harum. Quos, corporis dolorem.
            </p>
            <img 
              src={FIAPLogoImg} 
              alt="Logo da IBM. IBM escrito em azul com faixas horizontais brancas cortando as letras"
              className='w-auto h-12'
            />
          </blockquote>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='py-16 px-4'>
          <blockquote className='p-8 shadow-lg'>
            <p className='mb-6 indent-10 text-purple-700'>
              <span className='absolute left-6 top-20 text-purple-300 font-cite text-5xl'>“</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ipsam eligendi eaque minus voluptatum labore error, earum esse alias nam eum distinctio nostrum mollitia repellendus porro harum. Quos, corporis dolorem.
            </p>
            <img 
              src={MicrosoftLogoImg} 
              alt="Logo da IBM. IBM escrito em azul com faixas horizontais brancas cortando as letras"
              className='w-auto h-12'
            />
          </blockquote>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='py-16 px-4'>
          <blockquote className='p-8 shadow-lg'>
            <p className='mb-6 indent-10 text-purple-700'>
              <span className='absolute left-6 top-20 text-purple-300 font-cite text-5xl'>“</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ipsam eligendi eaque minus voluptatum labore error, earum esse alias nam eum distinctio nostrum mollitia repellendus porro harum. Quos, corporis dolorem.
            </p>
            <img 
              src={AluraLogoImg} 
              alt="Logo da IBM. IBM escrito em azul com faixas horizontais brancas cortando as letras"
              className='w-auto h-12'
            />
          </blockquote>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}