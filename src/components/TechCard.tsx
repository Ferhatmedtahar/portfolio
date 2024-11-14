"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
type TechCardProps = {
  index: number;
  name: string;
  image: string;
  color: string;
  description: string;
};
// Define the animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

export default function TechCard({
  index,
  name,
  image,
  color,
  description,
}: TechCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      custom={index} // Pass index to the variants for staggered delay
      className="font-poppins flex items-center flex-1 gap-5 p-2.5 rounded-xl border border-primary-700 bg-primary-900 hover:bg-primary-800 hover:border-primary-500 transition-colors duration-200"
    >
      <div
        className={`p-3  rounded-xl w-fit`}
        style={{ backgroundColor: `${color}33` }}
      >
        <Image
          src={image}
          alt="bash-logo"
          loading="lazy"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="size-8  "
        />
      </div>
      <div>
        <h4 className="text-lg font-medium cursor-default">{name}</h4>
        <p className="text-slate-100/80  text-sm cursor-default">
          {description}
        </p>
      </div>
    </motion.li>
  );
}
