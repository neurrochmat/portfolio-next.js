"use client";

import { useState, useEffect } from "react";
import { SketchBorder } from "@/components/ui/SketchBorder";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled past threshold
            setIsScrolled(window.scrollY > 50);

            // Find active section based on scroll position
            const sections = navItems.map((item) => item.href.replace("#", ""));

            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(href.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-sm"
                    : "bg-transparent"
            )}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#home");
                        }}
                        className="text-xl font-bold font-heading text-zinc-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                        <span className="text-lime-500">{"<"}</span>
                        Portfolio
                        <span className="text-lime-500">{"/>"}</span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors",
                                        activeSection === item.href.replace("#", "")
                                            ? "text-lime-600 dark:text-lime-400"
                                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                                    )}
                                >
                                    {item.label}
                                    {activeSection === item.href.replace("#", "") && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-lime-500 rounded-full" />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <SketchBorder strokeColor="#a3e635" strokeWidth={1.5} roughness={1}>
                            <ul className="bg-white dark:bg-zinc-900 py-2">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.href);
                                            }}
                                            className={cn(
                                                "block px-4 py-3 text-sm font-medium transition-colors",
                                                activeSection === item.href.replace("#", "")
                                                    ? "text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20"
                                                    : "text-zinc-600 dark:text-zinc-400"
                                            )}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </SketchBorder>
                    </div>
                )}
            </nav>
        </header>
    );
}
