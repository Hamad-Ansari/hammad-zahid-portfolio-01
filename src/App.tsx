import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CommandPalette from './components/CommandPalette'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

// Below-the-fold sections are code-split to keep the initial bundle small.
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const AIEngineering = lazy(() => import('./components/AIEngineering'))
const DataWorkflow = lazy(() => import('./components/DataWorkflow'))
const MLWorkflow = lazy(() => import('./components/MLWorkflow'))
const Skills = lazy(() => import('./components/Skills'))
const TechStack = lazy(() => import('./components/TechStack'))
const Education = lazy(() => import('./components/Education'))
const Certifications = lazy(() => import('./components/Certifications'))
const OpenSource = lazy(() => import('./components/OpenSource'))
const Contact = lazy(() => import('./components/Contact'))

function Fallback() {
  return <div className="section container-x" aria-hidden="true"><div className="h-40 animate-pulse rounded-2xl bg-slate-200/50 dark:bg-white/5" /></div>
}

export default function App() {
  const { theme, toggle } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const closePalette = useCallback(() => setPaletteOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-blue focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Suspense fallback={<Fallback />}>
          <Experience />
          <Projects />
          <AIEngineering />
          <DataWorkflow />
          <MLWorkflow />
          <Skills />
          <TechStack />
          <Education />
          <Certifications />
          <OpenSource />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette open={paletteOpen} onClose={closePalette} theme={theme} onToggleTheme={toggle} />
    </>
  )
}
