import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Your Name | Creative Developer Portfolio",
  description: "A creative developer portfolio showcasing projects, skills, and experience. Built with Next.js, TypeScript, and a playful doodle aesthetic.",
  keywords: ["developer", "portfolio", "frontend", "react", "nextjs", "typescript"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Creative Developer Portfolio",
    description: "A creative developer portfolio showcasing projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
