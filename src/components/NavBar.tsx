import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconCode,
  IconHome,
  IconPlugConnected,
  IconTerminal2,
} from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-primary-200 sm:text-primary-500" />
    ),
    href: "/",
  },
  {
    title: "Technologies",
    icon: (
      <IconCode
        stroke={2}
        className="h-full w-full text-primary-200 sm:text-primary-500"
      />
    ),
    href: "/#tech",
  },

  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-primary-200 sm:text-primary-500" />
    ),
    href: "/#projects",
  },

  {
    title: "Contact me",
    icon: (
      <IconPlugConnected
        className="h-full w-full text-primary-200 sm:text-primary-500"
        stroke={2}
      />
    ),
    href: "/#contact",
  },
];

export default function NavBar() {
  return (
    <div className=" font-poppins flex items-center justify-center sticky    top-24 z-20 h-0  w-full">
      <FloatingDock items={links} />
    </div>
  );
}
