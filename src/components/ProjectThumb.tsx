import type { Thumb } from '../data/projects'

/** Lightweight generated SVG thumbnails that reflect each project category. */
export default function ProjectThumb({ kind, title }: { kind: Thumb; title: string }) {
  const id = `g-${kind}`
  return (
    <svg viewBox="0 0 400 220" role="img" aria-label={`${title} thumbnail`} className="h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f1526" />
          <stop offset="1" stopColor="#161d33" />
        </linearGradient>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset=".5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="rgba(148,163,184,.08)" />
        </pattern>
      </defs>
      <rect width="400" height="220" fill={`url(#${id})`} />
      <rect width="400" height="220" fill={`url(#${id}-grid)`} />
      <circle cx="330" cy="40" r="90" fill="#3b82f6" opacity=".08" />
      <circle cx="60" cy="200" r="80" fill="#a855f7" opacity=".08" />
      {kind === 'dashboard' && (
        <g>
          <rect x="30" y="30" width="110" height="50" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
          <rect x="150" y="30" width="110" height="50" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
          <rect x="270" y="30" width="100" height="50" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
          <rect x="30" y="95" width="200" height="95" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x={45 + i * 26} y={170 - (i * 13 + (i % 2) * 20)} width="16" height={20 + i * 13 + (i % 2) * 20} rx="3" fill={`url(#${id}-a)`} opacity=".85" />
          ))}
          <rect x="240" y="95" width="130" height="95" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
          <circle cx="305" cy="142" r="30" fill="none" stroke="#22d3ee" strokeWidth="10" strokeDasharray="120 70" />
          <circle cx="305" cy="142" r="30" fill="none" stroke="#a855f7" strokeWidth="10" strokeDasharray="50 140" strokeDashoffset="-120" />
        </g>
      )}
      {kind === 'chart' && (
        <g>
          <polyline points="30,170 90,140 150,150 210,100 270,110 330,60 370,70" fill="none" stroke={`url(#${id}-a)`} strokeWidth="3" />
          <polygon points="30,170 90,140 150,150 210,100 270,110 330,60 370,70 370,190 30,190" fill="#22d3ee" opacity=".12" />
          {[30, 90, 150, 210, 270, 330, 370].map((x, i) => (
            <circle key={x} cx={x} cy={[170, 140, 150, 100, 110, 60, 70][i]} r="4" fill="#fff" />
          ))}
          <rect x="30" y="30" width="80" height="30" rx="6" fill="rgba(255,255,255,.06)" />
          <rect x="120" y="30" width="80" height="30" rx="6" fill="rgba(255,255,255,.06)" />
        </g>
      )}
      {kind === 'network' && <Nodes id={id} />}
      {kind === 'agent' && (
        <g>
          <Nodes id={id} />
          <rect x="140" y="88" width="120" height="44" rx="10" fill="#0a0e1a" stroke={`url(#${id}-a)`} strokeWidth="1.5" />
          <text x="200" y="115" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#e2e8f0">
            {'{ agent }'}
          </text>
        </g>
      )}
      {kind === 'vision' && (
        <g>
          <rect x="120" y="40" width="160" height="140" rx="10" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.12)" />
          <circle cx="200" cy="110" r="42" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="200" cy="110" r="22" fill="#3b82f6" opacity=".35" />
          <path d="M130 50h20M130 50v20M270 50h-20M270 50v20M130 170h20M130 170v-20M270 170h-20M270 170v-20" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
          <rect x="30" y="60" width="60" height="8" rx="4" fill="rgba(255,255,255,.1)" />
          <rect x="30" y="80" width="40" height="8" rx="4" fill="rgba(255,255,255,.08)" />
          <rect x="310" y="60" width="60" height="8" rx="4" fill="rgba(255,255,255,.1)" />
          <rect x="310" y="80" width="40" height="8" rx="4" fill="rgba(255,255,255,.08)" />
        </g>
      )}
      {kind === 'shield' && (
        <g>
          <path d="M200 30l70 25v50c0 45-30 75-70 90-40-15-70-45-70-90V55z" fill="rgba(59,130,246,.15)" stroke={`url(#${id}-a)`} strokeWidth="2" />
          <path d="M175 110l18 18 34-38" fill="none" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={30} y={50 + i * 28} width={60 + (i % 3) * 15} height="8" rx="4" fill="rgba(255,255,255,.08)" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={310 - (i % 2) * 20} y={50 + i * 28} width={60 + (i % 2) * 20} height="8" rx="4" fill="rgba(255,255,255,.08)" />
          ))}
        </g>
      )}
      {kind === 'text' && (
        <g fontFamily="JetBrains Mono, monospace" fontSize="11">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x="40" y={40 + i * 22} width={[300, 260, 320, 200, 280, 240, 180][i]} height="9" rx="4" fill="rgba(255,255,255,.08)" />
          ))}
          <rect x="40" y="84" width="140" height="9" rx="4" fill="#22d3ee" opacity=".6" />
          <rect x="210" y="128" width="110" height="9" rx="4" fill="#a855f7" opacity=".6" />
          <rect x="250" y="150" width="120" height="40" rx="10" fill="#0a0e1a" stroke={`url(#${id}-a)`} strokeWidth="1.5" />
          <text x="310" y="175" textAnchor="middle" fill="#e2e8f0">
            embeddings
          </text>
        </g>
      )}
      {kind === 'pipeline' && (
        <g>
          {['UI', 'API', 'AI', 'Out'].map((t, i) => (
            <g key={t}>
              <rect x={30 + i * 90} y="85" width="70" height="50" rx="10" fill="rgba(255,255,255,.05)" stroke={`url(#${id}-a)`} strokeWidth="1.5" />
              <text x={65 + i * 90} y="115" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#e2e8f0">
                {t}
              </text>
              {i < 3 && <path d={`M${100 + i * 90} 110h20`} stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrow)" />}
            </g>
          ))}
          <polyline points="40,190 100,170 160,180 220,160 280,165 340,150" fill="none" stroke="#a855f7" strokeWidth="2" opacity=".6" />
        </g>
      )}
    </svg>
  )
}

function Nodes({ id }: { id: string }) {
  const pts = [
    [60, 60], [60, 110], [60, 160], [200, 50], [200, 110], [200, 170], [340, 80], [340, 140],
  ]
  return (
    <g>
      {pts.slice(0, 3).map(([x, y]) => pts.slice(3, 6).map(([x2, y2]) => <line key={`${x}${y}${x2}${y2}`} x1={x} y1={y} x2={x2} y2={y2} stroke="rgba(148,163,184,.25)" />))}
      {pts.slice(3, 6).map(([x, y]) => pts.slice(6).map(([x2, y2]) => <line key={`${x}${y}${x2}${y2}`} x1={x} y1={y} x2={x2} y2={y2} stroke="rgba(148,163,184,.25)" />))}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill={`url(#${id}-a)`} />
      ))}
    </g>
  )
}
