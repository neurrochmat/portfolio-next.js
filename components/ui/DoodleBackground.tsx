"use client";

export function DoodleBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Subtle dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Scattered doodle elements */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="doodle-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                        {/* Small squiggles */}
                        <path
                            d="M10,20 Q15,10 20,20 T30,20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                        <path
                            d="M150,80 Q155,70 160,80 T170,80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                        {/* Small circles */}
                        <circle cx="80" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="180" cy="150" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
                        {/* Small x marks */}
                        <path d="M120,30 L125,35 M125,30 L120,35" stroke="currentColor" strokeWidth="1" />
                        <path d="M40,120 L45,125 M45,120 L40,125" stroke="currentColor" strokeWidth="1" />
                        {/* Small triangles */}
                        <path d="M60,160 L65,150 L70,160 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
            </svg>

            {/* Corner decorations */}
            <svg className="absolute top-10 left-10 w-20 h-20 text-lime-400 opacity-20" viewBox="0 0 100 100">
                <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <svg className="absolute bottom-10 right-10 w-16 h-16 text-lime-400 opacity-20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
            </svg>
        </div>
    );
}
