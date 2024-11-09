import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import CurrentTechnologies from "@/components/CurrentTechnologies";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentTechnologies />
      <Certificates />
      <Projects />
      <Contact />
    </>
  );
}
