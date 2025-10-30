"use client"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Typed from "typed.js";

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Digital Growth", "Creative Strategy", "Design Innovation"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

    useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      )
        .from(".hero-heading", {
          y: 60,
          opacity: 0,
          duration: 1.2,
        })
        .from(
          ".hero-text",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".hero-buttons button",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.5"
        )
        .from(
          ".hero-img",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);


  const heroRef = useRef(null)
  const textRef = useRef(null)
  const bgRef = useRef(null)
  const btnRef = useRef(null)
  const btn2Ref = useRef(null)
   const el = useRef(null);

  useGSAP(()=>{

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          // markers:true,
          start: "55% 50%",
          scrub: true,
          
        },
      })
    tl.to(textRef.current,{
      y:-500,
      scale:0.7,
      filter: "blur(50px)",
    },"a")
    .to(bgRef.current,{
      scale:0.5,
      y:-800,
      filter: "blur(80px)",
    },"a")
    .to(btnRef.current,{
      rotate:75,
      y:-800,
      filter: "blur(20px)",
    },"a")
    .to(btn2Ref.current,{
      rotate:-75,
      y:800,
      filter: "blur(20px)",
    },"a")
    .to(heroRef.current,{
      y:700
    },"a")
    

  })

  return (
     <section
      ref={heroRef}
      className="container px-6 py-24 mx-auto lg:flex lg:items-center h-screen lg:space-x-10"
    >
      {/* Left Section */}
      <div ref={textRef} className="w-full text-center lg:text-left lg:w-1/2">
        <h1  className="hero-heading  font-extrabold text-5xl md:text-7xl">
          Empower Your Brand with{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-700">
            <span ref={el} />
          </span>
        </h1>

        <p className="hero-text mt-6 text-lg">
          At <span className="font-semibold text-primary">Sculptrix Agency</span>, we craft
          digital experiences that drive results. From website design to brand
          identity — we shape your growth story with creativity and precision.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center lg:justify-start space-x-4">
          <Link href="/contact">
            <button ref={btnRef} className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </Link>
          <Link href="/portfolio">
            <button  ref={btn2Ref} className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div ref={bgRef} className="hero-img w-full mt-14 lg:mt-0 lg:w-1/2">
        <Image
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="creative designer illustration"
          width={550}
          height={550}
          className="w-full h-full max-w-md mx-auto hidden sm:block drop-shadow-2xl"
        />
      </div>
    </section>
  );
}