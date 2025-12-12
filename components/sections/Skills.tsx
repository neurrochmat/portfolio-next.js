"use client";

import { Highlight } from "@/components/ui/Highlight";
import { SketchBorder } from "@/components/ui/SketchBorder";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Docker", "Figma", "VS Code", "Linux", "CI/CD"],
    },
];

function SkillChip({ skill, index }: { skill: string; index: number }) {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            <SketchBorder
                strokeColor="#a3e635"
                strokeWidth={1.5}
                roughness={2}
                className="inline-block hover:animate-wobble motion-reduce:hover:animate-none"
            >
                <span className="block px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900">
                    {skill}
                </span>
            </SketchBorder>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading text-zinc-900 dark:text-white">
                    <Highlight type="underline" color="#a3e635" strokeWidth={3}>
                        Skills & Tools
                    </Highlight>
                </h2>

                <div className="space-y-12">
                    {skillCategories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-xl font-bold mb-6 text-zinc-800 dark:text-zinc-200 font-heading flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-lime-400" />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, index) => (
                                    <SkillChip key={skill} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fun note */}
                <div className="mt-16 text-center">
                    <p className="text-zinc-500 dark:text-zinc-500 italic">
                        ...and always learning something new! 🚀
                    </p>
                </div>
            </div>
        </section>
    );
}
