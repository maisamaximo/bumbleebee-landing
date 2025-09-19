import React from 'react'
import HoneyCell from './HoneyCell'

export default function Hero(){
  return (
    <header className="hero" id="topo">
      <div className="honey">
        <HoneyCell style={{left:'8%', top:'14%'}}/>
        <HoneyCell style={{left:'22%', top:'36%'}}/>
        <HoneyCell style={{right:'14%', top:'22%'}}/>
        <HoneyCell style={{right:'8%', top:'48%'}}/>
      </div>

      <div className="container hero-grid">
        <div>
          <div className="overline" id="sobre">Por que escolher a Bumblebee?</div>
          <h1>Campervan compacta, doce e pronta pra estrada.</h1>
          <p>Espaço otimizado, conforto artesanal e autonomia para você viajar leve.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contato">Quero reservar</a>
            <a className="btn btn-ghost" href="#layouts">Conhecer a Bumblebee</a>
          </div>
        </div>
        <div>
          <div className="card" style={{padding:0, overflow:'hidden'}}>
            {/* placeholder de imagem (pode trocar por foto do veículo) */}
            <div style={{aspectRatio:'4/3', background:'#fff', display:'grid', placeItems:'center'}}>
              <span style={{opacity:.7}}>Imagem da Bumblebee</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
