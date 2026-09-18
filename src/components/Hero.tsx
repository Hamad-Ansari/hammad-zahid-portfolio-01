import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import NeuralNetwork from './NeuralNetwork'
import { profile } from '../data/profile'
import { fadeUp, stagger } from '../lib/motion'
import { scrollToId } from '../lib/scroll'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[140px] dark:bg-accent-blue/15" aria-hidden="true" />
      <div className="absolute -bottom-40 right-0 h-[420px] w-[520px] rounded-full bg-accent-purple/20 blur-[140px] dark:bg-accent-purple/15" aria-hidden="true" />
      <div className="absolute inset-0 opacity-60 dark:opacity-80">
        <NeuralNetwork />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.statusBadge}
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-extrabold leading-[1.05] text-slate-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold sm:text-xl lg:text-2xl">
            <span className="gradient-text">AI Engineer</span>
            <span className="text-slate-400"> | </span>
            <span className="text-slate-800 dark:text-slate-100">Data Analyst</span>
            <span className="text-slate-400"> | </span>
            <span className="text-slate-800 dark:text-slate-100">Machine Learning &amp; Generative AI</span>
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            {profile.heroStatement}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 font-mono text-sm text-slate-500">
            &gt; {profile.heroAlt}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={16} className="text-accent-cyan" /> {profile.location}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => scrollToId('#projects')} className="btn-primary">
              View My Projects <ArrowRight size={16} />
            </button>
            <a href={profile.cvPath} download className="btn-secondary">
              <Download size={16} /> Download CV
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="GitHub profile">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="LinkedIn profile">
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="card relative overflow-hidden p-5 sm:p-6">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-cyan/20 blur-3xl" aria-hidden="true" />
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/10">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-slate-500">hammad_zahid.py</span>
            </div>
            <pre className="scrollbar-none mt-4 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[13px]">
              <code>
                <span className="text-accent-purple">class</span> <span className="text-accent-cyan">HammadZahid</span>:{'\n'}
                {'    '}role = <span className="text-emerald-500">"AI Engineer | Data Analyst"</span>{'\n'}
                {'    '}location = <span className="text-emerald-500">"Lahore, Pakistan"</span>{'\n'}
                {'    '}focus = [<span className="text-emerald-500">"ML"</span>, <span className="text-emerald-500">"GenAI"</span>, <span className="text-emerald-500">"RAG"</span>, <span className="text-emerald-500">"Agents"</span>]{'\n'}
                {'\n'}
                {'    '}<span className="text-accent-purple">def</span> <span className="text-accent-blue">build</span>(self, data):{'\n'}
                {'        '}insights = self.analyze(data){'\n'}
                {'        '}model = self.train(insights){'\n'}
                {'        '}<span className="text-accent-purple">return</span> self.deploy(model)  <span className="text-slate-500"># usable app</span>
              </code>
            </pre>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ['Data', 'Understand'],
                ['AI / ML', 'Build'],
                ['Apps', 'Ship'],
              ].map(([a, b]) => (
                <div key={a} className="rounded-xl border border-slate-200 bg-slate-50/60 px-2 py-3 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{a}</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-xs text-slate-500">{profile.tagline}</p>
        </motion.div>
      </div>
    </section>
  )
}
