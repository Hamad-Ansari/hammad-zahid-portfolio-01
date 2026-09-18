export interface SkillGroup {
  title: string
  icon: string // lucide icon name key (see Skills.tsx map)
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', icon: 'code', skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
  {
    title: 'Data Analytics',
    icon: 'chart',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Excel', 'Power BI', 'Tableau', 'Exploratory Data Analysis', 'Statistical Analysis'],
  },
  {
    title: 'Machine Learning',
    icon: 'brain',
    skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'Random Forest', 'Linear Regression', 'Logistic Regression', 'Decision Trees', 'Feature Engineering', 'Model Evaluation', 'Hyperparameter Optimization', 'SHAP'],
  },
  { title: 'Deep Learning', icon: 'layers', skills: ['TensorFlow', 'Keras', 'PyTorch', 'CNN', 'Computer Vision', 'Neural Networks'] },
  {
    title: 'Generative AI',
    icon: 'sparkles',
    skills: ['LLMs', 'RAG', 'Embeddings', 'Vector Databases', 'Prompt Engineering', 'Tool Calling', 'Function Calling', 'AI Agents', 'LangChain', 'LangGraph', 'MCP concepts'],
  },
  {
    title: 'AI Engineering',
    icon: 'server',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'REST APIs', 'Docker', 'Git', 'GitHub', 'Environment Management', 'Model Integration'],
  },
  { title: 'Databases', icon: 'database', skills: ['SQL', 'SQLite', 'PostgreSQL concepts', 'SQLAlchemy', 'Vector Databases'] },
]

/** Technology wall. `slug` is used for the simple-icons CDN logo; `color` for the fallback badge. */
export const tools: { name: string; slug?: string; color: string }[] = [
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'Pandas', slug: 'pandas', color: '#150458' },
  { name: 'NumPy', slug: 'numpy', color: '#013243' },
  { name: 'Scikit-learn', slug: 'scikitlearn', color: '#F7931E' },
  { name: 'TensorFlow', slug: 'tensorflow', color: '#FF6F00' },
  { name: 'PyTorch', slug: 'pytorch', color: '#EE4C2C' },
  { name: 'SQL', slug: 'mysql', color: '#4479A1' },
  { name: 'Power BI', color: '#F2C811' },
  { name: 'Excel', color: '#217346' },
  { name: 'Plotly', slug: 'plotly', color: '#3F4F75' },
  { name: 'Matplotlib', color: '#11557C' },
  { name: 'Streamlit', slug: 'streamlit', color: '#FF4B4B' },
  { name: 'FastAPI', slug: 'fastapi', color: '#009688' },
  { name: 'Flask', slug: 'flask', color: '#94a3b8' },
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'Git', slug: 'git', color: '#F05032' },
  { name: 'GitHub', slug: 'github', color: '#e2e8f0' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'LangChain', slug: 'langchain', color: '#1C3C3C' },
  { name: 'LangGraph', slug: 'langgraph', color: '#1C3C3C' },
  { name: 'Ollama', slug: 'ollama', color: '#e2e8f0' },
  { name: 'OpenAI-compatible APIs', slug: 'openai', color: '#10a37f' },
  { name: 'Hugging Face', slug: 'huggingface', color: '#FFD21E' },
  { name: 'Jupyter', slug: 'jupyter', color: '#F37626' },
  { name: 'VS Code', color: '#007ACC' },
  { name: 'Anaconda', slug: 'anaconda', color: '#44A833' },
]

export const agentStack = ['LangGraph', 'LangChain', 'Ollama', 'LLM APIs', 'RAG', 'Tool Calling', 'MCP', 'Vector Search', 'Agents']

export const agentPipeline = ['User', 'AI Agent', 'Reasoning / Planning', 'Tools', 'RAG / Knowledge', 'LLM', 'Action', 'Result']

export const dataWorkflow = [
  'Understand the business problem',
  'Collect data',
  'Load data',
  'Validate data',
  'Clean data',
  'Handle missing values',
  'Remove duplicates',
  'Detect outliers',
  'Explore distributions',
  'Analyze relationships',
  'Engineer features',
  'Build visualizations',
  'Generate insights',
  'Communicate findings',
  'Recommend actions',
]

export const mlWorkflow = [
  { step: 'Problem Definition', icon: 'target' },
  { step: 'Data Collection', icon: 'database' },
  { step: 'Data Cleaning', icon: 'broom' },
  { step: 'EDA', icon: 'search' },
  { step: 'Feature Engineering', icon: 'wrench' },
  { step: 'Train/Test Split', icon: 'split' },
  { step: 'Model Training', icon: 'cpu' },
  { step: 'Evaluation', icon: 'gauge' },
  { step: 'Hyperparameter Tuning', icon: 'sliders' },
  { step: 'Explainability', icon: 'eye' },
  { step: 'Deployment', icon: 'rocket' },
  { step: 'Monitoring', icon: 'activity' },
]
