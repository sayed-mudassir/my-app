"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Zap, Rocket } from "lucide-react"

export default function PricingClient({ packages }) {
  const icons = [Star, Zap, Rocket] // rotate icons for each package

  if (!Array.isArray(packages) || packages.length === 0) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500 text-lg">No pricing packages available.</p>
    </section>
  )
}


  return (
    <section className="min-h-screen w-full py-20 px-6 md:px-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
          Our Pricing Plans
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Scalable, transparent, and built for your business growth 🚀
        </p>
      </motion.div>

      {/* Pricing Grid */}
      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3 place-items-center">
        {packages.map((pkg, index) => {
          const Icon = icons[index % icons.length]

          return (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 40px rgba(99, 102, 241, 0.25), 0 0 40px rgba(168, 85, 247, 0.3)",
              }}
              className="w-full flex justify-center"
            >
              <Card className="w-full border border-gray-200 rounded-2xl transition-all duration-200 hover:border-indigo-500 overflow-hidden">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-1">{pkg.title}</CardTitle>
                  {pkg.tagline && (
                    <CardDescription className="">{pkg.tagline}</CardDescription>
                  )}
                </CardHeader>

                <CardContent className="text-center">
                  <div className="text-4xl font-extrabold mb-6 text-center">
                    {pkg.price}
                    <span className="text-base font-medium"> {pkg.period}</span>
                  </div>

                  {/* Features */}
                  {pkg.features?.length > 0 && (
                    <ul className="mb-6 text-left space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span dangerouslySetInnerHTML={{ __html: feature }} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Learn More Button */}
                  <Link href={`/pricing/${pkg.slug}`} className="block mt-4">
                    <Button className="w-full py-4 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
