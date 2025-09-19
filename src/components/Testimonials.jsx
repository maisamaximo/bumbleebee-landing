import React from 'react'

const data = [
  {name:'Marina S.', city:'Curitiba', quote:'Pequena por fora, enorme por dentro. Experiência doce mesmo!', stars:5},
  {name:'Otávio R.', city:'Floripa',  quote:'Layout favo é genial. Tudo no lugar certinho.', stars:5},
  {name:'Letícia P.',city:'São Paulo',quote:'Atendimento que acompanha a viagem inteira.', stars:5},
]

function Stars({n=5}){
  return <span style={{color:'var(--honey)'}}>{'★'.repeat(n)}</span>
}

export default function Testimonials(){
  return (
    <section aria-labelledby="testi-title">
      <div className="container">
        <h2 id="testi-title">Quem já foi, recomenda</h2>
        <div className="testis" style={{marginTop:12}}>
          {data.map((t,i)=>(
            <div key={i} className="card">
              <div style={{display:'flex', alignItems:'center', gap:10}}>
                <div style={{width:40, height:40, borderRadius:'50%', background:'#00000010'}}/>
                <div>
                  <strong>{t.name}</strong>
                  <div style={{fontSize:12, opacity:.8}}>{t.city}</div>
                </div>
                <div style={{marginLeft:'auto'}}><Stars n={t.stars}/></div>
              </div>
              <p>“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
