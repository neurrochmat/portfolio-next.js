import Image from "next/image";
import { MapPin, Clock, Award, Briefcase, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";
import { NuclearCard } from "@/components/ui/NuclearCard";
import { NuclearBadge } from "@/components/ui/NuclearBadge";
import { personalInfo, educationData } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="relative w-full py-16 md:py-24 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block mb-3">
            Profile & Architecture
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            About <span className="heading-accent">The Developer</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A developer who bridges the gap between resilient backend infrastructure, fluid frontend/mobile experiences, and on-device intelligent systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Left Column: Profile Card & Location */}
          <NuclearCard badge="Developer Profile" badgeColor="yellow" className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-md border-2 border-border shadow-[3px_3px_0px_var(--shadow-color)]">
                <Image
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center sm:text-left space-y-1.5">
                <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-foreground">
                  {personalInfo.name}
                </h3>
                <div className="font-mono text-xs font-bold text-primary">
                  @{personalInfo.nick}
                </div>
                <div className="inline-flex items-center gap-1.5 rounded bg-accent-green/20 border border-accent-green text-foreground px-2 py-0.5 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  <span>{personalInfo.status}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t-2 border-border font-mono text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-accent-yellow shrink-0" />
                <span>Timezone: {personalInfo.timezone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-accent-blue shrink-0" />
                <span>{educationData.institution} (GPA {educationData.gpa})</span>
              </div>
            </div>

            {/* Soft Skills Badges */}
            <div className="space-y-2 pt-2">
              <div className="font-heading font-black text-xs uppercase text-muted-foreground">
                Core Competencies & Soft Skills
              </div>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.softSkills.map((skill) => (
                  <NuclearBadge key={skill} color="muted" size="sm">
                    {skill}
                  </NuclearBadge>
                ))}
              </div>
            </div>
          </NuclearCard>

          {/* Right Column: In-depth Narrative & Highlights Bento */}
          <div className="space-y-6">
            <NuclearCard badge="Engineering Summary" badgeColor="pink">
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t-2 border-border">
                <div className="rounded border-2 border-border bg-background p-3 shadow-[2px_2px_0px_var(--shadow-color)]">
                  <div className="flex items-center gap-1.5 font-heading font-black text-xs uppercase text-primary">
                    <Briefcase className="h-4 w-4" />
                    <span>Enterprise Proven</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Developed smart city GIS, waste management APIs, and Midtrans payment integrations at PT Citiasia International.
                  </p>
                </div>

                <div className="rounded border-2 border-border bg-background p-3 shadow-[2px_2px_0px_var(--shadow-color)]">
                  <div className="flex items-center gap-1.5 font-heading font-black text-xs uppercase text-accent-green">
                    <Sparkles className="h-4 w-4" />
                    <span>Edge Intelligence</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Quantized TensorFlow models to TFLite for zero-latency, sub-50ms offline classification on Android camera streams.
                  </p>
                </div>
              </div>
            </NuclearCard>

            {/* Principles Checklist */}
            <NuclearCard badge="Development Philosophy" badgeColor="green">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Decoupled REST APIs with strictly validated schemas",
                  "Type-safe frontends with Next.js 16 & TypeScript",
                  "Cross-platform Flutter parity for iOS and Android",
                  "Automated escrow and webhook security with Xendit",
                  "Real-time event broadcasting via Laravel Reverb",
                  "Production-grade container deployment with Docker & Azure"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </NuclearCard>
          </div>
        </div>
      </div>
    </section>
  );
}
