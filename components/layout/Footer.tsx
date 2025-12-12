"use client";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Credits */}
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                        © {currentYear} Your Name. Built with{" "}
                        <span className="text-lime-500">♥</span> and lots of{" "}
                        <span className="text-lime-500">☕</span>
                    </p>

                    {/* Doodle signature */}
                    <div className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-600">
                        <svg className="w-16 h-8" viewBox="0 0 80 40" fill="none">
                            <path
                                d="M5,20 Q15,5 25,20 T45,20 T65,20 T75,20"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="font-handwriting italic">made with doodles</span>
                    </div>

                    {/* Back to top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors flex items-center gap-1"
                    >
                        Back to top
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
