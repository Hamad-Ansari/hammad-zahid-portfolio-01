import { Globe, Mail } from 'lucide-react'
import { Github, Kaggle, Linkedin } from './BrandIcons'
import Logo from './Logo'
import { navLinks, profile } from '../data/profile'
import { scrollToId } from '../lib/scroll'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 dark:border-white/10">
      <div className="container-x grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{profile.name}</p>
              <p className="text-xs muted">{profile.shortTitle}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm muted">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => { e.preventDefault(); scrollToId(l.href) }} className="muted hover:text-accent-cyan">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Connect</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[
              { href: profile.links.github, label: 'GitHub', Icon: Github },
              { href: profile.links.linkedin, label: 'LinkedIn', Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
              { href: profile.links.website, label: 'Website', Icon: Globe },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label} className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 hover:border-accent-blue/50 hover:text-accent-cyan dark:text-slate-200">
                  <Icon size={18} />
                </a>
              </li>
            ))}
            <li>
              <a href={profile.links.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 hover:border-accent-blue/50 hover:text-accent-cyan dark:text-slate-200"><Kaggle size={18} /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-10 flex flex-col items-start justify-between gap-2 border-t border-slate-200 pt-6 text-xs muted dark:border-white/10 sm:flex-row sm:items-center">
        <p>© 2026 {profile.name}. All Rights Reserved.</p>
        <p>Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
