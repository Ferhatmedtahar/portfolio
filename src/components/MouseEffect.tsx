"use client";
import { useEffect, useRef } from "react";

function MouseEffect() {
  const lightRef = useRef<HTMLDivElement>(null);
  function onMouseMove(e: MouseEvent) {
    let newposX = e.clientX - lightRef.current!.offsetLeft - 50;
    let newposY = e.clientY - lightRef.current!.offsetTop - 50;
    lightRef.current!.style.transform =
      "translate3d(" + newposX + "px," + newposY + "px,0px)";
  }
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div
      className="hidden lg:block light-shadow delay-0 ease-in"
      ref={lightRef}
    />
  );
}

export default MouseEffect;
