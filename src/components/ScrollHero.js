"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=500",
          scrub: 1,
          pin: true,
        },
      })

      // Background video scale + blur effect
      tl.to(videoRef.current, {
        scale: 2.5,
        filter: "blur(55px)",
        ease: "power2.inOut",
      })

      // Text animation (scale, rotate, fade)
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
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/Pinterest_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text contrast */}
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
          Where imagination meets innovation.
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          We sculpt digital experiences that inspire, engage, and transform your
          brand’s online presence into a work of art.
        </p>
      </div>
    </section>
  )
}
