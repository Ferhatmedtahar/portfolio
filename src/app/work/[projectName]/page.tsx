import NavBar from "@/components/NavBar";
import { ProjectTechnologiesMini } from "@/components/ProjectTechnologiesMini";
import ShinyButton from "@/components/ShinyButton";
import { projects } from "@/helpers/projectsData";
import { Code, Globe, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const projectId = params.projectName;
  const project = projects.find((project) => project.projectName === projectId);

  if (!project) return { title: "Not Found" };

  return {
    title: `Project ${project.Header}`,
  };
}

const ProjectOverview = ({ params }: { params: { projectName: string } }) => {
  const projectId = params.projectName;
  const project = projects.find((project) => project.projectName == projectId);

  if (!project) return notFound();

  const { projectName, image, description, tags, summary } = project;

  return (
    <main className="flex flex-col px-5 sm:px-10 relative  bg-primary-950 ">
      <NavBar />
      <div className="max-w-7xl mx-auto w-full">
        <div className="pt-36">
          <div className="h-screen w-full bg-[#041059]  bg-grid-primary-200/[0.06]  absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-primary-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          <div className="relative z-10">
            <h1 className=" text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl font-normal leading-normal tracking-wide  uppercase mx-auto">
              <p className="font-thin text-6xl md:text-7xl text-primary-500 font-Merriweather pb-4 ">
                {projectName}
              </p>

              <span className="font-normal text-3xl md:text-4xl text-primary-300">
                {summary}
              </span>
            </h1>

            <div className="flex items-center justify-center   my-24">
              <Link href="#image">
                <MoveDown className="size-16" strokeWidth={1} />
              </Link>
            </div>

            <div
              className="rounded-lg overflow-hidden  border-primary-700 border-2 w-fit h-fit mx-auto mb-14 "
              id="image"
            >
              <Image
                src={image}
                width={1000}
                height={800}
                alt={`${projectName} project image rounded-lg `}
              />
            </div>

            <div className="mt-8 mb-32 flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
              <div className="flex-1">
                <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl  text-primary-200 mb-5">
                  Project Overview
                </h2>

                <ProjectTechnologiesMini techStack={tags} />

                <div className="flex items-center gap-4 mt-10">
                  <ShinyButton icon={<Globe />}>
                    <Link href={""} target="_blank">
                      View Demo
                    </Link>
                  </ShinyButton>

                  <ShinyButton icon={<Code />}>
                    <Link href={""} target="_blank">
                      Source Code
                    </Link>
                  </ShinyButton>
                </div>
              </div>

              <p className=" font-normaltext-sm md:text-lg text-primary-300/95  text-center md:text-start flex-1">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectOverview;