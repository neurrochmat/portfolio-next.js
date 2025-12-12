"use client";

import { Highlight } from "@/components/ui/Highlight";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface TimelineItem {
    id: string;
    type: "work" | "education";
    title: string;
    organization: string;
    period: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        id: "1",
        type: "work",
        title: "Senior Frontend Developer",
        organization: "Tech Company Inc.",
        period: "2023 - Present",
        description: "Leading frontend architecture and mentoring junior developers. Building scalable web applications with React and TypeScript.",
    },
    {
        id: "2",
        type: "work",
        title: "Frontend Developer",
        organization: "Startup XYZ",
        period: "2021 - 2023",
        description: "Developed and maintained multiple client-facing applications. Improved performance by 40% through code optimization.",
    },
    {
        id: "3",
        type: "education",
        title: "Bachelor of Computer Science",
        organization: "State University",
        period: "2017 - 2021",
        description: "Focused on software engineering and web technologies. Graduated with honors.",
    },
    {
        id: "4",
        type: "work",
        title: "Web Development Intern",
        organization: "Digital Agency",
        period: "2020",
        description: "Built responsive websites and learned industry best practices. First introduction to professional development.",
    },
];

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative flex items-center gap-6 md:gap-12 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div className="relative">
                    {/* Outer sketchy circle */}
                    <svg className="w-8 h-8 text-lime-400" viewBox="0 0 32 32" fill="none">
                        <circle
                            cx="16"
                            cy="16"
                            r="12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="4 2"
                            fill="white"
                            className="dark:fill-zinc-900"
                        />
                    </svg>
                    {/* Icon */}
                    <span className="absolute inset-0 flex items-center justify-center text-xs">
                        {item.type === "work" ? "💼" : "🎓"}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div
                className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-[50%]"
                    }`}
            >
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-lg border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-lime-400 dark:hover:border-lime-400 transition-colors">
                    <span className="text-xs font-medium text-lime-600 dark:text-lime-400 uppercase tracking-wider">
                        {item.period}
                    </span>
                    <h3 className="text-lg font-bold mt-1 text-zinc-900 dark:text-white font-heading">
                        {item.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                        {item.organization}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Timeline() {
    return (
        <section id="experience" className="py-20 px-6 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-heading text-zinc-900 dark:text-white">
                    <Highlight type="bracket" color="#a3e635" strokeWidth={2}>
                        Experience & Education
                    </Highlight>
                </h2>

                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
                    My journey so far — from learning to building to leading.
                </p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700 md:-translate-x-1/2">
                        {/* Doodle style line decoration */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                            <line
                                x1="50%"
                                y1="0"
                                x2="50%"
                                y2="100%"
                                stroke="#a3e635"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                className="opacity-50"
                            />
                        </svg>
                    </div>

                    {/* Timeline entries */}
                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <TimelineEntry key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
