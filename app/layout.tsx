import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://neurrochmat.dev"),
  title: "Nur Rahmat Hidayat — Fullstack & Mobile Developer · Applied AI & IoT",
  description: "Portfolio of Nur Rahmat Hidayat (neurrochmat) — Fullstack & Mobile Developer specializing in decoupled Laravel 13 & Next.js 16 architectures, Flutter mobile apps, and on-device machine learning with TensorFlow Lite.",
  keywords: [
    "Nur Rahmat Hidayat",
    "neurrochmat",
    "Fullstack Developer",
    "Mobile Developer",
    "Next.js 16",
    "Laravel 13",
    "Flutter",
    "TensorFlow Lite",
    "Politeknik Negeri Semarang",
    "Indonesia Developer"
  ],
  authors: [{ name: "Nur Rahmat Hidayat", url: "https://github.com/neurrochmat" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/profile.jpg"
  },
  openGraph: {
    title: "Nur Rahmat Hidayat — Fullstack & Mobile Developer · Applied AI & IoT",
    description: "Engineering decoupled web platforms, cross-platform mobile apps, and edge intelligence systems.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Nur Rahmat Hidayat"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Rahmat Hidayat — Fullstack & Mobile Developer",
    description: "Engineering decoupled web platforms, cross-platform mobile apps, and edge intelligence systems."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
