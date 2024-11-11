// import { OtherTech } from "../OtherTech";
// <OtherTech />
import ProjectGrid from "../ProjectGrid";

export default function Projects() {
  return (
    <section className=" max-container padding-container pt-12 lg:pt-24 ">
      <h1 className="  tracking-[0.030rem]  text-2xl min-[430px]:text-2xl md:text-4xl font-medium  text-primary-200 underline  underline-offset-[6px] ">
        My Latest Projects
      </h1>
      <p className="pt-4 pb-8 text-sm sm:text-base md:text-lg font-light text-primary-300/80  ">
        Here are some of my latest projects that I&apos;ve worked on.
      </p>
      <ProjectGrid />
    </section>
  );
}
