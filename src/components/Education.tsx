import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education } from '../data/experience'
import { fadeUp, viewport } from '../lib/motion'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((e) => (
            <motion.article key={e.degree} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="card card-hover relative overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-purple/15 blur-3xl" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-accent-purple text-white" aria-hidden="true">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{e.degree}</h3>
                  <p className="text-sm font-medium text-accent-cyan">{e.field}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{e.school}</p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 font-mono text-xs muted">
                    <span>{e.period}</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed muted">{e.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.coursework.map((c) => <li key={c} className="chip-muted">{c}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
