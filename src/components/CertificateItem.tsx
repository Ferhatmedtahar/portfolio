import Image from "next/image";
import Link from "next/link";

export function CertificateItem({
  linkToPdf,
  image,
}: {
  linkToPdf: string;
  image: any;
}) {
  return (
    <div className="shadow-[0_0_7px_3px_rgba(22,44,125,0.7)]  shadow-primary-800 relative group h-48 w-50 lg:w-96 lg:h-64 border border-primary-800 rounded-xl overflow-hidden transition-all duration-300">
      <Link target="_blank" href={linkToPdf} rel="noopener noreferrer">
        {/* Background overlay for dim effect */}
        <div className="absolute inset-0 bg-primary-800 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>

        {/* Certificate Image */}
        <Image
          quality={95}
          src={image}
          fill
          alt="Certificate"
          className="relative z-10 rounded-xl bg-certificate-01 object-cover transition-transform duration-500 transform group-hover:scale-105 group-hover:brightness-110"
        />

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-700 group-hover:shadow-[0_0_15px_5px_rgba(22,44,125,0.7)] transition-all duration-500 "></div>
      </Link>
    </div>
  );
}
