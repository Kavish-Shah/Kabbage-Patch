import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MiniHeader } from './mini-header';
import SocialIcons from './icons';


export function Hero() {
    return (
        <div className="flex flex-col items-center">
            <div className="py-8 mb-6 sm:mb-8 lg:mb-10">
                <h1 className="text-gray-200 text-6xl mb-4 font-league_spartan font-bold">
                    Kavish Shah
                </h1>
                <h2 className="text-2xl text-gray-200 font-quicksand"> Bioengineering Undergraduate at UCLA</h2>
            </div>
            <div className="flex flex-row items-center justify-center gap-[3em] overflow-visible mb-12 sm:mb-16 lg:mb-20">
                {/* Profile Photo */}
                <Image
                    src="/pfp.jpeg"
                    alt="Picture of the Author"
                    width={200}
                    height={200}
                    className="rounded-full flex-shrink-0"
                 />

                {/* Menu wrapper */}
                <div className="flex-shrink-0 overflow-visible">
                    <MiniHeader />
                </div>
            </div>
            <div className="w-full">
                <SocialIcons />
            </div>
        </div>
    );
}