import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ahmed Naoum",
    designation: "Software Engineer",
    image: "/testimonials/ahmedNaoum.jpg",
  },
  {
    id: 2,
    name: "Omar Chabira",
    designation: "Software Engineer",
    image: "/testimonials/omarChabira.jpg",
  },
  {
    id: 3,
    name: "Islam Guedouar",
    designation: "Software Engineer",
    image: "/testimonials/islam.jpeg",
  },
  {
    id: 4,
    name: "Muhammed Abbou",
    designation: "Software Engineer",
    image: "/testimonials/muhammedAbbou.jpg",
  },
];

export function Testimonial() {
  return (
    <div className="flex flex-row items-center justify-center mt-8 h-5 md:h-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
