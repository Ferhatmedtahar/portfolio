import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="hero"
      className=" font-poppins font-medium px-20 h-screen w-full  bg-primary-900  bg-grid-primary-500/[0.2] relative flexCenter"
    >
      <div className="absolute pointer-events-none inset-0 flexCenter  bg-primary-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030717]/60"></div>
      {children}
    </section>
  );
}
