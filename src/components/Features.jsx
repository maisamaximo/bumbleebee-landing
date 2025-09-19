import React from 'react'
import { LuSparkles, LuBattery, LuHammer, LuLifeBuoy } from 'react-icons/lu'

const items = [
  {icon:<LuSparkles/>, title:'Layout “favo” eficiente', desc:'Planta inteligente que aproveita cada centímetro.'},
  {icon:<LuBattery/>,  title:'Autonomia doce',          desc:'Energia, água e cozimento pensados pra viajar leve.'},
  {icon:<LuHammer/>,   title:'Acabamento artesanal',     desc:'Materiais quentes e feitos à mão.'},
  {icon:<LuLifeBuoy/>, title:'Suporte que não some',     desc:'A gente te acompanha antes, durante e depois.'},
]

export default function Features(){
  return (
    <section aria-labelledby="features-title">
      <div className="container">
        <div className="overline">Por que a Bumblebee?</div>
        <h2 id="features-title">Compacta, inteligente, pronta.</h2>

        <div className="features">
          {items.map((it, i)=>(
            <div key={i} className="card" style={{display:'grid', gap:6}}>
              <div style={{fontSize:24, color:'var(--honey)'}}>{it.icon}</div>
              <h3>{it.title}</h3>
              <p style={{opacity:.9}}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
