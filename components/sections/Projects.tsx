"use client";

import { useState } from "react";
import { Highlight } from "@/components/ui/Highlight";
import { DoodleCard } from "@/components/ui/DoodleCard";
import { SketchBorder } from "@/components/ui/SketchBorder";
import { projects, allTags, Project } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-500 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <DoodleCard className="h-full flex flex-col">
                <div className="flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-2 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white font-heading">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-lime-600 dark:text-lime-400 hover:underline flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Demo
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:underline flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                        </a>
                    )}
                </div>
            </DoodleCard>
        </div>
    );
}

export function Projects() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredProjects = selectedTag
        ? projects.filter((p) => p.tags.includes(selectedTag))
        : projects;

    return (
        <section id="projects" className="py-20 px-6 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-heading text-zinc-900 dark:text-white">
                    <Highlight type="box" color="#a3e635" strokeWidth={2}>
                        Projects
                    </Highlight>
                </h2>

                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
                    A collection of things I&apos;ve built. Each project is a new adventure!
                </p>

                {/* Filter Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${selectedTag === null
                                ? "bg-lime-500 text-white"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                            }`}
                    >
                        All
                    </button>
                    {allTags.map((tag) => (
                        <SketchBorder
                            key={tag}
                            strokeColor={selectedTag === tag ? "#a3e635" : "transparent"}
                            strokeWidth={1.5}
                            roughness={1}
                            className="inline-block"
                        >
                            <button
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 text-sm font-medium transition-all ${selectedTag === tag
                                        ? "text-lime-600 dark:text-lime-400"
                                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                                    }`}
                            >
                                {tag}
                            </button>
                        </SketchBorder>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
