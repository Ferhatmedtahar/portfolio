"use client";

import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};
export default function HeroContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className=" relative z-20 flexCenter gap-2  flex-col  "
    >
      <p className="uppercase font-poppins font-bold text-sm tracking-widest">
        Based In Algeria
      </p>

      <h1 className="  cursor-default text-primary-200 text-4xl  sm:text-5xl md:text-7xl max-w-xl sm:max-w-3xl text-center flex flex-col sm:gap-2 ">
        Turning Ideas into
        <GradualSpacing
          className=" -tracking-[0.042em]  blue-gradient sm:text-nowrap h-[50px] sm:h-[80px] text-4xl sm:text-5xl md:text-7xl"
          text="Digital Experiences"
        />
      </h1>
      {/* sub header */}
      <p className="pt-4 pb-8 text-sm sm:text-base md:text-lg font-light text-stone-300/70  text-center max-w-xl">
        Hi, I&apos;m Ferhat, I create intuitive, visually stunning and highly
        functional web applications.
      </p>
      <div className=" flex items-center  gap-6">
        <Link href="#projects" scroll={true}>
          <button className=" font-light text-sm md:text-base text-nowrap inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-primary-800 bg-[linear-gradient(110deg,#061059,45%,#162C7D,55%,#061059)] bg-[length:200%_100%] px-4 sm:px-7  text-primary-200 transition-colors focus:outline-none focus:ring focus:ring-primary-700 ">
            See My Work
          </button>
        </Link>
        <div className="flex gap-2 cursor-pointer">
          <Download className="w-6 h-6 text-primary-500" />
          <p className="text-sm sm:text-base font-light font-poppins text-primary-100/90 text-center text-nowrap">
            Download CV
          </p>
        </div>
      </div>
    </motion.div>
  );
}
