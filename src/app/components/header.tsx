import React from 'react';
import Link from 'next/link';

export function Header() {
    return (
        <nav>
            <ul className="flex flex-row space-x-4 bg-[#1c253b] text-white shadow-lg py-4 justify-center ">
                <li>
                    <Link href="#about" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium">About</Link>
                </li>
                <li>
                    <Link href="#experiences" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium">Experience</Link>
                </li>
                 <li>
                    <Link href="#projects" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium">Projects</Link>
                </li>
                <li>
                    <Link href="/hobbies" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium">Hobbies</Link>
                </li>
            </ul>
        </nav>
    );
}
