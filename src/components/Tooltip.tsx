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
  tooltipClassname?: string;
  containerClassname?: string;
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
            "absolute text-white z-10 cursor-default bg-gray-800  rounded-lg p-2 animate-fade-right animate-duration-300 ml-10 w-max",
            position === "top" && "-top-3/4 -left-32 animate-fade-up",
            position === "bottom" && "-bottom-3/4 -left-32 animate-fade-down",
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
