import React from 'react'

export default function FinalCTA(){
  return (
    <section aria-labelledby="cta-title">
      <div className="container">
        <div className="card" style={{background:'var(--cream)'}}>
          <h2 id="cta-title">Pronto para partir?</h2>
          <p style={{marginTop:-6}}>Reserve sua data e a gente cuida do resto.</p>
          <a className="btn btn-primary" href="#contato">Reservar minha data</a>
        </div>
      </div>
    </section>
  )
}
