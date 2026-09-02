export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  role: string;
  highlights: string[];
  features: {
    title: string;
    description: string;
  }[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    infrastructure?: string;
    aiAutomation?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  previewType?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level?: "Expert" | "Advanced" | "Proficient";
  description: string;
  icon?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  tagline?: string;
  type: "Full-Stack" | "Backend" | "AI & Automation" | "Frontend";
  description: string;
  responsibilities: string[];
  technologies: string[];
  period?: string;
  isCurrent?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  targetAudience: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: string;
  description: string;
}

export interface ContentTopic {
  name: string;
  tag: string;
  description: string;
}
