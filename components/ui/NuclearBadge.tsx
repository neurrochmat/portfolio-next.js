import React from "react";
import { cn } from "@/lib/utils";

interface NuclearBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "pink" | "yellow" | "green" | "blue" | "purple" | "orange" | "cyan" | "muted";
  size?: "sm" | "md";
}

export function NuclearBadge({
  children,
  className,
  color = "muted",
  size = "md",
  ...props
}: NuclearBadgeProps) {
  const colorMap = {
    pink: "bg-primary text-primary-foreground",
    yellow: "bg-accent-yellow text-foreground",
    green: "bg-accent-green text-foreground",
    blue: "bg-accent-blue text-foreground",
    purple: "bg-accent-purple text-foreground",
    orange: "bg-accent-orange text-foreground",
    cyan: "bg-accent-cyan text-foreground",
    muted: "bg-background text-foreground"
  };

  const sizeMap = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border-2 border-border font-mono font-bold tracking-tight uppercase select-none shadow-[1.5px_1.5px_0px_var(--shadow-color)]",
        colorMap[color],
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
