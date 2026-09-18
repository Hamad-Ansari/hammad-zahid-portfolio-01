import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../lib/motion'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : ''}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-sub ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </motion.div>
  )
}
