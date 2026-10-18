import { GraduationCap, Award, ShieldCheck, CheckCircle2, Star } from "lucide-react";
import { educationData, certificationsData } from "@/data/portfolioData";
import { NuclearCard } from "@/components/ui/NuclearCard";
import { NuclearBadge } from "@/components/ui/NuclearBadge";

export function Credentials() {
  return (
    <section id="credentials" className="relative w-full py-16 md:py-24 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block mb-3">
            Academics & Verifications
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Education & <span className="heading-accent">Certificates</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Formal technical foundation paired with verified vendor certifications in databases, networks, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          {/* Left Column: Higher Education Card */}
          <NuclearCard badge="Higher Education" badgeColor="yellow" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-border pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-foreground">
                    {educationData.institution}
                  </h3>
                </div>
                <p className="font-mono text-xs sm:text-sm font-bold text-primary mt-1">
                  {educationData.degree} · {educationData.major}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  {educationData.location} ({educationData.period})
                </p>
              </div>

              {/* GPA Trophy Card */}
              <div className="flex items-center gap-2 rounded-md border-2 border-border bg-accent-yellow p-3 text-foreground shadow-[2px_2px_0px_var(--shadow-color)] self-start sm:self-center">
                <Star className="h-5 w-5 fill-current text-foreground" />
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase leading-none">
                    Cumulative GPA
                  </div>
                  <div className="font-heading font-black text-xl leading-none mt-1">
                    {educationData.gpa}
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework Table */}
            <div className="space-y-3">
              <div className="font-heading font-black text-sm uppercase text-foreground">
                Notable Academic Coursework
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {educationData.coursework.map((course) => (
                  <div
                    key={course.name}
                    className="flex items-center justify-between rounded border border-border bg-background px-3 py-2 text-xs font-mono"
                  >
                    <span className="text-foreground truncate pr-2">{course.name}</span>
                    <span className="shrink-0 font-bold px-1.5 py-0.5 rounded border border-border bg-accent-green text-foreground text-[11px]">
                      Grade {course.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </NuclearCard>

          {/* Right Column: Verified Certifications */}
          <NuclearCard badge="Industry Certifications" badgeColor="pink" className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-border pb-3">
              <Award className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-black uppercase text-foreground">
                  Verified Credentials ({certificationsData.length})
                </h3>
                <p className="text-xs text-muted-foreground">
                  Oracle Academy, MikroTik SIA, and Dicoding Indonesia
                </p>
              </div>
            </div>

            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              {certificationsData.map((cert) => {
                const badgeColor =
                  cert.badge === "Oracle"
                    ? "bg-red-100 text-red-900 border-red-300 dark:bg-red-950 dark:text-red-200"
                    : cert.badge === "MikroTik"
                    ? "bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950 dark:text-blue-200"
                    : "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200";

                return (
                  <div
                    key={cert.id}
                    className="flex items-start justify-between gap-3 rounded-md border-2 border-border bg-background p-3 shadow-[2px_2px_0px_var(--shadow-color)] hover:translate-x-0.5 transition-transform"
                  >
                    <div className="space-y-1">
                      <div className="font-heading font-black text-xs sm:text-sm uppercase text-foreground leading-snug">
                        {cert.title}
                      </div>
                      <div className="font-mono text-[11px] text-muted-foreground">
                        {cert.issuer} {cert.year && `• ${cert.year}`}
                      </div>
                    </div>

                    <span
                      className={`shrink-0 font-mono text-[10px] font-bold uppercase rounded border px-2 py-0.5 ${badgeColor}`}
                    >
                      {cert.badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </NuclearCard>
        </div>
      </div>
    </section>
  );
}
