"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById("cursor-glow");
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="cursor-glow"
      className="fixed pointer-events-none z-50 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl transition-opacity duration-300"
      style={{
        transform: "translate(-50%, -50%)",
        opacity: 0,
      }}
    />
  );
}
