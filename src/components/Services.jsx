/* Services / Skills cards section */
import { motion } from 'framer-motion'
import { asset } from '../utils/asset'
import { useT } from '../hooks/useT'
import './Services.css'

const iconFiles = [
  '/icons/design.svg',
  '/icons/designsystem.svg',
  '/icons/code.svg',
  '/icons/handshake.svg',
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Services() {
  const t = useT()

  return (
    <section className="services" id="skills" aria-label="What I do">
      <div className="container">
        <motion.div
          className="services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {t.services.items.map((s, i) => (
            <motion.div
              key={s.title}
              className="services__card glass"
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(124,111,255,0.25)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="services__icon">
                <img src={asset(iconFiles[i])} alt={s.title} width="24" height="24" />
              </div>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
