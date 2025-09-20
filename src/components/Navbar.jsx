import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RESERVE_URL } from '../config';

const LANGS = [
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'en', label: 'English',   flag: '🇬🇧' },
  { code: 'fr', label: 'Français',  flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch',   flag: '🇩🇪' }
];

export default function Navbar({ scrolled: scrolledProp }) {
  const { t, i18n } = useTranslation();
  const initialLang =
    localStorage.getItem('lang') ||
    i18n.language?.split('-')[0] ||
    navigator.language?.split('-')[0] ||
    'pt';

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!!scrolledProp);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    if (typeof scrolledProp === 'boolean') {
      setScrolled(scrolledProp);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolledProp]);

  useEffect(() => {
    const onResize = () => window.innerWidth > 760 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest('.lang')) setLangOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // aplica idioma do estado ao i18n e persiste
  useEffect(() => {
    const safe = LANGS.some(l => l.code === lang) ? lang : 'pt';
    i18n.changeLanguage(safe);
    localStorage.setItem('lang', safe);
  }, [lang, i18n]);

  const handleLinkClick = () => setOpen(false);
  const currentLang = LANGS.find(l => l.code === lang) || LANGS[0];

  const switchLang = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-left">
          <div className="logo">Bumble<span className="bee">bee</span></div>
        </div>

        <div className="nav-right">
          {/* Seletor de idioma */}
          <div className="lang">
            <button
              className="lang-toggle"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t('nav.language')}
              onClick={() => setLangOpen(v => !v)}
            >
              <span className="flag">{currentLang.flag}</span>
              <span className="lang-code">{(currentLang.code || 'pt').toUpperCase()}</span>
              <span className="chev">▾</span>
            </button>
            <ul
              className={`lang-menu ${langOpen ? 'open' : ''}`}
              role="listbox"
              aria-label={t('nav.language')}
            >
              {LANGS.map(l => (
                <li key={l.code}>
                  <button
                    role="option"
                    aria-selected={lang === l.code}
                    className={`lang-item ${lang === l.code ? 'active' : ''}`}
                    onClick={() => switchLang(l.code)}
                  >
                    <span className="flag">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Botão hambúrguer (mobile) */}
          <button
            className="nav-toggle"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-controls="primaryNav"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {open ? '✕' : '☰'}
          </button>

          {/* Menu principal */}
          <nav id="primaryNav" className="nav-menu" role="navigation">
            <a href="#sobre"   className="btn btn-ghost nav-link" onClick={handleLinkClick}>{t('nav.about')}</a>
            <a href="#layouts" className="btn btn-ghost nav-link" onClick={handleLinkClick}>{t('nav.layouts')}</a>
            <a href="#galeria" className="btn btn-ghost nav-link" onClick={handleLinkClick}>{t('nav.gallery')}</a>
            <a
              href={RESERVE_URL}
              className="btn btn-primary reserve-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              {t('nav.reserve')}
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
}
