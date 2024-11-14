"use client";

import { ProjectTechnologiesMini } from "@/components/ProjectTechnologiesMini";
import ShinyButton from "@/components/ShinyButton";
import { motion, useInView } from "framer-motion";
import { Code, Globe, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
type ProjectProps = {
  Header: string;
  description: string;
  projectName: string;
  image: string;
  summary: string;
  tags: string[];
  sourceCode: string;
  demoLink: string;
};
export default function ProjectOverviewContent({
  project,
}: {
  project: ProjectProps;
}) {
  const {
    Header,
    projectName,
    image,
    description,
    tags,
    summary,
    sourceCode,
    demoLink,
  } = project;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    hiddenOverview: { opacity: 0, x: -20 },
    visibleOverview: () => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.15,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const ref = useRef(null);
  const pageInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const pageOverviewInView = useInView(ref2, { once: true });
  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={pageInView ? "visible" : "hidden"}
        variants={cardVariants}
        className="relative z-10"
      >
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl font-normal  tracking-wide  uppercase mx-auto">
          <p className="font-thin text-3xl sm:text-5xl md:text-7xl text-primary-500 font-Merriweather pb-4 ">
            {Header}
          </p>

          <span className="font-normal text-lg sm:text-xl md:text-2xl text-primary-300 ">
            {summary}
          </span>
        </h1>
        <div className="flex items-center justify-center   my-24">
          <Link href="#image" aria-label="scroll down">
            <MoveDown className="size-16 text-primary-200" strokeWidth={1} />
          </Link>
        </div>
        <div
          className="rounded-lg overflow-hidden  shadow-lg shadow-primary-600 border-primary-700 border-2 w-fit h-fit mx-auto mb-14 "
          id="image"
        >
          <Image
            src={image}
            width={1000}
            height={800}
            alt={`${projectName} project image `}
          />
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hiddenOverview"
        animate={pageOverviewInView ? "visibleOverview" : "hiddenOverview"}
        variants={cardVariants}
        className="mt-8 mb-32 flex flex-col md:flex-row gap-10 md:gap-5 justify-between"
      >
        <div className="flex-1">
          <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl  text-primary-200 mb-5">
            Project Overview
          </h2>

          <ProjectTechnologiesMini techStack={tags} />

          <div className="flex items-center gap-4 mt-10">
            <ShinyButton icon={<Globe />}>
              <Link href={demoLink} target="_blank">
                View Demo
              </Link>
            </ShinyButton>

            <ShinyButton icon={<Code />}>
              <Link href={sourceCode} target="_blank">
                Source Code
              </Link>
            </ShinyButton>
          </div>
        </div>

        <p className=" font-normaltext-sm md:text-lg text-primary-300/95  text-center md:text-start flex-1">
          {description}
        </p>
      </motion.div>
    </>
  );
}
