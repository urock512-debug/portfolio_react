/* ─── Case Study Page ─── */
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { projects } from '../data/portfolio'
import { asset } from '../utils/asset'
import { useT } from '../hooks/useT'
import { useLang } from '../context/LangContext'
import './CasePage.css'

/* ── Animation variants ── */
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

/* ── Media placeholder / real media block ── */
function Placeholder({ ratio = '16/9', label, image, video }) {
  const [w, h] = ratio.split('/').map(Number)
  const paddingBottom = `${(h / w) * 100}%`

  return (
    <div className="case-placeholder" style={{ paddingBottom }}>
      <div className="case-placeholder__inner">
        {/* Real video with poster image */}
        {video ? (
          <video
            className="case-placeholder__video"
            src={asset(video)}
            poster={asset(image)}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        ) : image ? (
          <img
            className="case-placeholder__video"
            src={asset(image)}
            alt={label || 'Preview'}
          />
        ) : (
          /* Shimmer fallback */
          <div className="case-placeholder__shimmer" />
        )}
        {/* Label only shown on shimmer placeholders */}
        {!video && !image && label && (
          <span className="case-placeholder__label">{label}</span>
        )}
      </div>
    </div>
  )
}

/* ── Media section renderer ── */
function CaseSection({ section, accentColor, lang }) {
  switch (section.type) {
    case 'hero':
      return (
        <motion.div
          className="case-section case-section--hero"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <Placeholder ratio={section.ratio} label={section.label} image={section.image} video={section.video} />
        </motion.div>
      )

    case 'fullwidth':
      return (
        <motion.div
          className="case-section case-section--fullwidth"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <Placeholder ratio={section.ratio} label={section.label} image={section.image} video={section.video} />
        </motion.div>
      )

    case 'grid-2': {
      const items = section.items || [{}, {}]
      return (
        <motion.div
          className="case-section case-section--grid-2"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <Placeholder ratio={section.ratio} label={`${section.label} — left`} image={items[0]?.image} video={items[0]?.video} />
          <Placeholder ratio={section.ratio} label={`${section.label} — right`} image={items[1]?.image} video={items[1]?.video} />
        </motion.div>
      )
    }

    case 'grid-3': {
      const items = section.items || [{}, {}, {}]
      return (
        <motion.div
          className="case-section case-section--grid-3"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <Placeholder ratio={section.ratio} label={`${section.label} 1`} image={items[0]?.image} video={items[0]?.video} />
          <Placeholder ratio={section.ratio} label={`${section.label} 2`} image={items[1]?.image} video={items[1]?.video} />
          <Placeholder ratio={section.ratio} label={`${section.label} 3`} image={items[2]?.image} video={items[2]?.video} />
        </motion.div>
      )
    }

    // case 'grid-masonry': {
    //   const items = section.items || [{}, {}, {}]
    //   return (
    //     <motion.div
    //       className="case-section case-section--masonry"
    //       initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
    //       variants={fadeUp}
    //     >
    //       <div className="case-masonry__main">
    //         <Placeholder ratio="4/3"  label={section.label} image={items[0]?.image} video={items[0]?.video} />
    //       </div>
    //       <div className="case-masonry__side">
    //         <Placeholder ratio="3/4"  label="Detail" image={items[1]?.image} video={items[1]?.video} />
    //         <Placeholder ratio="16/9" label="Detail" image={items[2]?.image} video={items[2]?.video} />
    //       </div>
    //     </motion.div>
    //   )
    // }


    case 'quote':
      return (
        <motion.div
          className="case-section case-section--quote"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ '--accent': accentColor }}
        >
          <div className="case-quote__bar" />
          <blockquote className="case-quote__text">"{lang === 'ru' && section.textRu ? section.textRu : section.text}"</blockquote>
          {section.author && <cite className="case-quote__author">— {section.author}</cite>}
        </motion.div>
      )

    default:
      return null
  }
}

/* ── Main page component ── */
export default function CasePage() {
  const { id } = useParams()
  const t = useT()
  const { lang } = useLang()
  const casePrefix = lang === 'ru' ? '/ru/case' : '/case'
  const navigate = useNavigate()
  const heroRef = useRef(null)

  const project = projects.find((p) => p.id === id)
  const cs = project?.caseStudy

  // Pick localised text: fall back to EN if ru block missing
  const loc = (lang === 'ru' && cs?.ru) ? cs.ru : cs

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  /* Parallax for hero text */
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 400], [0, 80])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  /* Next project cycling */
  const currentIdx = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIdx + 1) % projects.length]

  /* 404 */
  if (!project || !cs) {
    return (
      <div className="case-not-found">
        <h1>{t.case.notFound}</h1>
        <Link to="/">{t.case.backToPortfolio}</Link>
      </div>
    )
  }

  return (
    <motion.div
      className="case-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Back button ── */}
      <motion.div
        className="case-back"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <button onClick={() => navigate(-1)} className="case-back__btn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15 9H3M3 9l5-5M3 9l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t.case.back}
        </button>
      </motion.div>

      {/* ── HERO ── */}
      <header
        className="case-hero"
        style={{ '--accent': project.accentColor, '--color': project.color }}
        ref={heroRef}
      >
        {/* Gradient orb background */}
        <div className="case-hero__orb" style={{ background: project.accentColor }} />

        <div className="case-hero__content">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            {/* Tags */}
            <motion.div className="case-hero__tags" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              {project.tags.map((tag) => (
                <span key={tag} className="case-hero__tag">{tag}</span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1 className="case-hero__title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              {project.title}
            </motion.h1>
            <motion.p className="case-hero__subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              {project.subtitle}
            </motion.p>

            {/* Meta strip */}
            <motion.div className="case-hero__meta" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <div className="case-meta-item">
                <span className="case-meta-item__label">{t.case.meta.year}</span>
                <span className="case-meta-item__value">{cs.year}</span>
              </div>
              <div className="case-meta-item">
                <span className="case-meta-item__label">{t.case.meta.role}</span>
                <span className="case-meta-item__value">{cs.role}</span>
              </div>
              <div className="case-meta-item">
                <span className="case-meta-item__label">{t.case.meta.duration}</span>
                <span className="case-meta-item__value">{cs.duration}</span>
              </div>
              <div className="case-meta-item">
                <span className="case-meta-item__label">{t.case.meta.client}</span>
                <span className="case-meta-item__value">{cs.client}</span>
              </div>

              {/* Visit site button — only if external url exists */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-hero__visit-btn"
                  style={{ '--accent': project.accentColor }}
                >
                  {t.case.visitSite}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Hero media — читается из cs.heroMedia (не из sections) */}
        <motion.div
          className="case-hero__media"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Placeholder
            ratio={cs.heroMedia?.ratio ?? '16/9'}
            label="Hero screen"
            image={cs.heroMedia?.image}
            video={cs.heroMedia?.video}
          />
        </motion.div>
      </header>

      {/* ── BODY ── */}
      <div className="case-body container">

        {/* Overview */}
        <motion.section
          className="case-text-section"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="case-section-label">{t.case.overview}</span>
          <p className="case-text-section__body">{loc.overview}</p>
        </motion.section>

        {/* Challenge + Solution */}
        <motion.section
          className="case-two-col"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="case-two-col__item">
            <span className="case-section-label">{t.case.challenge}</span>
            <p className="case-two-col__text">{loc.challenge}</p>
          </div>
          <div className="case-two-col__item">
            <span className="case-section-label">{t.case.solution}</span>
            <p className="case-two-col__text">{loc.solution}</p>
          </div>
        </motion.section>

        {/* Dynamic media sections */}
        {cs.sections.map((section, i) => (
          <CaseSection key={i} section={section} accentColor={project.accentColor} lang={lang} />
        ))}

        {/* Results */}
        <motion.section
          className="case-results"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ '--accent': project.accentColor }}
        >
          <span className="case-section-label">{t.case.results}</span>
          <div className="case-results__grid">
            {(loc.results ?? cs.results).map((r, i) => (
              <motion.div
                key={i}
                className="case-result-card"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ '--accent': project.accentColor }}
              >
                <span className="case-result-card__value">{r.value}</span>
                <span className="case-result-card__label">{r.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* ── NEXT PROJECT ── */}
      <motion.div
        className="case-next"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        style={{ '--next-accent': nextProject.accentColor }}
      >
        <span className="case-next__label">{t.case.nextProject}</span>
        <Link to={`${casePrefix}/${nextProject.id}`} className="case-next__link">
          <span className="case-next__title">{nextProject.title}</span>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 16h20M18 8l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  )
}
