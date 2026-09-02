"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/social";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Development",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    "Full-Stack Development",
    "Web Application",
    "AI & Workflow Automation",
    "API & Backend Systems",
    "Contract / Freelance",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "Full-Stack Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to transmit message. Please try again.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage("Network connection error. Please email directly or retry.");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-surface-border bg-white p-6 sm:p-8 shadow-card-subtle">
      {status === "success" ? (
        <div className="py-10 text-center space-y-3.5 animate-fade-in">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-xs">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-charcoal-900">Message Sent Successfully</h3>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
            Your inquiry has been received. I will review your requirements and get back to you promptly.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs font-mono"
          >
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-xs font-mono text-charcoal-500 font-semibold">
                YOUR NAME <span className="text-gold-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Samuel"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-50 border border-surface-border text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-mono text-charcoal-500 font-semibold">
                EMAIL ADDRESS <span className="text-gold-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-50 border border-surface-border text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono text-charcoal-500 font-semibold">
              PROJECT TYPE / SCOPE
            </label>
            <div className="flex flex-wrap gap-1.5">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, projectType: type })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    formData.projectType === type
                      ? "bg-gold-100 border-gold-500 text-gold-900 font-bold shadow-xs"
                      : "bg-surface-50 border-surface-border text-charcoal-600 hover:text-charcoal-900 hover:border-charcoal-400"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-xs font-mono text-charcoal-500 font-semibold">
              PROJECT REQUIREMENTS / MESSAGE <span className="text-gold-600">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your project, timeline, technical stack requirements, or questions..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-50 border border-surface-border text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-xs font-mono text-red-700 bg-red-50 p-2.5 rounded-lg border border-red-200 animate-fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage || "Please fill in all required fields."}</span>
            </div>
          )}

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              isLoading={status === "submitting"}
              icon={<Send className="w-4 h-4" />}
            >
              Send Inquiry
            </Button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-xs font-mono text-charcoal-500 hover:text-gold-700 transition-colors"
            >
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gold-600" />
              )}
              <span>{copiedEmail ? "Copied direct email!" : `Copy ${contactInfo.email}`}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
