// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // sua config do i18next
import i18n from 'i18next';

function applyMetaFromI18n() {
  const t = i18n.t.bind(i18n);
  // title/description dos arquivos de tradução
  const title = t('meta.title', 'Bumblebee — Camservan');
  const desc  = t('meta.description', 'Compact, sweet, and ready for the road.');

  document.title = title;

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', desc);

  // lang: pt/en/fr/de — pega o base do i18n
  const base = (i18n.language || 'pt').split('-')[0];
  document.documentElement.setAttribute('lang', base);
}

// aplica no load inicial (quando i18n já tiver carregado os recursos)
i18n.on('initialized', applyMetaFromI18n);
i18n.on('loaded',       applyMetaFromI18n);
i18n.on('languageChanged', applyMetaFromI18n);

// fallback: se já está pronto agora
if (i18n.isInitialized) applyMetaFromI18n();

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
