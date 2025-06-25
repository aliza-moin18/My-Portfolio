"use client";

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Generate animated dots (same logic as Services)
const generateDots = (count = 60) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 3, // Smaller: between 3px–7px
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "bg-white" : "bg-pink-400",
  }));

const Contact = () => {
  const [dots, setDots] = useState(generateDots());

  useEffect(() => {
    setDots(generateDots());
  }, []);

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-black text-white py-20 px-4 sm:px-8 xl:px-20 overflow-hidden"
    >
      {/* Animated Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className={`absolute rounded-full ${dot.color}`}
            style={{
              width: dot.size,
              height: dot.size,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              opacity: 0.5,
              filter: "blur(1px)",
            }}
            animate={{
              y: ["0%", "-120%"],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-screen-xl flex flex-col xl:flex-row gap-16 items-start xl:items-center justify-between">
        {/* Left */}
        <div className="max-w-xl flex flex-col gap-6 text-center xl:text-left w-full xl:w-1/2">
          <h2 className="text-4xl xl:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#ed6094] via-[#bd1ce1] to-[#f5f3ee] text-transparent bg-clip-text">
              Let’s Work Together
            </span>
          </h2>
          <p className="text-[#b3b4b0] leading-relaxed">
            I’m currently available for new projects. Whether it’s a question, collaboration, or just a hello — I’d love to hear from you.
          </p>
          <div className="flex flex-col gap-4 text-[#d3d3d3] text-base">
            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <FaEnvelope className="text-[#ed6094]" />
              <span>alizamoin222@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <FaPhoneAlt className="text-[#ed6094]" />
              <span>+92 317 388888</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="w-full max-w-xl flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full h-12 px-4 rounded-lg bg-[#1c1c1c] text-[#d3d3d3] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#ed6094] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full h-12 px-4 rounded-lg bg-[#1c1c1c] text-[#d3d3d3] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#ed6094] transition-all"
          />
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-[#1c1c1c] text-[#d3d3d3] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#ed6094] transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[#ed6094] text-white rounded-lg font-semibold hover:bg-[#282828] hover:text-[#ed6094] transition-all duration-300 uppercase tracking-wide"
          >
            Submit Now
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;