import Image from "next/image";
import { MapPin, Clock, GraduationCap, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { NuclearCard } from "@/components/ui/NuclearCard";
import { NuclearBadge } from "@/components/ui/NuclearBadge";
import { personalInfo, educationData } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="relative w-full py-16 md:py-20 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block select-none">
            Background & Mindset
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
            About <span className="heading-accent">Nur Rahmat</span>
          </h2>
        </div>

        {/* 2-Column Minimalist Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 items-stretch">
          {/* Profile Card */}
          <div className="nuclear-card p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="relative h-28 w-28 mx-auto md:mx-0 overflow-hidden rounded-md border-2 border-border shadow-[3px_3px_0px_var(--shadow-color)]">
                <Image
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-heading text-xl font-black uppercase text-foreground">
                  {personalInfo.name}
                </h3>
                <div className="font-mono text-xs font-bold text-primary">
                  @{personalInfo.nick}
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs text-muted-foreground pt-2 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-accent-yellow shrink-0" />
                  <span>{personalInfo.timezone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-3.5 w-3.5 text-accent-green shrink-0" />
                  <span>Polines (GPA {educationData.gpa})</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="pt-2 border-t border-border/30 space-y-2">
              <div className="font-mono text-[11px] font-bold uppercase text-muted-foreground">
                Strengths
              </div>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.softSkills.slice(0, 5).map((skill) => (
                  <NuclearBadge key={skill} color="muted" size="sm">
                    {skill}
                  </NuclearBadge>
                ))}
              </div>
            </div>
          </div>

          {/* Narrative & Focus */}
          <div className="nuclear-card p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="font-heading font-black text-xs uppercase tracking-wider text-primary">
                Engineering Summary
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="pt-4 border-t border-border/30 space-y-2.5">
              <div className="font-mono text-[11px] font-bold uppercase text-muted-foreground">
                Core Architectural Practices
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground font-medium">
                {[
                  "Decoupled Laravel REST APIs & Sanctum auth",
                  "Next.js 16 App Router & TypeScript interfaces",
                  "Cross-platform Flutter mobile clients",
                  "On-device TensorFlow Lite sub-50ms inference",
                  "Dockerized deployments to Microsoft Azure VM",
                  "Xendit & Midtrans payment vaults"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
