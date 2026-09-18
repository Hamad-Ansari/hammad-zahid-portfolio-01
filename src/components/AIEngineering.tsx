import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Bot, BookOpen, Brain, Cpu, Play, Sparkles, User, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { agentPipeline, agentStack } from '../data/skills'
import { fadeUp, stagger, viewport } from '../lib/motion'

const icons = [User, Bot, Brain, Wrench, BookOpen, Cpu, Play, Sparkles]

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="section overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" aria-hidden="true" />
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="AI Engineering" title="Building Intelligent AI Systems" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="mt-6 text-base leading-relaxed muted">
            I am interested in building AI systems that move beyond simple chat interfaces and can reason over information, use tools, retrieve knowledge, process data, and perform multi-step workflows.
          </motion.p>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-6 flex flex-wrap gap-2">
            {agentStack.map((t) => (
              <motion.li key={t} variants={fadeUp} className="rounded-lg border border-accent-purple/30 bg-accent-purple/10 px-3 py-1.5 font-mono text-xs text-slate-800 dark:text-slate-100">
                {t}
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ['Retrieval', 'Ground answers in your own documents and data with RAG.'],
              ['Tool use', 'Let models call APIs, run analysis and query databases.'],
              ['Orchestration', 'Multi-step graphs with LangGraph for reliable workflows.'],
              ['Local-first', 'Run privately with Ollama and open models when needed.'],
            ].map(([t, d]) => (
              <div key={t} className="card p-4">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{t}</p>
                <p className="mt-1 text-xs muted">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline */}
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mx-auto grid w-full max-w-md grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2 lg:grid-cols-1"
          aria-label="AI agent pipeline"
        >
          {agentPipeline.map((step, i) => {
            const Icon = icons[i]
            return (
              <motion.li key={step} variants={fadeUp} className="relative">
                <div className="card card-hover flex items-center gap-4 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-white" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-slate-500">step {String(i + 1).padStart(2, '0')}</p>
                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{step}</p>
                  </div>
                  {i < agentPipeline.length - 1 && (
                    <span className="ml-auto text-accent-cyan" aria-hidden="true">
                      <ArrowDown size={16} className="sm:hidden lg:block" />
                      <ArrowRight size={16} className="hidden sm:block lg:hidden" />
                    </span>
                  )}
                </div>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
