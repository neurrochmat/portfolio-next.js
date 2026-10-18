"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, FileText, MessageSquare, ExternalLink, Sparkles, Terminal, ShieldCheck, Check } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { NuclearButton } from "@/components/ui/NuclearButton";
import { NuclearBadge } from "@/components/ui/NuclearBadge";
import { personalInfo, projectsData, platformList } from "@/data/portfolioData";

export function Hero() {
  const [activePreviewId, setActivePreviewId] = useState("handycraft-marketplace");

  const previewProjects = projectsData.slice(0, 4);
  const activeProject = previewProjects.find((p) => p.id === activePreviewId) || previewProjects[0];

  return (
    <div className="relative w-full overflow-hidden bg-background pt-10 pb-16 md:py-20">
      {/* Grid pattern & radial vignette matching nuclearplayer.com */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="bg-radial-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Kicker & Headline */}
        <div className="mb-10 md:mb-14 text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border-2 border-border bg-muted px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-foreground shadow-[2px_2px_0px_var(--shadow-color)]">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse-dot" />
            <span>EST. 2023 · SEMARANG, ID</span>
            <span className="text-primary font-black">•</span>
            <span className="text-primary">{personalInfo.status}</span>
          </div>

          {/* Punchy Neo-Brutalist Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-foreground">
            {personalInfo.name} IS A{" "}
            <span className="heading-accent underline decoration-4 decoration-primary underline-offset-8">
              FULLSTACK DEVELOPER
            </span>
            <br className="hidden sm:inline" />{" "}
            AND <TypewriterText className="text-primary" />
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            {personalInfo.roleHeadline}
          </p>
        </div>

        {/* Hero Interactive Showcase Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
          {/* Left Column: Tilted Retro Showcase Window Deck */}
          <div className="relative z-10 rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Main Window */}
            <div className="nuclear-card overflow-hidden bg-muted p-0 shadow-[6px_6px_0px_var(--shadow-color)]">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b-2 border-border bg-background/80 px-4 py-2.5 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border border-border bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full border border-border bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full border border-border bg-green-400 inline-block" />
                  <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hidden sm:inline">
                    preview://{activeProject.id}.app
                  </span>
                </div>

                {/* Interactive Project Switcher Tabs */}
                <div className="flex items-center gap-1">
                  {previewProjects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePreviewId(p.id)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase transition-all ${
                        activePreviewId === p.id
                          ? "bg-primary text-primary-foreground border border-border shadow-[1px_1px_0px_var(--shadow-color)]"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.id === "handycraft-marketplace" ? "Handycraft" : p.id === "waste-detector-app" ? "TFLite" : p.id === "smart-village-ecosystem" ? "GIS" : "Waste"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Preview Screenshot */}
              <div className="relative aspect-video w-full overflow-hidden bg-background">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />

                {/* Category Pill Tag Overlay */}
                <div className="absolute top-3 left-3">
                  <NuclearBadge color="pink" size="sm">
                    {activeProject.categoryLabel}
                  </NuclearBadge>
                </div>

                {/* Bottom title bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <h3 className="font-heading font-black text-base sm:text-lg uppercase">
                    {activeProject.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-300 truncate">
                    {activeProject.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Rotated Floating Mobile Card (Sub-50ms TFLite) */}
            <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 z-20 w-44 sm:w-52 -rotate-6 hover:rotate-0 transition-transform duration-200 select-none">
              <div className="nuclear-card bg-muted p-2.5 shadow-[4px_4px_0px_var(--shadow-color)]">
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-border/40">
                  <span className="text-[10px] font-mono font-bold uppercase text-primary">
                    Edge AI Module
                  </span>
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                </div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded border border-border bg-background">
                  <Image
                    src="/projects/waste-detector.jpg"
                    alt="Edge AI Waste Detector on mobile"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-1 inset-x-1 bg-black/80 p-1 rounded text-center">
                    <span className="font-mono text-[9px] font-bold text-accent-green uppercase">
                      Offline &lt;50ms
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mascot / Avatar Sticker on Bottom Right */}
            <div className="absolute -bottom-5 -right-3 sm:-bottom-7 sm:-right-5 z-20 flex items-center gap-2 rounded-lg border-2 border-border bg-accent-yellow p-2 text-foreground shadow-[3px_3px_0px_var(--shadow-color)] rotate-3 hover:rotate-0 transition-transform select-none">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-md border-2 border-border">
                <Image
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-1 text-left">
                <div className="font-heading font-black text-xs uppercase leading-tight">
                  Polines Graduate
                </div>
                <div className="font-mono text-[10px] font-bold text-foreground/80">
                  GPA 3.85 / 4.00
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Specs & CTAs */}
          <div className="flex flex-col gap-5">
            {/* Quick Stats Bento */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, i) => {
                const colors = ["bg-accent-yellow", "bg-primary", "bg-accent-green", "bg-accent-blue"];
                return (
                  <div
                    key={i}
                    className="nuclear-card p-3.5 bg-muted shadow-[3px_3px_0px_var(--shadow-color)]"
                  >
                    <div className="font-mono text-[10px] sm:text-xs font-bold uppercase text-muted-foreground truncate">
                      {stat.label}
                    </div>
                    <div className="font-heading font-black text-xl sm:text-2xl uppercase text-foreground mt-0.5">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground truncate mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlighted Bio Snippet */}
            <div className="nuclear-card bg-muted p-4 shadow-[3px_3px_0px_var(--shadow-color)]">
              <div className="flex items-center gap-2 mb-2 font-heading font-black text-xs uppercase text-primary">
                <Terminal className="h-4 w-4" />
                <span>Architecture Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Building robust, decoupled web platforms with <span className="font-bold text-foreground">Laravel REST APIs</span> and <span className="font-bold text-foreground">Next.js 16</span>, coupled with <span className="font-bold text-foreground">Flutter mobile clients</span> and <span className="font-bold text-foreground">TensorFlow Lite</span> edge intelligence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="flex-1 min-w-[160px]">
                <NuclearButton variant="primary" size="lg" className="w-full">
                  <ArrowDown className="h-4 w-4" />
                  <span>View Projects</span>
                </NuclearButton>
              </a>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px]"
              >
                <NuclearButton variant="yellow" size="lg" className="w-full">
                  <FileText className="h-4 w-4" />
                  <span>Download CV</span>
                </NuclearButton>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <NuclearButton variant="green" size="lg" className="w-full">
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </NuclearButton>
              </a>
            </div>

            {/* Supported Platforms Pill Bar (matching Nuclear Player's platform icons) */}
            <div className="nuclear-card bg-background/50 p-3 shadow-[2px_2px_0px_var(--shadow-color)]">
              <div className="text-[11px] font-mono font-bold uppercase text-muted-foreground mb-1.5">
                Target Deployment Environments:
              </div>
              <div className="flex flex-wrap gap-2">
                {platformList.map((platform) => (
                  <span
                    key={platform}
                    className="inline-flex items-center gap-1.5 rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs font-bold text-foreground shadow-[1px_1px_0px_var(--shadow-color)]"
                  >
                    <Check className="h-3 w-3 text-accent-green" />
                    <span>{platform}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
