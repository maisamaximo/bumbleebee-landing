import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="container footer-grid">
        <div style={{fontWeight:800}}>Bumble<span style={{color:'var(--honey)'}}>bee</span></div>

        <div style={{display:'flex', gap:14}}>
          <a href="#sobre">Sobre</a>
          <a href="#layouts">Layouts</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </div>

        <div style={{display:'flex', gap:14}}>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
          <a href="mailto:oi@bumblebee.van">oi@bumblebee.van</a>
        </div>
      </div>
      <div className="container" style={{opacity:.7, fontSize:13, marginTop:16}}>
        <hr className="hr"/>
        © {new Date().getFullYear()} Bumblebee — linha fina com rgba(239,172,0,.3)
      </div>
    </footer>
  )
}
