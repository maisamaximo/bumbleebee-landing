import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer(){
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const note = t('footer.note');
  const tpl  = t('footer.copyrightTemplate');

  const copyright = tpl
    .replace('{{year}}', year)
    .replace('{{brand}}', 'Bumblebee')
    .replace('{{note}}', note);

  return (
    <footer>
      <div className="container footer-grid">
        <div style={{fontWeight:800}}>
          Bumble<span style={{color:'var(--honey)'}}>bee</span>
        </div>

        <div style={{display:'flex', gap:14}}>
          <a href="#sobre">{t('footer.links.about')}</a>
          <a href="#layouts">{t('footer.links.layouts')}</a>
          <a href="#galeria">{t('footer.links.gallery')}</a>
        </div>

        <div style={{display:'flex', gap:14}}>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="WhatsApp">WhatsApp</a>
          <a href="mailto:oi@bumblebee.van">oi@bumblebee.van</a>
        </div>
      </div>
      <div className="container" style={{opacity:.7, fontSize:13, marginTop:16}}>
        <hr className="hr"/>
        {copyright}
      </div>
    </footer>
  );
}
