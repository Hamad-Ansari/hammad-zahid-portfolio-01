import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const LABELS = ['Python', 'Data', 'ML', 'LLM', 'RAG', 'Agents', 'API', 'Dashboard']

/**
 * Lightweight canvas neural-network visual for the hero.
 * Labeled nodes drift gently, connect to nearby nodes, and react subtly to the pointer.
 */
export default function NeuralNetwork() {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }

    type Node = { x: number; y: number; vx: number; vy: number; r: number; label?: string; hue: number }
    let nodes: Node[] = []

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = w < 640 ? 22 : 40
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: i < LABELS.length ? 5 : 1.5 + Math.random() * 1.5,
        label: i < LABELS.length ? LABELS[i] : undefined,
        hue: [210, 190, 270][i % 3],
      }))
    }

    const dark = () => document.documentElement.classList.contains('dark')

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const isDark = dark()
      const link = 140
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < link) {
            const alpha = (1 - d / link) * (isDark ? 0.35 : 0.25)
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 90%, 65%, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        const md = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        const boost = md < 120 ? (1 - md / 120) * 1.6 : 0
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + boost, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${n.hue}, 90%, ${isDark ? 70 : 55}%, ${n.label ? 0.95 : 0.7})`
        ctx.shadowBlur = n.label ? 14 : 0
        ctx.shadowColor = `hsla(${n.hue}, 90%, 60%, .8)`
        ctx.fill()
        ctx.shadowBlur = 0
        if (n.label) {
          ctx.font = '500 11px JetBrains Mono, monospace'
          ctx.fillStyle = isDark ? 'rgba(226,232,240,.85)' : 'rgba(30,41,59,.85)'
          ctx.fillText(n.label, n.x + 10, n.y + 4)
        }
      }
    }

    const step = () => {
      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
        }
      }
      draw()
      if (!reduced) raf = requestAnimationFrame(step)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      if (reduced) draw()
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const ro = new ResizeObserver(() => {
      build()
      if (reduced) draw()
    })

    build()
    ro.observe(canvas)
    step()
    const parent = canvas.parentElement ?? canvas
    parent.addEventListener('pointermove', onMove)
    parent.addEventListener('pointerleave', onLeave)
    const io = new IntersectionObserver(([e]) => {
      if (reduced) return
      if (e.isIntersecting) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(step)
      } else cancelAnimationFrame(raf)
    })
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced])

  return <canvas ref={ref} aria-hidden="true" className="h-full w-full" />
}
