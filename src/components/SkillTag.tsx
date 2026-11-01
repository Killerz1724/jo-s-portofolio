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

const colorMap: Record<string, string> = {
  darkBlue:
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/60",
  red: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800/60",
  green:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/60",
  purple:
    "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800/60",
  orange:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/60",
  lightBlue:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/70 dark:text-sky-300 dark:border-sky-800/60",
};

const SkillTag = ({
  text,
  color,
}: {
  text: string;
  color: (typeof coloursTagSelection)[number];
}) => {
  return (
    <span
      className={clsxm(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border transition-colors",
        colorMap[color] ||
          "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
      )}
    >
      {text}
    </span>
  );
};

export default SkillTag;
