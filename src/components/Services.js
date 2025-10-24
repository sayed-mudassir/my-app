"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Services({ services }) {
  return (
    <section className="py-16">
      {/* ✅ Center container with side padding */}
      <div className="max-w-9/10 mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        {/* ✅ Responsive centered grid */}
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-[90%] md:w-[95%] lg:w-[100%] flex justify-center"
            >
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer w-full">
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm mb-3">
                    {service.description?.slice(0, 100)}...
                  </p>

                  {/*<div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                      <span>👨‍💻 {service.author}</span>
                                      <span>📅 {service.date}</span>
                                    </div>*/}

                  {/* ✅ Shadcn button centered */}
                  <Link href={`/services/${service.slug}`} className="block">
                    <Button
                      variant="outline"
                      className="hover:bg-blue-50 transition-all"
                    >
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
