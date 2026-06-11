import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Footer/>
      </main>
    </>
  )
}

export default App
