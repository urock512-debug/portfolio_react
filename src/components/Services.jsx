/* Services / Skills cards section */
import { motion } from 'framer-motion'
import { asset } from '../utils/asset'
import './Services.css'

const services = [
  {
    icon: <img src={asset('/icons/design.svg')} alt="End-to-End Design" width="24" height="24" />,
    title: 'End-to-End Design',
    desc: 'From research and user flows to polished UI and implementation support.',
  },
  {
    icon: <img src={asset('/icons/designsystem.svg')} alt="Design Systems" width="24" height="24" />,
    title: 'Design Systems',
    desc: 'Building and maintaining scalable component-based systems aligned with front-end.',
  },
  {
    icon: <img src={asset('/icons/code.svg')} alt="Web Development" width="24" height="24" />,
    title: 'Web Development',
    desc: 'HTML, CSS, Bootstrap, WordPress and Elementor. Clean, responsive and optimized.',
  },
  {
    icon: <img src={asset('/icons/handshake.svg')} alt="Collaboration" width="24" height="24" />,
    title: 'Collaboration',
    desc: 'Working closely with product teams, developers and stakeholders.',
  },
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
  return (
    <section className="services" id="skills" aria-label="What I do">
      <div className="container">
        <motion.div
          className="services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="services__card glass"
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(124,111,255,0.25)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="services__icon">{s.icon}</div>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
