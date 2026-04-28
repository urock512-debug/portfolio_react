/* Hero section */
import { motion } from 'framer-motion'
import { useT } from '../hooks/useT'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  const t = useT()

  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Introduction">

      <div className="hero__inner container">
        {/* Left column */}
        <div className="hero__content">
          <motion.div {...fadeUp(0.1)}>
            <span className="badge">
              <span className="dot" />
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1 className="hero__title" {...fadeUp(0.2)}>
            {t.hero.title}<br />
            <span className="hero__title-accent">{t.hero.accent}</span>
          </motion.h1>

          <motion.p className="hero__desc" {...fadeUp(0.35)}>
            {t.hero.desc}
          </motion.p>

          <motion.div className="hero__cta-row" {...fadeUp(0.48)}>
            <a
              href="#work"
              className="btn btn-primary"
              id="hero-view-work"
              onClick={(e) => handleScroll(e, '#work')}
            >
              {t.hero.btnWork}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              id="hero-contact"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              {t.hero.btnContact}
              <span className="hero__cta-dot" />
            </a>
          </motion.div>
        </div>

        {/* Right column — photo placeholder */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero__photo-wrap">
            <div className="hero__photo-glow" />
            <div className="hero__photo-placeholder">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="32" r="18" fill="rgba(124,111,255,0.3)"/>
                <ellipse cx="40" cy="70" rx="28" ry="16" fill="rgba(124,111,255,0.2)"/>
              </svg>
              <span>Your photo here</span>
            </div>
            <div className="hero__badge-exp glass">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2l1.6 4.8H15l-4 2.9 1.5 4.8L9 11.5 5.5 14.5 7 9.7 3 6.8h4.4L9 2z" fill="var(--accent-2)"/>
              </svg>
              <div>
                <span className="hero__badge-num">{t.hero.yearsNum}</span>
                <span className="hero__badge-label">{t.hero.yearsLabel}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="hero__scroll-line" />
        <span>{t.hero.scroll}</span>
      </motion.div>
    </section>
  )
}
