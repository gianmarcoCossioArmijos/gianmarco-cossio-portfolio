import React from 'react'

import keysaver from '../images/keysaver_card.png';
import tresenraya from '../images/tresenraya_card.png';
import dengue from '../images/dengue_card.png';
import biblioteca from '../images/api-biblioteca.png';
import library from '../images/online-library.png';
import cursos from '../images/cursos-virtuales.png';
import seguridad from '../images/jaen-seguro.png';

import { FaRegEye } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <section id='projects' className='p-4 flex flex-col sm:flex-row flex-wrap sm:justify-evenly gap-4 border border-white rounded-[30px]'>

        <h4 className='w-full my-4 pt-2 pl-2 font-futurespore bg-[#9336B4] text-xl text-center border border-white rounded-full'>
            Proyectos
        </h4>

        <article className='w-full sm:w-[300px] rounded-lg border border-white relative'>
            <img src={keysaver}
                 alt="keysaver"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Keysaver
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    Web MVC generadora de contraseñas seguras, 
                    y minisistema gestor de contraseñas. Metodos 
                    CRUD para las contraseñas, y metodos para 
                    crear y editar usuarios.
                </p>

                <p className='py-2 text-xs sm:text-sm'>
                    Java / Servlets / JSP / JSTL / MySQL / Tailwind
                </p>

                <div className='py-4 flex justify-center gap-4'>
                    <a  href='https://github.com/gianmarcoCossioArmijos/Key-Saver'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <AiFillGithub className='w-[40px] h-[40px]'/>
                    </a>

                    {/* <a  href=''
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <FaRegEye className='w-[40px] h-[40px]'/>
                    </a> */}
                </div>
            </div>
        </article>

        <article className='w-full sm:w-[300px] rounded-lg border border-white relative'>
            <img src={tresenraya}
                 alt="tresenraya"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Tres en Raya
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    Juego MVC tres en raya o tic tac toe para dos jugadores.
                </p>

                <p className='py-2 text-xs sm:text-sm'>
                    Java / Spring / JSP / JSTL
                </p>

                <div className='py-4 flex justify-center gap-4'>
                    <a  href='https://github.com/gianmarcoCossioArmijos/tresenraya'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <AiFillGithub className='w-[40px] h-[40px]'/>
                    </a>

                    {/* <a  href=''
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <FaRegEye className='w-[40px] h-[40px]'/>
                    </a> */}
                </div>
            </div>
        </article>

        <article className='w-full sm:w-[300px] rounded-lg border border-white relative'>
            <img src={dengue}
                 alt="dengue"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Casos de Dengue
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    Web MVC de reporte de casos Dengue. Muestra los 
                    casos globales, y por distrito, que estan 
                    divididos en graves, con sintomas, 
                    sin sintomas y fallecidos. Tambien cuenta con 
                    un test rapido de Dengue.
                </p>

                <p className='py-2 text-xs sm:text-sm'>
                    Java / Spring / Spring Boot / Hybernate / Thymeleaf / SASS / MySQL
                </p>

                <div className='py-2 flex justify-center gap-4'>
                    <a  href='https://github.com/gianmarcoCossioArmijos/dengue/tree/main'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <AiFillGithub className='w-[40px] h-[40px]'/>
                    </a>

                    {/* <a  href=''
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <FaRegEye className='w-[40px] h-[40px]'/>
                    </a> */}
                </div>
            </div>
        </article>

        <article className='w-full sm:w-[300px] rounded-lg border border-white relative'>
            <img src={biblioteca}
                 alt="biblioteca"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Biblioteca App
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    Web de biblioteca virtual consumiendo Api de 
                    Google Books, la cual busca los textos de 
                    acuerdo al titulo
                </p>

                <p className='py-2 text-xs sm:text-sm'>
                    HTML / Tailwind / Javascript
                </p>

                <div className='py-2 flex justify-center gap-4'>
                    <a  href='https://github.com/gianmarcoCossioArmijos/Biblioteca-App-JS'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <AiFillGithub className='w-[40px] h-[40px]'/>
                    </a>

                    {/* <a  href=''
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <FaRegEye className='w-[40px] h-[40px]'/>
                    </a> */}
                </div>
            </div>
        </article>

        <article className='w-full sm:w-[300px] rounded-lg border border-white relative'>
            <img src={library}
                 alt="library"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Online Library
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    Biblioteca Virtual con cuatro secciones 
                    de textos, buscador de textos por titulo, 
                    detalles, y enlace a lectura. Ademas 
                    seccion de administracion, con CRUDs.
                </p>

                <p className='py-2 text-xs sm:text-sm'>
                    React / Tailwind / Redux / React Router / firebase / Vite
                </p>

                <div className='py-2 flex justify-center gap-4'>
                    <a  href='https://github.com/gianmarcoCossioArmijos/online-library'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <AiFillGithub className='w-[40px] h-[40px]'/>
                    </a>

                    <a  href='https://gianmarco-online-library.vercel.app/'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <FaRegEye className='w-[40px] h-[40px]'/>
                    </a>
                </div>
            </div>
        </article>

        <article className='w-full sm:w-[300px] rounded-lg border border-white relative'>
            <img src={cursos}
                 alt="cursos"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Cursos Virtuales
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    Proyecto freelance de Web de Cursos Virtuales. 
                    Contiene CRUDs de administracion de textos y usuarios, 
                    Reproductor de cursos, buscador por titulo y compra
                    de cursos.
                </p>

                <p className='py-2 text-xs sm:text-sm'>
                    React / Tailwind / Redux / React Router / firebase / Vite
                </p>

                <div className='py-2 flex justify-center gap-4'>
                    <a  href='https://github.com/gianmarcoCossioArmijos/cursos-virtuales'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <AiFillGithub className='w-[40px] h-[40px]'/>
                    </a>

                    <a  href='https://cursos-virtuales.vercel.app/'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <FaRegEye className='w-[40px] h-[40px]'/>
                    </a>
                </div>
            </div>
        </article>

        <article className='w-full sm:w-[300px] rounded-lg border border-white relative'>
            <img src={seguridad}
                 alt="seguridad"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Jaen Seguro
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    Aplicacion web de denuncias de seguridad 
                    ciudadana. Cuenta con CRUDs de Usuarios, 
                    vehiculos, unidades, noticias y denuncias.
                </p>

                <p className='py-2 text-xs sm:text-sm'>
                    Python / Flask / Flask SQLAlchemy /
                     / Flask Mail / PostgreSQL / SQLAlquemy Mixins
                     / React / Tailwind / Redux / React Router
                </p>

                <div className='py-2 flex justify-center gap-4'>
                    <a  href='https://github.com/gianmarcoCossioArmijos/api-rest-seguridad-app'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <AiFillGithub className='w-[40px] h-[40px]'/>
                    </a>

                    {/* <a  href='https://cursos-virtuales.vercel.app/'
                        target='blank'
                        className='text-[#9336B4] hover:opacity-70'>
                        <FaRegEye className='w-[40px] h-[40px]'/>
                    </a> */}
                </div>
            </div>
        </article>

    </section>
  )
}

export default Projects