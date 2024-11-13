"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="font-poppins h-screen flexCenter flex-col bg-primary-900 bg-grid-primary-500/[0.2]">
      <div className="absolute inset-0 flexCenter bg-primary-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030717]/60"></div>
      <div className="relative z-20 text-center flexCenter flex-col gap-6">
        <h1 className="text-4xl sm:text-6xl text-primary-200 font-medium">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-lg text-primary-300/90 font-light max-w-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>
        <Link href="/">
          <button className="mt-6 font-light text-sm md:text-base h-12 animate-shimmer items-center justify-center rounded-md border border-primary-800 bg-[linear-gradient(110deg,#061059,45%,#162C7D,55%,#061059)] bg-[length:200%_100%] px-6 sm:px-8 text-primary-200 transition-colors focus:outline-none focus:ring focus:ring-primary-700">
            Go Back Home
          </button>
        </Link>
      </div>
    </section>
  );
}
