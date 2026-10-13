// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import ResearchPoster from "./research-poster";
import Activities from "./activities";
import MediaGallery from "./media-gallery";
import Resume from "./resume";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-200">
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <ResearchPoster />
      <Activities />
      <MediaGallery />
      <Resume />
      <ContactForm />
      <Footer />
    </main>
  );
}
