import React from "react";
import Link from "next/link";
import Box from "./experience-box"

export default function Experience() {
    return (
        <>
        <div id="experience" className="flex flex-col space-y-[1em]">
            <Box
                period="July 2025 - Sep 2025"
                title="Full Stack Developer Intern * AvantGarde Ventures"
                description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
                technologies={["Tailwind CSS", "TypeScript", "Next.js", "Supabase"]}
            />
            <Box
                period="May 2025 - Sep 2025"
                title="Frontend Developer Intern * Graducator"
                description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
                technologies={["React", "Tailwind CSS", "TypeScript", "Next.js"]}
            />
            <Box
                period="May 2025 - Sep 2025"
                title="Mathematics Tutor * Carone STEM Academy"
                description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
                technologies={["React", "Tailwind CSS", "TypeScript"]}
            />
        </div>
        </>
    );
}