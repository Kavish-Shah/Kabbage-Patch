import React from 'react';
import Link from 'next/link';

export function MiniHeader() {
    return (
        <div>
                <ul className="flex flex-col space-x-4 text-white py-4 justify-center">
                <li>
                    <Link href="/about" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium">About</Link>
                </li>
                <li>
                    <Link href="/experience" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium">Experience</Link>
                </li>
                 <li>
                    <Link href="/projects" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium">Projects</Link>
                </li>
            </ul>
        </div>
    );
}