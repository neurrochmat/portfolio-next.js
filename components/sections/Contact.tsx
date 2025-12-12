"use client";

import { useState, FormEvent } from "react";
import { Highlight } from "@/components/ui/Highlight";
import { DoodleButton } from "@/components/ui/DoodleButton";
import { SketchBorder } from "@/components/ui/SketchBorder";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "Email",
        url: "mailto:your@email.com",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-heading text-zinc-900 dark:text-white">
                    <Highlight type="circle" color="#a3e635" strokeWidth={2}>
                        Get in Touch
                    </Highlight>
                </h2>

                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
                    Have a project in mind or just want to say hi?
                    I&apos;d love to hear from you! ✉️
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                                >
                                    Name
                                </label>
                                <SketchBorder strokeColor="#a3e635" strokeWidth={1.5} roughness={1.5}>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none"
                                        placeholder="Your name"
                                    />
                                </SketchBorder>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                                >
                                    Email
                                </label>
                                <SketchBorder strokeColor="#a3e635" strokeWidth={1.5} roughness={1.5}>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </SketchBorder>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                                >
                                    Message
                                </label>
                                <SketchBorder strokeColor="#a3e635" strokeWidth={1.5} roughness={1.5}>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none resize-none"
                                        placeholder="What's on your mind?"
                                    />
                                </SketchBorder>
                            </div>

                            <DoodleButton
                                type="submit"
                                variant="primary"
                                size="lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </DoodleButton>

                            {submitted && (
                                <p className="text-lime-600 dark:text-lime-400 font-medium animate-fade-in">
                                    ✓ Message sent successfully!
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Social Links & Info */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white font-heading">
                                Or find me on
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors hover:animate-wobble motion-reduce:hover:animate-none"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Decorative illustration */}
                        <div className="hidden md:block">
                            <svg
                                className="w-full max-w-xs text-zinc-300 dark:text-zinc-700"
                                viewBox="0 0 200 150"
                                fill="none"
                            >
                                {/* Envelope */}
                                <path
                                    d="M20,40 L100,90 L180,40 L180,130 L20,130 Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20,40 L180,40"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                {/* Paper coming out */}
                                <path
                                    d="M50,35 L150,35 L150,10 L50,10 Z"
                                    stroke="#a3e635"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                {/* Lines on paper */}
                                <path d="M60,18 L100,18" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M60,26 L140,26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                                {/* Hearts */}
                                <path
                                    d="M160,20 C160,15 165,10 170,15 C175,10 180,15 180,20 C180,28 170,35 170,35 C170,35 160,28 160,20"
                                    stroke="#a3e635"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
