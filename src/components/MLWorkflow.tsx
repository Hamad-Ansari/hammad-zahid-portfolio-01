import { motion } from 'framer-motion'
import { Activity, Brush, Cpu, Database, Eye, Gauge, Rocket, Search, SlidersHorizontal, Split, Target, Wrench, type LucideIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { mlWorkflow } from '../data/skills'
import { fadeUp, stagger, viewport } from '../lib/motion'

const iconMap: Record<string, LucideIcon> = {
  target: Target, database: Database, broom: Brush, search: Search, wrench: Wrench, split: Split,
  cpu: Cpu, gauge: Gauge, sliders: SlidersHorizontal, eye: Eye, rocket: Rocket, activity: Activity,
}

export default function MLWorkflow() {
  return (
    <section id="ml-workflow" className="section">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" aria-hidden="true" />
      <div className="container-x">
        <SectionHeading eyebrow="Machine learning workflow" title="From problem definition to monitored deployment" subtitle="The lifecycle I follow for ML projects — the same steps behind the intrusion detection, MRI classification and text detection work above." />

        <motion.ol variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          <svg className="pointer-events-none absolute inset-x-0 top-7 hidden h-px w-full lg:block" aria-hidden="true">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#mlgrad)" strokeWidth="2" strokeDasharray="6 8" className="animate-dash" />
            <defs>
              <linearGradient id="mlgrad" x1="0" x2="1">
                <stop offset="0" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          {mlWorkflow.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <motion.li key={s.step} variants={fadeUp} className="group relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-accent-blue shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-accent-cyan group-hover:shadow-glow-cyan dark:border-white/10 dark:bg-surface-800" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <p className="mt-3 font-mono text-[10px] text-slate-500">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{s.step}</p>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
