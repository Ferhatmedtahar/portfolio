"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const useScrollVisibility = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastScrollY;

    // Show the navbar if scrolling upwards or near the top of the page
    if (scrollY.get() < 50 || direction < 0) {
      setVisible(true);
    } else if (direction > 0) {
      setVisible(false);
    }

    setLastScrollY(current);
  });

  return visible;
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const visible = useScrollVisibility();

  return (
    <div
      className={cn(
        "fixed top-4 transition-all duration-300 md:hidden",
        visible ? "right-5" : "right-2",
        className
      )}
    >
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center border border-primary-950"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-primary-200" />
      </button>

      {/* Horizontal Items Menu */}
      {open && (
        <div className="absolute top-11 right-0 mb-2 flex flex-row gap-2">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="h-10 w-10 px-0.5 py-2 rounded-full border border-primary-950  bg-primary-500 flex items-center justify-center"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const visible = useScrollVisibility();
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex h-16 gap-4 items-end rounded-2xl bg-primary-800 border border-primary-500 px-4 pb-3 transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};
function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-primary-200  flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md  border-primary-600  bg-primary-800 text-primary-300 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center "
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
