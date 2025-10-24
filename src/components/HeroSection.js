"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=800",
          scrub: 1.5,
          pin: true,
        },
      })

      // Background blur and scale animation
      tl.to(bgRef.current, {
        scale: 1.3,
        filter: "blur(20px)",
        ease: "power2.inOut",
      })

      // Text fade, rotate and scale animation
      tl.to(
        textRef.current,
        {
          opacity: 0,
          scale: 1.5,
          rotateX: 45,
          y: -150,
          ease: "power2.inOut",
        },
        "<"
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="/purple_sphere.jpeg"
          alt="Sculptrix Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div
        ref={textRef}
        className="relative z-20 text-center text-white max-w-4xl px-4"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
          Sculptrix Agency
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
          Transforming ideas into stunning digital realities.
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          At Sculptrix, we blend creativity, design, and technology to craft
          memorable digital experiences that leave a lasting impression.
        </p>
      </div>
    </section>
  )
}
