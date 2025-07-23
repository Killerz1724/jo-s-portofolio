import React from "react";
import Image, { StaticImageData } from "next/image";
import SkillTag, { coloursTagSelection } from "./SkillTag";
import freelanceIcon from "@/assets/freelance-icon.png";
import { convertMonthDuration } from "@/utils/convertMonthsDuration";
import ButtonLink from "./ButtonLink";

interface careerCardProps {
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
}

const CareerCard: React.FC<careerCardProps> = ({
  alt,
  src,
  title,
  position,
  tags,
  duration,
}) => {
  const { month, year } = convertMonthDuration({
    start: duration.start,
    end: duration.end,
  });

  return (
    <div className="flex flex-col gap-3 items-center border-2 border-dashed border-blue-500 rounded-md px-5 py-2 h-full">
      <div className="flex flex-col items-center w-full">
        {src ? (
          <Image src={src} alt={alt} height={100} width={200} />
        ) : (
          <Image src={freelanceIcon} alt={alt} height={100} width={120} />
        )}
        <h2 className="font-bold text-md text-center">{title}</h2>
      </div>
      <div className="w-full text-sm">
        <h3 className="text-start">
          Position: <span className="font-semibold">{position}</span>
        </h3>
      </div>
      <div className="flex flex-col gap-2 w-full text-sm">
        <h3 className="text-start">Skills:</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((val, i) => {
            return <SkillTag key={i} text={val.text} color={val.color} />;
          })}
        </div>
      </div>
      <div className="w-full">
        <h4 className="text-sm text-start">
          Duration:{" "}
          <span className="font-semibold">
            {duration.start} - {duration.end} ({year > 0 && year + "yr"} {month}{" "}
            months )
          </span>
        </h4>
      </div>
      <ButtonLink href={`/CareerDetails/${title}`}>Details</ButtonLink>
    </div>
  );
};

export default CareerCard;
