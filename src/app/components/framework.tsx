import React from "react";
import Link from "next/link";

export default function Framework() {
    return (
    <>
    <div className="w-full md:w-3/4 lg:max-w-full lg:flex border border-transparent py-3 px-4 rounded-lg overflow-auto">
    <div className="flex flex-col justify-start lg:ml-3">

      <div className="text-sm text-gray-300 flex flex-wrap gap-2 mt-2">
        <p> Brainstormed on my iPad. Created with 
            <span className="text-white font-semibold hover:text-sky-300"> React</span>,
            <span className="text-white font-semibold hover:text-sky-300"> Node.js</span>,
            <span className="text-white font-semibold hover:text-sky-300"> Tailwind CSS</span>,
            <span className="text-white font-semibold hover:text-sky-300"> Next.js</span> in Visual Studio Code.
            Resources <Link href="https://github.com/Kavish-Shah/Kavish-Shah" target="_blank" className="text-white font-semibold hover:text-sky-300">here</Link>.</p>
      </div>
    </div>
</div>
</>
    );
}