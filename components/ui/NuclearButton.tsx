import React from "react";
import { cn } from "@/lib/utils";

export interface NuclearButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "yellow" | "green" | "blue" | "purple" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const NuclearButton = React.forwardRef<HTMLButtonElement, NuclearButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-muted text-foreground hover:bg-muted/90",
      yellow: "bg-accent-yellow text-foreground hover:bg-accent-yellow/90",
      green: "bg-accent-green text-foreground hover:bg-accent-green/90",
      blue: "bg-accent-blue text-foreground hover:bg-accent-blue/90",
      purple: "bg-accent-purple text-foreground hover:bg-accent-purple/90",
      outline: "bg-transparent text-foreground hover:bg-muted"
    };

    const sizeClasses = {
      sm: "h-8 px-2.5 text-xs",
      md: "h-9.5 px-4 text-sm",
      lg: "h-11 px-5 text-base"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-heading font-black tracking-wider uppercase border-2 border-border transition-all duration-150 select-none",
          "shadow-[3px_3px_0px_var(--shadow-color)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_var(--shadow-color)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[3px_3px_0px_var(--shadow-color)]",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NuclearButton.displayName = "NuclearButton";
