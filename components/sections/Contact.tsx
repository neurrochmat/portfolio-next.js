"use client";

import { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, Copy, Check, Send, FileText, Terminal, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { NuclearCard } from "@/components/ui/NuclearCard";
import { NuclearButton } from "@/components/ui/NuclearButton";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // clipboard fallback
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormStatus("sent");
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block mb-3">
            Initiate Collaboration
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Get In <span className="heading-accent">Touch</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Available for full-time software engineering roles, technical contracting, and edge AI/mobile projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="space-y-6">
            <NuclearCard badge="Direct Channels" badgeColor="yellow" className="space-y-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feel free to reach out directly via WhatsApp for swift responses, or drop an email with project specifications.
              </p>

              {/* WhatsApp Primary Card */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-md border-2 border-border bg-accent-green/20 hover:bg-accent-green/30 transition-all shadow-[3px_3px_0px_var(--shadow-color)] hover:translate-x-1"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md border-2 border-border bg-accent-green text-foreground">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-black text-sm uppercase text-foreground">
                      WhatsApp Messaging
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-foreground" />
              </a>

              {/* Email Copy Box */}
              <div className="flex items-center justify-between p-3.5 rounded-md border-2 border-border bg-background shadow-[2px_2px_0px_var(--shadow-color)]">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <div className="font-heading font-black text-xs uppercase text-foreground">
                      Email Address
                    </div>
                    <div className="font-mono text-xs text-muted-foreground truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="nuclear-btn bg-muted text-foreground text-xs py-1.5 px-3 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="h-3.5 w-3.5 text-accent-green" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Location & Timezone Details */}
              <div className="space-y-2 pt-2 border-t-2 border-border font-mono text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent-yellow shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              {/* Download CV Action */}
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block pt-1"
              >
                <NuclearButton variant="primary" size="md" className="w-full">
                  <FileText className="h-4 w-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </NuclearButton>
              </a>
            </NuclearCard>
          </div>

          {/* Right Column: Retro Terminal Dispatch Form */}
          <NuclearCard
            badge="Dispatch Terminal"
            badgeColor="pink"
            windowHeader
            windowTitle="dispatch_message://neurrochmat.sh"
            className="p-0"
          >
            <form onSubmit={handleFormSubmit} className="space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-bold uppercase text-foreground block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-xs sm:text-sm font-mono text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-bold uppercase text-foreground block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-xs sm:text-sm font-mono text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs font-bold uppercase text-foreground block">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Fullstack Project or Full-time Role"
                  className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-xs sm:text-sm font-mono text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs font-bold uppercase text-foreground block">
                  Project Brief or Inquiry *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your application requirements, timeline, or engineering opportunity..."
                  className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-xs sm:text-sm font-mono text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t-2 border-border">
                <span className="font-mono text-[11px] text-muted-foreground">
                  ⚡ Prepares direct mail dispatch
                </span>

                <NuclearButton
                  type="submit"
                  variant="green"
                  size="md"
                  disabled={formStatus === "sent"}
                >
                  <Send className="h-4 w-4" />
                  <span>{formStatus === "sent" ? "Dispatched!" : "Send Message"}</span>
                </NuclearButton>
              </div>
            </form>
          </NuclearCard>
        </div>
      </div>
    </section>
  );
}
