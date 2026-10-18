"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Project } from "@/data/types";
import { NuclearBadge } from "./NuclearBadge";
import { NuclearButton } from "./NuclearButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Window */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border-2 border-border bg-muted shadow-[8px_8px_0px_var(--shadow-color)] flex flex-col">
        {/* Retro Window Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b-2 border-border bg-background px-4 py-3 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border border-border bg-red-400 inline-block" />
            <span className="w-3 h-3 rounded-full border border-border bg-yellow-400 inline-block" />
            <span className="w-3 h-3 rounded-full border border-border bg-green-400 inline-block" />
            <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground truncate max-w-[200px] sm:max-w-md">
              architecture_spec://{project.id}.md
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border border-transparent hover:border-border"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Hero Banner Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-md border-2 border-border bg-background shadow-[3px_3px_0px_var(--shadow-color)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <NuclearBadge color="pink" size="sm">
                {project.categoryLabel}
              </NuclearBadge>
            </div>
          </div>

          {/* Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-foreground">
                {project.title}
              </h2>
              <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>{project.period}</span>
              </div>
            </div>
            <p className="font-mono text-xs sm:text-sm text-primary font-bold tracking-wide uppercase mb-3">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-md border-2 border-border bg-background p-3 shadow-[2px_2px_0px_var(--shadow-color)]"
                >
                  <div className="text-[11px] font-mono font-bold uppercase text-muted-foreground">
                    {metric.label}
                  </div>
                  <div className="font-heading font-black text-sm sm:text-base uppercase text-foreground mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Architecture Specs */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="rounded-md border-2 border-border bg-background/50 p-4 space-y-3">
              <div className="flex items-center gap-2 font-heading font-black uppercase text-sm text-foreground">
                <Layers className="h-4 w-4 text-primary" />
                <span>Architecture Blueprint & Stack Flow</span>
              </div>
              <ul className="space-y-2">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <span className="font-mono font-bold text-primary shrink-0">[{i + 1}]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Highlights */}
          {project.keyHighlights && project.keyHighlights.length > 0 && (
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 font-heading font-black uppercase text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent-green" />
                <span>Key Deliverables & Engineering Accomplishments</span>
              </div>
              <ul className="space-y-2">
                {project.keyHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <span className="text-accent-green font-bold shrink-0 mt-0.5">✔</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-heading font-black uppercase text-xs text-muted-foreground">
              <Cpu className="h-3.5 w-3.5" />
              <span>Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <NuclearBadge key={tech} color="muted" size="sm">
                  {tech}
                </NuclearBadge>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-border">
            <div className="flex items-center gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nuclear-btn bg-accent-green text-foreground text-xs"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live Production</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nuclear-btn bg-background text-foreground text-xs"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <NuclearButton variant="secondary" size="sm" onClick={onClose}>
              Close Inspector
            </NuclearButton>
          </div>
        </div>
      </div>
    </div>
  );
}
