"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { NuclearCard } from "@/components/ui/NuclearCard";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is your primary architectural approach for web platforms?",
      a: "I specialize in decoupled RESTful system architectures: pairing a hardened Laravel 11/13 API layer (with Sanctum tokens, Spatie RBAC, and Redis caching) with a reactive Next.js 16 frontend (TypeScript, Tailwind CSS, Shadcn UI). This separation enables fast page loads, easy scaling, and seamless multi-client support (web, mobile, third-party integrations)."
    },
    {
      q: "How do you handle production deployments and infrastructure?",
      a: "I deploy containerized workloads using Docker onto Microsoft Azure Linux Virtual Machines and Google Cloud Run. For monitoring and maintenance, I configure Laravel Horizon for queue throughput, Laravel Pulse for real-time performance telemetry, and Telescope for debugging."
    },
    {
      q: "How does your on-device edge AI implementation work?",
      a: "In projects such as the Waste Detector App, I train and quantize computer vision models with TensorFlow/Keras into quantized TensorFlow Lite flatbuffers. Integrating directly with Flutter's native camera stream bindings allows inference to run 100% on-device with sub-50ms latency, zero cloud costs, and complete offline capability."
    },
    {
      q: "What payment gateways and fintech workflows have you shipped?",
      a: "I have implemented Xendit (Invoices, Webhooks, and automated Escrow Disbursement with auto-release confirmation) for multi-vendor marketplaces, as well as Midtrans Snap (payment tokenization and server-side webhook validation) during my work at PT Citiasia International."
    },
    {
      q: "Are you available for full-time, contract, or remote software engineering roles?",
      a: "Yes! I am actively available for full-time engineering positions, contractual development, and remote opportunities. Based in Semarang, Central Java (WIB, UTC+7), I can accommodate overlapping collaboration hours with global teams."
    }
  ];

  return (
    <section id="faq" className="relative w-full py-16 md:py-24 bg-background border-t-2 border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary bg-muted border-2 border-border px-3 py-1 rounded-md shadow-[2px_2px_0px_var(--shadow-color)] inline-block mb-3">
            Recruiter & Client Clarifications
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Frequently Asked <span className="heading-accent">Questions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about technical workflow, system design, and collaboration readiness.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="nuclear-card bg-muted overflow-hidden transition-all shadow-[3px_3px_0px_var(--shadow-color)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-primary shrink-0">
                      [0{idx + 1}]
                    </span>
                    <span className="font-heading font-black text-base sm:text-lg uppercase text-foreground leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  <span className={`shrink-0 rounded-md border-2 border-border p-1.5 transition-colors ${
                    isOpen ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-border/30 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
