import React, { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)

  function onSubmit(e){
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <section id="contato" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Fale com a gente</h2>
        {sent && (
          <div className="card" style={{borderStyle:'solid', borderColor:'rgba(239,172,0,.6)'}}>
            Obrigado! Entraremos em contato 🍯
          </div>
        )}
        <form onSubmit={onSubmit} style={{marginTop:12}}>
          <input required placeholder="Seu nome" name="name"/>
          <input required type="email" placeholder="Seu e-mail" name="email"/>
          <textarea required placeholder="Sua mensagem" name="message"/>
          <label style={{fontSize:14}}>
            <input type="checkbox" required style={{marginRight:8}}/>
            Aceito ser contatado(a) sobre a Bumblebee.
          </label>
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}
