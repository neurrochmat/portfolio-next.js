"use client";

import { Highlight } from "@/components/ui/Highlight";
import { DoodleButton } from "@/components/ui/DoodleButton";

export function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Doodle Illustration */}
                <div className="mb-8 flex justify-center">
                    <svg
                        className="w-48 h-48 md:w-64 md:h-64 text-zinc-800 dark:text-zinc-200"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Laptop base */}
                        <path
                            d="M30,140 Q25,140 25,135 L25,80 Q25,75 30,75 L170,75 Q175,75 175,80 L175,135 Q175,140 170,140 Z"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="sketch-line"
                        />
                        {/* Screen */}
                        <path
                            d="M35,82 L165,82 L165,132 L35,132 Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Code lines on screen */}
                        <path d="M45,95 L80,95" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />
                        <path d="M55,105 L100,105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                        <path d="M55,115 L90,115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                        <path d="M45,125 L70,125" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />

                        {/* Keyboard base */}
                        <path
                            d="M15,145 Q10,145 12,150 L25,165 Q27,168 35,168 L165,168 Q173,168 175,165 L188,150 Q190,145 185,145 Z"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Decorative elements */}
                        <circle cx="175" cy="55" r="8" stroke="#a3e635" strokeWidth="2" fill="none" />
                        <path d="M25,55 L35,45 M35,55 L25,45" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />
                        <path d="M100,40 Q105,30 110,40 T120,40" stroke="currentColor" strokeWidth="1.5" fill="none" />

                        {/* Coffee cup */}
                        <path
                            d="M150,45 L150,65 Q150,70 145,70 L135,70 Q130,70 130,65 L130,45"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path d="M150,50 Q160,50 160,58 Q160,65 150,65" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M135,38 Q137,32 139,38" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <path d="M140,35 Q142,28 144,35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
                    </svg>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-zinc-900 dark:text-white font-heading">
                    Hi, I&apos;m{" "}
                    <Highlight type="highlight" color="#a3e635" strokeWidth={3}>
                        Your Name
                    </Highlight>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl mx-auto">
                    A{" "}
                    <Highlight type="underline" color="#a3e635" delay={600}>
                        creative developer
                    </Highlight>{" "}
                    who loves building beautiful & functional web experiences.
                </p>

                <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-10 max-w-xl mx-auto">
                    Turning ideas into reality, one line of code at a time ✨
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <DoodleButton href="#projects" variant="primary" size="lg">
                        View Projects
                    </DoodleButton>
                    <DoodleButton href="#contact" variant="secondary" size="lg">
                        Get in Touch
                    </DoodleButton>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none">
                <svg
                    className="w-6 h-6 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
