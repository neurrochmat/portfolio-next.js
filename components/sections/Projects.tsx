"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Layers, ArrowUpRight, Check, Sparkles, Filter } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projectsData } from "@/data/portfolioData";
import { Project, ProjectCategory } from "@/data/types";
import { NuclearBadge } from "@/components/ui/NuclearBadge";
import { NuclearButton } from "@/components/ui/NuclearButton";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory; count: number }[] = [
    { label: "All Projects", value: "all", count: projectsData.length },
    { label: "Web Fullstack", value: "web", count: projectsData.filter((p) => p.category === "web").length },
    { label: "Mobile Apps", value: "mobile", count: projectsData.filter((p) => p.category === "mobile").length },
    { label: "Edge AI & IoT", value: "ai-iot", count: projectsData.filter((p) => p.category === "ai-iot").length }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative w-full py-16 md:py-24 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block mb-3">
            Production & Research Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Featured <span className="heading-accent">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Architected decoupled systems, mobile clients, and embedded AI engines deployed to production environments.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 select-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`inline-flex items-center gap-1.5 rounded-md border-2 border-border px-3.5 py-1.5 font-heading text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-primary text-primary-foreground shadow-[3px_3px_0px_var(--shadow-color)] -translate-y-0.5"
                  : "bg-muted text-foreground hover:bg-muted/80 shadow-[2px_2px_0px_var(--shadow-color)]"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-bold ${
                selectedCategory === cat.value ? "bg-black/20 text-white" : "bg-background text-muted-foreground"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="nuclear-card-interactive flex flex-col justify-between overflow-hidden bg-muted p-0 shadow-[5px_5px_0px_var(--shadow-color)] group"
            >
              <div>
                {/* Window Top Bar */}
                <div className="flex items-center justify-between border-b-2 border-border bg-background px-3 py-2 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full border border-border bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full border border-border bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full border border-border bg-green-400 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground truncate">
                    {project.categoryLabel}
                  </span>
                  <div className="text-[10px] font-mono font-bold text-primary">
                    {project.period.split("–")[0].trim()}
                  </div>
                </div>

                {/* Project Image Preview */}
                <div className="relative aspect-video w-full overflow-hidden border-b-2 border-border bg-background">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                  {project.featured && (
                    <div className="absolute top-2.5 right-2.5">
                      <NuclearBadge color="yellow" size="sm">
                        ★ Featured
                      </NuclearBadge>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 space-y-3.5">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-black uppercase text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[11px] font-bold text-primary uppercase mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Architecture Metrics Badges */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded border border-border bg-background px-2 py-0.5 text-[10px] font-mono font-bold text-foreground"
                        >
                          <span className="text-primary">•</span>
                          <span>{metric.value}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.stack.slice(0, 5).map((tech) => (
                      <NuclearBadge key={tech} color="muted" size="sm">
                        {tech}
                      </NuclearBadge>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-[10px] font-mono text-muted-foreground self-center px-1">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-5 pt-0 border-t border-border/20 mt-3 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="nuclear-btn bg-background text-foreground text-xs flex-1 py-1.5"
                >
                  <Layers className="h-3.5 w-3.5 text-primary" />
                  <span>Specs</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nuclear-btn bg-accent-green text-foreground text-xs px-2.5 py-1.5"
                    title="Live Demo"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nuclear-btn bg-muted text-foreground text-xs px-2.5 py-1.5"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Inspector Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
