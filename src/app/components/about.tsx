import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <div className="px-4 md:px-0 font-quicksand text-gray-300 leading-relaxed space-y-[1em]"> 

        <p> 
            Hello! My name is Kavish Shah, I'm a freshman at the UCLA Samueli School of Engineering, and I'm 
            interested in pursuing a career in
            <Link href="https://www.ee.ucla.edu/" className="text-sky-300 md:text-gray-100 font-bold hover:text-sky-300"> electrical engineering </Link> and
            <Link href="https://www.cs.ucla.edu/" className="text-sky-300 md:text-gray-100 font-bold hover:text-sky-300"> technology</Link>. While 
            many of my practical skills have come through developing software and web applications, 
            I'm excited to explore the hardware side in college while continuing to expand my programming skills. 
        </p>

        <p> In the past, I have had experience working in a variety of settings, from teaching tech basics to seniors over Zoom, 
            to collaborating on coding internships with peers, to rolling out pizzas at a local restaurant. 
        </p>

        <p> I created this website to showcase the projects and experiences I'm proud of, in a space that feels more personal than 
            a LinkedIn profile or resume (both of which are linked via the icons).
        </p>
        <p> 
            However, I also wanted to shed light on a part of me that does not show up on these other platforms. As such, there 
            is another section dedicated to the
            <Link href="/hobbies" className="text-sky-300 md:text-gray-100 font-bold hover:text-sky-300"> hobbies 
            </Link> that make me who I am. The short version:
        </p>
        <p> 
            In my free time, you'll find me hitting the tennis courts, exploring local hikes, and lounging on my bed with my Kindle. 
            One more thing, I love listening to podcasts, and my favorite is 
            <Link href="/hobbies" className="text-sky-300 md:text-gray-100 font-bold hover:text-sky-300"> Morning Brew</Link>!
        </p>
    </div>
    );
}