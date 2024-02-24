import React from 'react'
import { useSelector  } from "react-redux"

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

import {SKILLS_TITLE_EN, SKILLS_TITLE_ES} from '../constants';
import {SKILLS_DESC_EN, SKILLS_DESC_ES} from '../constants';
import {SKILLS_BD_EN, SKILLS_BD_ES} from '../constants';
import {SKILLS_CONTACT_EN, SKILLS_CONTACT_ES} from '../constants';
import {SKILLS_DARK, SKILLS_LIGHT} from '../constants';
import {SKILLS_DIVISION_DARK, SKILLS_DIVISION_LIGHT} from '../constants';
import {SKILLS_TITLE_DARK, SKILLS_TITLE_LIGHT} from '../constants';
import {SKILLS_ICONS_DARK, SKILLS_ICONS_LIGHT} from '../constants';
import {SKILLS_ICON_DARK, SKILLS_ICON_LIGHT} from '../constants';

const Skills = () => {

  const lang = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  return (
    <section id='skills' className={ theme == "dark" ? SKILLS_DARK : SKILLS_LIGHT }>

        <div className={ theme == "dark" ? SKILLS_DIVISION_DARK : SKILLS_DIVISION_LIGHT }>

          <h4 className={ theme == "dark" ? SKILLS_TITLE_DARK : SKILLS_TITLE_LIGHT }>
            { lang == "es" ? SKILLS_TITLE_ES : SKILLS_TITLE_EN }
          </h4>

          <p className='pt-4 sm:pt-8 md:pb-4 text-sm md:text-md'>
            { lang == "es" ? SKILLS_DESC_ES : SKILLS_DESC_EN }
            <br />

            { lang == "es" ? SKILLS_BD_ES : SKILLS_BD_EN }
            <br />

            { lang == "es" ? SKILLS_CONTACT_ES: SKILLS_CONTACT_EN }
            <a className='w-fit px-2 font-bold text-lg text-[#9336B4] hover:opacity-80'
               href="https://www.linkedin.com/in/gianmarco-armijos-cossio-1a3b02296"
               target='blank'>
                Linkedin
            </a>
          </p>

        </div>

        <div className={ theme == "dark" ? SKILLS_ICONS_DARK : SKILLS_ICONS_LIGHT }>

          <IoLogoHtml5 className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <IoLogoCss3 className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <IoLogoSass className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <BiLogoJava className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <BiLogoSpringBoot className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiHibernate className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiMysql className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <FaGitAlt className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <GrGithub className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <IoLogoJavascript className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <IoLogoReact className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <BiLogoFirebase className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiRedux className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <BiLogoTailwindCss className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiVite className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <BiLogoPostgresql className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiPython className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiFlask className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <DiDjango className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiSwagger className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiThymeleaf className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiMicrosoftsqlserver className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiBootstrap className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>
          <SiPostman className={ theme == "dark" ? SKILLS_ICON_DARK : SKILLS_ICON_LIGHT}/>

        </div>

    </section>
  )
}

export default Skills