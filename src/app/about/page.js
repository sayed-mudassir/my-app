'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Sculptrix Agency
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        At Sculptrix Agency, we craft visually stunning websites and digital solutions
        that help businesses stand out online. Our team specializes in web development, 
        creative design, and digital strategy to bring your ideas to life.
      </motion.p>

      {/* Features / Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        <motion.div
          className="rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="">
            Build fast, responsive, and modern websites tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Creative Design</h2>
          <p className="">
            Eye-catching UI/UX design and branding to make your digital presence memorable.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Digital Strategy</h2>
          <p className="">
            Analytics-driven approach to grow your business and reach the right audience.
          </p>
        </motion.div>
      </div>

      {/* Call-to-action */}
      <motion.a
        href="#contact"
        className="mt-12 inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Work With Us
      </motion.a>
    </div>
  );
}