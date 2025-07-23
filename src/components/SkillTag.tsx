import clsxm from "@riverfl0w/clsxm";
import React from "react";

const SkillTag = ({
  text,
  color,
}: {
  text: string;
  color: "darkBlue" | "red" | "green" | "purple" | "orange";
}) => {
  return (
    <div
      className={clsxm(
        "px-2 py-1 rounded-md text-white",
        color === "darkBlue" && "bg-[#1F3A93]",
        color === "red" && "bg-[#D64541]",
        color === "green" && "bg-[#16A085]",
        color === "purple" && "bg-[#8E44AD]",
        color === "orange" && "bg-[#E67E22]"
      )}
    >
      <span className="font-semibold text-xs">{text}</span>
    </div>
  );
};

export default SkillTag;
