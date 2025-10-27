"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Linkedin,
  Github,
  Mail
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_5tgxsxk",     // 🔹 Replace
        "template_3dsxciw",    // 🔹 Replace
        formData,
        "gYKMXOJSfvoVO-wB7"      // 🔹 Replace
      )
      .then(
        () => {
          setStatus("success");
          setFormData({
            user_email: "",
            user_phone: "",
            message: "",
          });
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="bg-gradient-to-tr flex flex-col md:flex-row items-start justify-center py-10 px-10  gap-16 relative overflow-x-hidden">

      {/* Left: Contact Info & Socials */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center space-y-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Contact <span className="text-blue-900">Sculptrix Agency</span>
        </h1>
        <p className="text-2xl text-gray-200 max-w-xl">
          Reach out directly via form, email, phone, or our socials below. We’re always ready to collaborate and create something amazing! 🚀
        </p>

        <div className="space-y-6 text-2xl">
          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <Phone className="w-8 h-8 text-blue-400" />
            <a href="tel:+919335809406" className="font-bold hover:text-blue-300">+91-9335809406</a>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <Mail className="w-8 h-8 text-blue-400" />
            <a href="mailto:sculptrix9@gmail.com" className="font-bold hover:text-blue-300">sculptrix9@gmail.com</a>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <MapPin className="w-8 h-8 text-blue-400" />
            <span className="font-bold">Allahabad, India</span>
          </div>
        </div>

        <div className="flex gap-8 mt-10 text-4xl">
          <a href="https://instagram.com/yourusername" target="_blank" className="hover:text-pink-500 transform hover:scale-125 transition-transform">
            <Instagram />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" className="hover:text-green-500 transform hover:scale-125 transition-transform">
            <MessageCircle />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" className="hover:text-gray-200 transform hover:scale-125 transition-transform">
            <Github />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-blue-400 transform hover:scale-125 transition-transform">
            <Linkedin />
          </a>
        </div>
      </motion.div>

      {/* Right: Contact Form */}
      <motion.div
        className="md:w-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold mb-8">Send a Message 💬</h2>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md text-center rounded-3xl"
            >
              <p className="text-3xl font-extrabold text-green-400 animate-pulse">
                🎉 Sent Successfully!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
          <div>
            <Label htmlFor="user_email" className="text-lg font-bold">Email</Label>
            <Input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="mt-2 bg-gray-900/80 border-gray-700 text-white placeholder-gray-300 text-lg"
              placeholder="Your email"
            />
          </div>

          <div>
            <Label htmlFor="user_phone" className="text-lg font-bold">Mobile Number</Label>
            <Input
              type="tel"
              id="user_phone"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              required
              className="mt-2 bg-gray-900/80 border-gray-700 text-white placeholder-gray-300 text-lg"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-lg font-bold">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 bg-gray-900/80 border-gray-700 text-white placeholder-gray-300 text-lg"
              placeholder="Write your message..."
            />
          </div>

          <Button type="submit" className="w-full text-xl font-bold py-4 bg-yellow-400 text-black hover:bg-yellow-500 transition-all">
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
