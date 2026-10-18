import { Server, Smartphone, Cloud, Wrench, CheckCircle } from "lucide-react";
import { skillsCategories } from "@/data/portfolioData";
import { NuclearCard } from "@/components/ui/NuclearCard";
import { NuclearBadge } from "@/components/ui/NuclearBadge";

export function Skills() {
  const categoryIcons = [Server, Smartphone, Cloud, Wrench];
  const badgeColors: ("pink" | "yellow" | "green" | "blue")[] = ["pink", "yellow", "green", "blue"];

  return (
    <section id="skills" className="relative w-full py-16 md:py-24 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block mb-3">
            Core Arsenal & Stack
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Skills & <span className="heading-accent">Capabilities</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Battle-tested technologies across server architectures, client runtimes, containerization, and edge intelligence.
          </p>
        </div>

        {/* 4 Modular Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsCategories.map((category, idx) => {
            const Icon = categoryIcons[idx] || Server;
            const badgeColor = badgeColors[idx % badgeColors.length];

            return (
              <NuclearCard
                key={category.title}
                badge={`Module 0${idx + 1}`}
                badgeColor={badgeColor}
                windowHeader
                windowTitle={category.title}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-border bg-background shadow-[2px_2px_0px_var(--shadow-color)]">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-black uppercase text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 rounded-md border-2 border-border px-2.5 py-1 text-xs font-mono font-bold uppercase transition-transform hover:-translate-y-0.5 select-none ${
                        skill.highlight
                          ? "bg-primary text-primary-foreground shadow-[2px_2px_0px_var(--shadow-color)]"
                          : "bg-background text-foreground shadow-[1px_1px_0px_var(--shadow-color)]"
                      }`}
                    >
                      {skill.highlight && <span className="text-accent-yellow">★</span>}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </NuclearCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
