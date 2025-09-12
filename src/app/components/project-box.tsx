import React from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectBoxProps = {
    image: string;
    title: React.ReactNode;
    description: string;
    technologies: string[];
}

export default function Box( {image, title, description, technologies} : ProjectBoxProps) {
    return (
    <>
    <div className="max-w-sm w-full lg:max-w-full lg:flex border border-transparent overflow-hidden py-3 px-3 rounded-lg bg-black/40 md:bg-transparent
     hover:bg-black/40 hover:backdrop-blur-lg hover:backdrop-saturate-150 hover:shadow-[0_0_10px_theme(colors.cyan.300/15)]">
  {/* Left side image */}
  <div className="flex-none lg:w-48 flex items-start">
    <div className="mb-4 md:mb-0 h-48 lg:h-24 w-full rounded-2xl overflow-hidden relative">
      <Image
        src={image}
        alt="description"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>

  {/* Right side content */}
  <div className="flex flex-col justify-start lg:ml-3">
    <div className="mb-4">
      <div className="text-gray-200 font-bold text-xl mb-2 leading-tight">
        {title}
      </div>

      <p className="text-sm font-family-quicksand text-gray-300 mt-0">
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