"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggel"; // make sure file name matches exactly
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ${
        scrolled
          ? "top-4 w-[80%] rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-black/30 border border-white/20 shadow-lg"
          : "top-0 w-full border-b border-white/20 backdrop-blur-md bg-white/10 dark:bg-black/20"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-foreground"
        >
          Sculptrix<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-muted-foreground transition"
            >
              {link.name}
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground hover:text-muted-foreground transition">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="backdrop-blur-xl bg-background/80 border-none text-foreground"
            >
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-center text-blue-400">
                  Sculptrix Menu
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 text-xl pt-8 text-center">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="hover:text-muted-foreground transition"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
