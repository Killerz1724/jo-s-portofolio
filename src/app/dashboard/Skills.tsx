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

const Skills = () => {
  return (
    <section id="skills" className={clsx(style.sectionDashboard, "flex-col")}>
      <div className="flex items-center gap-[0.5rem]">
        <h2 className="font-bold text-4xl">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <span>
          <Icon
            path={mdiHammerScrewdriver}
            className={clsx("size-[2rem] lg:size-[3rem]")}
            size={1.5}
            color={"#2563eb"}
          />
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-flow-col gap-[3rem] items-center ">
        <Tooltip text="ReactJs" tooltipClassname="-left-1/4 -top-1/4">
          <Image
            src={reactIcon}
            alt="react icon"
            className={clsx("w-[100px] h-[100px] object-contain")}
          />
        </Tooltip>
        <Tooltip text="Typescript" tooltipClassname="-left-1/4 -top-1/4">
          <Image
            src={tsIcon}
            alt="typescript icon"
            className={clsx("w-[100px] h-[100px] object-contain")}
          />
        </Tooltip>
        <Tooltip text="Tailwind" tooltipClassname="-left-1/4 -top-1/4">
          <Image
            src={tailwindIcon}
            alt="tailwind icon"
            className={clsx("w-[100px] h-[100px] object-contain")}
          />
        </Tooltip>
        <Tooltip text="NextJs" tooltipClassname="-left-1/4 -top-1/4">
          <Image
            src={nextJsIcon}
            alt="nextJs icon"
            className={clsx("w-[100px] h-[100px] object-contain")}
          />
        </Tooltip>
        <Tooltip text="Golang" tooltipClassname="left-0 -top-1/4">
          <Image
            src={golangIcon}
            alt="golang icon"
            className={clsx("w-[120px] h-[120px] object-contain")}
          />
        </Tooltip>
        <Tooltip text="PostgreSQL" tooltipClassname="left-0 -top-1/4">
          <Image
            src={PostgreSqlIcon}
            alt="PostgreSQL icon"
            className={clsx("w-[120px] h-[120px] object-contain")}
          />
        </Tooltip>
        <Tooltip text="Tensorflow" tooltipClassname="-left-1/4 -top-1/4">
          <Image
            src={tensorflowIcon}
            alt="tensorflow icon"
            className={clsx("w-[100px] h-[100px] object-contain")}
          />
        </Tooltip>
      </div>
    </section>
  );
};

export default Skills;
