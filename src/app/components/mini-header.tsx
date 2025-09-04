"use client";

import React from 'react';
import Link from 'next/link';
import { useActiveSection } from "./monitor";

export function MiniHeader() {
    const active = useActiveSection();

    const MiniHeaderItems = [
        { id: "about", label: "About"},
        {id: "experience", label: "Experience"},
        {id: "projects", label: "Projects"}
    ];

    return (
        <div>
                <ul className="flex flex-col space-y-2 text-white py-4 justify-center">
                {MiniHeaderItems.map((item) => (
                    <li key={item.id}>
                        <Link href={`#${item.id}`}
                        scroll={true}
                        className={`block px-3 py-2 rounded-md text-md font-medium transition-all duration-300 ${
                        active === item.id
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105 w-1/3"
                        : "text-white hover:text-blue-200 w-1/3"
                        }`}
                            >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}