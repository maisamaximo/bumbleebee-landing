import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery(){
  const { t } = useTranslation();

  return (
    <section id="galeria" aria-labelledby="gal-title">
      <div className="container">
        <h2 id="gal-title">{t('gallery.title', 'Galeria')}</h2>
        <p style={{marginTop:-6, opacity:.85}}>
          {t('gallery.subtitle', 'Sem fotos ainda? Use estes placeholders e troque depois.')}
        </p>
        <div className="gallery" style={{marginTop:16}}>
          {Array.from({length:8}).map((_,i)=>(
            <div key={i} className="ph"/>
          ))}
        </div>
      </div>
    </section>
  );
}
