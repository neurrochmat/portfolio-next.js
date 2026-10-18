"use client";

import Link from "next/link";
import { Mail, MessageSquare, ArrowUp, Heart, Disc3 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t-2 border-border bg-muted py-12 md:py-16 text-foreground select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b-2 border-border">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-border bg-primary font-heading font-black text-primary-foreground shadow-[2px_2px_0px_var(--shadow-color)]">
                NR
              </div>
              <span className="font-heading text-xl font-black uppercase tracking-wider text-foreground">
                {personalInfo.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Informatics Engineering graduate from Politeknik Negeri Semarang (GPA 3.85 / 4.00). Engineering decoupled web architectures, cross-platform mobile apps, and edge intelligence systems.
            </p>

            {/* Tribute Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-background px-3 py-1 font-mono text-[11px] font-bold text-muted-foreground shadow-[2px_2px_0px_var(--shadow-color)]">
              <Disc3 className="h-3.5 w-3.5 text-primary animate-spin" />
              <span>Aesthetic inspired by <a href="https://nuclearplayer.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nuclearplayer.com</a></span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <div className="font-heading font-black text-xs uppercase tracking-widest text-primary">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold uppercase">
              <li>
                <a href="#about" className="hover:text-primary transition-colors hover:underline">
                  About Developer
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors hover:underline">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors hover:underline">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors hover:underline">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-primary transition-colors hover:underline">
                  Academics & Certs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors hover:underline">
                  Recruiter FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <div className="font-heading font-black text-xs uppercase tracking-widest text-primary">
              Connect Channels
            </div>
            <div className="flex flex-col gap-2 text-xs font-mono font-bold">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub @neurrochmat</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-500" />
                <span>LinkedIn /neurrochmat</span>
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-accent-green" />
                <span>WhatsApp Messaging</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="nuclear-btn bg-background text-foreground text-xs py-2 px-3 shadow-[2px_2px_0px_var(--shadow-color)]"
            title="Scroll to top of page"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
