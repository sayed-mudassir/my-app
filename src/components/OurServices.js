"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive, SEO-friendly, and high-performance websites using modern technologies like React, Next.js, and Spring Boot.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description:
      "Our team crafts visually appealing and user-friendly interfaces focused on smooth user experience and interaction.",
    icon: "🎨",
  },
  {
    title: "API Integration",
    description:
      "We specialize in creating and integrating REST APIs to ensure seamless data flow between frontend and backend.",
    icon: "🔗",
  },
  {
    title: "Digital Marketing",
    description:
      "From SEO to social media management, we help you grow your online presence and reach your target audience effectively.",
    icon: "📈",
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide continuous support and updates to keep your website secure, fast, and up to date.",
    icon: "🛠️",
  },
];

const OurServices = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-teal-400">Services</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-400/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
