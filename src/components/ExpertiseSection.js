"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Megaphone,
  Search,
  MousePointer,
  FileText,
  PenTool,
  Globe,
  Code,
  Smartphone,
} from "lucide-react";

const expertiseData = [
  { title: "Social Media Marketing", icon: Megaphone },
  { title: "SEO Optimization", icon: Search },
  { title: "PPC Advertising", icon: MousePointer },
  { title: "Content Marketing", icon: FileText },
  { title: "Graphic Designing", icon: PenTool },
  { title: "Website Development", icon: Globe },
  { title: "Software Development", icon: Code },
  { title: "Mobile App Development", icon: Smartphone },
];

export default function ExpertiseSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="py-28"
    >
      <div className="max-w-7xl mx-auto px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-6xl font-extrabold tracking-tight mb-4">
            Our Expertise
          </h2>
          <h3 className="text-2xl font-semibold mb-8">
            Data-Driven Strategies, Measurable Results
          </h3>
          <p className="max-w-4xl mx-auto text-lg leading-relaxed font-light">
            At <strong>Sculptrix Agency</strong>, we blend creativity with
            analytics to deliver impactful digital marketing solutions. From SEO
            to social media, every strategy we create is backed by data and
            designed to drive real, measurable growth for your business. Stay
            ahead of the competition with campaigns that convert.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2">
          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 * index,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <Card className="p-10 text-center shadow-xl border border-white/10 backdrop-blur-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Icon className="w-12 h-12 mb-6 mx-auto" />
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <Card className="p-12 text-center shadow-2xl border border-white/10 backdrop-blur-lg">
            <motion.h2
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-7xl font-extrabold mb-3"
            >
              3<span className="text-primary">+</span>
            </motion.h2>
            <p className="text-2xl font-semibold mb-4">
              Years of Experience in Digital Marketing & Web Development
            </p>
            <p className="text-lg leading-relaxed font-light">
              With 3 years of hands-on experience in building brands online,
              <strong> Sculptrix Agency </strong> delivers proven strategies,
              creative excellence, and measurable results that help businesses
              grow and thrive.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
