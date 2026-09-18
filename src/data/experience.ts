export type TimelineKind = 'Education' | 'Independent Projects' | 'AI/ML Development' | 'Data Analytics' | 'Portfolio Development'

export interface TimelineItem {
  kind: TimelineKind
  title: string
  org: string
  period: string
  location?: string
  description: string
  highlights?: string[]
  tags?: string[]
}

/**
 * Verified from the LinkedIn profile export. Add/edit items here.
 * Most recent first.
 */
export const experience: TimelineItem[] = [
  {
    kind: 'Data Analytics',
    title: 'Data Analyst',
    org: 'Decodelabs',
    period: 'Mar 2026 – Apr 2026',
    description: 'Data analysis work spanning cleaning, exploratory analysis, and reporting on real-world datasets.',
    tags: ['Python', 'Pandas', 'EDA', 'Reporting'],
  },
  {
    kind: 'AI/ML Development',
    title: 'Data Science Intern',
    org: 'Pakalign Studio',
    period: 'Sep 2025 – Mar 2026',
    location: 'Lahore',
    description: 'Applied data science and machine learning work, building and evaluating models and translating results for stakeholders.',
    tags: ['Machine Learning', 'Deep Learning', 'Python', 'Visualization'],
  },
  {
    kind: 'Data Analytics',
    title: 'Data Analyst',
    org: 'Elevvo Pathways',
    period: 'Oct 2025 – Dec 2025',
    description: 'Hands-on analytics internship covering survey analysis, web scraping and retail sales analysis end-to-end.',
    highlights: [
      'Titanic data analysis: cleaned missing values, engineered title/family-size features, visualized survival patterns',
      'Hearing survey analysis: preprocessing and exploratory analysis of health-survey trends',
      'LinkedIn web scraping: collected data-science job postings and analyzed skills, salaries and opportunities',
      'Retail sales analysis: product demand and sales-trend EDA',
    ],
    tags: ['EDA', 'Web Scraping', 'Pandas', 'Visualization'],
  },
  {
    kind: 'Independent Projects',
    title: 'Independent AI/ML Projects',
    org: 'Self-directed · GitHub & Kaggle',
    period: '2024 – Present',
    description:
      'Designed and developed practical AI, machine learning, data analytics, and intelligent automation projects using Python and modern AI tooling.',
    highlights: [
      'Data analysis & dashboards (Streamlit, Plotly, Power BI)',
      'Machine learning & deep learning (Scikit-learn, TensorFlow, PyTorch, CNNs, YOLOv8)',
      'LLM applications, RAG pipelines and AI agents (LangChain, LangGraph, Ollama)',
      'API development with FastAPI and Flask',
    ],
    tags: ['Python', 'ML', 'RAG', 'AI Agents', 'Streamlit', 'FastAPI'],
  },
  {
    kind: 'Portfolio Development',
    title: 'Teaching Computer Science (Grades 9–12)',
    org: 'Independent',
    period: 'Ongoing',
    description: 'Teaching computer science fundamentals, which sharpens the skill of breaking complex ideas into clear, usable explanations — the same skill applied to presenting data and model results.',
    tags: ['Communication', 'Fundamentals'],
  },
  {
    kind: 'Education',
    title: 'BS Software Engineering (Computer Science)',
    org: 'Virtual University of Pakistan',
    period: '2023 – Present',
    location: 'Pakistan',
    description: 'Focused on computer science foundations with practical interests in artificial intelligence, machine learning, software engineering, and data analytics.',
    tags: ['Computer Science', 'Software Engineering'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Software Engineering (BS)',
    field: 'Software Engineering · Computer Science',
    school: 'Virtual University of Pakistan',
    location: 'Pakistan',
    period: '2023 – Present',
    description:
      'Focused on computer science foundations with practical interests in artificial intelligence, machine learning, software engineering, and data analytics.',
    coursework: ['Programming', 'Data Structures', 'Databases', 'Software Engineering', 'Statistics', 'Artificial Intelligence'],
  },
]
