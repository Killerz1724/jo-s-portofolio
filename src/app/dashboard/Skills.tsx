import clsx from "clsx";
import React from "react";
import style from "./dashboard.module.css";
import Icon from "@mdi/react";
import { mdiHammerScrewdriver } from "@mdi/js";
import Image from "next/image";
import golangIcon from "../../assets/golang-logo-png.webp";
import reactIcon from "../../assets/react-icon.png";
import tsIcon from "../../assets/typescript-icon.png";
import nextJsIcon from "../../assets/next-icon.png";
import tailwindIcon from "@/assets/tailwind-icon.png";
import tensorflowIcon from "@/assets/tensorflow-icon.png";
import PostgreSqlIcon from "@/assets/Postgresql_elephant.png";
import Tooltip from "@/components/Tooltip";

const skillsList = [
  { name: "ReactJs", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Next.js", icon: nextJsIcon },
  { name: "Golang", icon: golangIcon },
  { name: "PostgreSQL", icon: PostgreSqlIcon },
  { name: "TensorFlow", icon: tensorflowIcon },
];

const Skills = () => {
  return (
    <section id="skills" className={clsx(style.sectionDashboard, "flex-col w-full")}>
      <div className="flex items-center gap-3">
        <h2 className="font-extrabold text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600">
          <Icon
            path={mdiHammerScrewdriver}
            className="size-7 lg:size-8"
            size={1.3}
            color={"#2563eb"}
          />
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 w-full mt-6 items-center">
        {skillsList.map((skill, index) => (
          <Tooltip key={index} text={skill.name} position="top">
            <div className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-28 w-full cursor-pointer">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="min-h-14 w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
};

export default Skills;
