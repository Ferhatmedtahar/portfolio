import Contact from "@/components/sections/Contact";
import CurrentTechnologies from "@/components/sections/CurrentTechnologies";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <main className="relative ">
      <NavBar />
      <Hero />
      <CurrentTechnologies />
      <Projects />
      <Contact />
    </main>
  );
}
