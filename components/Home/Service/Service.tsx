"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Building fast, responsive, and modern websites using the latest technologies like Next.js, React, and Tailwind.",
    icon: <FaLaptopCode className="w-8 h-8 text-cyan-400" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Crafting visually stunning and user-friendly interfaces with focus on accessibility and smooth user experiences.",
    icon: <FaPaintBrush className="w-8 h-8 text-cyan-400" />,
  },
  {
    id: 3,
    title: "App Development",
    desc: "Creating scalable mobile apps with seamless performance and elegant design for both Android & iOS.",
    icon: <FaMobileAlt className="w-8 h-8 text-cyan-400" />,
  },
  {
    id: 4,
    title: "Custom Solutions",
    desc: "Tailor-made digital solutions to meet unique business needs, from APIs to automation workflows.",
    icon: <FaCode className="w-8 h-8 text-cyan-400" />,
  },
];

const Services = () => {
  return (
    <section className="relative py-20 bg-[#0f142e] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          I offer a wide range of services to help you build your online presence and grow your business.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1f3b]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
