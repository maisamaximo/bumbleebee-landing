import React from 'react';
import { useTranslation } from 'react-i18next';

function Stars({ n = 5 }) {
  const count = Number.isFinite(+n) ? Math.max(0, Math.min(5, +n)) : 5;
  return <span style={{ color: 'var(--honey)' }}>{'★'.repeat(count)}</span>;
}

export default function Testimonials() {
  const { t } = useTranslation();

  const title = t('testimonials.title', 'Depoimentos');

  // Pode vir como array OU como objeto { "0": {...}, "1": {...} }
  const raw = t('testimonials.items', { returnObjects: true, defaultValue: [] });
  const fromI18n = Array.isArray(raw) ? raw : Object.values(raw || {});

  const fallbackItem = {
    name: t('testimonials.fallback.name', 'Cliente'),
    city: t('testimonials.fallback.city', 'Sua cidade'),
    quote: t('testimonials.fallback.quote', 'Em breve, depoimentos reais por aqui.'),
    stars: 5,
  };

  const list = fromI18n.length ? fromI18n : [fallbackItem];

  return (
    <section aria-labelledby="testi-title">
      <div className="container">
        <h2 id="testi-title">{title}</h2>
        <div className="testis" style={{ marginTop: 12 }}>
          {list.map((item, i) => (
            <div key={`${item.name}-${item.city}-${i}`} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{ width: 40, height: 40, borderRadius: '50%', background: '#00000010' }}
                  aria-hidden="true"
                />
                <div>
                  <strong>{item.name}</strong>
                  <div style={{ fontSize: 12, opacity: 0.8 }}>{item.city}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Stars n={item.stars ?? 5} />
                </div>
              </div>
              <p>“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
