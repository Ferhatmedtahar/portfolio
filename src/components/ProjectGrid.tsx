import { columns } from "@/helpers/projectsData";
// import { OtherTech } from "../components/OtherTech";
import ProjectCard from "./Project";
// <OtherTech />

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {column.map((project) => (
            <ProjectCard
              key={project.projectName}
              description={project.description}
              projectName={project.projectName}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      ))}
      {/* <OtherTech /> */}
    </div>
  );
}
