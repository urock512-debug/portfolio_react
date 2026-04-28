/* Navbar component */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { useT } from '../hooks/useT'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang } = useLang()
  const t = useT()
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { label: t.nav.work,    href: '#work' },
    { label: t.nav.about,   href: '#about-me' },
    { label: t.nav.skills,  href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  /* Switch language, preserving current route */
  const switchLang = (targetLang) => {
    const path = location.pathname
    if (targetLang === 'ru') {
      const newPath = path.startsWith('/ru') ? path : '/ru' + (path === '/' ? '' : path)
      navigate(newPath || '/ru')
    } else {
      const newPath = path.replace(/^\/ru/, '') || '/'
      navigate(newPath)
    }
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={(e) => handleNavClick(e, 'body')}>
          <span className="navbar__logo-mark">YT</span>
          <span className="navbar__logo-name">Yurii Tseluiko</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Language switcher */}
        <div className="navbar__lang">
          <svg className="navbar__lang-globe" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 2C12 2 8 7 8 12s4 10 4 10M12 2c0 0 4 5 4 10s-4 10-4 10M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <button
            className={`navbar__lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => switchLang('en')}
            aria-label="Switch to English"
          >
            EN
          </button>
          <span className="navbar__lang-sep">/</span>
          <button
            className={`navbar__lang-btn ${lang === 'ru' ? 'active' : ''}`}
            onClick={() => switchLang('ru')}
            aria-label="Переключить на русский"
          >
            RU
          </button>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="btn btn-ghost navbar__cta"
          onClick={(e) => handleNavClick(e, '#contact')}
          id="navbar-cta"
        >
          {t.nav.cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Mobile burger */}
        <button
          className="navbar__burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="navbar__mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          {/* Mobile lang switcher */}
          <div className="navbar__lang navbar__lang--mobile">
            <svg className="navbar__lang-globe" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 2C12 2 8 7 8 12s4 10 4 10M12 2c0 0 4 5 4 10s-4 10-4 10M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <button
              className={`navbar__lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => { switchLang('en'); setMobileOpen(false) }}
            >EN</button>
            <span className="navbar__lang-sep">/</span>
            <button
              className={`navbar__lang-btn ${lang === 'ru' ? 'active' : ''}`}
              onClick={() => { switchLang('ru'); setMobileOpen(false) }}
            >RU</button>
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: '8px', justifyContent: 'center' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            {t.nav.cta}
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
