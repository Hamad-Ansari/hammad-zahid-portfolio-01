import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { dataWorkflow } from '../data/skills'
import { fadeUp, stagger, viewport } from '../lib/motion'

const phases = [
  { name: 'Understand', range: [0, 1] },
  { name: 'Prepare', range: [1, 8] },
  { name: 'Explore', range: [8, 11] },
  { name: 'Communicate', range: [11, 15] },
]

export default function DataWorkflow() {
  const [active, setActive] = useState(0)
  return (
    <section id="data-workflow" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Data analytics workflow" title="How I Approach Data Problems" subtitle="A repeatable, fifteen-step path from a vague business question to a concrete recommendation. Hover or tap a step to highlight it." align="center" />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {phases.map((p, i) => {
            const on = active >= p.range[0] && active < p.range[1]
            return (
              <button key={p.name} type="button" onClick={() => setActive(p.range[0])} className={`chip transition ${on ? 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan' : 'chip-muted'}`}>
                {i + 1}. {p.name}
              </button>
            )
          })}
        </div>

        <motion.ol variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {dataWorkflow.map((s, i) => {
            const done = i < active
            const on = i === active
            return (
              <motion.li key={s} variants={fadeUp}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-current={on ? 'step' : undefined}
                  className={`card flex w-full items-center gap-3 p-3.5 text-left transition-all ${on ? 'border-accent-cyan/60 shadow-glow-cyan' : ''}`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${done ? 'bg-emerald-500/15 text-emerald-500' : on ? 'bg-gradient-to-br from-accent-blue to-accent-cyan text-white' : 'bg-slate-100 text-slate-500 dark:bg-white/5'}`}>
                    {done ? <Check size={14} aria-hidden="true" /> : i + 1}
                  </span>
                  <span className={`text-sm ${on ? 'font-semibold text-slate-900 dark:text-white' : 'muted'}`}>{s}</span>
                </button>
              </motion.li>
            )
          })}
        </motion.ol>

        <div className="mx-auto mt-8 h-1.5 w-full max-w-3xl overflow-hidden rounded-full bg-slate-200 dark:bg-white/10" aria-hidden="true">
          <motion.div className="h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple" animate={{ width: `${((active + 1) / dataWorkflow.length) * 100}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
        </div>
      </div>
    </section>
  )
}
