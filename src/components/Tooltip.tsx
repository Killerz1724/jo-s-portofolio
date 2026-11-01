"use client";
import clsxm from "@riverfl0w/clsxm";
import React, { useState } from "react";

export default function Tooltip({
  children,
  tooltipClassname,
  containerClassname,
  position = "top",
  text,
}: {
  children: React.ReactNode;
  tooltipClassname?: React.HTMLAttributes<HTMLElement>["className"];
  containerClassname?: React.HTMLAttributes<HTMLElement>["className"];
  position?: "top" | "left" | "right" | "bottom";
  text: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={clsxm("relative transition-all w-fit", containerClassname)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>{children}</div>
      {isVisible && (
        <div
          className={clsxm(
            "absolute text-white z-20 cursor-default bg-slate-900 dark:bg-slate-800 dark:text-slate-100 dark:border dark:border-slate-700 shadow-xl rounded-lg px-2.5 py-1 text-xs font-medium animate-fade-right animate-duration-300 ml-10 w-max pointer-events-none",
            position === "top" && "-top-[20%] -left-8 animate-fade-up",
            position === "bottom" && "-bottom-[20%] -left-8  animate-fade-down",
            position === "left" && "top-0 -right-32 animate-fade-left",
            position === "right" && "top-0 left-0 animate-fade-right",
            tooltipClassname
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
}
