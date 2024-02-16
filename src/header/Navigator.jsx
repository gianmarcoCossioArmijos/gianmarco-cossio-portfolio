import React from 'react'
import logo from '../images/logo_blanco.png'

import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Navigator = () => {
  return (
    <nav className='w-full text-sm md:text-md flex flex-wrap justify-between'>

      <section className='w-full md:w-3/4 p-3 flex gap-4 bg-gradient-black border border-white rounded-full'>
        <img src={logo} alt='logo' className='w-[30px] h-[30px]'/>

        <div className='w-full flex gap-4 justify-center items-center'>
          <a href="#" className='hover:text-[#9336B4] cursor-pointer'>home</a>
          <a href="#skills" className='hover:text-[#9336B4]'>skills</a>
          <a href="#projects" className='hover:text-[#9336B4]'>projects</a>
        </div>
      </section>
        
      <div className='w-full md:w-1/4 p-3 flex justify-end gap-4 bg-[#9336B4] rounded-full'>
        <a href="https://www.linkedin.com/in/marco-cossio-1a3b02296"
           target='blank'
           className='hover:opacity-80'>
          <SiLinkedin className='w-[30px] h-[30px]'/>
        </a>

        <a href="https://github.com/gianmarcoCossioArmijos"
           target='blank'
           className='hover:opacity-80'>
          <AiFillGithub className='w-[30px] h-[30px]'/>
        </a>
      </div>
    
    </nav>
  )
}

export default Navigator