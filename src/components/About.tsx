import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Database, Rocket } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'
import { fadeUp, stagger, viewport } from '../lib/motion'

const pillars = [
  { icon: Database, title: 'I understand data', text: 'Cleaning, validating, exploring and explaining real-world datasets.' },
  { icon: Brain, title: 'I build AI/ML systems', text: 'Classical ML, deep learning, LLMs, RAG pipelines and AI agents.' },
  { icon: Rocket, title: 'I ship usable apps', text: 'Streamlit, FastAPI, Flask and React front ends around the models.' },
]

export default function About() {
  const [imgOk, setImgOk] = useState(true)
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-accent-blue/40 via-accent-cyan/20 to-accent-purple/40 blur-2xl" aria-hidden="true" />
          <div className="card relative aspect-[4/5] overflow-hidden rounded-3xl">
            {imgOk ? (
              <img
                src={profile.profileImage}
                alt={`Portrait of ${profile.name}`}
                loading="lazy"
                onError={() => setImgOk(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-surface-800 to-surface-950 text-center">
                <span className="text-7xl font-extrabold gradient-text">HZ</span>
                <p className="mt-3 px-6 font-mono text-xs text-slate-400">Add your photo at public/assets/profile.jpg</p>
              </div>
            )}
            <div className="absolute inset-x-4 bottom-4 glass rounded-2xl px-4 py-3">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.brandLine}</p>
              <p className="text-xs muted">{profile.location}</p>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeading eyebrow="About me" title="Turning data into decisions and ideas into applications" />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-6 space-y-4 text-base leading-relaxed muted">
            <motion.p variants={fadeUp}>
              My name is Hammad Zahid, a Computer Science professional focused on Artificial Intelligence, Machine Learning, Data Analytics, and Generative AI. I enjoy transforming raw data into meaningful insights and building intelligent applications that solve practical problems.
            </motion.p>
            <motion.p variants={fadeUp}>
              My work combines Python, data analysis, machine learning, deep learning, LLMs, RAG, AI agents, APIs, dashboards, and modern application development. I have built projects ranging from autonomous data analyst applications and machine learning prediction systems to computer vision, cybersecurity detection, research assistants, and AI-powered automation workflows.
            </motion.p>
            <motion.p variants={fadeUp}>
              I am continuously improving my technical skills through hands-on projects and real-world problem solving, with a strong interest in AI engineering, machine learning, data analytics, and intelligent automation.
            </motion.p>
            <motion.blockquote variants={fadeUp} className="border-l-2 border-accent-cyan pl-4 text-slate-800 dark:text-slate-200">
              I believe the best AI systems are not just about using a powerful model. They are about building reliable pipelines around data, models, retrieval, APIs, evaluation, user experience, and business requirements.
            </motion.blockquote>
          </motion.div>

          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-8 grid gap-3 sm:grid-cols-3">
            {pillars.map((p) => (
              <motion.li key={p.title} variants={fadeUp} className="card card-hover p-4">
                <p.icon className="text-accent-cyan" size={20} aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{p.title}</p>
                <p className="mt-1 text-xs muted">{p.text}</p>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-8">
            <p className="eyebrow">Interests</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <li key={i} className="chip-muted">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
