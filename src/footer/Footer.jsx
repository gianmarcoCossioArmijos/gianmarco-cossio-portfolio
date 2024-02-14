import React from 'react'

import logo from '../images/logo_blanco.png'

const Footer = () => {
  return (
    <section className='w-full h-[100px] flex justify-center items-center gap-4 bg-backgroundArt bg-cover'>

        <img src={logo} alt='logo' className='w-[30px] h-[30px]'/>

        <p className='text-center'>
            Hecho por Gianmarco Cossio - 2024
        </p>

    </section>
  )
}

export default Footer