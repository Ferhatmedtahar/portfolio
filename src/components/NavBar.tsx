import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconCode,
  IconHome,
  IconPlugConnected,
  IconTerminal2,
} from "@tabler/icons-react";

export default function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Technologies",
      icon: (
        <IconCode
          stroke={2}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#tech",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },

    {
      title: "Contact me",
      icon: (
        <IconPlugConnected
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          stroke={2}
        />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex items-center justify-center sticky    top-24 z-20 h-0  w-full">
      <FloatingDock items={links} desktopClassName="" mobileClassName="" />
    </div>
  );
}
