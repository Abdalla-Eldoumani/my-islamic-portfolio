import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
