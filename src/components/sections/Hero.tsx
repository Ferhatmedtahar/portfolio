export default function Hero() {
  return (
    <div className=" font-poppins font-medium px-20 h-[100vh] w-full  bg-primary-900  bg-grid-primary-500/[0.2] relative flexCenter">
      <div className="absolute pointer-events-none inset-0 flexCenter  bg-primary-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030717]/60"></div>
      <div className="relative z-20 flexCenter gap-2  flex-col  ">
        <h1 className="  text-2xl xs:text-5xl sm:text-7xl  py-8 max-w-xl sm:max-w-3xl  text-center ">
          Turning Ideas into{" "}
          <span className="blue-gradient ">Digital Experiences</span>
        </h1>
        <p className="pt-2 pb-8 text-sm sm:text-base md:text-lg font-light text-stone-300/70  text-center">
          Hi, I&apos;m ferhat, I create intuitive, visually stunning and highly
          functional web applications.
        </p>
      </div>
    </div>
  );
}
