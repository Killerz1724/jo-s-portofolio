import clsx from "clsx";
import React from "react";
import style from "./dashboard.module.css";
import Icon from "@mdi/react";
import { mdiBriefcase } from "@mdi/js";
import CareerCard from "@/components/CareerCard";
import seaLabIcon from "@/assets/seo-logo.png";

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
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2  gap-[1rem]">
                <CareerCard
                    alt="sea lab icon"
                    src={seaLabIcon}
                    title="Sea Labs Bootcamp Indonesia"
                    position="Trainee"
                    tags={["Golang", "Tailwind", "Typescript", "React", "NextJs"]}
                />
                <CareerCard
                    alt="freelance-icon"
                    position="Frontend Developer"
                    tags={["React", "Tailwind", "Typescript"]}
                    title="FORSIKATEL (Freelance)"
                />
            </div>
        </section>
    );
};

export default Career;
