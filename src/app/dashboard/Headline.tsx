import Image from "next/image";
import React from "react";
import clsx from "clsx";
import style from "./dashboard.module.css";

const Headline = async () => {
  return (
    <section id="headline" className={clsx(style.sectionDashboard)}>
      <h2 className={clsx("font-black text-2xl")}>
        Hello <span className="text-blue-600">Comrade!</span>
      </h2>
      <Image
        src="https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers//Tejo_fig.png"
        alt="tejo photos"
        className={clsx("w-[300px] h-[300px] object-cover")}
      />
      <p className="text-center">
        My name is Tejo Rifqi Hananto, also known as{" "}
        <span className="text-blue-600">Tejo</span>, I am a Biomedical
        Engineering graduate with a strong passion for Machine Learning and
        Software Engineering. I aim to leverage my interdisciplinary skills to
        develop impactful solutions that improve quality of life through
        advanced technology
      </p>
    </section>
  );
};

export default Headline;
