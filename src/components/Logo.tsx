export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="relative inline-flex shrink-0 items-center justify-center rounded-xl bg-surface-900 ring-1 ring-white/10"
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-blue/30 via-accent-cyan/20 to-accent-purple/30 blur-[6px]" />
      <span className="relative font-extrabold tracking-tight gradient-text" style={{ fontSize: size * 0.42 }}>
        HZ
      </span>
    </span>
  )
}
