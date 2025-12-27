import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './Components/MyWork/Portfolio'
import Resume from './Components/Resume/Resume'
import LogoSlider from './Components/LogoSlider/LogoSlider'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/show-portfolio' element={<Portfolio/>}/>
        <Route path='/show-resume' element={<Resume/>}/>
      </Routes>
    </div>
  )
}

// Separate HomePage component banayein
const HomePage = () => {
  return (
    <>
      <div id="home"><Hero/></div>
      <div id="about"><About/></div>
            <div id="logo-slider"><LogoSlider/></div>
      {/* <div id="services"><Services/></div> */}
      <div id="work"><MyWork/></div>
      <div id="contact"><Contact/></div>
      <Footer/>
    </>
  );
}

export default App