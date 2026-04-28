/* ─── About Me Section ─── */
import { motion } from 'framer-motion'
import { asset } from '../utils/asset'
import { useT } from '../hooks/useT'
import './AboutMe.css'

const skillIcons = [
  '/icons/search.svg',
  '/icons/design.svg',
  '/icons/play.svg',
  '/icons/designsystem.svg',
  '/icons/code.svg',
  '/icons/wordpress.svg',
]

const AboutMe = () => {
  const t = useT()

  return (
    <section className="about-me glass" id="about-me">
      {/* Glassmorphism glow effect */}
      <div className="about-me__glow" />

      <div className="about-me__grid">
        {/* Left column - intro */}
        <div className="about-me__left">
          <div className="about-me__badge">{t.about.badge}</div>

          <h2 className="about-me__title">
            {t.about.title}
          </h2>

          <p className="about-me__description">
            {t.about.desc}
          </p>
        </div>

        {/* Right column - skills & stats */}
        <div className="about-me__right">
          {/* Skills section */}
          <div className="about-me__skills">
            <div className="about-me__skills-grid">
              {t.about.skills.map((skillName, index) => (
                <motion.div
                  key={skillName}
                  className="skill-card glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-card__icon">
                    <img src={asset(skillIcons[index])} alt={skillName} width="22" height="22" />
                  </div>
                  <span className="skill-card__title">{skillName}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="about-me__stats">
            <div className="about-me__stats-grid">
              {t.about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="stat-card__number">{stat.number}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe