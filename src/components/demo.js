"use client";

import { useEffect } from "react";
import anime from "animejs";

export default function LineDrawingAnimation() {
  useEffect(() => {
    const paths = document.querySelectorAll(".line");

    // Set up initial stroke dash properties for drawing effect
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    // Animate stroke drawing
    anime({
      targets: ".line",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2000,
      delay: anime.stagger(200),
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg
        width="300"
        height="300"
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <path className="line" d="M10 10 H90" />
        <path className="line" d="M10 30 H90" />
        <path className="line" d="M10 50 H90" />
        <path className="line" d="M10 70 H90" />
        <path className="line" d="M10 90 H90" />
      </svg>
    </div>
  );
}
