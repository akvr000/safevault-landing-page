import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import LogoSlider from './components/LogoSlider/LogoSlider.jsx'
import Features from './components/Features/Features.jsx'
import Steps from './components/Steps/Steps.jsx'
import Footer from './components/Footer/Footer.jsx'
import JoinUs from './components/JoinUs/JoinUs.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Testimonial from './components/Testimonials/Testimonial.jsx'


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <LogoSlider/>
        <Features/>
        <Steps/>
        <Testimonial/>
        <Pricing/>
        <FAQ/>
        <JoinUs/>
        <Footer/>
      </main>
    </>
  )
}

export default App
