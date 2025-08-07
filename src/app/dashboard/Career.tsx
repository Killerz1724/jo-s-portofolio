import CareerCard from "@/components/CareerCard";
import { Careers } from "@/constants/careerdetailsconst";
import { mdiBriefcase } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import style from "./dashboard.module.css";

const Career = () => {
  return (
    <section id="career" className={clsx(style.sectionDashboard, "flex-col ")}>
      <div className="flex items-center gap-[0.5rem]">
        <h2 className="font-bold text-4xl">
          My <span className="text-blue-600">Careers</span>
        </h2>
        <span>
          <Icon
            path={mdiBriefcase}
            className={clsx("size-[2rem] lg:size-[3rem]")}
            size={1.5}
            color={"#2563eb"}
          />
        </span>
      </div>
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-3  gap-[1rem]">
        {Careers.map((val, i) => {
          return (
            <CareerCard
              key={i}
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
