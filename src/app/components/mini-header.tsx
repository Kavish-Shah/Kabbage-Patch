"use client";

import React from 'react';
import Link from 'next/link';
import { useActiveSection } from "./monitor";

export function MiniHeader() {
    const active = useActiveSection();

    const MiniHeaderItems = [
        { id: "about", label: "ABOUT"},
        {id: "experience", label: "EXPERIENCE"},
        {id: "projects", label: "PROJECTS"}
    ];

    return (
       <div>
  <ul className="flex flex-col space-y-2 py-4 justify-center">
    {MiniHeaderItems.map((item) => {
      const isActive = active === item.id;
      return (
        <li key={item.id}>
          <Link
            href={`#${item.id}`}
            scroll={true}
            className={`flex items-center px-3 py-2 rounded-md text-sm font-quicksand transition-all duration-300
              ${isActive
                ? "text-white text-bold shadow-lg shadow-sky-500/50 scale-105"
                : "text-gray-300 hover:text-sky-300"
              }`}
          >
            {/* Bar */}
            <span
              className={`mr-3 h-[2px] transition-all duration-300
                ${isActive ? "w-10 bg-white" : "w-6 bg-gray-500 hover:bg-sky-300"}
              `}
            ></span>

            {/* Label */}
            <span>{item.label}</span>
          </Link>
        </li>
      );
    })}
  </ul>
</div>


    );
}