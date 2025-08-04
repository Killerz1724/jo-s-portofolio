import CareerContent from "@/components/careerContentcComp/CareerContent";
import { Careers } from "@/constants/careerdetailsconst";
import React from "react";

export default async function page({
  params,
}: {
  params: { pathname: string };
}) {
  const { pathname } = await params;
  const currentIndex = Careers.findIndex((val) => val.pathName === pathname);
  const res = Careers[currentIndex];
  return (
    <>
      {currentIndex !== -1 ? (
        <CareerContent>
          <CareerContent.Title>{res.title}</CareerContent.Title>
          <CareerContent.CareerImg src={res.src} alt={res.alt} />
          <CareerContent.Position>{res.position}</CareerContent.Position>
          <CareerContent.SkillTags tags={res.tags} />
          <CareerContent.Description>
            {res.description}
          </CareerContent.Description>
          <CareerContent.Achieve>
            {res.achivements.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </CareerContent.Achieve>
          {res.documentations && (
            <CareerContent.Documentation docs={res.documentations} />
          )}
          {res.relatedLinks && (
            <CareerContent.RelatedLinks>
              {res.relatedLinks.map((val, i) => {
                return (
                  <li key={i}>
                    {val.caption && (
                      <span className="font-bold">{val.caption} :</span>
                    )}{" "}
                    {typeof val.link === "string" ? (
                      <a
                        target="_blank"
                        className="text-blue-500"
                        href={val.link}
                      >
                        {val.link}
                      </a>
                    ) : (
                      val.link
                    )}
                  </li>
                );
              })}
            </CareerContent.RelatedLinks>
          )}
          <CareerContent.NavigationCareer
            prev={
              currentIndex > 0
                ? {
                    name: Careers[currentIndex - 1].title,
                    pathName: Careers[currentIndex - 1].pathName,
                  }
                : undefined
            }
            nextPath={
              currentIndex < Careers.length - 1
                ? {
                    name: Careers[currentIndex + 1].title,
                    pathName: Careers[currentIndex + 1].pathName,
                  }
                : undefined
            }
          />
        </CareerContent>
      ) : (
        <div>404</div>
      )}
    </>
  );
}
