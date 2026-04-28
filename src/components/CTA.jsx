/* ─── CTA Section ─── */
import { motion } from 'framer-motion'
import { asset } from '../utils/asset'
import './CTA.css'


const ctaFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}
// Анимация для контейнера правой колонки (заголовок + список)
const contactLinksVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6, 
      delay: 0.3, // задержка после появления левой колонки
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  }),
}
// Анимация для каждого отдельного элемента списка (появление справа по очереди)
const contactLinkItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5, 
      delay: i * 0.2, // каждый следующий появляется через 0.2s
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  }),
}

const CTA = () => {
  const contactLinks = [
    {
      icon: <img src={asset('/icons/email.svg')} alt="Email" width="24" height="24" />,
      label: 'Email',
      value: 'mailto:urock512@gmail.com',
      shortvalue: 'urock512@gmail.com',
    },
    {
      icon: <img src={asset('/icons/linkedin.svg')} alt="LinkedIn" width="24" height="24" />,
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/tikigeek',
      shortvalue: 'linkedin.com/in/tikigeek',
    },
    {
      icon: <img src={asset('/icons/telegram.svg')} alt="Telegram" width="24" height="24" />,
      label: 'Telegram',
      value: 'http://t.me/iurii_t',
      shortvalue: '@iurii_t',
    },
  ]


  return (
    <section className="cta" id="contact">
      <motion.div
        className="cta__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Left Column */}
        <div className="cta__left">
          <motion.span
            className="cta__badge"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ctaFadeUp}
            custom={0}
          >
            Let's work together
          </motion.span>
          <motion.h2
            className="cta__title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ctaFadeUp}
            custom={1}
          >
            <span className="hero__title-accent">Let's create</span> your next project
          </motion.h2>
          <motion.p
            className="cta__subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ctaFadeUp}
            custom={2}
          >
            I'm available for new opportunities and exciting projects. 
            Let's build something great together.
          </motion.p>
          <motion.div
            className="cta__buttons"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ctaFadeUp}
            custom={3}
          >
            <a href="http://t.me/iurii_t" target="_blank" className="cta-btn btn btn-primary cta-btn--primary">
              Get in touch
            </a>
            <a href="#work" className="cta-btn btn btn-ghost cta-btn--secondary">
              View my work
            </a>
          </motion.div>
        </div>


        {/* Right Column */}
        <motion.div
          className="cta__right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contactLinksVariants}
          custom={4}
        >
          <motion.ul className="contact-list">
            {contactLinks.map((item, index) => (
              <motion.li
                key={index}
                className="contact-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactLinkItemVariants}
                custom={index}
              >
                <a href={item.value} className="contact-item__value" target="_blank" rel="noopener noreferrer">
                  <span className="contact-item__icon">{item.icon}</span>
                  <div className="contact-item__text">
                    <span className="contact-item__label">{item.label}</span>
                    {item.shortvalue}
                  </div>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

      </motion.div>
    </section>
  )
}


export default CTA
