import Scene from "@/app/components/canvas/Scene";
import Navigation from "@/app/components/ui/navigation";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import AISection from "@/app/components/sections/AISection";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/sections/Footer";
import { Providers } from "@/app/components/providers";

export default function Home() {
  return (
    <Providers>
      <main className="relative">
        <div className="fixed inset-0">
          <Scene />
        </div>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <AISection />
        <Contact />
        <Footer />
      </main>
    </Providers>
  );
}