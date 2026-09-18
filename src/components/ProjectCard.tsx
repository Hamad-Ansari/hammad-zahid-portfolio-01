import { motion } from 'framer-motion'
import { ExternalLink, Info } from 'lucide-react'
import { Github } from './BrandIcons'
import ProjectThumb from './ProjectThumb'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  onOpen: (p: Project) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-200 text-left dark:border-white/10"
        aria-label={`Open details for ${project.title}`}
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectThumb kind={project.thumb} title={project.title} />
        </div>
        {project.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            {project.badge}
          </span>
        )}
        {project.live && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Live
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">{project.categoryLabel}</p>
        <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{project.subtitle}</p>
        <p className="mt-3 line-clamp-3 text-sm muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.slice(0, 5).map((t) => (
            <li key={t} className="chip-muted !px-2 !py-0.5 !text-[11px]">{t}</li>
          ))}
          {project.tech.length > 5 && <li className="chip-muted !px-2 !py-0.5 !text-[11px]">+{project.tech.length - 5}</li>}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 pt-4 dark:border-white/10">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary !px-3 !py-2 !text-xs">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-3 !py-2 !text-xs">
              <Github size={14} /> GitHub
            </a>
          )}
          <button type="button" onClick={() => onOpen(project)} className="btn-secondary ml-auto !px-3 !py-2 !text-xs">
            <Info size={14} /> Details
          </button>
        </div>
      </div>
    </motion.article>
  )
}
