import React from "react";
import Link from "next/link";
import Image from "next/image";

type ExperienceBoxProps = {
    period: string;
    title: string;
    description: string;
    technologies: string[];
}

export default function Box( {period, title, description, technologies} : ExperienceBoxProps) {
    return (
    <>
    <div className="max-w-sm w-full lg:max-w-full lg:flex border border-transparent hover:border-gray-400 hover:bg-gray-800 rounded-2xl overflow-hidden py-3 px-3" >
    {/* Left side period */}
    <p className="text-white text-sm lg:w-48 flex-shrink-0"> {period} </p>
    {/* Right side content */}
    <div className="flex flex-col justify-between leading-normal lg: ml-3">
      <div className="mb-8">
        <div className="text-white font-bold text-xl mb-2">
          {title}
        </div>

        <p className="text-white text-base">
          {description}
        </p>

        <div className="text-sm text-sky-100 flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-sky-800 px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

      </div>
    </div>
    </div>
</>
    );
}