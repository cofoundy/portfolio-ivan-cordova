export const siteConfig = {
  name: "Ivan Córdova",
  title: "AI Technical Lead",
  description: "AI Engineer specializing in LLMs, RAG systems, and enterprise AI solutions",
  accentColor: "#3b82f6", // Azul minimalista tipo researcher
  social: {
    email: "sebastian.cordova@pucp.edu.pe",
    linkedin: "https://linkedin.com/in/ivan-cordova",
    github: "https://github.com/IvanCord",
  },
  aboutMe:
    "AI Technical Lead with experience building production AI systems at scale. Specialized in LLMs, agentic RAG, and enterprise solutions. I've shipped AI products processing millions of documents daily and contributed to closing $500k+ contracts. Background in Informatics Engineering with a Minor in AI from PUCP. Award-winning thesis on Whale Optimization Algorithm for Financial Processes.",
  skills: [
    "Python",
    "TypeScript",
    "FastAPI",
    "Next.js",
    "React",
    "LangChain",
    "LangGraph",
    "DSPy",
    "PyTorch",
    "vLLM",
    "AWS",
    "Azure",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Qdrant",
    "Pinecone",
    "Neo4j",
  ],
  projects: [
    {
      name: "Document QA Pipeline @ SUNARP",
      description:
        "On-prem document QA system for Peru's public registry processing 1M+ images/day. YOLOv11 + OpenVINO achieving 80% mAP@0.5 and 12ms/image on CPU. Replaced a 15-person manual QA team.",
      link: "#",
      skills: ["Python", "YOLOv11", "OpenVINO", "FastAPI"],
    },
    {
      name: "Multi-tenant Chatbot Platform",
      description:
        "AWS-based chatbot platform with agentic RAG and DSPy prompt optimization. Sub-500ms p95 latency, 96% task accuracy. Onboarded 5 internal teams.",
      link: "#",
      skills: ["FastAPI", "Next.js", "AWS", "DSPy", "RAG"],
    },
    {
      name: "AI Recruiting Platform",
      description:
        "End-to-end recruiting platform processing 500k+ CVs with hybrid search and cross-encoder reranking. OCR scaled with Modal A100 GPUs.",
      link: "#",
      skills: ["FastAPI", "React", "AWS Lambda", "Modal", "OCR"],
    },
    {
      name: "Power BI Copilot",
      description:
        "Azure-native Copilot turning natural language into DAX/SQL using GPT-4o and meta-prompting. Reduced cost by 65% vs Microsoft Fabric Copilot. Contributed to closing $500k contract.",
      link: "#",
      skills: ["Azure", "GPT-4o", "DAX", "SQL"],
    },
    {
      name: "Supply Chain Agent",
      description:
        "LangGraph-based real-time supply chain agent connected to package-tracking APIs. Improved incident detection and reduced downtime by 22% across 25 customers.",
      link: "#",
      skills: ["LangGraph", "Python", "APIs"],
    },
    {
      name: "Multi-agent Vendor Platform",
      description:
        "Multi-agent platform for procurement, negotiation, and quoting. Concept to production in 4 weeks. MVP became foundation for raising $900k in venture funding.",
      link: "#",
      skills: ["Python", "FastAPI", "GPT-4o", "LangGraph", "Azure"],
    },
  ],
  experience: [
    {
      company: "Indra",
      title: "AI Technical Lead",
      dateRange: "Feb 2025 - Present",
      bullets: [
        "Architected document QA pipeline for SUNARP processing 1M+ images/day, replacing 15-person team",
        "Built multi-tenant chatbot platform with 96% task accuracy and <500ms latency",
        "Designed AI recruiting platform processing 500k+ CVs with hybrid search",
        "Led 5-engineer squad shipping 3 enterprise projects and 10+ AI PoCs for banks and insurers",
      ],
    },
    {
      company: "Astral Insights",
      title: "Senior AI Engineer",
      dateRange: "Apr 2024 - Dec 2024",
      bullets: [
        "Shipped Power BI Copilot reducing cost by 65% vs Microsoft Fabric, closing $500k contract",
        "Launched LangGraph supply chain agent reducing downtime by 22% across 25 customers",
        "Delivered 5+ LLM PoCs for Pfizer, GE Vernova, and Duke University",
      ],
    },
    {
      company: "Yavendio (Startup)",
      title: "Senior AI Engineer",
      dateRange: "Feb 2024 - Apr 2024",
      bullets: [
        "Shipped multi-agent vendor platform from concept to production in 4 weeks",
        "MVP became foundation for raising $900k in venture funding",
        "Implemented multimodal agentic RAG with hybrid retrieval cutting p95 latency by 70%",
      ],
    },
    {
      company: "Tuxpas",
      title: "Software Engineer",
      dateRange: "Aug 2023 - Feb 2024",
      bullets: [
        "Built AWS data lake processing 1M+ medical records using Python ETL",
        "Reduced cloud OPEX by 40% with optimized S3, Glue, and Lambda architecture",
      ],
    },
    {
      company: "BBVA",
      title: "Software Analyst / Intern",
      dateRange: "Mar 2021 - Apr 2023",
      bullets: [
        "Mapped 15+ core financial processes providing foundation for automation",
        "Shipped 30+ features for internal finance tools improving audit efficiency by 40%",
      ],
    },
  ],
  education: [
    {
      school: "Pontifical Catholic University of Peru (PUCP)",
      degree: "BEng in Informatics Engineering, Minor in Artificial Intelligence",
      dateRange: "Lima, Peru",
      achievements: [
        "Best Bachelor Thesis Award: 'Implementation of the Whale Optimization Algorithm in Financial Processes'",
      ],
    },
    {
      school: "AI-PUCP Research Group",
      degree: "Research Assistant",
      dateRange: "Jan 2025 - Jul 2025",
      achievements: [
        "Research on Reinforcement Learning, Causal ML, and small language models",
        "Implemented and evaluated prototype models on curated datasets",
      ],
    },
  ],
};
