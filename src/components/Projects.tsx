import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectCategories, projects, type Project } from '../data/projects'

const quickSearch = ['AI', 'ML', 'Python', 'Analytics', 'RAG', 'NLP', 'Computer Vision']

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState<Project | null>(null)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const byCat = filter === 'All' || p.categories.includes(filter)
      if (!byCat) return false
      if (!q) return true
      const hay = [p.title, p.subtitle, p.categoryLabel, p.description, ...p.tech, ...p.categories].join(' ').toLowerCase()
      // "ML" should match "machine learning" too
      const alias = q === 'ml' ? 'machine learning' : q
      return hay.includes(q) || hay.includes(alias)
    })
  }, [filter, query])

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured projects"
          title="Real AI, ML and analytics work — deployed"
          subtitle="A selection of applications and studies spanning generative AI, machine learning, computer vision and data analytics. Click any card for the full breakdown."
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label="Filter projects by category" className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
            {projectCategories.map((c) => {
              const on = c === filter
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={on}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                    on
                      ? 'border-transparent bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-glow'
                      : 'border-slate-200 text-slate-600 hover:border-accent-blue/50 dark:border-white/10 dark:text-slate-300'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Search projects</span>
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: RAG, NLP, Python…"
              className="glass w-full rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent-blue dark:text-white"
            />
          </label>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {quickSearch.map((q) => (
            <button key={q} type="button" onClick={() => setQuery(q === query ? '' : q)} className={`chip-muted transition hover:border-accent-blue/50 ${query === q ? '!border-accent-cyan !text-accent-cyan' : ''}`}>
              {q}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.id} project={p} onOpen={setOpen} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
        {visible.length === 0 && (
          <p className="mt-10 text-center muted" role="status">
            No projects match “{query}” in {filter}. Try another keyword.
          </p>
        )}
        <p className="mt-6 text-center text-sm muted" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
        </p>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  )
}
