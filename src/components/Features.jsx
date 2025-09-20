import React from 'react';
import { useTranslation } from 'react-i18next';
import { LuSparkles, LuBattery, LuHammer, LuLifeBuoy } from 'react-icons/lu';

export default function Features(){
  const { t } = useTranslation();

  // Ícones fixos, na ordem desejada
  const baseWithIcons = [
    { icon: <LuSparkles/> },
    { icon: <LuBattery/>  },
    { icon: <LuHammer/>   },
    { icon: <LuLifeBuoy/> }
  ];

  // Fallback em PT caso o JSON não exista
  const fallbackItems = [
    { title:'Layout “favo” eficiente', desc:'Planta inteligente que aproveita cada centímetro.' },
    { title:'Autonomia doce',          desc:'Energia, água e cozimento pensados pra viajar leve.' },
    { title:'Acabamento artesanal',    desc:'Materiais quentes e feitos à mão.' },
    { title:'Suporte que não some',    desc:'A gente te acompanha antes, durante e depois.' }
  ];

  // Textos do arquivo de tradução
  const overline = t('features.overline', 'Por que a Bumblebee?');
  const title    = t('features.title',    'Compacta, inteligente, pronta.');
  const trItems  = t('features.items', { returnObjects: true, defaultValue: fallbackItems });

  // Mescla ícones fixos + textos traduzidos por índice
  const list = (Array.isArray(trItems) && trItems.length ? trItems : fallbackItems)
    .map((it, i) => ({ ...baseWithIcons[i % baseWithIcons.length], ...it }));

  return (
    <section aria-labelledby="features-title">
      <div className="container">
        <div className="overline">{overline}</div>
        <h2 id="features-title">{title}</h2>

        <div className="features">
          {list.map((it, i)=>(
            <div key={i} className="card" style={{display:'grid', gap:6}}>
              <div style={{fontSize:24, color:'var(--honey)'}}>{it.icon}</div>
              <h3>{it.title}</h3>
              <p style={{opacity:.9}}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
