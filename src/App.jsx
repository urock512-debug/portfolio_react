import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Work from './components/Work'
import AboutMe from './components/AboutMe'
import CTA from './components/CTA'
import AuroraBackground from './components/ui/AuroraBackground'
import CasePage from './pages/CasePage'
import { LangProvider } from './context/LangContext'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <AuroraBackground speed={3} />
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Services />
          <Work />
          <AboutMe />
          <CTA />
        </main>
      </div>
    </div>
  )
}

function App() {
  const location = useLocation()

  return (
    <LangProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* English routes */}
          <Route path="/"           element={<HomePage />} />
          <Route path="/case/:id"   element={<CasePage />} />
          {/* Russian routes */}
          <Route path="/ru"         element={<HomePage />} />
          <Route path="/ru/case/:id" element={<CasePage />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </LangProvider>
  )
}

export default App