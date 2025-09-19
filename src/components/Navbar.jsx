import React from 'react'

export default function Navbar({ scrolled }){
  return (
    <nav className={`nav ${scrolled ? 'scrolled':''}`}>
      <div className="container nav-inner">
        <div className="nav-left">
          <div className="logo">Bumble<span className="bee">bee</span></div>
        </div>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <a href="#sobre" className="btn btn-ghost">Sobre</a>
          <a href="#layouts" className="btn btn-ghost">Layouts</a>
          <a href="#galeria" className="btn btn-ghost">Galeria</a>
          <a href="#contato" className="btn btn-ghost">Contato</a>
          <a href="#contato" className="btn btn-primary">Reservar</a>
        </div>
      </div>
    </nav>
  )
}
