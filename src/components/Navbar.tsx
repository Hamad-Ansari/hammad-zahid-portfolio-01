import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Command, Download, Menu, Moon, Sun, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks, profile } from '../data/profile'
import { scrollToId } from '../lib/scroll'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = navLinks.map((l) => l.href.slice(1))

interface Props {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onOpenPalette: () => void
}

export default function Navbar({ theme, onToggleTheme, onOpenPalette }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    scrollToId(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass border-b shadow-sm dark:shadow-none' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <a href="#home" onClick={(e) => { e.preventDefault(); go('#home') }} className="flex items-center gap-3 rounded-lg">
          <Logo size={38} />
          <span className="hidden text-sm font-semibold text-slate-900 dark:text-white sm:block">
            <span className="text-slate-400 dark:text-slate-500">HZ&nbsp;|&nbsp;</span>
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href) }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span layoutId="nav-pill" className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs text-slate-600 hover:border-accent-blue/50 dark:border-white/10 dark:text-slate-400 md:inline-flex"
            aria-label="Open command palette"
          >
            <Command size={14} /> <span className="font-mono">Ctrl K</span>
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:border-accent-blue/50 dark:border-white/10 dark:text-slate-200"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={profile.cvPath} download className="btn-primary hidden !px-4 !py-2.5 md:inline-flex">
            <Download size={16} /> Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass border-t lg:hidden"
          >
            <ul className="container-x flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); go(l.href) }}
                    className={`block rounded-lg px-4 py-3 text-base font-medium ${
                      active === l.href.slice(1) ? 'bg-accent-blue/10 text-accent-blue' : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={profile.cvPath} download className="btn-primary w-full">
                  <Download size={16} /> Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
