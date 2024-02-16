import React from 'react'
import { useSelector  } from "react-redux"

import keysaver from '../images/keysaver_card.png';
import tresenraya from '../images/tresenraya_card.png';
import dengue from '../images/dengue_card.png';
import biblioteca from '../images/api-biblioteca.png';
import library from '../images/online-library.png';
import cursos from '../images/cursos-virtuales.png';
import seguridad from '../images/jaen-seguro.png';

import { FaRegEye } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import {PROJECTS_KEYSAVER_ES, PROJECTS_KEYSAVER_EN} from '../constants'
import {PROJECTS_TITLE_EN, PROJECTS_TITLE_ES} from '../constants'
import {PROJECTS_TICTACTOE_TITLE_EN, PROJECTS_TICTACTOE_TILE_ES} from '../constants'
import {PROJECTS_TICTACTOE_ES, PROJECTS_TICTACTOE_EN} from '../constants'
import {PROJECTS_TITLE_DENGUE_ES, PROJECTS_TITLE_DENGUE_EN} from '../constants'
import {PROJECTS_DENGUE_ES, PROJECTS_DENGUE_EN} from '../constants'
import {PROJECTS_TITLE_BIBLIOTECA_ES, PROJECTS_TITLE_BIBLIOTECA_EN} from '../constants'
import {PROJECTS_BIBLIOTECA_ES, PROJECTS_BIBLIOTECA_EN} from '../constants'
import {PROJECTS_TITLE_LIBRARY_ES, PROJECTS_TITLE_LIBRARY_EN} from '../constants'
import {PROJECTS_LIBRARY_ES, PROJECTS_LIBRARY_EN} from '../constants'
import {PROJECTS_TITLE_CURSOS_ES, PROJECTS_TITLE_CURSOS_EN} from '../constants'
import {PROJECTS_CURSOS_ES, PROJECTS_CURSOS_EN} from '../constants'
import {PROJECTS_TITLE_SEGURIDAD_ES, PROJECTS_TITLE_SEGURIDAD_EN} from '../constants'
import {PROJECTS_SEGURIDAD_ES, PROJECTS_SEGURIDAD_EN} from '../constants';
import {PROJECTS_DARK, PROJECTS_LIGHT} from '../constants';
import {PROJECTS_TITLE_DARK, PROJECTS_TITLE_LIGHT} from '../constants';
import {PROJECTS_CARD_DARK, PROJECTS_CARD_LIGHT} from '../constants';

const Projects = () => {

    const lang = useSelector((state) => state.language);
    const theme = useSelector((state) => state.theme);

  return (
    <section id='projects' className={ theme == "dark" ? PROJECTS_DARK : PROJECTS_LIGHT }>

        <h4 className={ theme == "dark" ? PROJECTS_TITLE_DARK : PROJECTS_TITLE_LIGHT }>
            { lang == "es" ? PROJECTS_TITLE_ES : PROJECTS_TITLE_EN }
        </h4>

        <article className={ theme == "dark" ? PROJECTS_CARD_DARK : PROJECTS_CARD_LIGHT }>
            <img src={keysaver}
                 alt="keysaver"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    Keysaver
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    { lang == "es" ? PROJECTS_KEYSAVER_ES : PROJECTS_KEYSAVER_EN }
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

        <article className={ theme == "dark" ? PROJECTS_CARD_DARK : PROJECTS_CARD_LIGHT }>
            <img src={tresenraya}
                 alt="tresenraya"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    { lang == "es" ? PROJECTS_TICTACTOE_TILE_ES : PROJECTS_TICTACTOE_TITLE_EN }
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    { lang == "es" ? PROJECTS_TICTACTOE_ES : PROJECTS_TICTACTOE_EN }
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

        <article className={ theme == "dark" ? PROJECTS_CARD_DARK : PROJECTS_CARD_LIGHT }>
            <img src={dengue}
                 alt="dengue"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    { lang == "es" ? PROJECTS_TITLE_DENGUE_ES : PROJECTS_TITLE_DENGUE_EN }
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    { lang == "es" ? PROJECTS_DENGUE_ES: PROJECTS_DENGUE_EN }
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

        <article className={ theme == "dark" ? PROJECTS_CARD_DARK : PROJECTS_CARD_LIGHT }>
            <img src={biblioteca}
                 alt="biblioteca"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    { lang == "es" ? PROJECTS_TITLE_BIBLIOTECA_ES: PROJECTS_TITLE_BIBLIOTECA_EN }
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    { lang == "es" ? PROJECTS_BIBLIOTECA_ES: PROJECTS_BIBLIOTECA_EN }
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

        <article className={ theme == "dark" ? PROJECTS_CARD_DARK : PROJECTS_CARD_LIGHT }>
            <img src={library}
                 alt="library"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    { lang == "es" ? PROJECTS_TITLE_LIBRARY_ES: PROJECTS_TITLE_LIBRARY_EN }
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    { lang == "es" ? PROJECTS_LIBRARY_ES: PROJECTS_LIBRARY_EN }
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

        <article className={ theme == "dark" ? PROJECTS_CARD_DARK : PROJECTS_CARD_LIGHT }>
            <img src={cursos}
                 alt="cursos"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    { lang == "es" ? PROJECTS_TITLE_CURSOS_ES: PROJECTS_TITLE_CURSOS_EN }
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    { lang == "es" ? PROJECTS_CURSOS_ES: PROJECTS_CURSOS_EN }
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

        <article className={ theme == "dark" ? PROJECTS_CARD_DARK : PROJECTS_CARD_LIGHT }>
            <img src={seguridad}
                 alt="seguridad"
                 className='rounded-lg aspect-card sm:aspect-square-card object-cover object-top'/>

            <div className='p-4 absolute top-0 bottom-0 left-0 right-0 opacity-[0%] hover:opacity-[100%] hover:bg-black ease-out duration-500 rounded-lg'>
                <h6 className='py-2 text-md sm:text-lg font-bold text-[#9336B4] border-b border-white'>
                    { lang == "es" ? PROJECTS_TITLE_SEGURIDAD_ES: PROJECTS_TITLE_SEGURIDAD_EN }
                </h6>

                <p className='py-2 text-xs sm:text-sm text-[#808080]'>
                    { lang == "es" ? PROJECTS_SEGURIDAD_ES: PROJECTS_SEGURIDAD_EN }
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