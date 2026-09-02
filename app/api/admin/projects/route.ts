import { NextResponse } from "next/server";
import { isUserAdmin } from "@/lib/auth/admin";
import { getProjects, saveProject, deleteProject } from "@/lib/db";
import { Project } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await getProjects();
  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const projectData = await request.json();

    if (!projectData.name || !projectData.category || !projectData.description) {
      return NextResponse.json(
        { error: "Name, category, and description are required." },
        { status: 400 }
      );
    }

    const newProject: Project = {
      id: projectData.id || projectData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      number: projectData.number || "05",
      name: projectData.name,
      category: projectData.category,
      tagline: projectData.tagline || projectData.name,
      description: projectData.description,
      technologies: Array.isArray(projectData.technologies)
        ? projectData.technologies
        : typeof projectData.technologies === "string"
        ? projectData.technologies.split(",").map((s: string) => s.trim())
        : ["Next.js", "TypeScript", "Tailwind CSS"],
      role: projectData.role || "Lead Full-Stack Architect",
      highlights: Array.isArray(projectData.highlights)
        ? projectData.highlights
        : ["Full-Stack", "Production Scale"],
      features: projectData.features || [
        {
          title: "Production Architecture",
          description: "High-performance modular architecture with clean state management.",
        },
      ],
      architecture: projectData.architecture || {
        frontend: "Next.js App Router, React 19, Tailwind CSS",
        backend: "Node.js / Laravel API Services",
        database: "PostgreSQL Database Engine",
      },
      previewType: projectData.previewType || "saas-platform",
      featured: projectData.featured ?? true,
      githubUrl: projectData.githubUrl,
      liveUrl: projectData.liveUrl,
    };

    const saved = await saveProject(newProject);
    return NextResponse.json({ success: true, project: saved });
  } catch (error) {
    console.error("Save project error:", error);
    return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get("id");
    if (!id) {
      try {
        const body = await request.json();
        id = body?.id;
      } catch {
        // empty body ignored
      }
    }
    if (!id) {
      return NextResponse.json({ error: "Missing project id" }, { status: 400 });
    }

    const success = await deleteProject(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
