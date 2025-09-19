import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <>
      <Navbar scrolled={scrolled}/>
      <main>
        <Hero />
        <Features />
        <Packages />
        <Gallery />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
