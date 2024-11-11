import { Download } from "lucide-react";
import { Testimonial } from "../Testomonial";
export default function Hero() {
  return (
    <div className=" font-poppins font-medium px-20 h-[99vh] w-full  bg-primary-900  bg-grid-primary-500/[0.2] relative flexCenter">
      <div className="absolute pointer-events-none inset-0 flexCenter  bg-primary-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030717]/60"></div>
      <div className="relative z-20 flexCenter gap-2  flex-col  ">
        <h1 className="  text-2xl xs:text-5xl sm:text-7xl  py-8 max-w-xl sm:max-w-3xl  text-center ">
          Turning Ideas into{" "}
          <span className="blue-gradient ">Digital Experiences</span>
        </h1>
        <p className="pt-2 pb-8 text-sm sm:text-base md:text-lg font-light text-stone-300/70  text-center">
          Hi, I&apos;m Ferhat, I create intuitive, visually stunning and highly
          functional web applications.
        </p>
        <div className=" flex items-center  gap-6">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-primary-800 bg-[linear-gradient(110deg,#061059,45%,#162C7D,55%,#061059)] bg-[length:200%_100%] px-6 font-medium text-primary-200 transition-colors focus:outline-none focus:ring focus:ring-primary-700 ">
            See My Work
          </button>
          <div className="flex gap-2">
            <Download className="w-6 h-6 text-primary-500" />
            <p className=" text-base font-normal font-poppins text-primary-100/90">
              Download CV
            </p>
          </div>
        </div>
        <Testimonial />
      </div>
    </div>
  );
}
