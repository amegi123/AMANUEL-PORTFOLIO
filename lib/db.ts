import { Project } from "@/lib/types";
import { projectsData } from "@/data/projects";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  project_type: string;
  message: string;
  status: "unread" | "read" | "archived";
  created_at: string;
}

// In-memory contact submissions store
let memoryContacts: ContactSubmission[] = [
  {
    id: "sub-init-01",
    name: "Dr. Samuel Kebede",
    email: "samuel@apexhealth.et",
    project_type: "SaaS Platform Architecture",
    message: "We need a multi-tenant clinic management system for 3 branches with POS and patient records.",
    status: "unread",
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "sub-init-02",
    name: "Elena Rostova",
    email: "elena@fintech.io",
    project_type: "AI & Workflow Automation",
    message: "Looking for autonomous agent pipelines to classify incoming loan documents via OCR.",
    status: "read",
    created_at: new Date(Date.now() - 3600000 * 28).toISOString(),
  },
];

// In-memory projects store initialized with portfolio projects
let memoryProjects: Project[] = [...projectsData];

// Contact Submissions Helper Functions
export async function saveContactSubmission(data: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}): Promise<ContactSubmission> {
  const newSubmission: ContactSubmission = {
    id: "msg-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    name: data.name,
    email: data.email,
    project_type: data.projectType,
    message: data.message,
    status: "unread",
    created_at: new Date().toISOString(),
  };

  memoryContacts = [newSubmission, ...memoryContacts];
  return newSubmission;
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  return memoryContacts;
}

export async function updateContactStatus(
  id: string,
  status: "unread" | "read" | "archived"
): Promise<boolean> {
  memoryContacts = memoryContacts.map((c) => (c.id === id ? { ...c, status } : c));
  return true;
}

export async function deleteContactSubmission(id: string): Promise<boolean> {
  memoryContacts = memoryContacts.filter((c) => c.id !== id);
  return true;
}

// Portfolio Projects Helper Functions
export async function getProjects(): Promise<Project[]> {
  return memoryProjects;
}

export async function saveProject(project: Project): Promise<Project> {
  const existingIdx = memoryProjects.findIndex((p) => p.id === project.id);
  if (existingIdx >= 0) {
    memoryProjects[existingIdx] = project;
  } else {
    memoryProjects = [...memoryProjects, project];
  }
  return project;
}

export async function deleteProject(id: string): Promise<boolean> {
  memoryProjects = memoryProjects.filter((p) => p.id !== id);
  return true;
}
