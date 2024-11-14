import { techStack } from "@/helpers/tech";
import TechCard from "../TechCard";

export default function CurrentTechnologies() {
  return (
    <section
      id="tech"
      className="font-poppins max-container padding-container pt-16 flex  relative  flex-col gap-12"
    >
      <div className="absolute -top-5 inset-x-0 h-10 bg-[#001028]/50   blur-[9px]  "></div>
      <div className="flex flex-col gap-4">
        <h1 className=" sm:text-start text-center tracking-[0.030rem]  text-2xl lg:text-5xl  md:text-4xl font-medium  text-primary-200 underline  underline-offset-[6px] ">
          Current Technologies
        </h1>
        <p className=" pt-3  pb-6 text-sm sm:text-base md:text-lg font-light text-primary-300/80 sm:text-start text-center">
          I leverage these technologies to create intuitive, visually
          captivating, and highly functional applications that deliver seamless
          user experiences. My approach focuses on crafting solutions that
          strike the perfect balance between aesthetics and performance.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4">
        {techStack.map(function cards(tech, index) {
          return (
            <TechCard
              index={index}
              key={tech.name}
              name={tech.name}
              color={tech.color}
              image={tech.image}
              description={tech.description}
            />
          );
        })}
      </ul>
    </section>
  );
}
