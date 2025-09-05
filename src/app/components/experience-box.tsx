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
    <div className="items-baseline max-w-sm w-full lg:max-w-full lg:flex rounded-lg overflow-hidden py-2 px-3 hover:bg-black/40 hover:backdrop-blur-lg hover:backdrop-saturate-150 hover:shadow-[0_0_10px_theme(colors.cyan.300/15)]">
  {/* Left side period */}
  <p className="font-family-quicksand text-gray-300 text-sm lg:w-48 flex-shrink-0">
    {period}
  </p>

  {/* Right side content */}
  <div className="flex flex-col justify-between leading-normal lg:ml-3">
    <div className="mb-4">
      <div className="font-family-quicksand text-gray-200 font-bold text-xl mb-2">
        {title}
      </div>

      <p className="font-family-quicksand text-gray-300 text-base">
        {description}
      </p>

      <div className="font-family-quicksand text-sm text-sky-100 flex flex-wrap gap-2 mt-2">
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