"use client"; // MUST be the very first line

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { animate, stagger, utils } from "animejs";


export default function HeroSection() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // === GSAP text animation ===
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, paraRef.current, btnRef.current], {
        opacity: 0,
        y: 60,
      });

      const tl = gsap.timeline({ delay: 0.5, ease: "power3.out" });
      tl.to(headingRef.current, { opacity: 1, y: 0, duration: 1.2 })
        .to(paraRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.6")
        .to(btnRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
    }, heroRef);

    // === AnimeJS full-screen responsive grid ===
    const createSquares = () => {
      const container = document.querySelector(".grid-container");
      container.innerHTML = ""; // reset

      const rows = Math.floor(window.innerHeight / 40); // 40px per square
      const cols = Math.floor(window.innerWidth / 40);

      for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "flex justify-center gap-2";
        for (let c = 0; c < cols; c++) {
          const square = document.createElement("div");
          square.className =
            "square w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-md";
          rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
      }
      return utils.$(".square");
    };

    let squares = createSquares();

    function animateGrid() {
      animate(squares, {
        scale: [
          { to: [0, 1.25] },
          { to: 0 },
        ],
        boxShadow: [
          { to: "0 0 1rem 0 currentColor" },
          { to: "0 0 0rem 0 currentColor" },
        ],
        delay: stagger(100, {
          grid: [Math.floor(window.innerWidth / 40), Math.floor(window.innerHeight / 40)],
          from: utils.random(0, squares.length),
        }),
        easing: "easeInOutQuad",
        onComplete: animateGrid,
      });
    }

    animateGrid();

    // Recreate squares on window resize
    const handleResize = () => {
      squares = createSquares();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-b from-background to-muted px-6"
    >
      {/* Fullscreen Animated Grid */}
      <div className="absolute inset-0 grid-container opacity-20 flex flex-col items-center justify-center"></div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-[4px]" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl font-bold leading-tight text-foreground drop-shadow-md"
        >
          We Sculpt <span className="text-primary">Digital Experiences</span>
        </h1>

        <p
          ref={paraRef}
          className="text-muted-foreground mt-6 text-lg sm:text-xl leading-relaxed"
        >
          At <span className="font-semibold text-primary">Sculptrix Agency</span>, we design, develop, and deliver
          innovative digital solutions that elevate your brand and help your
          business grow faster.
        </p>

        <div ref={btnRef} className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" className="px-6 py-3 text-lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="px-6 py-3 text-lg">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
