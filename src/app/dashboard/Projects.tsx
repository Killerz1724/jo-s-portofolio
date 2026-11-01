import { mdiFileDocumentMultiple } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import style from "./dashboard.module.css";
import { Projects as ProjectList } from "@/constants/projectconstant";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className={clsx(style.sectionDashboard, "flex-col w-full")}>
      <div className="flex items-center gap-3">
        <h2 className="font-extrabold text-3xl lg:text-4xl dark:text-slate-900 text-white tracking-tight">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <span className="p-2 rounded-xl dark:bg-blue-50 bg-blue-950/60 text-blue-600">
          <Icon
            path={mdiFileDocumentMultiple}
            className="size-7 lg:size-8"
            size={1.3}
            color={"#2563eb"}
          />
        </span>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {ProjectList.map((val) => {
          return <ProjectCard key={val.id} project={val} />;
        })}
      </div>

      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-6 text-center">
        More projects will be added soon...
      </p>
    </section>
  );
}
