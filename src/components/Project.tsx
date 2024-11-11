"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  projectName: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  projectName,
  image,
  description,
  link,
  tags,
}: ProjectProps) {
  return (
    <Link
      href={link}
      aria-label={`View project details for ${projectName}`}
      className="font-poppins"
    >
      <div className="relative rounded-lg overflow-hidden group border shadow-md shadow-primary-800 border-primary-700 hover:border-primary-500  duration-200 transition-all">
        <div className="relative">
          <Image
            src={image}
            alt={projectName}
            width={600}
            height={600}
            priority={link === "/projects/edulink"}
            className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 top-72 bg-gradient-to-t from-primary-900  to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="p-4">
              <h1 className="text-primary-50 text-lg font-semibold">
                {projectName}
              </h1>
              <p className="text-primary-100 text-sm">{description}</p>
              <div className="flex flex-wrap gap-2 mt-2 max-w-lg">
                {tags.map(function (tag: string) {
                  return (
                    <div
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary-800 text-primary-100 px-2.5 py-0.5 text-xs font-normal"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// card1;

// return (
//   <div className="p-4 sm:p-6 space-y-6 max-w-[652px] rounded-lg border h-[632px] border-primary-600 bg-primary-950 transition-colors duration-200">
//     {/* Image Section */}
//     <Link className="rounded-lg overflow-hidden block " href={link}>
//       <Image
//         alt={`${projectName} Image`}
//         loading="lazy"
//         // fill
//         width={960}
//         height={1280}
//         decoding="async"
//         src={image}
//         className="hover:scale-105 rounded-lg transition-transform duration-700 w-full  h-[350px] object-cover"
//       />
//     </Link>

//     {/* Project Info */}
//     <div className="flex flex-col space-y-5">
//       {/* Project Title */}
//       <h3 className="text-2xl sm:text-3xl font-semibold text-primary-300">
//         {projectName}
//       </h3>

//       {/* Tags & Button Container */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         {/* Tags */}
//         <div className="flex flex-wrap items-center gap-2.5 max-w-sm">
//           {tags.map((tech) => (
//             <p
//               key={tech}
//               className="cursor-default text-xs rounded-md text-primary-700 hover:text-primary-900 font-medium bg-primary-300 hover:bg-primary-400 border border-primary-500 transition-colors duration-200 w-fit py-2 px-4"
//             >
//               {tech}
//             </p>
//           ))}
//         </div>

//         {/* Button */}
//         <Link
//           href={link}
//           className="p-3 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 rounded-lg"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="size-5 sm:size-8 text-primary-100"
//           >
//             <path d="M13 5H19V11"></path>
//             <path d="M19 5L5 19"></path>
//           </svg>
//         </Link>
//       </div>
//     </div>
//   </div>
// );
