export function ProjectTechnologiesMini({
  techStack,
}: {
  techStack: string[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 max-w-sm">
      {techStack.map((tech) => (
        <p
          key={tech}
          className="text-xs cursor-pointer text-primary-300 hover:text-primary-300 bg-primary-900  font-medium  border border-primary-700 transition-colors duration-200 w-fit rounded-md py-2 px-4"
        >
          {tech}
        </p>
      ))}
    </div>
  );
}
