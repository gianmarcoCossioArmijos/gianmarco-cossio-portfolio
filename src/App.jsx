import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Navigator from '../src/header/Navigator'
import Hero from '../src/hero/Hero'
import BackgroundArt from '../src/hero/BackgroundArt'
import About from './hero/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Footer from './footer/Footer'

import {GLOBAL_LIGHT, GLOBAL_DARK} from '../src/constants'

function App() {
  const [language, setLanguage] = useState("es");
  const [theme, setTheme] = useState("dark");

  const currentTheme = useSelector((state) => state.theme);

  useEffect(() => {

    localStorage.setItem("language", language);
    localStorage.setItem("theme", theme);
  }, [])

  return (
      <main className={ currentTheme == 'dark' ? GLOBAL_DARK : GLOBAL_LIGHT }>

        <Navigator />

        <Hero />

        <About />

        <BackgroundArt />

        <Skills />

        <br />

        <Projects />

        <Footer />

      </main>
  )
}

export default App
