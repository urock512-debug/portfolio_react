/* Selected Work section */
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import './Work.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const projectIcons = {
  axcapital: (
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
      <text y="16" fontSize="14" fontWeight="700" fill="white" fontFamily="Syne, sans-serif">AX</text>
    </svg>
  ),
  aro: (
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
      <text y="16" fontSize="13" fontWeight="700" fill="white" fontFamily="Syne, sans-serif">ARO</text>
    </svg>
  ),
  paxful: (
    <svg width="40" height="20" viewBox="0 0 50 20" fill="none">
      <text y="16" fontSize="13" fontWeight="700" fill="white" fontFamily="Syne, sans-serif">Paxful</text>
    </svg>
  ),
  bigapple: (
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
      <text y="16" fontSize="13" fontWeight="700" fill="white" fontFamily="Syne, sans-serif">BAM</text>
    </svg>
  ),
}

export default function Work() {
  return (
    <section className="work" id="work" aria-label="Selected projects">
      <div className="container">
        {/* Header */}
        <motion.div
          className="work__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <h2 className="work__heading">Selected Work</h2>
          <a href="#contact" className="work__all-link btn btn-ghost">
            View all projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="work__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const isExternal = !!project.url
  const videoRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const hasMedia = !!project.media
  const hasVideo = hasMedia && project.media.isVideoPreview && project.media.preview

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const cardContent = (
    <motion.article
      className="project-card glass"
      custom={index}
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      style={{ '--card-accent': project.accentColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top area */}
      <div className="project-card__top">
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__arrow">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 14L14 4M14 4H7M14 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Preview area: thumbnail + optional video */}
      <div
        className="project-card__image"
        style={!hasMedia ? { background: project.accentColor } : undefined}
      >
        {/* Thumbnail */}
        {hasMedia && project.media.thumbnail && (
          <img
            src={project.media.thumbnail}
            alt={`${project.title} preview`}
            className="project-card__thumb"
          />
        )}

        {/* Hover video */}
        {hasVideo && (
          <video
            ref={videoRef}
            src={project.media.preview}
            className={`project-card__video${isHovered ? ' is-playing' : ''}`}
            loop={project.media.loop ?? true}
            muted
            playsInline
            preload="metadata"
          />
        )}

        {/* Play hint overlay */}
        {hasVideo && !isHovered && (
          <div className="project-card__play-hint">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
              <path d="M8 7l6 3-6 3V7z" fill="rgba(255,255,255,0.85)"/>
            </svg>
          </div>
        )}
      </div>

      {/* Glow accent */}
      <div className="project-card__glow" />

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
      </div>
    </motion.article>
  )

  return (
    <Link
      to={`/case/${project.id}`}
      className="project-card-link"
      aria-label={`View ${project.title} case study`}
    >
      {cardContent}
    </Link>
  )
}
