import clsxm from "@riverfl0w/clsxm";
import Image, { StaticImageData } from "next/image";
import React, { Suspense } from "react";
import freelanceIcon from "@/assets/freelance-icon.png";

export default function ProjectContent({
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

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="font-bold text-xl sm:text-3xl text-center">{children}</h2>
  );
};
ProjectContent.Title = Title;

const ProjectImg = ({
  src,
  alt,
}: {
  src?: StaticImageData | string;
  alt: string;
}) => (
  <>
    {src ? (
      <Image src={src} alt={alt} height={500} width={500} />
    ) : (
      <Image src={freelanceIcon} alt={alt} height={400} width={400} />
    )}
  </>
);

ProjectContent.ProjectImg = ProjectImg;

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-2xl">Description</h3>
      <p className="text-justify">{children}</p>
    </div>
  );
};
ProjectContent.Description = Description;

const Achieve = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-2xl">
        What i have learned from this project
      </h3>
      <ul className="list-disc ml-5 text-justify">{children}</ul>
    </div>
  );
};
ProjectContent.Achieve = Achieve;

const Documentation = ({
  docs,
}: {
  docs: { caption: string; src: string }[];
}) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-2xl">Documentation</h3>
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        {docs.map((val, i) => {
          return (
            <div
              key={i}
              className="relative rounded-lg w-full flex justify-center"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Video player"
                >
                  <source src={val.src} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </Suspense>
              <p className="absolute bottom-0 left-0 z-10 w-full bg-black bg-opacity-50 rounded-b-lg text-white p-2 text-center">
                {val.caption}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
ProjectContent.Documentation = Documentation;

const RelatedLinks = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-2xl">Related Links</h3>
      <ul className="list-disc space-y-4 ml-5 text-justify">{children}</ul>
    </div>
  );
};
ProjectContent.RelatedLinks = RelatedLinks;
