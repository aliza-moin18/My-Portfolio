

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import About from "./about/page";
import Projects from "./work/page";
import Services from "./services/page";
import Contact from "./contact/page";

type Dot = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

const generateDots = (): Dot[] =>
  Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 5,
    delay: Math.random() * 5,
  }));

const roles = [
  "Agentic AI Engineer",
  "Full Stack Developer",
  "AI Agent Developer",
  "Prompt Engineer",
  "Business Analyst",
];

function Robot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative flex h-[320px] w-full items-center justify-center sm:h-[390px]"
    >
      {/* Soft colorful glow */}
      <div className="absolute h-56 w-56 rounded-full bg-emerald-300/15 blur-[75px]" />
      <div className="absolute -left-2 top-16 h-36 w-36 rounded-full bg-violet-500/15 blur-[70px]" />
      <div className="absolute -right-2 bottom-10 h-32 w-32 rounded-full bg-blue-500/15 blur-[70px]" />

      {/* Orbit rings */}
      <motion.div
        className="absolute h-[235px] w-[235px] rounded-full border border-emerald-300/25 sm:h-[285px] sm:w-[285px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute h-[260px] w-[260px] rounded-full border border-violet-400/20 sm:h-[315px] sm:w-[315px]"
        style={{ rotateX: 65, rotateY: -20 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbit dots */}
      <motion.div
        className="absolute right-[20%] top-[20%] h-3 w-3 rounded-full bg-emerald-200 shadow-[0_0_18px_5px_rgba(110,231,183,0.5)]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-[22%] left-[17%] h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_18px_5px_rgba(167,139,250,0.5)]"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Robot body assembly */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna */}
        <div className="relative flex h-9 flex-col items-center">
          <motion.div
            className="h-3 w-3 rounded-full bg-emerald-200 shadow-[0_0_18px_5px_rgba(110,231,183,0.65)]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="h-6 w-[3px] bg-gradient-to-b from-emerald-200 to-violet-400" />
        </div>

        {/* Head */}
        <div className="relative flex h-[145px] w-[180px] items-center justify-center rounded-[38px] border border-white/20 bg-gradient-to-br from-[#59616d] via-[#252d3b] to-[#10141d] shadow-[0_20px_55px_rgba(0,0,0,0.55),0_0_35px_rgba(110,231,183,0.12),inset_0_3px_15px_rgba(255,255,255,0.15)] sm:h-[165px] sm:w-[205px]">
          {/* Side ear pieces */}
          <div className="absolute -left-3 h-12 w-5 rounded-l-lg border border-emerald-200/30 bg-gradient-to-b from-emerald-300 to-teal-700" />
          <div className="absolute -right-3 h-12 w-5 rounded-r-lg border border-violet-200/30 bg-gradient-to-b from-violet-300 to-indigo-700" />

          {/* Face */}
          <div className="relative flex h-[96px] w-[140px] items-center justify-center gap-7 rounded-[27px] border border-white/10 bg-gradient-to-br from-[#111a2b] to-[#080c15] shadow-inner sm:h-[108px] sm:w-[160px]">
            <motion.div
              className="h-6 w-6 rounded-full bg-emerald-200 shadow-[0_0_20px_6px_rgba(110,231,183,0.5)] sm:h-7 sm:w-7"
              animate={{ scaleY: [1, 1, 0.12, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              className="h-6 w-6 rounded-full bg-violet-300 shadow-[0_0_20px_6px_rgba(167,139,250,0.5)] sm:h-7 sm:w-7"
              animate={{ scaleY: [1, 1, 0.12, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="absolute bottom-3 h-2 w-7 rounded-b-full border-b-2 border-white/60" />
          </div>

          {/* Head details */}
          <div className="absolute left-5 top-4 h-1.5 w-5 rounded-full bg-white/30" />
          <div className="absolute right-5 top-4 h-1.5 w-5 rounded-full bg-white/30" />
        </div>

        {/* Neck */}
        <div className="h-5 w-10 bg-gradient-to-b from-[#414c5d] to-[#202938]" />

        {/* Body */}
        <div className="relative flex h-[78px] w-[125px] items-center justify-center rounded-[25px] border border-white/15 bg-gradient-to-br from-[#4c5667] via-[#252e40] to-[#111722] shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200/40 bg-gradient-to-br from-emerald-200/30 to-violet-400/30 shadow-[0_0_22px_rgba(110,231,183,0.25)]"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="h-3 w-3 rounded-full bg-emerald-200 shadow-[0_0_12px_4px_rgba(110,231,183,0.6)]" />
          </motion.div>

          {/* Arms */}
          <motion.div
            className="absolute -left-5 top-4 h-10 w-5 rounded-full bg-gradient-to-b from-[#65748a] to-[#252e40]"
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.div
            className="absolute -right-5 top-4 h-10 w-5 rounded-full bg-gradient-to-b from-[#65748a] to-[#252e40]"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Feet */}
        <div className="mt-1 flex gap-5">
          <div className="h-4 w-10 rounded-b-lg bg-gradient-to-b from-[#465268] to-[#1b2230]" />
          <div className="h-4 w-10 rounded-b-lg bg-gradient-to-b from-[#465268] to-[#1b2230]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

const Home = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    setDots(generateDots());

    const roleInterval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#090B0D] text-white"
      >
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[130px]" />
        </div>

        {/* Background particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute rounded-full bg-emerald-200"
              style={{
                width: dot.size,
                height: dot.size,
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                opacity: 0.4,
                filter: "blur(1px)",
              }}
              animate={{
                y: ["0%", "-120%"],
                opacity: [0.1, 0.55, 0.1],
              }}
              transition={{
                duration: dot.duration,
                delay: dot.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 pb-24 lg:px-12 lg:pt-16 lg:pb-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr_1fr]">
            {/* Left: Introduction and animated roles */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              <p className="mb-2 text-base font-medium tracking-wide text-emerald-300">
                Hi, I'm
              </p>

              <h1 className="whitespace-nowrap text-5xl font-extrabold leading-tight tracking-[-0.06em] sm:text-6xl xl:text-[76px]">
                Aliza Moin
              </h1>

              <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-emerald-300 to-violet-400 lg:mx-0" />

              {/* AI System Online status */}
              <div className="mt-7 flex items-center justify-center gap-2 lg:justify-start">
                <motion.span
                  className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]"
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  AI System Online
                </span>
              </div>

              {/* Animated role titles */}
              <div className="relative mt-4 flex h-12 items-center justify-center overflow-hidden lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeRole}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -22 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute whitespace-nowrap text-xl font-semibold tracking-wide text-white sm:text-2xl"
                  >
                    <span className="mr-2 text-emerald-300">$</span>
                    {roles[activeRole]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <a
                href="/Resume.pdf"
                download
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-xs font-medium text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-emerald-200"
              >
                <FiDownload size={14} />
                Resume
              </a>
            </motion.div>

            {/* Center: Robot */}
            <div className="order-1 lg:order-2">
              <Robot />
            </div>

            {/* Right: Professional focus */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="order-3 text-center lg:text-right"
            >
              <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl xl:text-[42px]">
                <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                Development
              </h2>

              <div className="mx-auto my-5 h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent lg:ml-auto lg:mr-0" />

              <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl xl:text-[42px]">
                <span className="bg-gradient-to-r from-violet-300 to-blue-400 bg-clip-text text-transparent">
                  AI
                </span>
                <br />
                Engineering
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Existing portfolio sections */}
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
