"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-20 mt-24 relative overflow-hidden">
      {/* Gradient Glow Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/20 to-transparent opacity-70 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-4 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Brand / About */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Sculptrix Agency</h2>
          <p className="text-base leading-relaxed opacity-80">
            Designing bold digital experiences with purpose.  
            We transform ideas into captivating interfaces & scalable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-base">
            <li><Link href="/" className="hover:underline hover:font-medium">Home</Link></li>
            <li><Link href="/services" className="hover:underline hover:font-medium">Services</Link></li>
            <li><Link href="/projects" className="hover:underline hover:font-medium">Projects</Link></li>
            <li><Link href="/contact" className="hover:underline hover:font-medium">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6" /> <span className="font-medium text-lg">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6" /> <span className="font-medium text-lg">hello@sculptrix.com</span>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="w-6 h-6" /> <span className="font-medium text-lg">Mumbai, India</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Connect With Us</h3>
          <ul className="space-y-5 text-base">
            <li className="flex items-center gap-4">
              <Instagram className="w-7 h-7" />
              <Link
                href="https://instagram.com/sculptrix"
                target="_blank"
                className="font-medium text-lg hover:underline"
              >
                @sculptrix
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <MessageCircle className="w-7 h-7" />
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                className="font-medium text-lg hover:underline"
              >
                +91 98765 43210
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t mt-16 pt-8 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} <span className="font-semibold">Sculptrix Agency</span>. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
