import React from "react";
import Image, { StaticImageData } from "next/image";
import SkillTag from "./SkillTag";
import freelanceIcon from "@/assets/freelance-icon.png";

interface careerCardProps {
    src?: StaticImageData;
    alt: string;
    title: string;
    position: string;
    tags: string[];
}

const CareerCard: React.FC<careerCardProps> = ({
    alt,
    src,
    title,
    position,
    tags,
}) => {
    return (
        <div className="flex flex-col gap-3 items-center border-2 border-dashed border-blue-500 rounded-md px-5 py-2 h-full">
            <div className="flex flex-col items-center w-full">
                {src ? (
                    <Image src={src} alt={alt} height={100} width={200} />
                ) : (
                    <Image src={freelanceIcon} alt={alt} height={100} width={120} />
                )}
                <h2 className="font-bold text-md text-start">{title}</h2>
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
                        return <SkillTag key={i} text={val} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default CareerCard;
