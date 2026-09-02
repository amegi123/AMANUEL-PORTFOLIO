import { ExperienceItem } from "@/lib/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "senior-fullstack-dev",
    role: "Senior Full-Stack Developer",
    organization: "Web Applications & SaaS Systems",
    tagline: "End-to-end web applications, scalable architectures, and cloud services",
    type: "Full-Stack",
    description:
      "Architecting and building production web applications, multi-tenant databases, authentication pipelines, and high-performance user interfaces.",
    responsibilities: [
      "Engineering full-stack web platforms using Next.js, React, TypeScript, and Laravel.",
      "Designing relational schemas with PostgreSQL and MySQL with indexing and query optimization.",
      "Implementing secure authentication, role-based permissions, and transactional billing integrations.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    isCurrent: true,
  },
  {
    id: "backend-api-dev",
    role: "Backend & Systems Engineer",
    organization: "API Systems & Data Pipelines",
    tagline: "High-throughput REST APIs, microservices, and database modeling",
    type: "Backend",
    description:
      "Developing resilient backend architectures, RESTful API endpoints, server caching with Redis, and containerized deployments.",
    responsibilities: [
      "Building resilient web backends and microservices with Laravel, Node.js, and Express.",
      "Structuring clean domain models, migrations, and transactional data integrity.",
      "Deploying containerized environments using Docker and Linux VPS infrastructure.",
    ],
    technologies: [
      "Node.js",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    isCurrent: true,
  },
  {
    id: "ai-automation-developer",
    role: "AI & Automation Developer",
    organization: "Autonomous Workflows & LLM Integrations",
    tagline: "Intelligent agent pipelines, webhook orchestration, and workflow automation",
    type: "AI & Automation",
    description:
      "Integrating OpenAI and Gemini models, creating custom multi-agent workflows, and designing n8n pipelines to automate complex operations.",
    responsibilities: [
      "Developing intelligent agent loops and custom tool calling with OpenAI and Gemini.",
      "Building resilient n8n pipelines connecting databases, CRM webhooks, and third-party APIs.",
      "Structuring automated document parsing, data extraction, and scheduled background workers.",
    ],
    technologies: [
      "OpenAI API",
      "Gemini API",
      "n8n",
      "LangChain",
      "Python",
      "Webhooks",
    ],
    isCurrent: true,
  },
];
