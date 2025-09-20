import React, { useEffect, useState } from 'react';

// IMPORTS dos seus componentes (sem alterar nada neles)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Features from './components/Features';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './i18n';
import Seo from './components/Seo'

// IMPORT do CSS global
import './styles.css';

export default function App(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // versão suave + performática (sem mudar comportamento)
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll(); // estado inicial
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Seo />
        <Hero />
        <About /> 
        <Features />
        <Packages />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
