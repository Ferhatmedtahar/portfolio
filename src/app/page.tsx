import Contact from "@/components/sections/Contact";
import CurrentTechnologies from "@/components/sections/CurrentTechnologies";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentTechnologies />
      <Projects />
      <Contact />
    </>
  );
}
