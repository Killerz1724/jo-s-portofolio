import { ProjectType } from "@/constants/projectconstant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

interface ProjectCardProps {
  project: ProjectType[number];
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project-details/${project.pathName}`}
      className="group flex flex-col w-full h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      {/* Media Preview Container */}
      <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-800/60 overflow-hidden flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
        <Image
          alt={`${project.title} thumbnail`}
          src={project.thumbnail}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <span className="p-1 rounded-full text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200">
              <Icon path={mdiArrowRight} size={0.8} />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom Feature Pill Preview */}
        {project.features && project.features.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
              {project.features.length} {project.features.length === 1 ? "Feature" : "Features"}
            </span>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
              Explore Project &rarr;
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
