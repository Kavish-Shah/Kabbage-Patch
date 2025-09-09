"use client";
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from "react";

type HobbyProps = {
    title: string;
    description: string;
 
}

export default function Hobby( {title, description } : HobbyProps) {
    const [expanded, setExpanded] = useState(false);

return (
    <div className="max-w-sm w-full lg:max-w-1/4 lg:flex-col rounded-lg overflow-hidden py-2 px-3 bg-black/40 backdrop-blur-lg backdrop-saturate-150 shadow-[0_0_10px_theme(colors.cyan.300/15)]">
         <div className="relative flex items-center justify-center mb-2">
            <h1 className="text-gray-200 font-bold text-lg text-center w-full"> {title} </h1>
            <button onClick={() => setExpanded((prev) => !prev)}
          className="text-cyan-300 hover:text-cyan-400 text-sm font-medium"
        >
          {expanded ? <ChevronUp className="h-6 w-6"/> : <ChevronDown className="h-6 w-6"/> }
        </button>
      </div>

      {/* Description */}
      {expanded && (
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}