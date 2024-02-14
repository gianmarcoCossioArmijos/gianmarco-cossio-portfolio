import React from 'react'

import logo from '../images/logo_blanco.png';

const Logo = () => {
  return (
    <section className='w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center border border-white rounded-[30px]'>

        <img src={logo} alt="logo" className='object-cover'/>

    </section>
  )
}

export default Logo