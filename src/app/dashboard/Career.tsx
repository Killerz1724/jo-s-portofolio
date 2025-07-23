import seaLabIcon from "@/assets/seo-logo.png";
import CareerCard from "@/components/CareerCard";
import bangkitLogo from "@/assets/bangkit-logo.png";
import { mdiBriefcase } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import style from "./dashboard.module.css";

const Career = () => {
  return (
    <section id="career" className={clsx(style.sectionDashboard)}>
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
        <CareerCard
          alt="sea lab icon"
          src={seaLabIcon}
          title="Software Engineering Bootcamp"
          position="Trainee"
          tags={[
            {
              text: "Golang",
              color: "darkBlue",
            },
            { text: "Tailwind", color: "darkBlue" },
            { text: "Typescript", color: "darkBlue" },
            { text: "React", color: "darkBlue" },
            { text: "NextJs", color: "red" },
          ]}
          duration={{ start: "march 2025", end: "now" }}
        />
        <CareerCard
          alt="freelance-icon"
          position="Frontend Developer"
          tags={[
            { text: "Tailwind", color: "darkBlue" },
            { text: "Typescript", color: "darkBlue" },
            { text: "React", color: "darkBlue" },
          ]}
          title="Quran Recitation Report Web (Freelance)"
          duration={{ start: "february 2025", end: "march 2025" }}
        />
        <CareerCard
          alt="bangkit logo"
          src={bangkitLogo}
          position="cohort"
          tags={[
            { text: "Tensorflow", color: "orange" },
            { text: "Python", color: "darkBlue" },
          ]}
          title="Bangkit Academy: Machine Learning Path"
          duration={{ start: "february 2023", end: "july 2023" }}
        />
      </div>
    </section>
  );
};

export default Career;
