"use client";

import React from "react";
import {
  Instagram,
  MessageCircle,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">

        {/* Left: Logo / Brand */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold">Sculptrix Agency</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm">
            Crafting digital experiences that impress, engage, and convert. Connect with us!
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Contact</h2>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-500" />
            <a href="tel:+919335809406" className="hover:text-blue-400 font-semibold">
              +91-9335809406
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-500" />
            <a href="mailto:sculptrix9@gmail.com" className="hover:text-blue-400 font-semibold">
              sculptrix9@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Allahabad, India</span>
          </div>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Instagram className="w-6 h-6 text-pink-500" />
              <a href="https://instagram.com/yourusername" target="_blank" className="font-semibold hover:text-pink-400">
                @Sculptrix.agency
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-green-500" />
              <a href="https://wa.me/917987886923" target="_blank" className="font-semibold hover:text-green-400">
                WhatsApp: +91 79878 86923
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-6 h-6 text-blue-600" />
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="font-semibold hover:text-blue-400">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              <a href="https://github.com/yourgithub" target="_blank" className="font-semibold hover:text-gray-500 dark:hover:text-gray-400">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 py-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Sculptrix Agency. All rights reserved.
      </div>
    </footer>
  );
}
