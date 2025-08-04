import clsxm from "@riverfl0w/clsxm";
import Image, { StaticImageData } from "next/image";
import React from "react";
import freelanceIcon from "@/assets/freelance-icon.png";
import SkillTag, { coloursTagSelection } from "../SkillTag";
import Link from "next/link";

export default function CareerContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={clsxm("flex flex-col items-center gap-8 w-full", className)}
    >
      {children}
    </section>
  );
}

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-bold text-xl sm:text-3xl text-center">{children}</h2>
);

CareerContent.Title = Title;
const CareerImg = ({ src, alt }: { src?: StaticImageData; alt: string }) => (
  <>
    {src ? (
      <Image src={src} alt={alt} height={500} width={500} />
    ) : (
      <Image src={freelanceIcon} alt={alt} height={400} width={400} />
    )}
  </>
);

CareerContent.CareerImg = CareerImg;

const Position = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full">
    <p className="font-bold text-start">
      Position: <span className="font-medium">{children}</span>
    </p>
  </div>
);

CareerContent.Position = Position;

const Tags = ({
  tags,
}: {
  tags: {
    text: string;
    color: (typeof coloursTagSelection)[number];
  }[];
}) => (
  <div className="flex w-full gap-2 items-center">
    <p className="font-bold">Related skills: </p>
    <div className="flex flex-wrap gap-2">
      {tags.map((val, i) => {
        return <SkillTag key={i} text={val.text} color={val.color} />;
      })}
    </div>
  </div>
);

CareerContent.SkillTags = Tags;

const Description = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full space-y-4">
    <h3 className="font-bold text-2xl">Description</h3>
    <p className="text-justify">{children}</p>
  </div>
);

CareerContent.Description = Description;

const Achieve = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-2xl">What i have achieved</h3>
      <ul className="list-disc ml-5 text-justify">{children}</ul>
    </div>
  );
};
CareerContent.Achieve = Achieve;

const Documentation = ({
  docs,
}: {
  docs: { caption: string; link: string }[];
}) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-2xl">Documentation</h3>
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        {docs.map((val, i) => {
          return (
            <div key={i} className="rounded-lg w-full flex justify-center">
              <div className="relative cursor-pointer">
                <Image
                  src={val.link}
                  alt={val.caption}
                  height={300}
                  width={300}
                  className="relative rounded-lg"
                />
                <p className="absolute bottom-0 left-0 z-10 bg-black bg-opacity-50 rounded-b-lg text-white p-2 text-center">
                  {val.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
CareerContent.Documentation = Documentation;

const RelatedLinks = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-2xl">Related Links</h3>
      <ul className="list-disc ml-5 text-justify">{children}</ul>
    </div>
  );
};
CareerContent.RelatedLinks = RelatedLinks;

const NavigationCareer = ({
  prev,
  nextPath,
}: {
  prev?: { name: string; pathName: string };
  nextPath?: { name: string; pathName: string };
}) => (
  <div className="flex justify-between w-full mt-64">
    {prev ? (
      <Link className="font-medium text-blue-500" href={prev.pathName}>
        {" "}
        &lt; {prev.name}
      </Link>
    ) : (
      <div></div>
    )}
    {nextPath ? (
      <Link className="font-medium text-blue-500" href={nextPath.pathName}>
        {" "}
        {nextPath.name} &gt;
      </Link>
    ) : (
      <div></div>
    )}
  </div>
);

CareerContent.NavigationCareer = NavigationCareer;
