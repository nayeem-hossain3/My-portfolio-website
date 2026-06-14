import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
function App() {
  

  return (
   <section className='min-h-screen bg-gradient-to-br from-[#0C0614] via-[#140C24] to-[#1F0B38] text-white'>
   <Navbar/>
   <div className='pt-30'></div>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Services/>
   <Contact/>
   <Footer/>

   </section>
  )
}

export default App
