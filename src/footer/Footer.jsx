import React from 'react'
import { useSelector  } from "react-redux"

import logoLight from '../images/logo_blanco.png'
import logoDark from '../images/logo_black.png'
import {FOOTER_ES, FOOTER_EN} from '../constants'

const Footer = () => {

  const lang = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  return (
    <section className='w-full h-[100px] flex justify-center items-center gap-4 bg-backgroundArt bg-cover'>

        <img src={ theme == "dark" ? logoLight : logoDark } alt='logo' className='w-[30px] h-[30px]'/>

        <p className='text-center text-sm'>
            { lang == "es" ? FOOTER_ES : FOOTER_EN }
        </p>

    </section>
  )
}

export default Footer