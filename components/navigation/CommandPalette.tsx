"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Code2, Briefcase, User, Mail, Sparkles, Terminal, X } from "lucide-react";
import { projectsData } from "@/data/projects";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const staticActions = [
    {
      id: "action-home",
      title: "Home / Overview",
      category: "Pages",
      icon: Terminal,
      action: () => {
        router.push("/");
        onClose();
      },
    },
    {
      id: "action-about",
      title: "About & Engineering Philosophy",
      category: "Pages",
      icon: User,
      action: () => {
        router.push("/about");
        onClose();
      },
    },
    {
      id: "action-skills",
      title: "Technical Stack & Tools",
      category: "Pages",
      icon: Code2,
      action: () => {
        router.push("/skills");
        onClose();
      },
    },
    {
      id: "action-projects",
      title: "Selected Work & Systems",
      category: "Pages",
      icon: Briefcase,
      action: () => {
        router.push("/projects");
        onClose();
      },
    },
    {
      id: "action-experience",
      title: "The Journey & Milestones",
      category: "Pages",
      icon: Briefcase,
      action: () => {
        router.push("/experience");
        onClose();
      },
    },
    {
      id: "action-services",
      title: "Engineering Services",
      category: "Pages",
      icon: Sparkles,
      action: () => {
        router.push("/services");
        onClose();
      },
    },
    {
      id: "action-knowledge",
      title: "Knowledge & Media Channels",
      category: "Pages",
      icon: Sparkles,
      action: () => {
        router.push("/knowledge");
        onClose();
      },
    },
    {
      id: "action-contact",
      title: "Contact & Consultation",
      category: "Action",
      icon: Mail,
      action: () => {
        router.push("/contact");
        onClose();
      },
    },
  ];

  const projectActions = projectsData.map((project) => ({
    id: `project-${project.id}`,
    title: `${project.name} — ${project.category}`,
    category: "Projects",
    icon: Code2,
    action: () => {
      router.push(`/projects/${project.id}`);
      onClose();
    },
  }));

  const allItems = [...staticActions, ...projectActions];

  const filteredItems = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-charcoal-900/40 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-surface-borderGold rounded-2xl shadow-gold-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownNav}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-surface-border bg-surface-50">
          <Search className="w-5 h-5 text-gold-600" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type to search pages, projects, skills..."
            className="flex-1 bg-transparent text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-charcoal-400 hover:text-charcoal-700 hover:bg-surface-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-charcoal-400 text-xs font-mono">
              No matching pages or projects found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                    isSelected
                      ? "bg-gold-50 text-gold-900 font-semibold"
                      : "text-charcoal-700 hover:bg-surface-100"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? "bg-gold-500 text-white shadow-gold-sm"
                          : "bg-surface-100 text-charcoal-600 border border-surface-border"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm truncate">{item.title}</p>
                      <span className="text-[10px] font-mono text-charcoal-400 uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-opacity ${
                      isSelected ? "opacity-100 text-gold-600" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-surface-100 border-t border-surface-border text-[11px] font-mono text-charcoal-500">
          <div className="flex items-center gap-2">
            <span>Navigate:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white text-charcoal-700 border border-surface-border">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white text-charcoal-700 border border-surface-border">↓</kbd>
            <span>Open:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white text-charcoal-700 border border-surface-border">Enter</kbd>
          </div>
          <div>
            <kbd className="px-1.5 py-0.5 rounded bg-white text-charcoal-700 border border-surface-border">Esc</kbd>
            <span className="ml-1">close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
