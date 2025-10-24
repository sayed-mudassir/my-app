"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Info, Phone, Wrench, DollarSign } from "lucide-react"
import { ModeToggle } from "./ModeToggel" // ensure correct path

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  return (
    <>
      {/* ======= Top Navbar ======= */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all ${
        scrolled
          ? "top-1 w-[90%] rounded-4xl backdrop-blur-xl bg-white/20 dark:bg-black/30 border border-white/20 shadow-lg"
          : "top-0 w-full border-b border-white/20 backdrop-blur-md bg-white/10 dark:bg-black/20"
      }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide text-white"
          >
            Sculptrix<span className="text-purple-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className="relative text-gray-200 hover:text-white transition group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Theme Toggle */}
          <div className="md:hidden">
            <ModeToggle />
          </div>
        </div>
      </motion.nav>

      {/* ======= Bottom Mobile Navbar ======= */}
      <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/40 border border-white/20 shadow-lg flex justify-around items-center py-3 z-50">
        {navLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-all duration-300"
            >
              <Icon size={22} />
              <span className="text-xs mt-1">{link.name}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
