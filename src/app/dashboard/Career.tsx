import CareerCard from "@/components/CareerCard";
import { Careers } from "@/constants/careerdetailsconst";
import { mdiBriefcase } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import style from "./dashboard.module.css";

const Career = () => {
  return (
    <section id="career" className={clsx(style.sectionDashboard, "flex-col w-full")}>
      <div className="flex items-center gap-3">
        <h2 className="font-extrabold text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
          My <span className="text-blue-600">Careers</span>
        </h2>
        <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600">
          <Icon
            path={mdiBriefcase}
            className="size-7 lg:size-8"
            size={1.3}
            color={"#2563eb"}
          />
        </span>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 items-stretch">
        {Careers.map((val) => {
          return (
            <CareerCard
              key={val.id}
              alt={val.alt}
              duration={val.duration}
              pathName={val.pathName}
              position={val.position}
              tags={val.tags}
              title={val.title}
              src={val.src}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Career;
