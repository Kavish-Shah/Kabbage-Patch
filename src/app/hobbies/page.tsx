import react from 'react';
import { Header } from '../components/header';
import Carousel from '../components/hobbies/carousel';
import Hobby from '../components/hobbies/hobby';

export default function Hobbies() {
    return (
        <>
        <Header/>

        {/* Main content */}
        <div className="pt-10 relative min-h-screen flex flex-col items-center justify-start">
            <Carousel />
            <div className="flex flex-row items-start justify-between w-full max-w-9/10 gap-6 py-10">
                <Hobby 
                title="Racket Sports"
                description="I've been playing tennis since childhood and am an avid fan of the sport. 
                I played on the Varsity team throughout high school as the top singles player but I love to play doubles as well. 
                In addition to tennis I enjoy playing badminton, table tennis, and recently have picked up pickleball. 
                At UCLA I plan to join the abundant racket sports clubs on campus and keep working on my kick serve!"
                />
                <Hobby
                title="Hiking"
                description="I've been playing tennis since childhood and am an avid fan of the sport. 
                I played on the Varsity team throughout high school as the top singles player but I love to play doubles as well. 
                In addition to tennis I enjoy playing badminton, table tennis, and recently have picked up pickleball. 
                At UCLA I plan to join the abundant racket sports clubs on campus and keep working on my kick serve!"
                />
                <Hobby 
                title="Reading"
                description="I've been playing tennis since childhood and am an avid fan of the sport. 
                I played on the Varsity team throughout high school as the top singles player but I love to play doubles as well. 
                In addition to tennis I enjoy playing badminton, table tennis, and recently have picked up pickleball. 
                At UCLA I plan to join the abundant racket sports clubs on campus and keep working on my kick serve!"
                />
            </div>
        </div>

        </>
    );
}