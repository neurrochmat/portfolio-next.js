import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Credentials } from "@/components/sections/Credentials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { NuclearPlayerBar } from "@/components/ui/NuclearPlayerBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <MarqueeTicker />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Credentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <NuclearPlayerBar />
    </>
  );
}
