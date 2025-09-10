import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Experience from "./components/experience";
import Framework from "./components/framework";

export default function Home() {
  return (
    <>
   <div className="sticky top-0 z-50 h-20 md:h-20 lg:h-24">
      <Header/>
      <style>{`--header-height: 4rem;`}</style>
    </div>
    <div className="flex flex-col md:flex-row min-h-screen"> 

      {/* left side of page */}
      <div className="w-full md:w-1/2 md:sticky
            top-16 md:top-20 md:h-[calc(100vh-5rem)]
            lg:top-24 lg:h-[calc(100vh-6rem)]
            flex flex-col items-center overflow-visible md:overflow-hidden">
        <Hero/>
      </div>

      {/* right side of page */}
      <div className="w-full md:w-2/5 pt-6 md:pt-20 lg:pt-[2rem] leading-relaxed">
        <div className="space-y-12 md:space-y-[5em]">
          <div id="about" className="scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-35">
            < About />
          </div>
          <div id="experiences" className="scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-35">
            < Experience />
          </div>
          <div id="projects" className="scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24">
            < Project />
          </div>
        </div>
         <div id="framework" className="scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24">
            < Framework />
          </div>
      </div>
    </div>
    </>
  );
}
