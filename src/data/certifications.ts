export interface Certification {
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  image?: string // e.g. '/assets/certs/python-ka-chilla.png'
  verified: boolean
}

/**
 * Titles below are listed on the LinkedIn profile. Issuer/date/credential fields
 * are placeholders where not verified — fill them in from the actual certificates.
 * Certificate files repo: https://github.com/Hamad-Ansari/certificates
 */
export const certifications: Certification[] = [
  { title: 'Python ka Chilla for Data Science', issuer: 'Codanics', date: 'Add date', verified: true },
  { title: 'Tableau Certified', issuer: 'Add issuer', date: 'Add date', verified: true },
  { title: 'What is Data Science?', issuer: 'Add issuer', date: 'Add date', verified: true },
  { title: 'Statistical Analysis of Data for Researchers', issuer: 'Add issuer', date: 'Add date', verified: true },
  { title: 'Bank of America – Global Markets Sales & Trading Analyst Job Simulation', issuer: 'Forage', date: 'Add date', verified: true },
  { title: 'Machine Learning Certification', issuer: 'Placeholder – edit', date: 'Add date', verified: false },
  { title: 'AI / Generative AI Certification', issuer: 'Placeholder – edit', date: 'Add date', verified: false },
  { title: 'SQL Certification', issuer: 'Placeholder – edit', date: 'Add date', verified: false },
]
