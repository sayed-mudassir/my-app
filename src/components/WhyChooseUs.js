"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BarChart3, Lightbulb, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const whyUsData = [
  {
    title: "Data-Driven Approach",
    desc: "We use analytics and insights to help brands make smarter marketing decisions and grow sustainably.",
    icon: BarChart3,
  },
  {
    title: "Creative & Innovative",
    desc: "We craft campaigns that are not only eye-catching but also performance-driven, keeping you ahead of the competition.",
    icon: Lightbulb,
  },
  {
    title: "Transparent Reporting",
    desc: "We provide clear insights and performance tracking, so you always understand where your ROI is coming from.",
    icon: Eye,
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-6xl font-extrabold leading-tight">
            Why Choose <span className="text-primary">Sculptrix</span>
          </h2>
          <h3 className="text-2xl font-semibold">Your Success is Our Mission</h3>
          <p className="text-lg leading-relaxed font-light">
            In today’s fast-paced digital world, choosing the right marketing
            partner makes all the difference. At{" "}
            <strong>Sculptrix Agency</strong>, we don’t just create campaigns —
            we build strategies that inspire growth, engagement, and measurable
            results.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-4 hover:scale-110 transition-transform"
          >
            Let’s Talk Strategy →
          </Button>
        </motion.div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-2 gap-30 justify-items-center">
          {whyUsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <Card className="p-10 text-center shadow-xl border border-white/10 backdrop-blur-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Icon className="w-12 h-12 mb-5 mx-auto" />
                  <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-base font-light mb-5">{item.desc}</p>
                  <Button variant="ghost" size="sm" className="hover:underline">
                    Read More
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
