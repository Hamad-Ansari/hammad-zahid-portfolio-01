import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { tools } from '../data/skills'
import { fadeUp, stagger, viewport } from '../lib/motion'

function ToolLogo({ name, slug, color }: { name: string; slug?: string; color: string }) {
  const [failed, setFailed] = useState(!slug)
  if (failed) {
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ background: color }} aria-hidden="true">
        {name.slice(0, 2)}
      </span>
    )
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
      alt=""
      width={40}
      height={40}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-10 w-10 object-contain"
    />
  )
}

export default function TechStack() {
  return (
    <section id="tech" className="section pt-0">
      <div className="container-x">
        <SectionHeading eyebrow="Tools & technologies" title="The technology wall" align="center" />
        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9">
          {tools.map((t) => (
            <motion.li key={t.name} variants={fadeUp} whileHover={{ y: -4, scale: 1.04 }} className="card flex flex-col items-center gap-2 p-4 text-center hover:border-accent-blue/40">
              <ToolLogo {...t} />
              <span className="text-[11px] font-medium leading-tight text-slate-700 dark:text-slate-300">{t.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
