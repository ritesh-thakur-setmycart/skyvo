export const techCategories = [
  {
    id: 'llm',
    label: 'LLM Platforms',
    items: [
      { name: 'OpenAI', detail: 'GPT-4, GPT-4 Turbo, GPT-4o', badge: 'Industry Leader' },
      { name: 'Anthropic', detail: 'Claude 3.5 Sonnet, Claude 3 Opus', badge: 'Advanced Reasoning' },
      { name: 'Google AI', detail: 'Gemini 1.5 Pro, Vertex AI', badge: 'Multimodal' },
      { name: 'Meta', detail: 'Llama 3, Code Llama', badge: 'Open Source' },
      { name: 'Mistral AI', detail: 'Mixtral 8x7B', badge: 'Multilingual' },
    ]
  },
  {
    id: 'frameworks',
    label: 'AI Frameworks',
    items: [
      { name: 'LangChain', detail: 'Building complex LLM applications', badge: 'Orchestration' },
      { name: 'LlamaIndex', detail: 'Data framework for LLM apps', badge: 'Data' },
      { name: 'CrewAI', detail: 'Multi-agent orchestration', badge: 'Agents' },
      { name: 'AutoGen', detail: 'Agentic conversation frameworks', badge: 'Agents' },
      { name: 'Semantic Kernel', detail: "Microsoft's AI orchestration", badge: 'Microsoft' },
      { name: 'Haystack', detail: 'NLP pipeline framework', badge: 'NLP' },
    ]
  },
  {
    id: 'vector',
    label: 'Vector Databases',
    items: [
      { name: 'Pinecone', detail: 'High-performance vector search', badge: 'Search' },
      { name: 'Weaviate', detail: 'Open-source vector database', badge: 'Open Source' },
      { name: 'ChromaDB', detail: 'Embedding database for AI', badge: 'Embeddings' },
      { name: 'Qdrant', detail: 'High-performance vector engine', badge: 'Search' },
      { name: 'Milvus', detail: 'Cloud-native vector database', badge: 'Cloud' },
    ]
  },
  {
    id: 'mlops',
    label: 'MLOps & Deployment',
    items: [
      { name: 'Docker & Kubernetes', detail: 'Containerization and orchestration', badge: 'DevOps' },
      { name: 'AWS SageMaker', detail: 'End-to-end ML platform', badge: 'AWS' },
      { name: 'Azure AI', detail: 'Microsoft cloud AI services', badge: 'Azure' },
      { name: 'Google Cloud AI', detail: 'Vertex AI and ML services', badge: 'GCP' },
      { name: 'Weights & Biases', detail: 'ML experiment tracking', badge: 'MLOps' },
    ]
  },
]
