import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FinalCTA(){
  const { t } = useTranslation();

  return (
    <section aria-labelledby="cta-title">
      <div className="container">
        <div className="card" style={{background:'var(--cream)'}}>
          <h2 id="cta-title">{t('finalCta.title', 'Pronto para partir?')}</h2>
          <p style={{marginTop:-6}}>
            {t('finalCta.subtitle', 'Reserve sua data e a gente cuida do resto.')}
          </p>
          <a className="btn btn-primary" href="#contato">
            {t('finalCta.button', 'Reservar minha data')}
          </a>
        </div>
      </div>
    </section>
  );
}
