/* ─── About Me Section ─── */
import { motion } from 'framer-motion'
import './AboutMe.css'

// Skill data with icons
const skills = [
  { name: 'UX Research',     icon: '/icons/search.svg' },
  { name: 'UI Design',       icon: '/icons/design.svg' },
  { name: 'Prototyping',     icon: '/icons/play.svg' },
  { name: 'Design Systems',  icon: '/icons/designsystem.svg' },
  { name: 'Web Development', icon: '/icons/code.svg' },
  { name: 'WordPress',       icon: '/icons/wordpress.svg' },
]

// Stats data
const stats = [
  { number: '10+', label: 'Years of experience' },
  { number: '300+', label: 'Projects completed' },
  { number: '200+', label: 'Happy clients' },
  { number: '6+', label: 'Industries' }
]

const AboutMe = () => {
  return (
    <section className="about-me glass" id="about-me">
      {/* Glassmorphism glow effect */}
      <div className="about-me__glow" />
      
      <div className="about-me__grid">
        {/* Left column - intro */}
        <div className="about-me__left">
          <div className="about-me__badge">About me</div>
          
          <h2 className="about-me__title">
            I combine design thinking with technical skills
          </h2>
          
          <p className="about-me__description">
            I help startups and companies turn ideas into real, production-ready digital products. 
            I enjoy solving complex problems and creating simple, intuitive experiences.
          </p>
        </div>
        
        {/* Right column - skills & stats */}
        <div className="about-me__right">
          {/* Skills section */}
          <div className="about-me__skills">
            <div className="about-me__skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-card__icon">
                    <img src={skill.icon} alt={skill.name} width="22" height="22" />
                  </div>
                  <span className="skill-card__title">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Stats section */}
          <div className="about-me__stats">
            <div className="about-me__stats-grid">
              {stats.map((stat, index) => (
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