import React from 'react'

export default function Gallery(){
  return (
    <section id="galeria" aria-labelledby="gal-title">
      <div className="container">
        <h2 id="gal-title">Galeria</h2>
        <p style={{marginTop:-6, opacity:.85}}>Sem fotos ainda? Use estes placeholders e troque depois.</p>
        <div className="gallery" style={{marginTop:16}}>
          {Array.from({length:8}).map((_,i)=>(
            <div key={i} className="ph"/>
          ))}
        </div>
      </div>
    </section>
  )
}
