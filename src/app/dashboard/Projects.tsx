import { mdiFileDocumentMultiple } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import style from "./dashboard.module.css";
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
      Projects
    </section>
  );
}
