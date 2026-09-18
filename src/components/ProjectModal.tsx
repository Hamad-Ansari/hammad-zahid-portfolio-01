import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ExternalLink, X } from 'lucide-react'
import { Github } from './BrandIcons'
import ProjectThumb from './ProjectThumb'
import type { Project } from '../data/projects'

interface Props {
  project: Project | null
  onClose: () => void
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed muted">{children}</div>
    </div>
  )
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const prev = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-surface-900 sm:rounded-3xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/50 text-white backdrop-blur hover:bg-black/70"
            >
              <X size={18} />
            </button>

            <div className="aspect-[21/9] w-full overflow-hidden border-b border-slate-200 dark:border-white/10">
              <ProjectThumb kind={project.thumb} title={project.title} />
            </div>

            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-cyan">{project.categoryLabel}</p>
              <h3 id="project-modal-title" className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                {project.title} <span className="font-medium muted">— {project.subtitle}</span>
              </h3>
              {project.badge && <p className="mt-2 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs text-amber-600 dark:text-amber-300">{project.badge}</p>}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2 !text-xs">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 !text-xs">
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.extraLive?.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 !text-xs">
                    <ExternalLink size={14} /> {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <Block title="Project overview">{project.description}</Block>
                <Block title="Problem">{project.details.problem}</Block>
                <Block title="Solution">{project.details.solution}</Block>
                <Block title="Results">{project.details.results}</Block>
              </div>

              <div className="mt-8">
                <h4 className="eyebrow">Architecture</h4>
                <ol className="mt-3 flex flex-wrap items-center gap-2">
                  {project.details.architecture.map((a, i) => (
                    <li key={a} className="flex items-center gap-2">
                      <span className="rounded-lg border border-accent-blue/30 bg-accent-blue/10 px-3 py-1.5 font-mono text-xs text-slate-800 dark:text-slate-100">{a}</span>
                      {i < project.details.architecture.length - 1 && <ArrowRight size={14} className="text-accent-cyan" aria-hidden="true" />}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <Block title="Key features">
                  <ul className="grid list-disc gap-1 pl-5">
                    {project.details.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </Block>
                <div className="space-y-8">
                  <Block title="Challenges">
                    <ul className="list-disc space-y-1 pl-5">
                      {project.details.challenges.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  </Block>
                  <Block title="Future improvements">
                    <ul className="list-disc space-y-1 pl-5">
                      {project.details.future.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  </Block>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="eyebrow">Technology stack</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => <li key={t} className="chip-muted">{t}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
