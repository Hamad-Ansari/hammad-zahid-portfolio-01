import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, ExternalLink, Home, Moon, Search, Sun, type LucideIcon } from 'lucide-react'
import { profile } from '../data/profile'
import { scrollToId } from '../lib/scroll'

interface Cmd { id: string; label: string; hint?: string; icon?: LucideIcon; run: () => void }

interface Props {
  open: boolean
  onClose: () => void
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function CommandPalette({ open, onClose, theme, onToggleTheme }: Props) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const cmds = useMemo<Cmd[]>(() => {
    const go = (h: string) => () => { scrollToId(h); onClose() }
    const ext = (u: string) => () => { window.open(u, '_blank', 'noopener,noreferrer'); onClose() }
    return [
      { id: 'home', label: 'Go Home', hint: 'Navigate', icon: Home, run: go('#home') },
      { id: 'about', label: 'About', hint: 'Navigate', run: go('#about') },
      { id: 'projects', label: 'Projects', hint: 'Navigate', run: go('#projects') },
      { id: 'skills', label: 'Skills', hint: 'Navigate', run: go('#skills') },
      { id: 'contact', label: 'Contact', hint: 'Navigate', run: go('#contact') },
      { id: 'github', label: 'GitHub', hint: 'Open link', icon: ExternalLink, run: ext(profile.links.github) },
      { id: 'linkedin', label: 'LinkedIn', hint: 'Open link', icon: ExternalLink, run: ext(profile.links.linkedin) },
      { id: 'kaggle', label: 'Kaggle', hint: 'Open link', icon: ExternalLink, run: ext(profile.links.kaggle) },
      { id: 'cv', label: 'Download CV', hint: 'File', icon: Download, run: ext(profile.cvPath) },
      { id: 'theme', label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode', hint: 'Theme', icon: theme === 'dark' ? Sun : Moon, run: () => { onToggleTheme(); onClose() } },
    ]
  }, [onClose, onToggleTheme, theme])

  const filtered = useMemo(() => cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase())), [cmds, q])

  useEffect(() => {
    if (open) {
      setQ('')
      setIdx(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => setIdx(0), [q])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => (i + 1) % Math.max(filtered.length, 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1)) }
    if (e.key === 'Enter') { e.preventDefault(); filtered[idx]?.run() }
    if (e.key === 'Escape') onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-sm" onClick={onClose}>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ scale: 0.96, y: -10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -10, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onKey}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-surface-900"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 dark:border-white/10">
              <Search size={18} className="text-slate-400" aria-hidden="true" />
              <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a command…" aria-label="Search commands" className="h-14 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white" />
              <kbd className="rounded border border-slate-200 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:border-white/10">Esc</kbd>
            </div>
            <ul role="listbox" className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm muted">No commands found.</li>}
              {filtered.map((c, i) => (
                <li key={c.id} role="option" aria-selected={i === idx}>
                  <button type="button" onMouseEnter={() => setIdx(i)} onClick={c.run} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm ${i === idx ? 'bg-accent-blue/10 text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                    {c.icon ? <c.icon size={16} className="text-accent-cyan" aria-hidden="true" /> : <span className="h-4 w-4 rounded bg-gradient-to-br from-accent-blue to-accent-purple" aria-hidden="true" />}
                    <span className="flex-1">{c.label}</span>
                    {c.hint && <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">{c.hint}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
