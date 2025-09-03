import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MiniHeader } from './mini-header';
import SocialIcons from './icons';

export function Hero() {
    return (
        <div>
            <div className="py-8 mt-10">
                <h1 className="text-3xl font-bold mb-4"> Kavish Shah </h1>
                <h2 className="text-lg"> Freshman Pursuing Bioengineering @ UCLA</h2>
                <MiniHeader/>
            </div>
            <Image src="/pfp.jpeg" alt="Picture of the Author" width={200} height={200} className="rounded-full"/>
            <SocialIcons/>
        </div>
    );
}