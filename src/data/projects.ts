export type ProjectCategory =
  | 'AI'
  | 'Machine Learning'
  | 'Data Analytics'
  | 'Generative AI'
  | 'Computer Vision'
  | 'NLP'
  | 'AI Agents'
  | 'Business Intelligence'

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'AI',
  'Machine Learning',
  'Data Analytics',
  'Generative AI',
  'Computer Vision',
  'NLP',
  'AI Agents',
  'Business Intelligence',
]

export type Thumb = 'dashboard' | 'network' | 'chart' | 'vision' | 'shield' | 'text' | 'agent' | 'pipeline'

export interface Project {
  id: string
  title: string
  subtitle: string
  categoryLabel: string
  categories: ProjectCategory[]
  description: string
  tech: string[]
  github?: string
  live?: string
  extraLive?: { label: string; url: string }[]
  thumb: Thumb
  badge?: string
  featured?: boolean
  details: {
    problem: string
    solution: string
    architecture: string[]
    features: string[]
    challenges: string[]
    results: string
    future: string[]
  }
}

const GH = 'https://github.com/Hamad-Ansari'

/** Add a new project by appending an object to this array. */
export const projects: Project[] = [
  {
    id: 'insightai',
    title: 'InsightAI',
    subtitle: 'Autonomous AI Data Analyst',
    categoryLabel: 'Generative AI / Data Analytics / AI Agent',
    categories: ['AI', 'Generative AI', 'Data Analytics', 'AI Agents'],
    description:
      'An AI-powered data analyst application designed to automate the data analysis workflow. Users can upload datasets and receive automated data cleaning, exploratory analysis, visualizations, insights, and analytical outputs.',
    tech: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'LLM', 'Ollama', 'RAG', 'AI Agents'],
    github: `${GH}/InsightAI-Autonomous-AI-Data-Analyst`,
    live: 'https://insightai-autonomous-ai-data-analystapp-xgj5r9xydwx47tzyvd2er4.streamlit.app/',
    extraLive: [
      { label: 'Alternate deployment', url: 'https://insightai-autonomous-ai-data-analystapp-hquqgx4apwatdwqqjwkyt3.streamlit.app/' },
      { label: 'Local-LLM agent repo', url: `${GH}/InsightAI-Local-AI-Data-Analyst-Agent` },
    ],
    thumb: 'agent',
    featured: true,
    details: {
      problem:
        'Exploratory data analysis is repetitive: every new dataset needs profiling, cleaning, visualization and a written summary before real questions can be asked.',
      solution:
        'InsightAI wraps this workflow into one app. Upload a dataset, and the system profiles it, handles common quality issues, produces charts and lets you ask questions in natural language, answered by a local LLM grounded in the actual data.',
      architecture: ['Streamlit UI', 'Pandas / NumPy processing', 'Plotly visualization layer', 'LLM (Ollama) + RAG context', 'Insight generation'],
      features: [
        'Dataset upload (CSV/Excel)',
        'Automated data cleaning',
        'Exploratory data analysis',
        'Missing-value handling',
        'Duplicate detection',
        'Statistical analysis',
        'Interactive visualizations',
        'AI-generated insights',
        'Natural-language data questions',
        'Local LLM integration',
      ],
      challenges: [
        'Keeping LLM answers grounded in real dataset statistics rather than hallucinated numbers',
        'Handling heterogeneous datasets with mixed types and messy headers',
      ],
      results: 'Deployed publicly on Streamlit Cloud; reduces first-pass EDA on a new dataset to a few clicks.',
      future: ['Multi-file joins', 'Persistent analysis sessions', 'Export to PDF/Notebook reports'],
    },
  },
  {
    id: 'datahive',
    title: 'DataHive',
    subtitle: 'Analytics Visualization Studio',
    categoryLabel: 'Data Analytics / Business Intelligence',
    categories: ['Data Analytics', 'Business Intelligence'],
    description:
      'An interactive analytics platform for exploring datasets, generating visualizations, performing exploratory data analysis, and communicating business insights through an intuitive dashboard.',
    tech: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Plotly', 'Matplotlib', 'Data Visualization', 'EDA'],
    github: `${GH}/DataHive-Analytics-Visualization-Studio`,
    live: 'https://datahive-analytics-visualization-studio-juksu7kcdckpz6h9ccsukk.streamlit.app/',
    thumb: 'dashboard',
    featured: true,
    details: {
      problem: 'Business users need to explore data visually without writing code, and analysts need a fast way to prototype charts.',
      solution: 'A dashboard studio where any tabular dataset can be filtered, aggregated and turned into publication-ready Plotly charts in seconds.',
      architecture: ['Streamlit front end', 'Pandas transformation layer', 'Plotly / Matplotlib rendering', 'Export utilities'],
      features: ['Dataset explorer', 'Chart builder (bar, line, scatter, histogram, box, heatmap)', 'Summary statistics', 'Correlation analysis', 'Filter & group-by controls'],
      challenges: ['Designing sensible chart defaults for arbitrary column types', 'Keeping the UI responsive on larger files'],
      results: 'Live on Streamlit Cloud; used as the base for several of my EDA projects.',
      future: ['Saved dashboard layouts', 'SQL data sources', 'Scheduled reports'],
    },
  },
  {
    id: 'researchmind',
    title: 'ResearchMind',
    subtitle: 'AI Research Assistant (RAG)',
    categoryLabel: 'RAG / Generative AI / NLP',
    categories: ['AI', 'Generative AI', 'NLP', 'AI Agents'],
    description:
      'An AI research assistant that uses Retrieval-Augmented Generation to help users interact with research documents and retrieve context-aware answers from uploaded papers.',
    tech: ['Python', 'RAG', 'LLM', 'Embeddings', 'Vector Database', 'LangChain / LangGraph', 'Streamlit', 'Ollama'],
    github: `${GH}/DocuRAG---Intelligent-Document-Q-A-System`,
    thumb: 'text',
    featured: true,
    details: {
      problem: 'Reading and cross-referencing long research PDFs is slow, and generic chatbots cannot cite what a specific paper actually says.',
      solution: 'A RAG pipeline: documents are chunked and embedded into a vector store, relevant passages are retrieved per question, and the LLM answers strictly from that context.',
      architecture: ['PDF ingestion', 'Chunking', 'Embeddings', 'Vector store', 'Semantic retrieval', 'LLM answer with citations'],
      features: ['PDF ingestion', 'Document chunking', 'Embeddings', 'Semantic retrieval', 'Context-aware question answering', 'Research document analysis'],
      challenges: ['Choosing chunk sizes that preserve context without diluting retrieval', 'Running fully local with Ollama for privacy'],
      results: 'Working document Q&A system with source-grounded answers.',
      future: ['Multi-document comparison', 'Citation highlighting in the PDF', 'Agentic literature search'],
    },
  },
  {
    id: 'brain-tumor',
    title: 'Brain Tumor Detection',
    subtitle: 'MRI Classification with CNNs',
    categoryLabel: 'Deep Learning / Computer Vision',
    categories: ['Machine Learning', 'Computer Vision', 'AI'],
    description: 'A deep learning-based computer vision application for classifying brain MRI images.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Streamlit', 'Image Processing'],
    github: `${GH}/Brain-Tumor-Detection`,
    live: 'https://brain-tumor-detection-salik702.streamlit.app/',
    thumb: 'vision',
    badge: 'Educational / research project',
    details: {
      problem: 'Explore how convolutional neural networks can assist in classifying MRI scans, as a learning exercise in medical imaging.',
      solution: 'A CNN trained on a public MRI dataset, wrapped in a Streamlit app that accepts an image and returns a class prediction with confidence.',
      architecture: ['Image preprocessing', 'CNN (TensorFlow/Keras)', 'Prediction service', 'Streamlit UI'],
      features: ['Image upload', 'Preprocessing & normalization', 'CNN inference', 'Confidence display'],
      challenges: ['Class imbalance and small dataset size', 'Avoiding overfitting with augmentation'],
      results: 'Educational demo deployed on Streamlit Cloud. Not intended for clinical use.',
      future: ['Transfer learning with pretrained backbones', 'Grad-CAM explainability'],
    },
  },
  {
    id: 'nids',
    title: 'Network Intrusion Detection',
    subtitle: 'ML-based Traffic Classification',
    categoryLabel: 'Cybersecurity / Machine Learning',
    categories: ['Machine Learning', 'AI'],
    description:
      'A machine learning-based network intrusion detection application trained to classify network traffic and identify potentially malicious patterns.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Machine Learning', 'Data Preprocessing', 'Streamlit'],
    github: `${GH}/-Network-Intrusion-Detection-System-NIDS-`,
    live: 'https://eljapkswaklnaxgzedbngm8.streamlit.app/',
    thumb: 'shield',
    badge: '~99.76% reported test accuracy',
    details: {
      problem: 'Classify network connections as normal or attack traffic from tabular flow features.',
      solution: 'Preprocessing + feature encoding pipeline feeding a Random Forest classifier, exposed through a Streamlit app for interactive prediction.',
      architecture: ['Flow features', 'Encoding & scaling', 'Random Forest', 'Prediction UI'],
      features: ['Data preprocessing', 'Model training & evaluation', 'Interactive prediction', 'Feature importance'],
      challenges: ['Highly imbalanced attack classes', 'Avoiding leakage between train and test splits'],
      results: '~99.76% reported test accuracy on the benchmark dataset. This is a research/learning project and does not imply production security guarantees.',
      future: ['Real-time packet capture', 'Model drift monitoring'],
    },
  },
  {
    id: 'ai-vs-human',
    title: 'AI vs Human Text Detection',
    subtitle: 'NLP Text Classification',
    categoryLabel: 'NLP / Machine Learning',
    categories: ['NLP', 'Machine Learning'],
    description: 'An NLP-focused machine learning project exploring the classification of AI-generated and human-written text.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Text Preprocessing', 'Feature Engineering', 'Classification'],
    github: `${GH}/AI-vs-Human-Text-Detection-using-NLP-Machine-Learning`,
    thumb: 'text',
    details: {
      problem: 'Can statistical text features distinguish LLM-generated writing from human writing?',
      solution: 'Text cleaning, TF-IDF and stylometric features, then comparison of classical classifiers with proper cross-validation.',
      architecture: ['Corpus', 'Text preprocessing', 'Feature extraction', 'Classifier', 'Evaluation'],
      features: ['Text preprocessing', 'Feature engineering', 'Model comparison', 'Evaluation metrics'],
      challenges: ['Generalising across writing domains', 'Avoiding overfitting to dataset artefacts'],
      results: 'Notebook-based study with documented evaluation.',
      future: ['Transformer-based baseline', 'Deploy as an API'],
    },
  },
  {
    id: 'customer-analytics',
    title: 'Customer Analytics',
    subtitle: 'E-Commerce Segmentation & KPIs',
    categoryLabel: 'Data Analytics / Business Intelligence',
    categories: ['Data Analytics', 'Business Intelligence'],
    description:
      'An end-to-end customer and order analytics project focused on understanding purchasing behavior, customer segmentation, sales performance, and business KPIs.',
    tech: ['Python', 'Pandas', 'SQL', 'Excel', 'Power BI', 'Data Visualization'],
    github: `${GH}/Customer-Analytics-Segmentation-Platform-`,
    thumb: 'chart',
    details: {
      problem: 'Turn raw order data into decisions: who are the valuable customers, what sells, and where is revenue leaking?',
      solution: 'RFM segmentation, cohort retention and product performance analysis, reported through dashboards for non-technical stakeholders.',
      architecture: ['Orders data', 'SQL / Pandas modelling', 'Segmentation', 'KPI dashboard'],
      features: ['Customer segmentation', 'Revenue analysis', 'Retention', 'Purchase behaviour', 'Product performance', 'KPI reporting'],
      challenges: ['Defining segments that are actionable rather than just statistically neat'],
      results: 'Clear segment profiles and KPI dashboard.',
      future: ['Churn prediction model', 'Automated weekly reporting'],
    },
  },
  {
    id: 'fitness-vision',
    title: 'AI Fitness Vision',
    subtitle: 'Pose-based Exercise Tracking',
    categoryLabel: 'Computer Vision / AI Application',
    categories: ['Computer Vision', 'AI'],
    description: 'An AI-powered fitness vision application combining computer vision concepts with an interactive application interface.',
    tech: ['Python', 'Computer Vision', 'FastAPI', 'React', 'AI', 'REST API'],
    github: `${GH}/AI-Powered-Push-Up-Counter`,
    thumb: 'pipeline',
    details: {
      problem: 'Count and evaluate exercise repetitions automatically from camera input.',
      solution: 'Pose landmarks are extracted from frames, joint angles drive a repetition state machine, and results are served through an API to a React front end.',
      architecture: ['Frontend (React)', 'API (FastAPI)', 'AI processing (pose estimation)', 'Results'],
      features: ['Pose detection', 'Repetition counting', 'REST API', 'Interactive UI'],
      challenges: ['Latency between frame capture and feedback', 'Robustness to camera angle'],
      results: 'Functional prototype of the full frontend → API → AI pipeline.',
      future: ['More exercise types', 'Form-quality feedback'],
    },
  },
  {
    id: 'scraper-agent',
    title: 'Web Scraping AI Agent',
    subtitle: 'LLM-powered Extraction',
    categoryLabel: 'AI Agent / Automation',
    categories: ['AI Agents', 'AI', 'Generative AI'],
    description: 'An intelligent web scraping workflow designed to combine web extraction with AI-powered processing and structured outputs.',
    tech: ['Python', 'SmartScraperGraph', 'AI Agents', 'Web Scraping', 'LLM', 'Streamlit'],
    github: `${GH}?tab=repositories&q=scrap`,
    thumb: 'agent',
    details: {
      problem: 'Traditional scrapers break whenever page structure changes and produce unstructured output.',
      solution: 'An LLM-driven scraping graph that takes a natural-language extraction goal and returns structured JSON from arbitrary pages.',
      architecture: ['URL + prompt', 'Fetch & parse', 'LLM extraction graph', 'Structured output'],
      features: ['Prompt-driven extraction', 'Structured JSON output', 'Streamlit interface'],
      challenges: ['Token budget on large pages', 'Respecting robots and rate limits'],
      results: 'Working extraction workflow for structured data collection.',
      future: ['Scheduled crawls', 'Multi-page agents'],
    },
  },
  {
    id: 'data-analyst-pro',
    title: 'AI Data Analyst Pro',
    subtitle: 'Multi-format Analytics Platform',
    categoryLabel: 'AI / Analytics / Full-Stack',
    categories: ['AI', 'Data Analytics', 'Generative AI'],
    description:
      'An AI-powered analytics application designed to accept multiple data formats and automate data exploration, visualization, forecasting, and insight generation.',
    tech: ['Python', 'Flask', 'FastAPI', 'React', 'Pandas', 'SQLAlchemy', 'LLM', 'RAG', 'Data Visualization'],
    github: `${GH}/-AI-Data-Analyst-Pro-flask-app`,
    thumb: 'dashboard',
    details: {
      problem: 'Data arrives in many shapes (CSV, XLSX, JSON, SQL, TXT) and analysts waste time on ingestion before analysis.',
      solution: 'A full-stack app with a unified ingestion layer (SQLAlchemy + Pandas), an analysis/forecasting engine, and an LLM layer that explains results.',
      architecture: ['React UI', 'Flask / FastAPI backend', 'SQLAlchemy ingestion', 'Pandas analysis & forecasting', 'LLM + RAG insights'],
      features: ['Supports CSV, XLSX, JSON, SQL, TXT', 'Automated exploration', 'Visualization', 'Forecasting', 'AI insight generation'],
      challenges: ['Normalising very different input formats into one schema', 'Streaming long-running analyses to the UI'],
      results: 'End-to-end working prototype across frontend, API and AI layers.',
      future: ['Auth & multi-user workspaces', 'Dockerised deployment'],
    },
  },
]
