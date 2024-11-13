import { OtherTech } from "../OtherTech";
import ProjectGrid from "../ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" font-poppins max-container padding-container   pt-12  "
    >
      <div className="flex justify-between   sm:items-center flex-col sm:flex-row  ">
        <div className="lg:pt-32 pt-4">
          <h1 className=" sm:text-start text-center tracking-[0.030rem]  text-2xl  md:text-4xl lg:text-6xl font-medium  text-primary-200 underline  underline-offset-[6px] ">
            Latest Projects
          </h1>
          <p className="pt-4 lg:pt-6 pb-8 text-sm sm:text-base md:text-lg font-light text-primary-300/80 sm:text-start text-center  ">
            Here are some of my latest projects that I&apos;ve worked on.
          </p>
        </div>

        <OtherTech />
      </div>
      <ProjectGrid />
    </section>
  );
}
