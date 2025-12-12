"use client";

import { ReactNode } from "react";
import { SketchBorder } from "./SketchBorder";
import { cn } from "@/lib/utils";

interface DoodleCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function DoodleCard({
    children,
    className,
    hoverEffect = true,
}: DoodleCardProps) {
    return (
        <SketchBorder
            strokeColor="#a3e635"
            strokeWidth={2}
            roughness={1.5}
            className={cn(
                "bg-white dark:bg-zinc-900 p-6",
                hoverEffect && "transition-transform duration-200 hover:scale-[1.01] hover:animate-wobble motion-reduce:hover:scale-100 motion-reduce:hover:animate-none",
                className
            )}
        >
            <div className="relative z-0">{children}</div>
        </SketchBorder>
    );
}
