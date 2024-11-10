import { techStack } from "@/helpers/tech";
import TechCard from "../TechCard";

export default function CurrentTechnologies() {
  return (
    <section className=" max-container padding-container pt-16 flex    flex-col gap-10">
      <h1 className="  tracking-[0.030rem]  text-2xl min-[430px]:text-2xl md:text-4xl font-medium  text-primary-300 underline  underline-offset-[6px] ">
        Current Technologies & Certificates
      </h1>

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4">
          {techStack.map(function cards(tech) {
            return (
              <TechCard
                key={tech.name}
                name={tech.name}
                color={tech.color}
                image={tech.image}
                description={tech.description}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
