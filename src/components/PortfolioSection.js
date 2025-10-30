"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { gsap } from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export default function PortfolioPage() {
  const ref = useRef(null)
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const bgRef = useRef(null)
  const descRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })




  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const graphicDesigns = [
    { src: "/luxuryBrand.jpg", title: "Luxury Brand Poster", category: "Graphics" },
    { src: "/SocialCampaignBanner.png", title: "Social Campaign Banner", category: "Graphics" },
    { src: "/CorporateBrandingKit.webp", title: "Corporate Branding Kit", category: "Graphics" },
  ]

  const adCampaigns = [
    { src: "/MetaAdCampaign.png", title: "Meta Ad Campaign – Growth Series", category: "Ad Campaigns" },
    { src: "/Rebranding-On-Social-Media.jpg", title: "Instagram Rebranding Drive", category: "Ad Campaigns" },
    { src: "/performance-marketing-dashboard.webp", title: "Performance Marketing Results", category: "Ad Campaigns" },
  ]

  const websites = [
    { src: "/uthr.webp", title: "E-Commerce Website", category: "Websites" },
    { src: "/portfolioDesign.jpg", title: "Portfolio Website", category: "Websites", link: "https://codegenweb.github.io/Hannah-Personal-Portfolio/" },
    { src: "/Rstraunt.jpg", title: "Restaurant SEO Optimized Site", category: "Websites",  },
  ]

  const allProjects = [...graphicDesigns, ...adCampaigns, ...websites]

  // cinematic letter-by-letter animation
  const text = "The Sculptrix Portfolio".split("")

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  }

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
      y:-700,
      scale:0.7,
      rotate:-180,
      filter: "blur(120px)",
    },"a")
    .to(bgRef.current,{
      scale:1.5,
      y:-800,
      filter: "blur(120px)",
    },"a")
    .to(descRef.current,{
      y:-700,
      filter: "blur(120px)",

    },"a")
    .to(heroRef.current,{ 
      y:200,
      filter: "blur(80px)",

    },"a")
    

  })


  return (
    <div ref={ref} className="overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section ref={heroRef} className="relative flex flex-col justify-center items-center text-center min-h-[100vh] overflow-hidden">
        {/* Background with Parallax */}
        <motion.div
          ref={bgRef}
          style={{ y: y1, opacity }}
          className="absolute inset-0 bg-[url('/mobile.png')] bg-cover bg-center bg-fixed"
        ></motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        {/* Hero Text */}
        <motion.div
          style={{ y: y2 }}
          className="relative z-10 flex flex-col items-center space-y-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Cinematic Text Reveal */}
          <motion.h1
            ref={textRef}
            className="text-7xl md:text-8xl font-extrabold uppercase tracking-tight flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
          >
            {text.map((char, i) => (
              <motion.span

                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.5, delay: i * 0.05 },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with Blur Fade */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            ref={descRef}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Crafting Digital Excellence — A Showcase of Design, Strategy, and Growth.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center text-white"
        >
          <span className="text-sm uppercase tracking-wide mb-2">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-6 rounded-full border-2"
          ></motion.div>
        </motion.div>
      </section>

      {/* ===== Portfolio Section ===== */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto px-6 py-20 space-y-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="text-center space-y-4 z-10"
        >
          <h2 className="text-6xl font-extrabold tracking-tight uppercase">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold">Sculptrix Agency</span>, we fuse creativity with
            strategy — delivering high-impact visuals, campaigns, and digital experiences.
          </p>
        </motion.div>

        {/* === Tabs === */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 mb-12">
            <TabsTrigger value="all" className="text-lg font-semibold">
              All
            </TabsTrigger>
            <TabsTrigger value="graphics" className="text-lg font-semibold">
              Graphic Designs
            </TabsTrigger>
            <TabsTrigger value="ads" className="text-lg font-semibold">
              Ad Campaigns
            </TabsTrigger>
            <TabsTrigger value="websites" className="text-lg font-semibold">
              Websites & SEO
            </TabsTrigger>
          </TabsList>

          {/* === ALL === */}
          <TabsContent value="all">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
            >
              {allProjects.map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden group hover:scale-[1.03] transition-transform duration-300"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64"
                  />
                  <CardContent className="p-4 text-center">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-sm uppercase tracking-wide mt-2">{item.category}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          {/* === GRAPHICS === */}
          <TabsContent value="graphics">
            <GridSection items={graphicDesigns} fadeUp={fadeUp} />
          </TabsContent>

          {/* === ADS === */}
          <TabsContent value="ads">
            <GridSection items={adCampaigns} fadeUp={fadeUp} />
          </TabsContent>

          {/* === WEBSITES === */}
          <TabsContent value="websites">
            <GridSection items={websites} fadeUp={fadeUp} />
          </TabsContent>
        </Tabs>
      </motion.section>
    </div>
  )
}

// Reusable grid section component
function GridSection({ items, fadeUp }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
    >
      {items.map((item, i) => (
        <Card
          key={i}
          className="overflow-hidden group hover:scale-[1.03] transition-transform duration-300"
        >
          <Image
            src={item.src}
            alt={item.title}
            width={600}
            height={400}
            className="object-cover w-full h-64"
          />
          <CardContent className="p-4 text-center">
            <h3 className="text-2xl font-bold">{item.title}</h3>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  )
}
