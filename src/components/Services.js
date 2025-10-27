"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ✨ Parent animation container for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between cards
      delayChildren: 0.2,
    },
  },
};

// ✨ Card pop-up animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 15,
      mass: 0.9,
    },
  },
};

export default function Services({ services }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ✨ Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-extrabold text-center mb-16 tracking-tight"
        >
          Our Services
        </motion.h2>

        {/* ✨ Staggered pop-up animation for cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 0.8,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex justify-center"
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer rounded-2xl border">
                <div className="h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:tracking-wide transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm mb-4 opacity-80 leading-relaxed">
                    {service.description?.slice(0, 100)}...
                  </p>

                  <Link href={`/services/${service.slug}`} className="block">
                    <Button
                      variant="outline"
                      className="transition-all hover:scale-105"
                    >
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
