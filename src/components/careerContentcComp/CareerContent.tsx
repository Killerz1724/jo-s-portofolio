import clsxm from "@riverfl0w/clsxm";
import Image, { StaticImageData } from "next/image";
import React from "react";
import freelanceIcon from "@/assets/freelance-icon.png";

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

const Description = ({ children }: { children: React.ReactNode }) => (
  <p className="text-justify">{children}</p>
);

CareerContent.Description = Description;
