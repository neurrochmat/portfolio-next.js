import React from "react";
import { Sparkles, Terminal, Cpu, Cloud, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";

interface MarqueeTickerProps {
  className?: string;
  reverse?: boolean;
}

export function MarqueeTicker({ className = "" }: MarqueeTickerProps) {
  const items = [
    { label: "LARAVEL 13 & 11", icon: Zap, color: "text-red-500" },
    { label: "NEXT.JS 16 APP ROUTER", icon: Globe, color: "text-blue-500" },
    { label: "FLUTTER & DART", icon: Smartphone, color: "text-cyan-500" },
    { label: "TENSORFLOW LITE EDGE AI", icon: Cpu, color: "text-amber-500" },
    { label: "MICROSOFT AZURE VM", icon: Cloud, color: "text-sky-500" },
    { label: "DOCKER CONTAINERIZATION", icon: Terminal, color: "text-blue-400" },
    { label: "REDIS & REVERB WEBSOCKET", icon: Sparkles, color: "text-pink-500" },
    { label: "GPA 3.85 / 4.00 (POLINES)", icon: ShieldCheck, color: "text-green-500" },
    { label: "XENDIT & MIDTRANS VAULTS", icon: Zap, color: "text-yellow-500" },
    { label: "PT CITIASIA ENTERPRISE INTERN", icon: ShieldCheck, color: "text-purple-500" },
  ];

  return (
    <div className={`relative w-full overflow-hidden border-y-2 border-border bg-muted py-3 select-none ${className}`}>
      {/* Visual edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-muted to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-muted to-transparent" />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First copy */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 font-heading font-black tracking-widest text-sm md:text-base uppercase text-foreground">
                <Icon className={`h-4 w-4 ${item.color}`} />
                <span>{item.label}</span>
                <span className="text-primary font-bold ml-4">✦</span>
              </div>
            );
          })}
        </div>

        {/* Duplicate copy for seamless infinite loop */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${idx}`} className="flex items-center gap-2 font-heading font-black tracking-widest text-sm md:text-base uppercase text-foreground">
                <Icon className={`h-4 w-4 ${item.color}`} />
                <span>{item.label}</span>
                <span className="text-primary font-bold ml-4">✦</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
