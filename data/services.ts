import { ServiceItem } from "@/lib/types";

export const servicesData: ServiceItem[] = [
  {
    id: "full-stack-development",
    number: "01",
    title: "Full-Stack Development",
    category: "Web Applications & APIs",
    description:
      "Modern web applications, high-throughput REST APIs, and database architectures engineered for speed, type safety, and maintainability.",
    deliverables: [
      "Custom Web Applications (Next.js / React)",
      "Robust REST & GraphQL APIs (Laravel / Node.js)",
      "Database Modeling & Optimization (PostgreSQL)",
      "Accessible, responsive UI engineering",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Laravel", "PostgreSQL", "Tailwind CSS"],
    targetAudience: "Startups and companies needing production-grade web software.",
  },
  {
    id: "saas-development",
    number: "02",
    title: "SaaS Development",
    category: "Cloud Software Platforms",
    description:
      "End-to-end multi-tenant SaaS engineering with tenant data segregation, role-based access control, licensing, and scalable deployment.",
    deliverables: [
      "Multi-tenant Database & Tenant Isolation",
      "Authentication & RBAC Permissions Matrix",
      "Subscription Billing & Quota Management",
      "Executive Analytics & Audit Logging",
    ],
    technologies: ["Next.js", "Laravel", "PostgreSQL", "Docker", "Redis"],
    targetAudience: "Founders and businesses launching scalable SaaS products.",
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI & Automation",
    category: "Intelligent Workflows & Agents",
    description:
      "Autonomous AI agents, webhook orchestration, and document processing pipelines that eliminate manual bottlenecks.",
    deliverables: [
      "Autonomous Reasoning Agents (OpenAI / Gemini)",
      "Complex n8n Workflow Pipelines & Webhook Sync",
      "Automated Document Processing & OCR Extraction",
      "Omnichannel AI Messaging & Notification Bots",
    ],
    technologies: ["OpenAI", "Gemini", "n8n", "LangChain", "Node.js", "Python"],
    targetAudience: "Teams seeking to automate repetitive operational workflows.",
  },
  {
    id: "business-systems",
    number: "04",
    title: "Business Systems",
    category: "ERP, CRM & Operations",
    description:
      "Bespoke ERP, CRM, inventory management, and operational platforms tailored to the exact workflow requirements of your business.",
    deliverables: [
      "Custom ERP & Department Management Portals",
      "Sales Pipelines & Client Relationship Tools",
      "Inventory & Point-of-Sale (POS) Systems",
      "Cross-department analytics & exportable ledgers",
    ],
    technologies: ["Laravel", "Livewire", "React", "PostgreSQL", "Tailwind CSS"],
    targetAudience: "Enterprises needing purpose-built internal operational tools.",
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI / UX Design",
    category: "Interface & Product Design",
    description:
      "High-density, functional interfaces designed for clarity, ergonomic navigation, and fast user workflows.",
    deliverables: [
      "Design Systems & Component Specifications",
      "Interactive High-Fidelity Prototypes in Figma",
      "Information Architecture & User Flows",
      "Design-to-Code Technical Translation",
    ],
    technologies: ["Figma", "Tailwind CSS", "Design Systems"],
    targetAudience: "Products needing a clean, professional user experience.",
  },
  {
    id: "digital-product-development",
    number: "06",
    title: "Digital Product Development",
    category: "Idea to Deployment",
    description:
      "Guiding products from initial concept and architectural schema to development, CI/CD setup, and production launch.",
    deliverables: [
      "Technical Feasibility & Schema Blueprinting",
      "Rapid MVP Development & Deployment",
      "CI/CD Pipelines, Dockerization & Linux Hosting",
      "Scalability & Roadmap Planning",
    ],
    technologies: ["System Design", "Docker", "Linux", "Git"],
    targetAudience: "Entrepreneurs bringing new technical products to market.",
  },
];
