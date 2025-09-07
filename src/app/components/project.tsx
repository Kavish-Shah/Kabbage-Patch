import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "./project-box"

export default function Project() {
    return (
        <>
         <div id="projects" className="flex flex-col space-y-[1em]">

        <Box
            image="/pfp.jpeg"
            title="Personal Portfolio"
            description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
            technologies={["React", "Tailwind CSS", "TypeScript", "SQL"]}
        />
        <Box
            image="/pfp.jpeg"
            title="Smile Bright Initiative"
            description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
            technologies={["React", "Tailwind CSS", "TypeScript", "SQL"]}
        />
        <Box
            image="/momentum.png"
            title="Stock Market Analysis Tool"
            description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
            technologies={["Python", "Pandas"]}
        />
         </div>
        </>
    );
}