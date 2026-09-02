import { Project } from "@/lib/types";

export const projectsData: Project[] = [
  {
    id: "halink-logistics",
    number: "01",
    name: "Halink Logistics & Fleet ERP",
    category: "ENTERPRISE SaaS // REAL-TIME LOGISTICS",
    tagline: "Multi-Tenant Freight Dispatch & Live IoT Telemetry Platform",
    description:
      "Architected a high-throughput fleet management platform handling real-time GPS telemetry, automated dispatch routing, and multi-tenant billing. Scaled to process over 50,000 daily event packets with sub-100ms Redis queue latency and zero data drop.",
    technologies: ["Laravel", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Docker"],
    role: "Lead Full-Stack Architect",
    highlights: [
      "Sub-100ms Queue Latency",
      "Multi-Tenant Tenant Isolation",
      "Live GPS Telemetry Streams",
      "Automated Freight Invoicing",
    ],
    features: [
      {
        title: "Real-Time Telemetry Ingestion",
        description: "High-frequency GPS and vehicle OBD sensor streams routed through Redis pub/sub into Timescale-optimized Postgres tables.",
      },
      {
        title: "Intelligent Dispatch Engine",
        description: "Automated route optimization and driver assignment based on geofenced delivery windows and cargo capacity.",
      },
      {
        title: "Multi-Tenant Corporate Portals",
        description: "Strict database tenant isolation with role-based access control (RBAC) for fleet managers, dispatchers, and external clients.",
      },
      {
        title: "Automated Billing & Fuel Audits",
        description: "Instant invoice generation upon proof-of-delivery with integrated fuel consumption anomaly detection.",
      },
    ],
    architecture: {
      frontend: "React 19, TypeScript, Tailwind CSS, Leaflet/Mapbox GL, React Query",
      backend: "Laravel 11, PHP 8.3, Horizon Queue Workers, WebSockets",
      database: "PostgreSQL with spatial PostGIS & JSONB indexing",
      infrastructure: "Docker Compose, Nginx Reverse Proxy, Redis Cluster, AWS S3",
    },
    metrics: [
      { label: "Daily Telemetry Events", value: "50,000+" },
      { label: "System Uptime", value: "99.98%" },
      { label: "Dispatch Efficiency", value: "+40%" },
    ],
    previewType: "logistics",
    githubUrl: "https://github.com/amegi123/halink-logistics-erp",
    liveUrl: "https://halink.app",
    featured: true,
  },
  {
    id: "dentflow-saas",
    number: "02",
    name: "DentFlow Pro Clinic SaaS",
    category: "HEALTHCARE SaaS // MULTI-TENANT EHR",
    tagline: "Clinical Operations & Patient Record Management System",
    description:
      "Engineered an HIPAA-compliant clinical operations platform featuring automated patient scheduling, interactive dental charting, and multi-branch inventory. Reduced patient wait times by 35% through smart queue algorithms and automated SMS reminders.",
    technologies: ["Next.js", "TypeScript", "Laravel", "Tailwind CSS", "PostgreSQL", "n8n", "Docker"],
    role: "Full-Stack Engineer & Product Designer",
    highlights: [
      "HIPAA-Compliant Patient Records",
      "Multi-Branch Sync",
      "Automated Patient SMS",
      "Live Dental Charting",
    ],
    features: [
      {
        title: "Interactive Dental Charting",
        description: "SVG-based tooth map allowing clinicians to record conditions, procedures, and treatment plans in real time.",
      },
      {
        title: "Smart Appointment Scheduler",
        description: "Conflict-free multi-doctor calendar with automatic SMS/email confirmations and reminder sequences via n8n.",
      },
      {
        title: "Medical Inventory & POS",
        description: "Real-time tracking of consumables, batch expiration alerts, and comprehensive point-of-sale checkout.",
      },
      {
        title: "Multi-Clinic Aggregation",
        description: "Centralized executive analytics dashboard comparing patient volume, revenue per chair, and doctor utilization across branches.",
      },
    ],
    architecture: {
      frontend: "Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide",
      backend: "Laravel 11 REST API, PHP 8.3, JWT Authentication",
      database: "PostgreSQL with encrypted columns & automated daily snapshots",
      infrastructure: "Docker, Nginx, n8n Automation Engine, Cloudflare CDN",
      aiAutomation: "n8n Webhook Pipelines, Twilio SMS & Resend Transactional Email",
    },
    metrics: [
      { label: "Patient Records Managed", value: "12,000+" },
      { label: "Patient Wait Time Reduction", value: "-35%" },
      { label: "Active Clinic Branches", value: "3 Locations" },
    ],
    previewType: "healthcare",
    githubUrl: "https://github.com/amegi123/dentflow-clinic-saas",
    liveUrl: "https://dentflow.cloud",
    featured: true,
  },
  {
    id: "cognitiveops-ai",
    number: "03",
    name: "CognitiveOps AI Pipeline",
    category: "AI AUTOMATION // AGENTIC WORKFLOWS",
    tagline: "Autonomous Document Intelligence & OCR Extraction Engine",
    description:
      "Designed an autonomous multi-agent pipeline that ingests complex commercial financial documents, extracts structured schema, and routes approval tasks. Replaced 80 hours of manual data entry per week with 99.2% extraction accuracy and automated reconciliation.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Gemini", "LangChain", "n8n", "Docker"],
    role: "AI & Automation Architect",
    highlights: [
      "Multi-Agent Reasoning Loops",
      "99.2% OCR Extraction Accuracy",
      "Webhook Ingestion Engine",
      "Human-in-the-Loop Validation",
    ],
    features: [
      {
        title: "Multimodal Document Ingestion",
        description: "Processes multi-page PDFs, scanned receipts, and invoices using OpenAI GPT-4o vision and Google Gemini 2.0 Flash APIs.",
      },
      {
        title: "Self-Correcting Schema Extraction",
        description: "LangChain-driven validation agents that detect missing line items and cross-check arithmetic against tax totals.",
      },
      {
        title: "Autonomous ERP Dispatch",
        description: "Transfers verified invoice payloads directly into accounting systems via secure webhook triggers.",
      },
      {
        title: "Human-in-the-Loop Review UI",
        description: "Low-confidence extraction flags highlighted side-by-side with original document scans for instant one-click approval.",
      },
    ],
    architecture: {
      frontend: "Next.js 15, TypeScript, Tailwind CSS, PDF.js Canvas Renderer",
      backend: "Node.js, Express, LangChain.js, Python FastAPI Microservices",
      database: "PostgreSQL, pgvector Vector Embeddings Store",
      infrastructure: "Docker Containers, n8n Orchestrator, Redis Job Queue",
      aiAutomation: "OpenAI GPT-4o, Google Gemini 2.0, LangChain Agents, n8n",
    },
    metrics: [
      { label: "Manual Hours Saved / Wk", value: "80+ Hours" },
      { label: "Extraction Accuracy", value: "99.2%" },
      { label: "Average Document Inference", value: "< 2.8s" },
    ],
    previewType: "ai",
    githubUrl: "https://github.com/amegi123/cognitiveops-ai-pipeline",
    liveUrl: "https://cognitiveops.ai",
    featured: true,
  },
  {
    id: "nexuscore-billing",
    number: "04",
    name: "NexusCore Metered Billing Engine",
    category: "FINTECH // BILLING INFRASTRUCTURE",
    tagline: "Usage-Based Subscription Metering & Invoice Automation",
    description:
      "Built a distributed subscription metering engine supporting dynamic tiered pricing, webhooks, and automated PDF tax generation. Handles concurrent transaction loads with idempotency keys and zero payment reconciliation discrepancies.",
    technologies: ["NestJS", "Node.js", "React", "Tailwind CSS", "PostgreSQL", "Redis", "Docker"],
    role: "Backend Systems Architect",
    highlights: [
      "Idempotent Payment Routing",
      "High-Frequency Usage Metering",
      "Stripe & Local Payment Gateways",
      "Audit-Ready PDF Generation",
    ],
    features: [
      {
        title: "High-Frequency Event Aggregation",
        description: "Ingests API call metrics in real-time and computes rolling monthly quota usage without locking database rows.",
      },
      {
        title: "Dynamic Tiered Invoicing",
        description: "Supports prepaid credits, seat-based subscriptions, and overage billing with automatic currency conversion.",
      },
      {
        title: "Idempotent Webhook Processing",
        description: "Guarantees exactly-once transaction processing through distributed Redis locks and unique event hashes.",
      },
      {
        title: "Automated Tax & PDF Generation",
        description: "Generates localized VAT-compliant invoices on the fly and dispatches email receipts upon successful capture.",
      },
    ],
    architecture: {
      frontend: "React 19, TypeScript, Tailwind CSS, Recharts Data Viz",
      backend: "NestJS, Node.js 22, Prisma ORM, BullMQ Queues",
      database: "PostgreSQL with optimized composite indexes",
      infrastructure: "Docker Compose, Redis Sentinel, Cloudflare Workers",
    },
    metrics: [
      { label: "Payment Reconciliation", value: "100.0%" },
      { label: "Event Ingestion Throughput", value: "10k req/sec" },
      { label: "P99 Processing Latency", value: "< 45ms" },
    ],
    previewType: "fintech",
    githubUrl: "https://github.com/amegi123/nexuscore-billing",
    liveUrl: "https://nexuscore.io",
    featured: true,
  },
];
