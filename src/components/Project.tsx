"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = {
  projectName: string;
  image: string;
  link: string;
  summary: string;
  tags: string[];
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};
export default function ProjectCard({
  projectName,
  image,
  summary,
  link,
  tags,
  index,
}: ProjectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      custom={index}
    >
      <Link
        href={link}
        target="_blank"
        aria-label={`View project details for ${projectName}`}
        className="font-poppins"
      >
        <div className="relative rounded-lg overflow-hidden group border shadow-md shadow-primary-800 border-primary-700 hover:border-primary-500  duration-200 transition-all">
          <div className="relative">
            <Image
              src={image}
              alt={projectName}
              width={2000}
              quality={100}
              height={2000}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 top-72 bg-gradient-to-t from-primary-900  to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="pb-12 px-5 lg:p-5  ">
                <h1 className="text-primary-300/95 text-lg font-semibold ">
                  {projectName}
                </h1>
                <p className="text-primary-100/90 text-sm  hidden lg:block">
                  {summary}
                </p>
                <div className="flex-wrap gap-2 mt-2 max-w-lg ">
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
    </motion.li>
  );
}
