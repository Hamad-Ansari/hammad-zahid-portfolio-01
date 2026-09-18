import { motion } from 'framer-motion'
import { Briefcase, Code2, FlaskConical, GraduationCap, LineChart } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { experience, type TimelineKind } from '../data/experience'
import { fadeUp, viewport } from '../lib/motion'

const kindMeta: Record<TimelineKind, { icon: typeof Briefcase; color: string }> = {
  'Data Analytics': { icon: LineChart, color: 'from-accent-cyan to-accent-blue' },
  'AI/ML Development': { icon: FlaskConical, color: 'from-accent-purple to-accent-blue' },
  'Independent Projects': { icon: Code2, color: 'from-accent-blue to-accent-cyan' },
  'Portfolio Development': { icon: Briefcase, color: 'from-emerald-400 to-accent-cyan' },
  Education: { icon: GraduationCap, color: 'from-amber-400 to-accent-purple' },
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Professional Journey"
          title="Building toward AI engineering and data analytics"
          subtitle="Internships, analyst roles and a steady stream of independent projects — each one a step toward production-grade AI and data systems."
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {(Object.keys(kindMeta) as TimelineKind[]).map((k) => (
            <span key={k} className="chip-muted">
              <span className={`mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r ${kindMeta[k].color}`} aria-hidden="true" />
              {k}
            </span>
          ))}
        </div>

        <ol className="relative mt-12 space-y-8 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-accent-blue before:via-accent-cyan/40 before:to-transparent md:before:left-1/2">
          {experience.map((item, i) => {
            const meta = kindMeta[item.kind]
            const Icon = meta.icon
            const left = i % 2 === 0
            return (
              <motion.li
                key={item.title + item.org}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className={`relative pl-14 md:w-1/2 md:pl-0 ${left ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
              >
                <span
                  className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-glow ${meta.color} md:top-2 ${
                    left ? 'md:left-auto md:-right-5' : 'md:-left-5'
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </span>
                <article className="card card-hover p-5 sm:p-6">
                  <p className="font-mono text-xs text-accent-cyan">{item.kind}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.org}
                    {item.location && <span className="muted"> · {item.location}</span>}
                  </p>
                  <p className="mt-1 font-mono text-xs muted">{item.period}</p>
                  <p className="mt-3 text-sm muted">{item.description}</p>
                  {item.highlights && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm muted">
                      {item.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  {item.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <li key={t} className="chip-muted">{t}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
