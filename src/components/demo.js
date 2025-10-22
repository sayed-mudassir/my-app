"use client";
import { useEffect } from "react";
import { animate, stagger, utils } from 'animejs';

export default function AnimatedGrid() {
  useEffect(() => {
    const squares = document.querySelectorAll(".square");

    // Helper to get random number between min and max
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const $squares = utils.$('.square');
    function animateGrid() {
  animate($squares, {
    scale: [
      { to: [0, 1.25] },
      { to: 0 }
    ],
    boxShadow: [
      { to: '0 0 1rem 0 currentColor' },
      { to: '0 0 0rem 0 currentColor' }
    ],
    delay: stagger(100, {
      grid: [11, 4],
      from: utils.random(0, 11 * 4)
    }),
    onComplete: animateGrid
  });
}

animateGrid();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="row flex justify-center gap-10 flex-wrap"
        >
          {Array.from({ length: 11 }).map((_, squareIndex) => (
            <div
              key={squareIndex}
              className="square w-10 h-10 bg-gradient-to-r from-grey-500 to-purple-700 rounded-md shadow-md"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
