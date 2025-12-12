"use client";

import { Highlight } from "@/components/ui/Highlight";
import { DoodleCard } from "@/components/ui/DoodleCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function About() {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
        threshold: 0.2,
    });

    return (
        <section
            id="about"
            ref={ref}
            className="py-20 px-6"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading text-zinc-900 dark:text-white">
                    <Highlight type="circle" color="#a3e635" strokeWidth={2}>
                        About Me
                    </Highlight>
                </h2>

                <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Main intro */}
                    <DoodleCard className="md:col-span-2">
                        <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                            <p className="text-lg leading-relaxed">
                                👋 Hello! I&apos;m a <strong>passionate developer</strong> who enjoys
                                crafting delightful digital experiences. With a keen eye for design
                                and a love for clean code, I build things that are both beautiful
                                and functional.
                            </p>
                            <p className="text-lg leading-relaxed">
                                I believe in the power of <em>simplicity</em> and the importance of
                                attention to detail. When I&apos;m not coding, you&apos;ll find me
                                sketching ideas, exploring new technologies, or enjoying a good cup
                                of coffee ☕
                            </p>
                        </div>
                    </DoodleCard>

                    {/* Currently Building */}
                    <DoodleCard>
                        <h3 className="text-xl font-bold mb-4 font-heading text-zinc-900 dark:text-white flex items-center gap-2">
                            <span>🔨</span>
                            <Highlight type="underline" color="#a3e635">
                                Currently Building
                            </Highlight>
                        </h3>
                        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-start gap-2">
                                <span className="text-lime-500 mt-1">→</span>
                                <span>A SaaS product for creative teams</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-lime-500 mt-1">→</span>
                                <span>Open-source design system</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-lime-500 mt-1">→</span>
                                <span>Interactive learning platform</span>
                            </li>
                        </ul>
                    </DoodleCard>

                    {/* What I Enjoy */}
                    <DoodleCard>
                        <h3 className="text-xl font-bold mb-4 font-heading text-zinc-900 dark:text-white flex items-center gap-2">
                            <span>✨</span>
                            <Highlight type="underline" color="#a3e635">
                                What I Enjoy
                            </Highlight>
                        </h3>
                        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-start gap-2">
                                <span className="text-lime-500 mt-1">♡</span>
                                <span>Creating smooth UI animations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-lime-500 mt-1">♡</span>
                                <span>Solving complex problems elegantly</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-lime-500 mt-1">♡</span>
                                <span>Learning and sharing knowledge</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-lime-500 mt-1">♡</span>
                                <span>Building accessible interfaces</span>
                            </li>
                        </ul>
                    </DoodleCard>
                </div>

                {/* Handwritten note style decoration */}
                <div className="mt-12 text-center">
                    <p className="font-handwriting text-xl text-zinc-500 dark:text-zinc-500 italic">
                        &quot;Code is poetry written for machines to execute and humans to admire.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
