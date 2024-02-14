import React from 'react'

import profile from '../images/perfil_img.png';
import logo from '../images/logo_ilustration.png';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row gap-2'>

      <div className='w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center bg-[#9336B4] border border-white rounded-[30px]
                      animate-fade-up animate-duration-[1200ms] animate-delay-[800ms] animate-ease-in animate-normal animate-fill-forwards
                      hover:animate-pulse hover:ease-in-out hover:animate-delay-[0ms]'>

        <img src={logo} alt="logo" className='w-[250px] object-cover'/>

      </div>

      <div className='p-2 md:p-4 flex flex-col gap-4 md:gap-6 sm:flex-row-reverse justify-center items-center bg-gradient-black border border-white rounded-[30px]
                      animate-fade-up animate-duration-[1200ms] animate-delay-[600ms] animate-ease-in animate-normal animate-fill-forwards'>

        <img src={profile} alt="profile" className='w-[300px] md:w-[350px] object-cover'/>

        <p className='text-sm md:text-md p-4'>
          Soy Gianmarco, entuciasta de la tecnologia 💻 y 
          aficionado al mundo de las artes plasticas 🎨. 
          Cuando no estoy desarrollando acompañado de una 
          tasa de cafe 🍵, estoy sobre un skate recorriendo 
          las calles y practicando trucos 🛹.
        </p>

      </div>

    </section>
  )
}

export default About