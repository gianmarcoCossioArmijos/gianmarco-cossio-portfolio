import React from 'react'
import { useSelector  } from "react-redux"

import profile from '../images/perfil_img.png';
import logo from '../images/logo_ilustration.png';

import {ABOUT_ES, ABOUT_EN} from '../constants';
import {LOGO_ABOUT_DARK, LOGO_ABOUT_LIGHT} from '../constants';
import {PROFILE_ABOUT_DARK, PROFILE_ABOUT_LIGHT} from '../constants';

const About = () => {

  const lang = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  return (
    <section className='flex flex-col md:flex-row gap-2'>

      <div className={ theme == "dark" ? LOGO_ABOUT_DARK : LOGO_ABOUT_LIGHT }>

        <img src={logo} alt="logo" className='w-[250px] object-cover'/>

      </div>

      <div className={ theme == "dark" ? PROFILE_ABOUT_DARK : PROFILE_ABOUT_LIGHT }>

        <img src={profile} alt="profile" className='w-[300px] md:w-[350px] object-cover'/>

        <p className='text-sm md:text-md p-4'>
          { lang == "es" ? ABOUT_ES : ABOUT_EN }
        </p>

      </div>

    </section>
  )
}

export default About