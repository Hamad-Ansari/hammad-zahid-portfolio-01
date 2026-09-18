import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Globe, Mail, MapPin, Send } from 'lucide-react'
import { Github, Kaggle, Linkedin } from './BrandIcons'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'
import { fadeUp, stagger, viewport } from '../lib/motion'

const cards = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: 'GitHub', value: 'github.com/Hamad-Ansari', href: profile.links.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/hammad-zahid-xyz', href: profile.links.linkedin },
  { icon: Kaggle, label: 'Kaggle', value: 'kaggle.com/hammadansari7', href: profile.links.kaggle },
  { icon: Globe, label: 'Website', value: profile.links.websiteLabel, href: profile.links.website },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? '')
    const message = String(data.get('message') ?? '')

    // No backend configured → open the visitor's email client with the message pre-filled.
    if (!profile.formspreeEndpoint) {
      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject || 'Portfolio contact')}&body=${body}`
      return
    }

    setStatus('sending')
    setError('')
    try {
      const res = await fetch(profile.formspreeEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  const field = 'glass w-full rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent-blue dark:text-white'

  return (
    <section id="contact" className="section">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent-blue/10 to-transparent" aria-hidden="true" />
      <div className="container-x">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Intelligent." subtitle="I'm open to opportunities involving AI engineering, machine learning, data analytics, generative AI, and intelligent automation." />

        <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c) => (
              <motion.li key={c.label} variants={fadeUp}>
                <a href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="card card-hover flex items-center gap-4 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-cyan" aria-hidden="true">
                    <c.icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider muted">{c.label}</p>
                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{c.value}</p>
                  </div>
                </a>
              </motion.li>
            ))}
            <motion.li variants={fadeUp} className="card flex items-center gap-4 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-cyan" aria-hidden="true"><MapPin size={20} /></span>
              <div>
                <p className="text-xs uppercase tracking-wider muted">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.location}</p>
              </div>
            </motion.li>
          </motion.ul>

          <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate={false}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-slate-700 dark:text-slate-300">Name</span>
                <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-slate-700 dark:text-slate-300">Email</span>
                <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-medium text-slate-700 dark:text-slate-300">Subject</span>
              <input name="subject" required className={field} placeholder="Internship, project, collaboration…" />
            </label>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-medium text-slate-700 dark:text-slate-300">Message</span>
              <textarea name="message" required rows={5} className={field} placeholder="Tell me a bit about what you're building." />
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn-primary">
                <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              <p className="text-xs muted" role="status" aria-live="polite">
                {status === 'sent' && 'Thanks — your message has been sent.'}
                {status === 'error' && `Could not send: ${error}. Email me directly instead.`}
                {status === 'idle' && !profile.formspreeEndpoint && 'Opens your email client (no backend on this static site).'}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
