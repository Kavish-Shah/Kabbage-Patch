import react from 'react';
import { Header } from '../components/header';
import Carousel from '../components/hobbies/carousel';

export default function Hobbies() {
    return (
        <>
        <Header/>

        {/* top section */}
        <div>
            <Carousel/>
        </div>
        </>
    );
}