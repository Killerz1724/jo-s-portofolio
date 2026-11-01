import React from "react";
import Image, { StaticImageData } from "next/image";
import SkillTag, { coloursTagSelection } from "./SkillTag";
import freelanceIcon from "@/assets/freelance-icon.png";
import { convertMonthDuration } from "@/utils/convertMonthsDuration";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiCalendarRange } from "@mdi/js";

export interface CareerCardProps {
  src?: StaticImageData;
  alt: string;
  title: string;
  position: string;
  tags: {
    text: string;
    color: (typeof coloursTagSelection)[number];
  }[];
  duration: {
    start: string;
    end: string;
  };
  pathName: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  alt,
  src,
  title,
  position,
  tags,
  duration,
  pathName,
}) => {
  const { month, year } = convertMonthDuration({
    start: duration.start,
    end: duration.end,
  });

  const durationText =
    year > 0
      ? `${year} yr${year > 1 ? "s" : ""} ${month} mo${month > 1 ? "s" : ""}`
      : `${month} mo${month > 1 ? "s" : ""}`;

  return (
    <div className="group flex flex-col w-full h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 p-6 justify-between">
      <div className="flex flex-col gap-4">
        {/* Company / Institution Logo Header */}
        <div className="w-full h-24 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-3 relative overflow-hidden">
          <Image
            src={src || freelanceIcon}
            alt={alt}
            width={160}
            height={80}
            className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title & Position */}
        <div className="space-y-1.5">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {title}
          </h3>
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40">
            {position}
          </div>
        </div>

        {/* Duration Metadata */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Icon
            path={mdiCalendarRange}
            size={0.65}
            className="text-slate-400 flex-shrink-0"
          />
          <span>
            {duration.start} – {duration.end}
          </span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="font-medium text-slate-600 dark:text-slate-300">
            {durationText}
          </span>
        </div>

        {/* Skill Tags */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Skills
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((val, i) => (
              <SkillTag key={i} text={val.text} color={val.color} />
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
        <Link
          href={`/career-details/${pathName}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1 px-2 hover:bg-blue-50 dark:hover:bg-blue-950/40"
        >
          <span>View Experience Details</span>
          <Icon
            path={mdiArrowRight}
            size={0.65}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
