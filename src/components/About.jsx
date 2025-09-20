import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About(){
  const { t } = useTranslation();

  const intro = t('about.intro', { returnObjects: true, defaultValue: [] });
  const paragraphs = t('about.paragraphs', { returnObjects: true, defaultValue: [] });
  const extras = t('about.extras.items', { returnObjects: true, defaultValue: [] });

  return (
    <section id="sobre" aria-labelledby="about-title">
      <div className="container">
        <div className="overline">{t('about.overline', 'Sobre nós')}</div>
        <h2 id="about-title">{t('about.title', 'Conheça a Bumblebee')}</h2>

        {/* Intro (pode ter linhas com emojis, etc.) */}
        {Array.isArray(intro) && intro.length > 0 && (
          <div style={{marginTop: 8}}>
            {intro.map((line, i) => (
              <p key={i} style={{margin: '8px 0'}}>{line}</p>
            ))}
          </div>
        )}

        {/* Texto principal */}
        {Array.isArray(paragraphs) && paragraphs.length > 0 && (
          <div className="card" style={{marginTop:16}}>
            {paragraphs.map((p, i) => (
              <p key={i} style={{margin: i ? '10px 0 0' : '0'}}>{p}</p>
            ))}
          </div>
        )}

        {/* Extras */}
        <div className="card" style={{marginTop:16}}>
          <h3 style={{margin:0}}>{t('about.extras.title', 'Extras que adoçam a viagem')}</h3>
          <ul style={{margin:'10px 0 0', paddingLeft: '1.2rem', display:'grid', gap:6}}>
            {Array.isArray(extras) && extras.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Fechamento / convite */}
        <p style={{marginTop:16, fontWeight:600}}>
          {t('about.outro', 'Prontx para rodar a ilha comigo?')}
        </p>
      </div>
    </section>
  );
}
