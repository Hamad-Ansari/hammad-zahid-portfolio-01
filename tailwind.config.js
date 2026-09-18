/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Change brand colors here. Used as bg-accent-blue, text-accent-cyan, etc.
      colors: {
        surface: {
          950: '#05070f',
          900: '#0a0e1a',
          800: '#0f1526',
          700: '#161d33',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,130,246,.45)',
        'glow-cyan': '0 0 40px -10px rgba(34,211,238,.45)',
        'glow-purple': '0 0 40px -10px rgba(168,85,247,.45)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(148,163,184,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.06) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.06) 1px, transparent 1px)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseSoft: { '0%,100%': { opacity: '.6' }, '50%': { opacity: '1' } },
        dash: { to: { strokeDashoffset: '-40' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
        dash: 'dash 2s linear infinite',
      },
    },
  },
  plugins: [],
}
