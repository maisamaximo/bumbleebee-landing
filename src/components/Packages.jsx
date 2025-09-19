import React from 'react'
import BeeIcon from './BeeIcon'

const packs = [
  {
    name:'Essencial',
    bullets:['Cama/baú modular','Cozinha traseira básica','Elétrica 12V simples'],
    price:'a partir de R$ XX.XXX'
  },
  {
    name:'Trilhas',
    bullets:['Suspensão elevada','Autonomia elétrica+solar','Revestimento resistente'],
    price:'a partir de R$ XX.XXX'
  },
  {
    name:'Longa viagem',
    bullets:['Água pressurizada quente','Isolamento térmico premium','Armazenamento máximo'],
    price:'a partir de R$ XX.XXX'
  }
]

export default function Packages(){
  return (
    <section id="layouts" aria-labelledby="packs-title">
      <div className="container">
        <h2 id="packs-title">Do seu jeito</h2>
        <div className="pack-cards">
          {packs.map((p,i)=>(
            <div key={i} className="card">
              <h3>{p.name}</h3>
              <div className="pack-price">{p.price}</div>
              <ul className="pack-ul">
                {p.bullets.map((b,idx)=>(
                  <li key={idx}><BeeIcon/> <span>{b}</span></li>
                ))}
              </ul>
              <div style={{marginTop:14}}>
                <a className="btn btn-primary" href="#contato">Reservar</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
