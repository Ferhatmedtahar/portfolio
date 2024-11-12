import { OtherTech } from "../OtherTech";

import ProjectGrid from "../ProjectGrid";

export default function Projects() {
  return (
    <section id="projects" className=" max-container padding-container pt-12  ">
      <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
        <div>
          <h1 className="  tracking-[0.030rem]  text-2xl min-[430px]:text-2xl md:text-4xl font-medium  text-primary-200 underline  underline-offset-[6px] ">
            Latest Projects
          </h1>
          <p className="pt-4 pb-8 text-sm sm:text-base md:text-lg font-light text-primary-300/80  ">
            Here are some of my latest projects that I&apos;ve worked on.
          </p>
        </div>

        <OtherTech />
      </div>
      <ProjectGrid />
    </section>
  );
}
