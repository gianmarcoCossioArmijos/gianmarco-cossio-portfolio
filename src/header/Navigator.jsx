import React from 'react'
import { useDispatch, useSelector  } from "react-redux"

import logoLight from '../images/logo_blanco.png'
import logoDark from '../images/logo_black.png'
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import  { NAV_BORDER_DARK, NAV_BORDER_LIGHT } from '../constants'
import { setLang } from '../store/language';
import { setTheme } from '../store/theme';

const Navigator = () => {

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  const onClickLanguage = () => {

    const currentLanguage = localStorage.getItem("language");

    if (currentLanguage == "es") {

      dispatch(setLang());
      localStorage.setItem("language", "en");
    }

    if (currentLanguage == "en") {

      dispatch(setLang());
      localStorage.setItem("language", "es");
    }
  }

  const onClickTheme = () => {

    const currentTheme= localStorage.getItem("theme");

    if (currentTheme == "dark") {

      dispatch(setTheme());
      localStorage.setItem("theme", "light");
    }

    if (currentTheme == "light") {

      dispatch(setTheme());
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <nav className='w-full text-sm md:text-md flex flex-wrap justify-between'>

      <section className={ theme == "dark" ? NAV_BORDER_DARK : NAV_BORDER_LIGHT }>
        <img src={ theme == "dark" ? logoLight : logoDark } alt='logo' className='w-[30px] h-[30px]'/>

        <div className='w-full flex gap-4 justify-center items-center font-semibold'>
          <a href="#" className='hover:text-[#9336B4] cursor-pointer'>home</a>
          <a href="#skills" className='hover:text-[#9336B4]'>skills</a>
          <a href="#projects" className='hover:text-[#9336B4]'>projects</a>
        </div>
      </section>
        
      <section className='w-full md:w-1/4 p-3 flex justify-between items-center gap-4 bg-[#9336B4] rounded-full'>

        <div className='w-1/2 flex gap-2 justify-start'>
          <button className='px-2 text-xl text-[#9336B4] bg-white rounded-full hover:opacity-80'
                  onClick={onClickTheme}>
            { theme == "dark" ?  <MdDarkMode id='icon' className='w-[30px] h-[30px] p-1'/> : <MdLightMode className='w-[30px] h-[30px] p-1'/> }
          </button>

          <button className='px-2 font-black text-xl text-[#9336B4] bg-white rounded-full hover:opacity-80'
                  onClick={onClickLanguage}>
            { lang == "es" ?  "ES" : "EN" }
          </button>
        </div>

        <div className='w-1/2 flex gap-2 justify-end text-white'>
          <a href="https://www.linkedin.com/in/gianmarco-armijos-cossio-1a3b02296"
            target='blank'
            className='hover:opacity-80'>
            <SiLinkedin id='icon' className='w-[30px] h-[30px]'/>
          </a>

          <a href="https://github.com/gianmarcoCossioArmijos"
            target='blank'
            className='hover:opacity-80'>
            <AiFillGithub id='icon' className='w-[30px] h-[30px]'/>
          </a>
        </div>
      </section>
    
    </nav>
  )
}

export default Navigator