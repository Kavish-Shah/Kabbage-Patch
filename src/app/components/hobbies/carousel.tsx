"use client";

import React, { useState } from "react";
import { Dot } from "lucide-react";

export default function CarouselComponent() {
  const slides = [
    { id: 1, src: "/sample1.jpg" },
    { id: 2, src: "/sample2.jpg" },
    { id: 3, src: "/sample3.jpg" },
    { id: 4, src: "/sample4.jpg" },
    { id: 5, src: "/sample5.jpg" },
    { id: 6, src: "/sample.jpg" },
  ];

  // Group slides into pairs
  const slidePairs = [];
  for (let i = 0; i < slides.length; i += 2) {
    slidePairs.push([slides[i], slides[i + 1]].filter(Boolean));
  }

  const [currentPair, setCurrentPair] = useState(0);

  const nextSlide = () => {
    setCurrentPair((prev) => (prev + 1) % slidePairs.length);
  };

  const prevSlide = () => {
    setCurrentPair((prev) => (prev - 1 + slidePairs.length) % slidePairs.length);
  };

  return (
    <div className="w-full max-w-5xl mx-auto 
  p-0 rounded-none bg-transparent backdrop-blur-0 backdrop-saturate-100 shadow-none 
  md:p-6 md:rounded-3xl md:bg-black/40 md:backdrop-blur-lg md:backdrop-saturate-150 md:shadow-[0_0_10px_theme(colors.cyan.300/15)]">
      {/* Title */}
      {/* Carousel wrapper */}
      <div className="relative w-full flex justify-center items-center">
        {/* Carousel frame */}
        <div className="relative rounded-box overflow-hidden w-full z-10">
          {/* Slide container */}
          <div className="relative w-full min-h-[30vh] sm:min-h-[80vh]">
            {slidePairs.map((pair, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-500 ease-in-out ${
                  currentPair === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {pair.map((slide) => (
                  <div key={slide.id} className="w-1/2 flex justify-center items-center first:pl-8 last:pr-8 md:first:pl-12 md:last:pr-12">
                    <img
                      src={slide.src}
                      alt={`Slide ${slide.id}`}
                      className="h-auto w-auto max-h-[80vh] object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation buttons — inside the image frame */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 z-30 btn btn-circle bg-gray-900/50 hover:bg-gray-800 text-white transition-transform duration-300 hover:scale-110"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 z-30 btn btn-circle bg-gray-900/50 hover:bg-gray-800 text-white transition-transform duration-300 hover:scale-110"
          >
            ❯
          </button>
        </div>
        
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-2 mt-2 sm:mt-4">
        {slidePairs.map((_, index) => (
          <button
            key={index}
      onClick={() => setCurrentPair(index)}
      className={`btn btn-circle rounded-full btn-xs group transition-all duration-300 ${
        currentPair === index
          ? "bg-gray-200 shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]"
          : "bg-gray-500"
      } hover:bg-gray-400`}
    >
      <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-white transition-colors" />
    </button>
        ))}
      </div>
    </div>
  );
}
