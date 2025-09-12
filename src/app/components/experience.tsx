import React from "react";
import Link from "next/link";
import Box from "./experience-box"

export default function Experience() {
    return (
        <>
        <div id="experience" className="flex flex-col items-center px-4 space-y-2 md:space-y-[1em]">
            <Box
                period="July 2025 - Present"
                title={<>
                <p>FullStack Developer Intern - </p>
                <Link href="https://www.bizprofile.net/ca/lake-forest/avant-garde-ventures-inc" target="_blank" className="text-sky-300 md:hover:text-purple-300">AvantGarde Ventures</Link>
                </>
                }
                description="Currently, I'm working on creating a ground-up enterprise resource tracking software. 
                Through this internship, I have gained advanced knowledge of topics such as React, TypeScript, and Tailwind CSS, 
                and have learned about new technologies, including Supabase, Tanstack Router, and entrepreneurial concepts like capability modeling. "
                technologies={["Capability Modelling", "Tailwind CSS", "TypeScript", "Next.js", "Supabase", "Tanstack Router"]}
            />
            <Box
                period="2020 - Sep 2025"
                title={<>
                <p>Technology Class Founder - </p>
                <Link href="https://actaonline.org/profile/ektaa-center/" target="_blank" className="text-sky-300 md:hover:text-purple-300">Ektaa Center</Link>
                </>
                }
                description="Founded a class for seniors expanding tech literacy during the pandemic; 
                150+ hours educating 60+ adults; Led youth & adult volunteers over 4 years. 
                Covered topics ranging from Instagram to ChatGPT."
                technologies={["Community Outreach", "Leadership", "Teaching"]}
            />
            <Box
                period="May 2025 - Sep 2025"
                title={<>
                <p>Mathematics Tutor - </p>
                <Link href="https://www.bizprofile.net/ca/lake-forest/avant-garde-ventures-inc" target="_blank" className="text-sky-300 md:hover:text-purple-300">Carone STEM Academy</Link>
                </>
                }
                description="Taught multiple students in mathematics topics like Algebra 1, Geometry, Pre-Calculus, and Calculus 
                at the intermediate and high school grade level."
                technologies={["Mathematics", "Teaching", "Communication"]}
            />
            <Box
                period="June 2024 - Sep 2024"
                title={<>
                <p>Cook & Cashier - </p>
                <Link href="https://currypizzahouse.com/locations/lake-forest/" target="_blank" className="text-sky-300 md:hover:text-purple-300">Curry Pizza House</Link>
                </>
                }
                description="Worked 100+ hours as a cook, waiter, and cashier primarily during dinner rushes. 
                Redesigned the process of storing boxes and supplies to maximize efficiency."
                technologies={["Kneading", "Cutting", "Boxing", ":)"]}
            />
            <Box
                period="May 2023 - August 2023"
                title={<>
                <p>Front-End Development Intern - </p>
                <p className="text-sky-300">RentFul</p>
                </>
                }
                description="As part of the founding team, I used the T3 stack to create interactive web forms 
                connecting landlords and tenants, streamlining the exchange of information and services.
                I engaged with the CEO/CFO in weekly meetings across time zones and brainstormed a variety of UI designs."
                technologies={["TypeScript", "Next.js", "Prisma", "NextAuth.js", "Tailwind CSS"]}
            />
        </div>
        </>
    );
}