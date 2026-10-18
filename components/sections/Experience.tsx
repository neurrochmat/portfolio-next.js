import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { NuclearCard } from "@/components/ui/NuclearCard";
import { NuclearBadge } from "@/components/ui/NuclearBadge";

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-16 md:py-24 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block mb-3">
            Career Log & Deployments
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Work & <span className="heading-accent">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Practical industry contributions across enterprise software consulting, workflow automation, and humanitarian operations.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <NuclearCard
              key={item.id}
              badge={item.type === "work" ? "Professional Track" : "Civic Track"}
              badgeColor={item.type === "work" ? "pink" : "yellow"}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-border pb-3">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-foreground">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 font-mono text-xs text-primary font-bold">
                    <span className="flex items-center gap-1 text-foreground">
                      <Building2 className="h-3.5 w-3.5 text-primary" />
                      <span>{item.company}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start sm:self-center font-mono text-xs font-bold rounded border-2 border-border bg-background px-2.5 py-1 shadow-[1.5px_1.5px_0px_var(--shadow-color)]">
                  <Calendar className="h-3.5 w-3.5 text-accent-green" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-2 pt-1">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent-green shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Used */}
              {item.stack && item.stack.length > 0 && (
                <div className="pt-3 border-t border-border/20 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[11px] font-bold uppercase text-muted-foreground mr-1">
                    Environment:
                  </span>
                  {item.stack.map((tech) => (
                    <NuclearBadge key={tech} color="muted" size="sm">
                      {tech}
                    </NuclearBadge>
                  ))}
                </div>
              )}
            </NuclearCard>
          ))}
        </div>
      </div>
    </section>
  );
}
