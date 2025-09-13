import React from "react";
import Link from "next/link";
import Box from "./project-box"

export default function Project() {
    return (
        <>
         <div id="projects" className="flex flex-col px-4 items-center space-y-2 md:space-y-[1em]">

        <Box
            image="/website.png"
            title={
            <p>Personal <Link href="https://currypizzahouse.com/locations/lake-forest/" target="_blank" className="text-sky-300 md:hover:text-purple-300"> Project</Link>
            </p>            
          
            }
            description="Built over the last two weeks of summer between my senior year of high school and freshman year. 
            Programmed in Visual Studio Code and fully open source on GitHub. 
            Used Daisy UI in part, with the vast majority of styling done using Tailwind CSS. "
            technologies={["React", "Tailwind CSS", "TypeScript", "SQL"]} 
        />
        <Box
            image="/smilebright.jpg"
            title={
                <p className="text-gray-200 md:hover:text-sky-300">Smile Bright Initiative</p>
            }
            description="As a co-founder of a nonprofit to educate and provide resources to underprivileged 
            children regarding dental hygiene in India, I designed a website accessible in multiple languages
            to maximize our reach using a combination of WordPress and Bluehost. 
            Ultimately, we impacted hundreds of children through outreach with schools and dentists. "
            technologies={["React", "Tailwind CSS", "TypeScript", "SQL"]}
        />
        <Box
            image="/momentum.png"
            title={
            <p>Stock Market <Link href="https://currypizzahouse.com/locations/lake-forest/" target="_blank" className="text-sky-300 md:hover:text-purple-300"> Analysis Tool</Link>
            </p>            
          
            }
            description="Developed a command-line application reliant on the Polygon & Yahoo Finance APIs to recommend stocks 
            to buy during a recession and for overall growth. Utilized the Beautiful Soup and Requests libraries. "
            technologies={["Python", "Pandas"]}
        />
         </div>
        </>
    );
}