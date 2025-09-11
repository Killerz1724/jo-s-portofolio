import { ProjectType } from "@/constants/projectconstant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ project }: { project: ProjectType[0] }) {
  return (
    <Link href={`project-details/${project.pathName}`}>
      <div className="relative rounded-md w-[20rem] h-[10rem]  hover:animate-wiggle duration-500">
        <Image
          alt={`${project.title} thumbnail`}
          src={project.thumbnail}
          fill
          className="object-contain rounded-md"
        />
        <div className="absolute px-4 py-2 rounded-b-md flex items-center z-10 bottom-0 w-full bg-black bg-opacity-50">
          <span className="font-bold text-white">{project.title}</span>
        </div>
      </div>
    </Link>
  );
}
