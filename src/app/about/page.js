'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Megaphone, 
  Search, 
  MousePointerClick, 
  FileText, 
  Palette, 
  Globe, 
  Code, 
  Smartphone 
} from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const expertise = [
    { title: 'Social Media Marketing', icon: Megaphone },
    { title: 'SEO Optimization', icon: Search },
    { title: 'PPC Advertising', icon: MousePointerClick },
    { title: 'Content Marketing', icon: FileText },
    { title: 'Graphics Designing', icon: Palette },
    { title: 'Website Development', icon: Globe },
    { title: 'Software Development', icon: Code },
    { title: 'Mobile App Development', icon: Smartphone },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 space-y-24">

      {/* Who We Are */}
      <motion.div
        className="text-center max-w-4xl space-y-6"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Who We Are & What Drives Us
        </motion.h1>
        <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
          At <strong>Sculptrix Agency</strong>, we don’t just do digital marketing — we engineer growth.  
          Our mission is to create innovative strategies that help brands lead in a fast-changing digital world.
        </p>
      </motion.div>

      {/* Growth Driven Section */}
      <motion.div
        className="max-w-5xl text-center space-y-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold">Your Growth Driven Digital Marketing Team</h2>
        <p className="text-lg leading-relaxed">
          We’re a team of thinkers, creators, and problem solvers — blending creativity with data precision.  
          Every campaign we craft is designed to connect, engage, and convert — because your success is our success.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Button size="lg" className="rounded-full px-10 py-6 text-lg font-semibold" asChild>
            <a href="#contact">Let’s Talk Strategy</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Expertise Section */}
      <motion.div
        className="max-w-6xl w-full space-y-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-5xl font-extrabold mb-6">Our Expertise</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {expertise.map(({ title, icon: Icon }, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border p-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform text-center space-y-4"
              whileHover={{ rotate: 1, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="flex justify-center mb-3">
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission / Vision / Value */}
      <motion.div
        className="max-w-6xl w-full space-y-12 text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold">Our Mission, Vision & Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Our Mission',
              desc: 'To empower businesses with smart, tailored digital solutions that fuel growth, boost visibility, and deliver measurable results.',
            },
            {
              title: 'Our Vision',
              desc: 'To lead digital transformation globally by redefining innovation, creativity, and client success through technology.',
            },
            {
              title: 'Our Value',
              desc: 'We put people first — building trust through transparency, collaboration, and innovation to deliver consistent excellence.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border p-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform space-y-4"
              whileHover={{ rotate: -1, scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="text-base leading-relaxed">{item.desc}</p>
              <Button variant="link" className="font-semibold underline-offset-4">
                Read More →
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
