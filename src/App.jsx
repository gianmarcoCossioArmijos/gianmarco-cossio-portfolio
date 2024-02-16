import Navigator from '../src/header/Navigator'
import Hero from '../src/hero/Hero'
import BackgroundArt from '../src/hero/BackgroundArt'
import About from './hero/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Footer from './footer/Footer'
import Button from './buttom/Button'

function App() {

  return (
    <main className='cursor-default w-full min-h-screen p-4 flex flex-col gap-2 bg-[#010101] font-mono text-white relative'>

      <Button />

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
