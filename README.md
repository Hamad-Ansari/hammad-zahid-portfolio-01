# Hammad Zahid  AI Engineer & Data Analyst Portfolio

A production-quality personal portfolio for **Hammad Zahid**  *AI Engineer | Data Analyst | Machine Learning | Generative AI | Python*.

Dark, premium, AI-themed single-page site built with React + Vite + TypeScript + Tailwind + Framer Motion. All content lives in `src/data/`, so updating projects, skills, links and certifications never requires touching UI code.

---

## Features

- Sticky glass navbar with active-section tracking, mobile hamburger menu, theme toggle and CV CTA
- Hero with an interactive, lightweight canvas neural-network (nodes: Python, Data, ML, LLM, RAG, Agents, API, Dashboard)
- Animated quick stats (count-up), About, Professional Journey timeline
- Featured projects grid with **category filters**, **keyword search**, hover effects and a full **details modal** (problem, solution, architecture, features, challenges, results, future work, links)
- "Building Intelligent AI Systems" agent pipeline, interactive **Data Analytics workflow** (15 steps), **ML lifecycle** pipeline
- Skills by category, technology wall, Education, Certifications, GitHub/Kaggle section (contribution chart, featured repos, language distribution — no API token needed)
- Contact cards + contact form (Formspree-ready; falls back to `mailto:` on static hosting)
- **Command palette (Ctrl/⌘ + K)**, light/dark mode (dark default), scroll progress bar, back-to-top button
- Accessible: semantic HTML, heading hierarchy, focus states, keyboard navigation, `prefers-reduced-motion`, skip link, aria labels
- SEO: title, description, Open Graph/Twitter tags, canonical, JSON-LD `Person` schema, SVG favicon
- Code-split sections, tiny generated SVG thumbnails, no heavy 3D libraries

## Tech stack

React 19 · Vite · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React

## Folder structure

```
├── index.html                # SEO / meta / fonts / JSON-LD
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── Hammad-Zahid-CV.pdf   ← put your CV here
│       └── profile.jpg           ← put your photo here
├── src/
│   ├── components/           # Navbar, Hero, About, Experience, Projects, ProjectCard,
│   │                         # ProjectModal, AIEngineering, DataWorkflow, MLWorkflow,
│   │                         # Skills, TechStack, Education, Certifications, OpenSource,
│   │                         # Contact, Footer, CommandPalette, ScrollProgress, BackToTop…
│   ├── data/
│   │   ├── profile.ts        # name, titles, links, email, CV path, nav, stats
│   │   ├── projects.ts       # all project cards + modal details
│   │   ├── skills.ts         # skill groups, tech wall, workflows, agent pipeline
│   │   ├── experience.ts     # timeline + education
│   │   ├── certifications.ts
│   │   └── github.ts         # featured repos + language distribution
│   ├── hooks/                # useTheme, useActiveSection
│   ├── lib/                  # motion variants, scroll helper
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Tailwind layers + design tokens
├── tailwind.config.js        # colors, fonts, shadows, animations
├── vite.config.ts
└── .github/workflows/deploy.yml  # GitHub Pages CI
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deployment

### Vercel
1. Push the repo to GitHub.
2. In Vercel → **New Project** → import the repo. Framework preset: **Vite** (auto-detected). Build `npm run build`, output `dist`.
3. Deploy. `vercel.json` already handles SPA rewrites. Add your custom domain (e.g. `hammadzahid.com`) under *Settings → Domains*.

### Netlify
Import the repo; `netlify.toml` sets the build command and publish dir. Or drag-and-drop the `dist/` folder.

### GitHub Pages
**Option A — GitHub Actions (recommended):** the included workflow builds and deploys on every push to `main`.
1. Repo → *Settings → Pages → Source: GitHub Actions*.
2. Push to `main`. The site appears at `https://<user>.github.io/<repo>/`.
3. If you use a **user site** (`<user>.github.io` repo) or a **custom domain**, edit the workflow's build line to plain `npm run build` (no base path) and add a `public/CNAME` file containing your domain.

**Option B — gh-pages CLI:**
```bash
VITE_BASE_PATH=/<repo-name>/ npm run build && npx gh-pages -d dist
```

## Customization

| Task | Where |
|---|---|
| **Replace CV** | Save your PDF as `public/assets/Hammad-Zahid-CV.pdf`. To rename, change `cvPath` in `src/data/profile.ts`. |
| **Replace profile image** | Save as `public/assets/profile.jpg` (portrait, ~800×1000). Until then a monogram placeholder is shown. Change path via `profileImage` in `profile.ts`. |
| **Add a project** | Append an object to the `projects` array in `src/data/projects.ts`. Set `categories` (drives filters), `thumb` (`dashboard` · `network` · `chart` · `vision` · `shield` · `text` · `agent` · `pipeline`), links and `details`. To use a real screenshot, add a field and swap `<ProjectThumb>` for an `<img>` in `ProjectCard.tsx`/`ProjectModal.tsx`. |
| **Change social links / email** | `links` and `email` in `src/data/profile.ts` (used by hero, contact, footer, command palette, JSON-LD in `index.html`). |
| **Change colors** | `tailwind.config.js` → `theme.extend.colors.accent` (`blue`, `cyan`, `purple`) and `surface`. Glow shadows are in `boxShadow`. |
| **Update skills / tools** | `src/data/skills.ts` — `skillGroups`, `tools` (tech wall), `agentStack`, workflows. |
| **Update certifications** | `src/data/certifications.ts` — fill `issuer`, `date`, `credentialUrl`, `image` (put files in `public/assets/certs/`). Set `verified: true` and delete placeholder entries. |
| **Experience / education** | `src/data/experience.ts`. |
| **GitHub highlights** | `src/data/github.ts`. |
| **Contact form** | Create a free form at formspree.io and paste the endpoint into `formspreeEndpoint` in `profile.ts`. Empty = opens the visitor's email client. |
| **Quick stats** | `stats` in `profile.ts`. |

## Data accuracy

Experience, education, certification titles, email and LinkedIn URL were taken from the LinkedIn profile export; repository links from the public GitHub account. Certification issuers/dates marked **"Add …"** and entries marked **Placeholder** must be completed or removed before publishing.

## License

© 2026 Hammad Zahid. All rights reserved. Code may be reused for your own portfolio; please don't reuse the personal content.
