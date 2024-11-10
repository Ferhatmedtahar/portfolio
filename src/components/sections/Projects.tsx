import { Project } from "../Project";
export default function Projects() {
  return (
    <section className=" max-container padding-container pt-16 flex    flex-col gap-10">
      <h1 className="  tracking-[0.030rem]  text-2xl min-[430px]:text-2xl md:text-4xl font-medium  text-primary-300 underline  underline-offset-[6px] ">
        Projects
      </h1>

      <Project />
    </section>
  );
}
