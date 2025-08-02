import clsxm from "@riverfl0w/clsxm";
import Image from "next/image";
import React from "react";

export default function CareerContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={clsxm("flex flex-col", className)}>{children}</section>
  );
}

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2>{children}</h2>
);

CareerContent.Title = Title;
const CareerImg = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} />
);

CareerContent.CareerImg = CareerImg;

const Description = ({ children }: { children: React.ReactNode }) => (
  <p>{children}</p>
);

CareerContent.Description = Description;
