import React from "react";
import { cn } from "@/lib/utils";

interface NuclearCardProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  badgeColor?: "pink" | "yellow" | "green" | "blue" | "purple" | "muted";
  interactive?: boolean;
  windowHeader?: boolean;
  windowTitle?: string;
}

export function NuclearCard({
  children,
  className,
  badge,
  badgeColor = "pink",
  interactive = false,
  windowHeader = false,
  windowTitle,
  ...props
}: NuclearCardProps) {
  const badgeColorMap = {
    pink: "bg-primary text-primary-foreground",
    yellow: "bg-accent-yellow text-foreground",
    green: "bg-accent-green text-foreground",
    blue: "bg-accent-blue text-foreground",
    purple: "bg-accent-purple text-foreground",
    muted: "bg-muted text-foreground"
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border-2 border-border bg-muted text-foreground shadow-[4px_4px_0px_var(--shadow-color)] transition-all",
        interactive && "hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--shadow-color)]",
        className
      )}
      {...props}
    >
      {badge && (
        <span
          className={cn(
            "absolute -top-3 left-4 md:left-6 z-10 border-2 border-border font-heading font-black tracking-widest uppercase rounded-md px-3 py-0.5 text-xs shadow-[2px_2px_0px_var(--shadow-color)] select-none",
            badgeColorMap[badgeColor]
          )}
        >
          {badge}
        </span>
      )}

      {windowHeader && (
        <div className="flex items-center justify-between border-b-2 border-border px-3 py-2 bg-muted/60 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-border bg-red-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full border border-border bg-yellow-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full border border-border bg-green-400 inline-block" />
          </div>
          {windowTitle && (
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground truncate max-w-[200px] md:max-w-none">
              {windowTitle}
            </span>
          )}
          <div className="w-8" />
        </div>
      )}

      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
