import { mdiFileDocumentMultiple } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import style from "./dashboard.module.css";
import { Projects as ProjectList } from "@/constants/projectconstant";
import ProjectCard from "@/components/ProjectCard";
export default function Projects() {
  return (
    <section id="projects" className={clsx(style.sectionDashboard, "flex-col")}>
      <div className="flex items-center gap-[0.5rem]">
        <h2 className="font-bold text-4xl">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <span>
          <Icon
            path={mdiFileDocumentMultiple}
            className={clsx("size-[2rem] lg:size-[3rem]")}
            size={1.5}
            color={"#2563eb"}
          />
        </span>
      </div>
      <div className="w-full grid grid-cols-1  lg:grid-cols-3  gap-[1rem]">
        {ProjectList.map((val, i) => {
          return <ProjectCard key={i} project={val} />;
        })}
      </div>
      <h4 className="text-xl font-semibold mt-10">
        More Projects will be added soon...
      </h4>
    </section>
  );
}
