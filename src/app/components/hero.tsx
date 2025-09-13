import React from 'react';
import Image from 'next/image';
import { MiniHeader } from './mini-header';
import SocialIcons from './icons';


export function Hero() {
    return (
        <div className="flex flex-col items-center">
            <div className="py-8 mb-1 sm:mb-8 lg:mb-10">
                <h1 className="text-gray-200 text-5xl md:text-6xl mb-4 font-league_spartan font-bold text-center md:text-left">
                    Kavish Shah
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-200 font-quicksand text-center md:text-left"> Bioengineering Undergraduate at UCLA</h2>
            </div>
            <div className="px-4 sm:px-6 md:px-0 w-full">
            <div className="max-w-screen-sm mx-auto flex flex-row items-center justify-between gap-6 sm:gap-[3em] overflow-visible mb-5 sm:mb-16 lg:mb-20">
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
            </div>
            <div className="flex justify-center w-full">
                <SocialIcons />
            </div>
        </div>
    );
}