import NavBar from "@/components/NavBar";
import ProjectOverviewContent from "@/components/ProjectOverviewContent";
import { projects } from "@/helpers/projectsData";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const projectId = (await params).projectName;
  const project = projects.find((project) => project.projectName === projectId);

  if (!project) return { title: "Not Found" };

  return {
    title: `Project ${project.Header}`,
  };
}

async function ProjectOverview({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const projectId = (await params).projectName;
  const project = projects.find((project) => project.projectName == projectId);

  if (!project) return notFound();

  return (
    <main className=" font-poppins flex flex-col px-5 sm:px-10 relative  bg-primary-950 ">
      <NavBar />
      <div className="max-w-7xl mx-auto w-full">
        <div className="pt-36">
          <div className="h-screen w-full bg-[#041059]  bg-grid-primary-200/[0.06]  absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-primary-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
          <ProjectOverviewContent project={project} />
        </div>
      </div>
    </main>
  );
}

export default ProjectOverview;
