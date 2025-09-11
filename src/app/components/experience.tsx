import React from "react";
import Link from "next/link";
import Box from "./experience-box"

export default function Experience() {
    return (
        <>
        <div id="experience" className="flex flex-col items-center px-4 space-y-2 md:space-y-[1em]">
            <Box
                period="July 2025 - Present"
                title="Full Stack Developer Intern - AvantGarde Ventures"
                description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
                technologies={["Capability Modelling", "Tailwind CSS", "TypeScript", "Next.js", "Supabase", "Tanstack Router"]}
            />
            <Box
                period="2020 - Sep 2025"
                title="Technology Class Founder - Ektaa Center "
                description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
                technologies={["Community Outreach", "Leadership", "Teaching"]}
            />
            <Box
                period="May 2025 - Sep 2025"
                title="Mathematics Tutor - Carone STEM Academy"
                description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
                technologies={["Mathematics", "Communication"]}
            />
            <Box
                period="June 2024 - Sep 2024"
                title="Cook & Cashier - Curry Pizza House"
                description="Worked on building responsive UI components and improving accessibility for a SaaS dashboard."
                technologies={["Mathematics", "Communication"]}
            />
            <Box
                period="May 2023 - August 2023"
                title=" Front-End Development Intern - RentFul"
                description="Used the T3 stack to create interactive web forms connecting landlords and tenants, 
                streamlining the exchange of information and services."
                technologies={["Mathematics", "Communication"]}
            />
        </div>
        </>
    );
}