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
      className={clsx(
        style.sectionDashboard,
        "flex-col lg:flex-row w-full items-center justify-between gap-10"
      )}
    >
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center">
        <h2 className="font-extrabold text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight mb-4">
          Hello <span className="text-blue-600 dark:text-blue-400">Comrade!</span>
        </h2>
        <div className="relative rounded-3xl overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-blue-500/5 bg-slate-50 dark:bg-slate-900/50">
          <Image
            src="https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers//Tejo_fig.png"
            alt="Tejo Rifqi Hananto photo"
            width={300}
            height={300}
            priority={true}
            className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="flex gap-6 flex-col items-center lg:items-start lg:w-1/2">
        <p className="text-center lg:text-left text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          My name is Tejo Rifqi Hananto, also known as{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">Tejo</span>. I am a Biomedical
          Engineering graduate with a strong passion for Machine Learning and
          Software Engineering. I aim to leverage my interdisciplinary skills to
          develop impactful solutions that improve quality of life through
          advanced technology.
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
