import clsxm from "@riverfl0w/clsxm";
import React from "react";

export const coloursTagSelection = [
  "darkBlue",
  "red",
  "green",
  "purple",
  "orange",
  "lightBlue",
];
const SkillTag = ({
  text,
  color,
}: {
  text: string;
  color: (typeof coloursTagSelection)[number];
}) => {
  return (
    <div
      className={clsxm(
        "px-2 py-1 rounded-md text-white",
        color === "darkBlue" && "bg-[#1F3A93]",
        color === "red" && "bg-[#D64541]",
        color === "green" && "bg-[#16A085]",
        color === "purple" && "bg-[#8E44AD]",
        color === "orange" && "bg-[#E67E22]",
        color === "lightBlue" && "bg-[#90D5FF]"
      )}
    >
      <span className="font-semibold text-xs">{text}</span>
    </div>
  );
};

export default SkillTag;
