/**
 * Central profile/config. Edit this file to change name, links, CV path, etc.
 */
export const profile = {
  name: 'Hammad Zahid',
  initials: 'HZ',
  title: 'AI Engineer | Data Analyst | Machine Learning & Generative AI',
  shortTitle: 'AI Engineer | Data Analyst | Machine Learning | Generative AI',
  tagline: 'Building Intelligent Systems from Data.',
  brandLine: 'By Hammad Zahid | Data Scientist & Analyst',
  heroStatement:
    'Building practical AI, machine learning, data analytics, and intelligent automation solutions with Python.',
  heroAlt: 'I turn data into insights and ideas into intelligent, production-ready applications.',
  statusBadge: 'Open to AI / ML / Data Opportunities',
  location: 'Lahore, Pakistan',
  email: 'mrhammadzahid24@gmail.com',
  // Put the PDF at public/assets/Hammad-Zahid-CV.pdf
  cvPath: '/assets/Hammad-Zahid-CV.pdf',
  // Put an image at public/assets/profile.jpg (optional; falls back to monogram)
  profileImage: '/assets/profile.jpg',
  links: {
    github: 'https://github.com/Hamad-Ansari',
    githubRepos: 'https://github.com/Hamad-Ansari?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/hammad-zahid-xyz/',
    kaggle: 'https://www.kaggle.com/hammadansari7',
    website: 'https://Hammadzahid.com',
    websiteLabel: 'Hammadzahid.com',
  },
  // Optional: Formspree endpoint e.g. 'https://formspree.io/f/xxxxxxxx'. Leave empty to fall back to mailto.
  formspreeEndpoint: '',
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Analytics',
    'Generative AI',
    'AI Agents',
    'Python',
    'Research',
    'Cricket',
    'Anime',
    'Cooking',
  ],
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const

/** Quick stats — qualitative where exact numbers are not verified. */
export const stats = [
  { value: 100, suffix: '+', label: 'Public GitHub Repositories', note: 'Notebooks, apps & experiments' },
  { value: 'AI / ML', label: 'Focused Portfolio', note: 'ML, deep learning, GenAI, agents' },
  { value: 'Python', label: 'Primary Language', note: 'Pandas · Scikit-learn · FastAPI' },
  { value: 'Multiple', label: 'Live Applications', note: 'Deployed Streamlit apps' },
] as const
