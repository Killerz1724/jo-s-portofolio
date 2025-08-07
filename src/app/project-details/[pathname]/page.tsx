import ProjectContent from "@/components/projectContentComp/ProjectContent";
import { Projects } from "@/constants/projectconstant";
import Link from "next/link";
import React, { use } from "react";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ pathname: string }>;
}) {
  const { pathname } = use(params);

  const projectIndex = Projects.findIndex((val) => {
    return val.pathName === pathname;
  });

  const project = Projects[projectIndex];

  return (
    <>
      {projectIndex !== -1 ? (
        <ProjectContent>
          <ProjectContent.Title>{project.title}</ProjectContent.Title>
          <ProjectContent.ProjectImg
            alt={`${project.title} thumbnail`}
            src={project.thumbnail}
          />
          <ProjectContent.Description>
            {project.description}
          </ProjectContent.Description>
          <ProjectContent.Achieve>
            {project.achieve.map((val, i) => {
              return <li key={i}>{val}</li>;
            })}
          </ProjectContent.Achieve>
          <ProjectContent.Documentation docs={project.documentation} />
          <ProjectContent.RelatedLinks>
            {project.relatedLinks?.map((val, i) => {
              return (
                <li key={i}>
                  {val.caption && (
                    <span className="font-bold">{val.caption} :</span>
                  )}{" "}
                  <Link
                    target="_blank"
                    href={val.link}
                    className="text-blue-500 hover:underline"
                  >
                    {val.link}
                  </Link>
                </li>
              );
            })}
          </ProjectContent.RelatedLinks>
        </ProjectContent>
      ) : (
        <h2>Not Found</h2>
      )}
    </>
  );
}

export async function generateStaticParams() {
  return Projects.map((val) => ({ pathname: val.pathName }));
}
