"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { SketchBorder } from "./SketchBorder";
import { cn } from "@/lib/utils";

interface DoodleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    href?: string;
}

export function DoodleButton({
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    ...props
}: DoodleButtonProps) {
    const baseStyles = cn(
        "relative font-medium transition-all duration-200 cursor-pointer",
        "hover:scale-[1.02] active:scale-[0.98]",
        "motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2",
        {
            "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900": variant === "primary",
            "bg-transparent text-zinc-900 dark:text-white": variant === "secondary",
        },
        {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
        },
        className
    );

    const content = (
        <SketchBorder
            strokeColor={variant === "primary" ? "#18181b" : "#18181b"}
            strokeWidth={2}
            roughness={1}
            className="inline-block hover:animate-wobble motion-reduce:hover:animate-none"
        >
            <span className={baseStyles}>{children}</span>
        </SketchBorder>
    );

    if (href) {
        return (
            <a href={href} className="inline-block">
                {content}
            </a>
        );
    }

    return (
        <button {...props} className="inline-block bg-transparent border-none p-0">
            {content}
        </button>
    );
}
