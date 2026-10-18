"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Menu, X, MessageSquare, Terminal, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/portfolioData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Credentials", href: "#credentials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-border bg-muted/95 backdrop-blur-md select-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform active:scale-95"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-border bg-primary font-heading font-black text-primary-foreground shadow-[2px_2px_0px_var(--shadow-color)] transition-transform group-hover:rotate-6">
            NR
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base sm:text-lg font-black uppercase tracking-wider text-foreground">
              {personalInfo.nick}
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
              Fullstack & AI/IoT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm font-black tracking-widest uppercase text-foreground hover:text-primary transition-colors hover:underline decoration-2 underline-offset-6"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* GitHub Star Pill */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nuclear-btn bg-background text-foreground h-9 px-3 text-xs gap-1.5"
            title="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden xl:inline">GitHub</span>
          </a>

          {/* WhatsApp / Chat */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nuclear-btn bg-accent-green text-foreground h-9 px-3 text-xs gap-1.5"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden md:inline">Let&apos;s Talk</span>
          </a>

          {/* Resume PDF */}
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="nuclear-btn bg-primary text-primary-foreground h-9 px-3 text-xs gap-1.5"
            title="Download CV"
          >
            <FileText className="h-4 w-4" />
            <span>CV</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md border-2 border-border bg-background p-2 text-foreground shadow-[2px_2px_0px_var(--shadow-color)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-border bg-muted px-4 py-6 sm:hidden animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-base font-black tracking-widest uppercase text-foreground hover:text-primary transition-colors py-1.5 border-b border-border/20"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="nuclear-btn bg-primary text-primary-foreground text-sm w-full py-2.5"
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume / CV</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nuclear-btn bg-accent-green text-foreground text-sm w-full py-2.5"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nuclear-btn bg-background text-foreground text-sm w-full py-2.5"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub @neurrochmat</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
