"use client";

import {
  FaDesktop,
  FaFigma,
  FaExternalLinkAlt,
  FaPlug,
  FaShoppingCart,
  FaEdit,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    num: "01",
    title: "Responsive Web Design",
    description:
      "Creating mobile-first layouts that work beautifully across devices using modern CSS and design principles.",
    icon: <FaDesktop size={36} />,
  },
  {
    num: "02",
    title: "UI/UX Design & Prototyping",
    description:
      "Designing clean, intuitive interfaces with Figma and translating them into seamless user experiences.",
    icon: <FaFigma size={36} />,
  },
  {
    num: "03",
    title: "Next.js & Tailwind Development",
    description:
      "Building fast, scalable, SEO-optimized apps with Next.js and Tailwind CSS — from portfolios to full websites.",
    icon: <FaExternalLinkAlt size={36} />,
  },
  {
    num: "04",
    title: "Headless CMS Integration",
    description:
      "Integrating Sanity CMS for dynamic content management, allowing clients to update sites without code.",
    icon: <FaEdit size={36} />,
  },
  {
    num: "05",
    title: "Ecommerce & Admin Dashboards",
    description:
      "Developing feature-rich ecommerce platforms and admin panels with dynamic routing and secure auth flows.",
    icon: <FaShoppingCart size={36} />,
  },
  {
    num: "06",
    title: "API Integration & Backend Tools",
    description:
      "Connecting frontends with real-time APIs, and tools like Stripe, Clerk, or GitHub for end-to-end solutions.",
    icon: <FaPlug size={36} />,
  },
];

// ✅ Smaller dots
const generateDots = (count = 80) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 4, // smaller dots: 4px–6px
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "bg-white" : "bg-pink-400",
  }));

const Services = () => {
  const [dots, setDots] = useState(generateDots());

  useEffect(() => {
    setDots(generateDots());
  }, []);

  return (
    <section className="min-h-[100vh] py-20 relative overflow-hidden text-white bg-black">
      {/* Background animated dots */}
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

      {/* Services content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#f5f3ee] mb-14 drop-shadow-xl">
          My Services
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, rotate: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="group h-full p-6 xl:p-8 rounded-2xl shadow-md bg-[#111111cc] text-[#f5f3ee] border border-[#333] backdrop-blur-sm hover:border-[#ed6094] hover:shadow-[0_0_30px_#ed6094aa] transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-[#ed6094]">
                {service.icon}
              </div>
              <div className="text-sm font-semibold text-[#aaa] mb-1 text-center">
                {service.num}
              </div>
              <h3 className="text-lg font-bold mb-3 text-center group-hover:text-[#ed6094] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#ccc] leading-relaxed text-center">
                {service.description}
              </p>
              <div className="mt-6 border-t border-[#444]/30 pt-2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;