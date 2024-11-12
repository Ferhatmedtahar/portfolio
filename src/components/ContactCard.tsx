import { MagicCard } from "@/components/ui/magic-cart";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "./ui/border-beam";
import { Meteors } from "./ui/meteors";
import { Particles } from "./ui/particles";

export default function ContactCard({
  social,
  link,
  icon,
}: {
  social: string;
  link: string;
  icon: any;
}) {
  return (
    <Link
      href={link}
      className={
        "flex h-[200px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row   relative "
      }
    >
      {social == "Linkedin" && (
        <div className="absolute inset-0  z-10 pointer-events-none  rounded-xl overflow-hidden">
          <BorderBeam
            size={160}
            duration={10}
            delay={9}
            borderWidth={2}
            colorFrom={"#23A6E4"}
            colorTo="#9C2EA1"
          />
        </div>
      )}
      {social == "GitHub" && (
        <Particles
          className="absolute inset-0  z-10 pointer-events-none"
          quantity={220}
          ease={160}
          staticity={10}
          size={0.4}
          color={"#7C2EA1"}
          refresh
        />
      )}
      <MagicCard
        className={`  bg-primary-950  border border-primary-800 ${
          social != "Linkedin" && "hover:border-primary-500"
        }  transition-colors duration-200 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl`}
        gradientColor={"#162C7D"}
      >
        {social != "GitHub" && <Meteors number={25} />}
        <div className="flexCenter flex-col gap-5">
          <Image
            src={icon}
            alt={`${social} Image`}
            loading="lazy"
            width={28}
            height={30}
            className="w-12 h-12 object-contain z-20"
          />
          <h1 className="text-2xl sm:text-3xl font-light text-primary-300">
            {social}
          </h1>
        </div>{" "}
      </MagicCard>
    </Link>
  );
}
