import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { stats } from '../data/profile'
import { fadeUp, stagger, viewport } from '../lib/motion'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()
  const [n, setN] = useState(reduced ? to : 0)
  useEffect(() => {
    if (!inView || reduced) return
    const start = performance.now()
    const dur = 1200
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, reduced])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section aria-label="Quick stats" className="relative -mt-6 pb-8">
      <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <motion.li key={s.label} variants={fadeUp} className="card card-hover p-5 sm:p-6">
            <p className="text-3xl font-extrabold gradient-text sm:text-4xl">
              {typeof s.value === 'number' ? <Counter to={s.value} suffix={'suffix' in s ? s.suffix : ''} /> : s.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{s.label}</p>
            <p className="mt-1 text-xs muted">{s.note}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
