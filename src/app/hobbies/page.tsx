import { Header } from '../components/header';
import Carousel from '../components/hobbies/carousel';
import Hobby from '../components/hobbies/hobby';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Hobbies() {
    return (
        <>
        <Header/>

        {/* Main content */}
        <div className="pt-2 pb-2 md:pt-10 md:pb-10 relative md:min-h-screen flex flex-col items-center justify-start">
            <Carousel />
            <div className="flex flex-col space-y-2 md:flex-row md:items-start md:justify-between w-full max-w-9/10 gap-6 pt-10 md:pt-10">
                <Hobby 
                title="Racket Sports"
                description= {
                <>
                I've been playing tennis since childhood and am an avid fan of the sport. 
                I played on the Varsity team throughout high school as the top singles player but I love to play doubles as well. 
                In addition to tennis I enjoy playing badminton, table tennis, and recently have picked up pickleball.
                At<Link href="https://www.ucla.edu/" className="text-sky-300 md:text-gray-200 font-bold hover:text-sky-300"> UCLA </Link>I plan to join the abundant racket sports clubs on campus and keep working on my kick serve!
                </>
                }
                />
                <Hobby
                title="Hiking"
                description= {
                <>
                Growing up in South Orange County, I have done almost every local hike with my friends and family. 
                Moreover, we've visited many of the national parks, including
                <Link href="https://www.nps.gov/seki/index.htm" className="text-sky-300 md:text-gray-200 font-bold hover:text-sky-300"> Sequoia</Link>,
                <Link href="https://www.nps.gov/yose/index.htm" className="text-sky-300 md:text-gray-200 font-bold hover:text-sky-300"> Yosemite </Link>, and
                <Link href="https://www.nps.gov/zion/index.htm" className="text-sky-300 md:text-gray-200 font-bold hover:text-sky-300"> Zion</Link>.
                In the last year, I have also begun going on local biking trails with friends every weekend. 
                Whenever I visit a new location, I always try to capture a few good photos to add to my phone's lockscreen. 
                Some of my favorites are showcased above <ArrowUp className="inline-block w-4 h-4 align-text-bottom font-bold text-sky-300"/> 
                <br/>
                (Feel free to download any of them!)
                </>
                }
                />
                <Hobby 
                title="Reading"
                description= {
                <>
                When I got my Kindle in high school, it let me reconnect with reading in a way I hadn't since grade school. 
                Nowadays, it's a nightly ritual of mine to read for a couple of minutes…or more before going to bed. 
                My favorite series that I've read in recent years is
                <Link href="https://www.goodreads.com/series/117100-red-rising-saga" className="text-sky-300 md:text-gray-200 font-bold hover:text-sky-300"> Red Rising</Link>
                , but my all-time favorite novel is 
                <Link href="https://www.goodreads.com/book/show/17165596-the-kite-runner?from_search=true&from_srp=true&qid=A7zxEU9fpe&rank=1" className="text-gray-200 font-bold hover:text-sky-300"> The Kite Runner </Link>.
                I'm always on the lookout for new books, so if you have any reccs, don't hesitate to
                <Link href="https://www.instagram.com/kavishs207" className="text-purple-300 md:text-gray-200 font-bold hover:text-purple-300"> reach out</Link>.
                </>
                }
                />
            </div>
        </div>

        </>
    );
}