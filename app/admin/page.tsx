"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Inbox,
  FolderKanban,
  Activity,
  LogOut,
  Trash2,
  Mail,
  Search,
  Plus,
  X,
  ExternalLink,
  RefreshCw,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactSubmission } from "@/lib/db";
import { Project } from "@/lib/types";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<"inbox" | "projects" | "overview">("inbox");

  // Contacts state
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [contactSearch, setContactSearch] = useState("");
  const [contactFilter, setContactFilter] = useState<"all" | "unread" | "read">("all");
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isLoadingContacts, setIsLoadingContacts] = useState(false);

  // Projects state
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    category: "Full-Stack Web Platform",
    tagline: "",
    description: "",
    technologies: "Next.js, TypeScript, Laravel, PostgreSQL, Tailwind CSS",
    role: "Lead Full-Stack Architect",
    previewType: "saas-platform" as const,
  });

  // Verify Admin Session with safe timeout & retry
  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const res = await fetch("/api/admin/check", {
          signal: controller.signal,
          cache: "no-store",
        });
        clearTimeout(timeoutId);

        if (!isMounted) return;

        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setIsAuthenticated(true);
            loadContacts();
            loadProjects();
            return;
          }
        }
        setIsAuthenticated(false);
        router.replace("/admin/login");
      } catch (err) {
        if (isMounted) {
          setIsAuthenticated(false);
          router.replace("/admin/login");
        }
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const loadContacts = async () => {
    setIsLoadingContacts(true);
    try {
      const res = await fetch("/api/admin/contacts", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
      }
    } catch (err) {
      console.error("Failed to load contacts:", err);
    } finally {
      setIsLoadingContacts(false);
    }
  };

  const loadProjects = async () => {
    setIsLoadingProjects(true);
    try {
      const res = await fetch("/api/admin/projects", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setProjects(data.projects || []);
      }
    } catch (err) {
      console.error("Failed to load projects:", err);
    } finally {
      setIsLoadingProjects(false);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === "unread" ? "read" : "unread";
    try {
      const res = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });
      if (res.ok) {
        setContacts((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: nextStatus as any } : c))
        );
        if (selectedContact?.id === id) {
          setSelectedContact((prev) => (prev ? { ...prev, status: nextStatus as any } : null));
        }
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this contact inquiry?")) return;
    try {
      const res = await fetch(`/api/admin/contacts?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        if (selectedContact?.id === id) setSelectedContact(null);
      }
    } catch (err) {
      console.error("Failed to delete contact:", err);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      if (res.ok) {
        setIsAddModalOpen(false);
        setNewProject({
          name: "",
          category: "Full-Stack Web Platform",
          tagline: "",
          description: "",
          technologies: "Next.js, TypeScript, Laravel, PostgreSQL, Tailwind CSS",
          role: "Lead Full-Stack Architect",
          previewType: "saas-platform",
        });
        loadProjects();
      }
    } catch (err) {
      console.error("Failed to add project:", err);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project from the portfolio?")) return;
    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProjects((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete project:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch {
      router.push("/admin/login");
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center font-mono text-xs text-zinc-600 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-lg flex items-center gap-3">
          <RefreshCw className="w-4 h-4 animate-spin text-amber-600" />
          <span className="font-semibold text-zinc-800">Verifying admin session credentials...</span>
        </div>
        <Link
          href="/admin/login"
          className="text-xs text-amber-700 hover:underline font-mono"
        >
          Go directly to Login →
        </Link>
      </div>
    );
  }

  const unreadCount = contacts.filter((c) => c.status === "unread").length;

  const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.email.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.message.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.project_type.toLowerCase().includes(contactSearch.toLowerCase());

    if (contactFilter === "unread") return matchesSearch && c.status === "unread";
    if (contactFilter === "read") return matchesSearch && c.status === "read";
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col font-sans">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-charcoal-900 text-white font-mono font-bold flex items-center justify-center text-xs shadow-md">
              DEV
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-zinc-900">
                DEVELOPER PORTFOLIO
              </span>
              <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 ml-2 font-bold">
                ADMIN CONSOLE
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/" target="_blank" className="hidden sm:inline-flex text-xs font-mono text-zinc-600 hover:text-amber-700 items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200">
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="text-xs font-mono border-zinc-200 text-zinc-600 hover:text-red-700 hover:border-red-300"
            icon={<LogOut className="w-3.5 h-3.5" />}
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("inbox")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "inbox"
                  ? "bg-amber-500 text-white shadow-md font-bold"
                  : "bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200"
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>Contact Inquiries</span>
              {unreadCount > 0 && (
                <span className={`px-2 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                  activeTab === "inbox" ? "bg-white text-amber-900" : "bg-amber-500 text-white"
                }`}>
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "projects"
                  ? "bg-amber-500 text-white shadow-md font-bold"
                  : "bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200"
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Portfolio Projects</span>
              <span className="text-[10px] font-mono opacity-80">({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-amber-500 text-white shadow-md font-bold"
                  : "bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>System & Engine</span>
            </button>
          </div>

          {activeTab === "projects" && (
            <Button
              variant="gold"
              size="sm"
              onClick={() => setIsAddModalOpen(true)}
              icon={<Plus className="w-4 h-4" />}
            >
              Add New Project
            </Button>
          )}

          {activeTab === "inbox" && (
            <Button
              variant="secondary"
              size="sm"
              onClick={loadContacts}
              isLoading={isLoadingContacts}
              icon={<RefreshCw className="w-3.5 h-3.5" />}
            >
              Refresh
            </Button>
          )}
        </div>

        {/* TAB 1: INBOX */}
        {activeTab === "inbox" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={contactSearch}
                    onChange={(e) => setContactSearch(e.target.value)}
                    placeholder="Search inquiries..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-xl p-1 text-xs font-mono">
                  <button
                    onClick={() => setContactFilter("all")}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      contactFilter === "all" ? "bg-amber-100 text-amber-900 font-bold" : "text-zinc-500"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setContactFilter("unread")}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      contactFilter === "unread" ? "bg-amber-100 text-amber-900 font-bold" : "text-zinc-500"
                    }`}
                  >
                    Unread
                  </button>
                  <button
                    onClick={() => setContactFilter("read")}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      contactFilter === "read" ? "bg-amber-100 text-amber-900 font-bold" : "text-zinc-500"
                    }`}
                  >
                    Read
                  </button>
                </div>
              </div>

              <div className="space-y-3 max-h-[650px] overflow-y-auto pr-1">
                {filteredContacts.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-2xl border border-zinc-200 text-zinc-400 text-xs font-mono">
                    No contact inquiries found matching criteria.
                  </div>
                ) : (
                  filteredContacts.map((item) => {
                    const isSelected = selectedContact?.id === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedContact(item)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-amber-50/80 border-amber-500 shadow-sm"
                            : item.status === "unread"
                            ? "bg-white border-amber-300 shadow-xs"
                            : "bg-white border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            {item.status === "unread" && (
                              <span className="w-2 h-2 rounded-full bg-amber-600" />
                            )}
                            <h3 className="text-sm font-bold text-zinc-900">{item.name}</h3>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {new Date(item.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>

                        <p className="text-xs font-mono text-amber-800 font-semibold mb-1">
                          {item.project_type}
                        </p>

                        <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                          {item.message}
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right: Message Detail Viewer */}
            <div className="lg:col-span-6 sticky top-24">
              {selectedContact ? (
                <div className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-md space-y-5 animate-fade-in">
                  <div className="flex items-start justify-between border-b border-zinc-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-zinc-900">{selectedContact.name}</h2>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            selectedContact.status === "unread"
                              ? "bg-amber-100 text-amber-900 border border-amber-200"
                              : "bg-zinc-100 text-zinc-600"
                          }`}
                        >
                          {selectedContact.status.toUpperCase()}
                        </span>
                      </div>
                      <a
                        href={`mailto:${selectedContact.email}`}
                        className="text-xs font-mono text-amber-800 hover:underline block mt-0.5"
                      >
                        {selectedContact.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleToggleStatus(selectedContact.id, selectedContact.status)}
                        className="p-2 rounded-xl bg-zinc-100 hover:bg-amber-50 text-zinc-700 text-xs font-mono border border-zinc-200"
                        title="Toggle Read / Unread"
                      >
                        {selectedContact.status === "unread" ? "Mark Read" : "Mark Unread"}
                      </button>
                      <button
                        onClick={() => handleDeleteContact(selectedContact.id)}
                        className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">
                      PROJECT CATEGORY
                    </span>
                    <p className="text-sm font-semibold text-zinc-800">
                      {selectedContact.project_type}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">
                      INQUIRY MESSAGE CONTENT
                    </span>
                    <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-800 leading-relaxed whitespace-pre-wrap">
                      {selectedContact.message}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-400">
                      Received @ {new Date(selectedContact.created_at).toLocaleString()}
                    </span>
                    <a href={`mailto:${selectedContact.email}?subject=RE: ${encodeURIComponent(selectedContact.project_type)} inquiry`}>
                      <Button variant="gold" size="sm" icon={<Mail className="w-3.5 h-3.5" />}>
                        Reply via Email
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-2xl border border-zinc-200 text-zinc-400 text-xs font-mono">
                  Select a message from the inbox on the left to read full requirements and take action.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PORTFOLIO PROJECTS */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-amber-300 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-amber-800 font-bold block mb-0.5">
                          {project.number} // {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-zinc-900">{project.name}</h3>
                      </div>
                      <Badge variant="gold" size="sm">{project.role}</Badge>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      {project.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.id}`}
                      target="_blank"
                      className="text-xs font-mono text-amber-800 font-semibold hover:underline flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Live</span>
                    </Link>

                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="text-xs font-mono text-red-600 hover:text-red-700 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SYSTEM OVERVIEW & ENGINE */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">TOTAL SUBMISSIONS</span>
                <p className="text-3xl font-extrabold text-zinc-900">{contacts.length}</p>
                <p className="text-xs text-zinc-500 font-mono">Inquiries stored in Database</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-amber-800 uppercase font-bold">UNREAD INQUIRIES</span>
                <p className="text-3xl font-extrabold text-amber-800">{unreadCount}</p>
                <p className="text-xs text-zinc-500 font-mono">Awaiting response</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">ACTIVE PROJECTS</span>
                <p className="text-3xl font-extrabold text-zinc-900">{projects.length}</p>
                <p className="text-xs text-zinc-500 font-mono">Published in portfolio</p>
              </div>
            </div>

            {/* System Connection Telemetry */}
            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-sm font-bold text-zinc-900">
                    Portfolio Engine & Storage Status
                  </h3>
                </div>
                <span className="font-mono text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                  ACTIVE & OPERATIONAL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-400 block text-[10px]">STORAGE ENGINE</span>
                  <span className="text-zinc-900 font-semibold truncate block mt-0.5">
                    High-Performance In-Memory Data Store
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-400 block text-[10px]">SECURITY LEVEL</span>
                  <span className="text-amber-800 font-bold block mt-0.5">
                    Secure Cookie Token & Admin Gate
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal: Add Project */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-4">
              <h2 className="text-lg font-bold text-zinc-900">Add New Portfolio Project</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="p-1 text-zinc-400 hover:text-zinc-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-600 font-semibold">PROJECT NAME *</label>
                  <input
                    type="text"
                    required
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    placeholder="e.g. Cloud SaaS Platform"
                    className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-600 font-semibold">CATEGORY *</label>
                  <input
                    type="text"
                    required
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    placeholder="e.g. AI Automation & SaaS"
                    className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-600 font-semibold">TAGLINE</label>
                <input
                  type="text"
                  value={newProject.tagline}
                  onChange={(e) => setNewProject({ ...newProject, tagline: e.target.value })}
                  placeholder="e.g. Autonomous Multi-Agent Reasoning Pipeline"
                  className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-600 font-semibold">DESCRIPTION *</label>
                <textarea
                  required
                  rows={3}
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="Detailed architecture and features of the system..."
                  className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-600 font-semibold">TECH STACK (comma separated)</label>
                <input
                  type="text"
                  value={newProject.technologies}
                  onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-mono"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-zinc-100">
                <Button type="button" variant="secondary" size="md" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="gold" size="md">
                  Publish to Portfolio
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
