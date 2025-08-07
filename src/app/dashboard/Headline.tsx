import Image from "next/image";
import React from "react";
import clsx from "clsx";
import style from "./dashboard.module.css";
import FileLink from "@/components/FileLink";
import { mdiFile } from "@mdi/js";

const Headline = async () => {
  return (
    <section
      id="headline"
      className={clsx(style.sectionDashboard, "flex-col lg:flex-row")}
    >
      <div className="flex flex-col w-full  lg:w-1/2 items-center justify-center">
        <h2 className={clsx("font-black text-2xl")}>
          Hello <span className="text-blue-600">Comrade!</span>
        </h2>
        <Image
          src="https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers//Tejo_fig.png"
          alt="tejo photos"
          width={300}
          height={300}
          className={clsx("w-[300px] h-[300px] object-cover")}
        />
      </div>
      <div className="flex gap-4 flex-col items-center lg:items-start lg:w-1/2">
        <p className="text-center lg:text-justify">
          My name is Tejo Rifqi Hananto, also known as{" "}
          <span className="text-blue-600">Tejo</span>, I am a Biomedical
          Engineering graduate with a strong passion for Machine Learning and
          Software Engineering. I aim to leverage my interdisciplinary skills to
          develop impactful solutions that improve quality of life through
          advanced technology
        </p>
        <FileLink
          leftIcon={mdiFile}
          link="https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers/CV_Tejo%20Rifqi%20Hananto.pdf"
        >
          See My CV
        </FileLink>
      </div>
    </section>
  );
};

export default Headline;
