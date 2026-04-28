/* ─── CTA Section ─── */
import { motion } from 'framer-motion'
import { asset } from '../utils/asset'
import { useT } from '../hooks/useT'
import './CTA.css'

const ctaFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const contactLinksVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: () => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const contactLinkItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const contactData = [
  { icon: '/icons/email.svg',    value: 'mailto:urock512@gmail.com' },
  { icon: '/icons/linkedin.svg', value: 'https://linkedin.com/in/tikigeek' },
  { icon: '/icons/telegram.svg', value: 'http://t.me/iurii_t' },
]

const CTA = () => {
  const t = useT()

  const contactLinks = contactData.map((d, i) => ({
    ...d,
    label: t.cta.links[i].label,
    shortvalue: t.cta.links[i].shortvalue,
    icon: <img src={asset(d.icon)} alt={t.cta.links[i].label} width="24" height="24" />,
  }))

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
            {t.cta.badge}
          </motion.span>
          <motion.h2
            className="cta__title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ctaFadeUp}
            custom={1}
          >
            <span className="hero__title-accent">{t.cta.title}</span> {t.cta.titleSuffix}
          </motion.h2>
          <motion.p
            className="cta__subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ctaFadeUp}
            custom={2}
          >
            {t.cta.subtitle}
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
              {t.cta.btnContact}
            </a>
            <a href="#work" className="cta-btn btn btn-ghost cta-btn--secondary">
              {t.cta.btnWork}
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
