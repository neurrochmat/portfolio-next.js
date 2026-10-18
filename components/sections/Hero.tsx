"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, FileText, MessageSquare, ExternalLink } from "lucide-react";
import { NuclearButton } from "@/components/ui/NuclearButton";
import { NuclearBadge } from "@/components/ui/NuclearBadge";
import { personalInfo, projectsData } from "@/data/portfolioData";

export function Hero() {
  const [activePreviewId, setActivePreviewId] = useState("handycraft-marketplace");

  const previewProjects = projectsData.slice(0, 4);
  const activeProject = previewProjects.find((p) => p.id === activePreviewId) || previewProjects[0];

  return (
    <div className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      {/* Subtle grid pattern & vignette matching nuclearplayer.com */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-10" aria-hidden="true" />
      <div className="bg-radial-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Minimalist Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-muted px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-foreground shadow-[2px_2px_0px_var(--shadow-color)] select-none">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span>{personalInfo.location}</span>
          <span className="text-primary font-bold">•</span>
          <span className="text-primary">Available for Work</span>
        </div>

        {/* Clean, Bold Neo-Brutalist Heading */}
        <div className="space-y-3">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground">
            {personalInfo.name}
          </h1>
          <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-primary">
            {personalInfo.title}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-1">
            {personalInfo.roleHeadline}
          </p>
        </div>

        {/* Clean Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#projects">
            <NuclearButton variant="primary" size="md">
              <ArrowDown className="h-4 w-4" />
              <span>View Projects</span>
            </NuclearButton>
          </a>

          <a href={personalInfo.resumePdf} target="_blank" rel="noopener noreferrer">
            <NuclearButton variant="secondary" size="md">
              <FileText className="h-4 w-4" />
              <span>Download CV</span>
            </NuclearButton>
          </a>

          <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <NuclearButton variant="green" size="md">
              <MessageSquare className="h-4 w-4" />
              <span>Let&apos;s Talk</span>
            </NuclearButton>
          </a>
        </div>

        {/* Clean, Straight Window Showcase (No clutter, No messy tilt) */}
        <div className="pt-6">
          <div className="nuclear-card overflow-hidden bg-muted p-0 shadow-[5px_5px_0px_var(--shadow-color)] max-w-4xl mx-auto">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between border-b-2 border-border bg-background px-4 py-2.5 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-border bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full border border-border bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full border border-border bg-green-400 inline-block" />
                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hidden sm:inline">
                  showcase://{activeProject.id}.app
                </span>
              </div>

              {/* Clean Project Tabs */}
              <div className="flex items-center gap-1.5">
                {previewProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePreviewId(p.id)}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase transition-all ${
                      activePreviewId === p.id
                        ? "bg-primary text-primary-foreground border border-border shadow-[1.5px_1.5px_0px_var(--shadow-color)]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {p.id === "handycraft-marketplace"
                      ? "Handycraft"
                      : p.id === "waste-detector-app"
                      ? "Edge AI"
                      : p.id === "smart-village-ecosystem"
                      ? "Smart Village"
                      : "Waste Tech"}
                  </button>
                ))}
              </div>
            </div>

            {/* Showcase Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-background">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />

              <div className="absolute top-3 left-3">
                <NuclearBadge color="pink" size="sm">
                  {activeProject.categoryLabel}
                </NuclearBadge>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-5 text-left text-white">
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <h3 className="font-heading font-black text-lg sm:text-xl uppercase">
                      {activeProject.title}
                    </h3>
                    <p className="font-mono text-xs text-zinc-300">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-accent-yellow hover:underline"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Minimalist Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="nuclear-card p-3.5 bg-muted text-center shadow-[3px_3px_0px_var(--shadow-color)]"
            >
              <div className="font-mono text-[10px] sm:text-xs font-bold uppercase text-muted-foreground">
                {stat.label}
              </div>
              <div className="font-heading font-black text-xl sm:text-2xl uppercase text-foreground mt-0.5">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-muted-foreground truncate mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
