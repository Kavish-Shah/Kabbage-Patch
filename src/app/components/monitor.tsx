"use client";

import { useEffect, useState } from "react";

// initializes each section while matching the ids
const sections = ["about", "experience", "projects"];

export function useActiveSection() {
    // creates a state with about as the default - we call setActive to change it
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    // Creates a new IntersectionObserver instance, this API watches elements and tells us when they enter or leave the viewport, (entries) is an array of all observed elements that have changed visibility.
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry closest to the top that is intersecting
        const visible = entries
        // filter → keeps only the entries that are currently visible in the viewport.
          .filter((entry) => entry.isIntersecting)
          // sort → orders them by their distance from the top of the viewport (boundingClientRect.top). the one closest to the top comes first 
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        // If there’s at least one visible section, update active to that section’s id, target is the actual DOM element being observed.
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        // this means that when the viewport is scrolled between those points then only it will activate the change so the element is fully in view
        rootMargin: "-40% 0px -60% 0px", // can be adjusted to whatever you want
        
      }
    );
// loops through each id 
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
// Cleanup function that stops the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return active;
}
