"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/ui/Social";
import About from "./about/page";
import Projects from "./work/page";
import Services from "./services/page";
import Contact from "./contact/page";
import { motion } from "framer-motion";

// Floating dots logic
const generateDots = (count = 80) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 4,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "bg-white" : "bg-pink-400",
  }));

const Home = () => {
  const [dots, setDots] = useState(generateDots());

  useEffect(() => {
    setDots(generateDots());
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen py-28 pb-20 relative overflow-hidden bg-black text-white">
        {/* Floating dots background */}
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
                filter: "blur(0.6px)",
              }}
              animate={{ y: ["0%", "-150%"] }}
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center justify-center text-center backdrop-blur-sm bg-[#111111cc] border border-[#333] rounded-2xl shadow-lg p-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-4xl xl:text-6xl font-extrabold leading-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#ed6094] via-[#bd1ce1] to-[#f5f3ee] text-transparent bg-clip-text">
              Aliza Moin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 mb-8 leading-relaxed text-lg"
          >
            Full-stack developer with a product mindset — I design scalable systems, write clean, maintainable code, and turn business goals into elegant digital solutions.
          </motion.p>

          {/* CTA and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <a href="/Aliza CV.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 bg-[#ed6094] border-[#ed6094] text-white hover:bg-white hover:text-[#ed6094] transition-all px-6 py-3 rounded-xl"
              >
                Download CV <FiDownload className="text-xl" />
              </Button>
            </a>

            <Social
              containerStyles="flex gap-4"
              iconStyles="w-10 h-10 border border-[#b3b4b0] rounded-lg flex justify-center items-center text-[#b3b4b0] hover:bg-[#ed6094] hover:text-white transition-all duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Page Sections */}
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
