import Image from "next/image";
import React from "react";
import tejoPhoto from "../../assets/Tejo fig.png";
import clsx from "clsx";
import style from "./dashboard.module.css";

const Headline = () => {
  return (
    <section id="headline" className={clsx(style.sectionDashboard)}>
      <h2 className={clsx("font-black text-2xl")}>
        Hello <span className="text-blue-600">Comrade!</span>
      </h2>
      <Image
        src={tejoPhoto}
        alt="tejo photos"
        className={clsx("w-[300px] h-[300px] object-cover")}
      />
      <p className="text-center">
        My name is <span className="text-blue-600">Tejo</span>, I am a
        Biomedical Engineering graduate with a strong passion for Machine
        Learning and Software Engineering. I aim to leverage my
        interdisciplinary skills to develop impactful solutions that improve
        quality of life through advanced technology
      </p>
    </section>
  );
};

export default Headline;
