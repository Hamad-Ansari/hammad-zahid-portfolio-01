import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/certifications'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function Certifications() {
  return (
    <section id="certifications" className="section pt-0">
      <div className="container-x">
        <SectionHeading eyebrow="Certifications" title="Continuous learning" subtitle="Courses, certifications and job simulations completed alongside project work. Entries marked as placeholders are editable in src/data/certifications.ts." />
        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {certifications.map((c) => (
            <motion.li key={c.title} variants={fadeUp} className={`card card-hover flex flex-col overflow-hidden ${c.verified ? '' : 'border-dashed opacity-80'}`}>
              <div className="flex aspect-[16/8] items-center justify-center bg-gradient-to-br from-surface-800 to-surface-950">
                {c.image ? (
                  <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <Award size={36} className="text-accent-cyan/70" aria-hidden="true" />
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold leading-snug text-slate-900 dark:text-white">{c.title}</h3>
                <p className="mt-1 text-xs muted">{c.issuer}</p>
                <p className="font-mono text-[11px] text-slate-500">{c.date}</p>
                <div className="mt-auto pt-3">
                  {c.credentialUrl ? (
                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-accent-cyan hover:underline">
                      View credential <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500">{c.verified ? 'Credential link: add in data file' : 'Placeholder — edit or remove'}</span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
