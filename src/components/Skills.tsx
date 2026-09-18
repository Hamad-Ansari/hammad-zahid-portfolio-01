import { motion } from 'framer-motion'
import { BarChart3, Brain, Code2, Database, Layers, Server, Sparkles, type LucideIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'
import { fadeUp, stagger, viewport } from '../lib/motion'

const icons: Record<string, LucideIcon> = { code: Code2, chart: BarChart3, brain: Brain, layers: Layers, sparkles: Sparkles, server: Server, database: Database }

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="A practical, end-to-end toolkit" subtitle="From SQL and Pandas through Scikit-learn and PyTorch to LangGraph and FastAPI — the stack needed to take an idea from raw data to a deployed AI application." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon] ?? Code2
            return (
              <motion.article key={g.title} variants={fadeUp} className="card card-hover p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-cyan" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="chip-muted transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan">{s}</li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
