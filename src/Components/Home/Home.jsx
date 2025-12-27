// Components/Home/Home.jsx
import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import MyWork from '../MyWork/MyWork'
import Contact from '../Contact/Contact'
import LogoSlider from '../LogoSlider/LogoSlider'

function Home() {
  return (
    <>
      <Hero/>
      <About/>
       <LogoSlider/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer />
    </>
  )
}

export default Home