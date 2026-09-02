import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Crafting high-performance, accessible, and responsive user interfaces with type-safe state management.",
    skills: [
      {
        name: "React",
        level: "Expert",
        description: "Concurrent rendering, custom hooks, component composition, state management.",
        featured: true,
      },
      {
        name: "Next.js",
        level: "Expert",
        description: "App Router, Server Components, SSR/SSG, streaming, API routes, performance tuning.",
        featured: true,
      },
      {
        name: "TypeScript",
        level: "Expert",
        description: "Strict type safety, generics, schema validation, enterprise code quality.",
        featured: true,
      },
      {
        name: "JavaScript",
        level: "Expert",
        description: "ES6+, async architectures, DOM lifecycle, event-driven programming.",
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        description: "Design systems, fluid responsive layouts, theme tokens, micro-interactions.",
        featured: true,
      },
      {
        name: "HTML5 & Semantic Web",
        level: "Expert",
        description: "Accessible semantics, SEO structure, ARIA standards, modern markup.",
      },
      {
        name: "CSS3 & Modern Layouts",
        level: "Expert",
        description: "CSS Grid, Flexbox, transitions, keyframe animations, responsive design.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description:
      "Architecting resilient APIs, domain-driven services, secure authentication, and optimized database storage.",
    skills: [
      {
        name: "Laravel",
        level: "Expert",
        description: "Eloquent ORM, queues, events, Livewire, multi-tenancy, service providers.",
        featured: true,
      },
      {
        name: "PHP",
        level: "Expert",
        description: "PHP 8+, OOP, design patterns, dependency injection, high-throughput scripting.",
      },
      {
        name: "Node.js",
        level: "Advanced",
        description: "Asynchronous I/O, event loops, streaming, REST backends, worker threads.",
        featured: true,
      },
      {
        name: "NestJS",
        level: "Advanced",
        description: "Modular enterprise architecture, decorators, dependency injection, microservices.",
        featured: true,
      },
      {
        name: "REST APIs",
        level: "Expert",
        description: "Stateless API design, OpenAPI/Swagger, rate limiting, JWT/OAuth2 authentication.",
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        description: "Relational indexing, JSONB storage, complex joins, partitioning, migrations.",
        featured: true,
      },
      {
        name: "MySQL",
        level: "Advanced",
        description: "Schema design, query optimization, foreign keys, transaction isolation.",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Building performant, native-feel mobile applications with unified cross-platform codebases.",
    skills: [
      {
        name: "Flutter",
        level: "Advanced",
        description: "Dart, reactive state management (Bloc/Provider), custom widget trees, offline sync, native bridge integration.",
        featured: true,
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Integrating cutting-edge LLMs, autonomous agents, and automated workflow orchestrators into practical operations.",
    skills: [
      {
        name: "OpenAI",
        level: "Advanced",
        description: "Function calling, embeddings, fine-tuning prompts, GPT-4o vision & multimodal APIs.",
        featured: true,
      },
      {
        name: "Gemini",
        level: "Advanced",
        description: "Google Gemini 2.0/Flash APIs, long context reasoning, multimodal data processing.",
        featured: true,
      },
      {
        name: "AI Agents",
        level: "Advanced",
        description: "Autonomous reasoning loops, tool-use execution, memory management, multi-agent systems.",
        featured: true,
      },
      {
        name: "LangChain",
        level: "Advanced",
        description: "Chains, retrieval augmented generation (RAG), vector store pipelines, prompt templates.",
      },
      {
        name: "n8n",
        level: "Expert",
        description: "Complex workflow orchestration, custom node scripts, webhooks, error recovery.",
        featured: true,
      },
      {
        name: "Workflow Automation",
        level: "Expert",
        description: "End-to-end business process digitization, event triggers, cross-platform synchronization.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    description:
      "Deploying secure, reproducible, and monitored containerized environments on cloud servers.",
    skills: [
      {
        name: "Docker",
        level: "Advanced",
        description: "Multi-stage builds, Docker Compose, container networking, microservice isolation.",
        featured: true,
      },
      {
        name: "Nginx",
        level: "Advanced",
        description: "Reverse proxy, SSL termination, load balancing, gzip compression, security headers.",
      },
      {
        name: "Linux",
        level: "Advanced",
        description: "Ubuntu/Debian server administration, systemd services, SSH hardening, shell scripting.",
      },
      {
        name: "Cloud Infrastructure",
        level: "Proficient",
        description: "VPS provisioning, object storage (S3), DNS routing, automated backup strategies.",
      },
      {
        name: "Git",
        level: "Expert",
        description: "Git flow, branching strategies, rebasing, merge conflict resolution, code reviews.",
      },
    ],
  },
  {
    id: "product-design",
    title: "Product & Architecture",
    description:
      "Translating complex business requirements into clear user flows, robust architectures, and scalable software systems.",
    skills: [
      {
        name: "System Design",
        level: "Expert",
        description: "High-level architecture, scalability planning, database normalization, API contracts.",
        featured: true,
      },
      {
        name: "SaaS Architecture",
        level: "Expert",
        description: "Multi-tenancy models, role-based access control, billing mechanics, telemetry.",
        featured: true,
      },
      {
        name: "Product Architecture",
        level: "Expert",
        description: "Scope definition, roadmap sequencing, technical feasibility validation, MVP delivery.",
      },
      {
        name: "UI/UX Design",
        level: "Advanced",
        description: "User flow optimization, wireframing, component libraries, typography hierarchy.",
      },
      {
        name: "Figma",
        level: "Advanced",
        description: "Design systems, interactive prototypes, auto-layout, design-to-code translation.",
      },
    ],
  },
];
