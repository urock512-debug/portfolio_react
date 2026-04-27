/* Aurora animated background — inspired by ReactBits */
import { useEffect, useRef } from 'react'
import './AuroraBackground.css'

// Конфиг для скорости анимации (по умолчанию 1 = оригинальная скорость)
export default function AuroraBackground({ speed = 5 }) {
  return (
    <div className="aurora-wrap" aria-hidden="true">
      <div className="aurora-blob aurora-blob--1" style={{ animationDuration: '18s' }} />
      <div className="aurora-blob aurora-blob--2" style={{ animationDuration: '22s' }} />
      <div className="aurora-blob aurora-blob--3" style={{ animationDuration: '26s' }} />
      <div className="aurora-blob aurora-blob--4" style={{ animationDuration: '20s' }} />
      <div className="aurora-noise" />
    </div>
  )
}
