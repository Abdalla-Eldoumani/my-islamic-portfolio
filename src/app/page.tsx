import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsShowcase />
      <Footer />
    </main>
  );
}
