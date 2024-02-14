import React from 'react'

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoSass } from "react-icons/io5";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiHibernate } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoFirebase } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiVite } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPython } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiSwagger } from "react-icons/si";
import { SiThymeleaf } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id='skills' className='p-4 md:p-8 flex flex-col md:flex-row justify-center items-center bg-gradient-black border border-white rounded-[30px]'>

        <div className='pb-8 pt-4 px-4 flex flex-col justify-center border-b md:border-none border-white'>

          <h4 className='w-full pt-2 pl-2 font-futurespore bg-[#9336B4] text-xl text-center border border-white rounded-full'>
              Habilidades
          </h4>

          <p className='pt-4 sm:pt-8 md:pb-4 text-sm md:text-md'>
            Cuento con experiencia desarrollando APIs REST, 
            con tecnologias como Spring, Flask y Django, utilizando
            ORMs o querys. Por el lado del frontend trabajo 
            consumiendo APIS con React y sus librerias relacionadas. 
            Para estilizar uso Tailwind, o CSS y SASS.
            <br />

            En base de Datos manejo MySQL, SQLServer, Postgres e Informix.
            Ademas de herramientas de diseño grafico como Photoshop 
            e Illustrator.
            <br />

            Si deseas mas informacion puedes contactarme a traves de
            <a className='w-fit px-2 font-bold text-lg text-[#9336B4] hover:opacity-80'
               href="https://www.linkedin.com/in/marco-cossio-1a3b02296"
               target='blank'>
                Linkedin
            </a>
          </p>

        </div>

        <div className='pt-8 pb-4 px-4 flex flex-row flex-wrap gap-2 justify-between md:border-l md:border-white'>

          <IoLogoHtml5 className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <IoLogoCss3 className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <IoLogoSass className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <BiLogoJava className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <BiLogoSpringBoot className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiHibernate className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiMysql className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <FaGitAlt className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <GrGithub className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <IoLogoJavascript className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <IoLogoReact className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <BiLogoFirebase className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiRedux className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <BiLogoTailwindCss className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiVite className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <BiLogoPostgresql className='w-[80px] h-[80px] sm:w-[90px] lg:w-[110px] lg:h-[110px] sm:h-[90px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiPython className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiFlask className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <DiDjango className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiSwagger className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiThymeleaf className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiMicrosoftsqlserver className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiBootstrap className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>
          <SiPostman className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] p-4 bg-white/5 order border-white rounded-lg'/>

        </div>

    </section>
  )
}

export default Skills