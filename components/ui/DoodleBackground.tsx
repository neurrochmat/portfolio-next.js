"use client";

export function DoodleBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none text-zinc-900 dark:text-white">
            {/* Subtle dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Scattered doodle elements */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.10] dark:opacity-[0.08] text-zinc-900 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="doodle-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                        {/* Small squiggles */}
                        <path
                            d="M10,20 Q15,10 20,20 T30,20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M150,80 Q155,70 160,80 T170,80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        {/* Small circles */}
                        <circle cx="80" cy="50" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="180" cy="150" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        {/* Small x marks */}
                        <path d="M120,30 L127,37 M127,30 L120,37" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M40,120 L47,127 M47,120 L40,127" stroke="currentColor" strokeWidth="1.5" />
                        {/* Small triangles */}
                        <path d="M60,160 L67,148 L74,160 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        {/* Additional doodles */}
                        <path d="M100,100 L108,108 M108,100 L100,108" stroke="currentColor" strokeWidth="1" />
                        <circle cx="30" cy="80" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
                        <path d="M170,30 Q175,25 180,30" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
            </svg>

            {/* Corner decorations */}
            <svg className="absolute top-10 left-10 w-24 h-24 text-lime-400 opacity-30" viewBox="0 0 100 100">
                <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <svg className="absolute bottom-10 right-10 w-20 h-20 text-lime-400 opacity-30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="10,5" />
            </svg>
            <svg className="absolute top-1/4 right-20 w-16 h-16 text-lime-400 opacity-25" viewBox="0 0 100 100">
                <path d="M20,80 L50,20 L80,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <svg className="absolute bottom-1/3 left-16 w-14 h-14 text-lime-400 opacity-25" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="5" />
            </svg>
        </div>
    );
}

