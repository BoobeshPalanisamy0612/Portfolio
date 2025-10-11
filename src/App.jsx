import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Projects from './Components/Project/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App