"use client"; // Next.js client component

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { engine, createTimeline, utils } from "animejs";

engine.useDefaultMainLoop = false; // Disable Anime.js default loop

const ThreeAnimeScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const $container = containerRef.current;
    if (!$container) return;

    const color = window.getComputedStyle($container).color;
    const { width, height } = $container.getBoundingClientRect();

    // Three.js setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 20);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color, wireframe: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    $container.appendChild(renderer.domElement);
    camera.position.z = 5;

    // Create animated cubes
    function createAnimatedCube() {
      const cube = new THREE.Mesh(geometry, material);
      const x = utils.random(-10, 10, 2);
      const y = utils.random(-5, 5, 2);
      const z = [-10, 7];
      const r = () => utils.random(-Math.PI * 2, Math.PI * 2, 3);
      const duration = 4000;

      createTimeline({
        delay: utils.random(0, duration),
        defaults: { loop: true, duration, ease: "inSine" },
      })
        .add(cube.position, { x, y, z }, 0)
        .add(cube.rotation, { x: r, y: r, z: r }, 0)
        .init();

      scene.add(cube);
    }

    for (let i = 0; i < 40; i++) {
      createAnimatedCube();
    }

    // Render loop
    const render = () => {
      engine.update();
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(render);

    // Handle resize
    const onResize = () => {
      const { width, height } = $container.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      $container.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} className="container w-full h-screen"></div>;
};

export default ThreeAnimeScene;
