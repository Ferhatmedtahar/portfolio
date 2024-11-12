import React from "react";

export default function ShinyButton({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: any;
}) {
  return (
    <button className="gap-5 font-light text-sm md:text-base text-nowrap inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-primary-800 bg-[linear-gradient(110deg,#061059,45%,#162C7D,55%,#061059)] bg-[length:200%_100%] px-4 sm:px-7  text-primary-200 transition-colors focus:outline-none focus:ring focus:ring-primary-700 ">
      {icon}
      {children}
    </button>
  );
}
