"use client"

import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PricingDetailsClient({ pkg }) {
  return (
    <section className="min-h-screen py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-800/40 via-fuchsia-700/30 to-transparent blur-3xl"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Pricing
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
        >
          {pkg.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-purple-300 mb-10"
        >
          {pkg.price}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-none text-gray-200 leading-relaxed"
        >
          <ReactMarkdown>{pkg.content}</ReactMarkdown>
        </motion.div>
      </motion.div>
    </section>
  )
}
