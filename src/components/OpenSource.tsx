import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import { Github, Kaggle } from './BrandIcons'
import SectionHeading from './SectionHeading'
import { featuredRepos, githubUser, techDistribution } from '../data/github'
import { profile } from '../data/profile'
import { fadeUp, stagger, viewport } from '../lib/motion'

const langColor: Record<string, string> = { Python: '#3776AB', 'Jupyter Notebook': '#F37626', TypeScript: '#3178c6' }

export default function OpenSource() {
  return (
    <section id="github" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="GitHub & Kaggle" title="Explore my code and data science work" subtitle="Over a hundred public repositories of notebooks, apps and experiments, plus datasets and notebooks on Kaggle." />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_.9fr]">
          <div className="space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="card overflow-hidden p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Contribution activity</h3>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-accent-cyan hover:underline">@{githubUser}</a>
              </div>
              {/* Public contribution chart — no token required. Falls back gracefully if blocked. */}
              <img
                src={`https://ghchart.rshah.org/3b82f6/${githubUser}`}
                alt={`GitHub contribution graph for ${githubUser}`}
                loading="lazy"
                className="mt-4 w-full rounded-lg dark:opacity-90"
              />
            </motion.div>

            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid gap-3 sm:grid-cols-2">
              {featuredRepos.map((r) => (
                <motion.li key={r.name} variants={fadeUp}>
                  <a href={`https://github.com/${githubUser}/${r.name}`} target="_blank" rel="noopener noreferrer" className="card card-hover group flex h-full flex-col p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="break-all font-mono text-xs font-semibold text-slate-900 dark:text-white">{r.name}</p>
                      <ArrowUpRight size={14} className="shrink-0 text-slate-400 transition group-hover:text-accent-cyan" aria-hidden="true" />
                    </div>
                    <p className="mt-2 text-xs muted">{r.desc}</p>
                    <p className="mt-auto flex items-center gap-1.5 pt-3 text-[11px] text-slate-500">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: langColor[r.lang] ?? '#a855f7' }} aria-hidden="true" /> {r.lang}
                    </p>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="card p-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Technology distribution</h3>
              <p className="mt-1 text-xs muted">Approximate share of primary language across public repos.</p>
              <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10" role="img" aria-label="Language distribution bar">
                {techDistribution.map((t) => (
                  <span key={t.name} style={{ width: `${t.pct}%`, background: t.color }} />
                ))}
              </div>
              <ul className="mt-4 space-y-2">
                {techDistribution.map((t) => (
                  <li key={t.name} className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300"><span className="h-2.5 w-2.5 rounded-full" style={{ background: t.color }} />{t.name}</span>
                    <span className="font-mono muted">{t.pct}%</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.a variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} href={profile.links.githubRepos} target="_blank" rel="noopener noreferrer" className="card card-hover group flex items-center gap-4 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900" aria-hidden="true"><Github size={22} /></span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Explore My Code</p>
                <p className="text-xs muted">All repositories on GitHub</p>
              </div>
              <ArrowUpRight className="ml-auto text-slate-400 group-hover:text-accent-cyan" aria-hidden="true" />
            </motion.a>

            <motion.a variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} href={profile.links.kaggle} target="_blank" rel="noopener noreferrer" className="card card-hover group flex items-center gap-4 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#20BEFF] text-white" aria-hidden="true"><Kaggle size={22} /></span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Explore My Data Science Work</p>
                <p className="text-xs muted">Datasets & notebooks on Kaggle</p>
              </div>
              <ArrowUpRight className="ml-auto text-slate-400 group-hover:text-accent-cyan" aria-hidden="true" />
            </motion.a>

            <div className="card flex items-center gap-3 p-4 text-xs muted">
              <Star size={14} className="text-amber-400" aria-hidden="true" />
              Repository highlights are maintained in <code className="font-mono">src/data/github.ts</code>.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
