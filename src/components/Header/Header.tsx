"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#0e0e0e] text-white border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-10 py-7 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Homepage">
        <span className="font-black text-2xl tracking-wide uppercase">
        <span className="bg-gradient-to-r from-[#ed6094] to-[#ed6094] bg-clip-text text-transparent">A</span>
        <span className="text-white">liza </span>
        <span className="bg-gradient-to-r from-[#9615db] to-[#9615db] bg-clip-text text-transparent">M</span>
        <span className="text-white">oin</span>
        </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {["/", "/about", "/services", "/work", "/contact"].map((path, i) => (
            <Link
              key={i}
              href={path}
              className="text-white hover:text-[#ed6094] transition-colors duration-200 text-lg"
            >
              {path === "/" ? "Home" : path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
            </Link>
          ))}

          {/* Hire Me Button - PINK & BLACK only */}
          <Link href="/contact" passHref>
            <Button
              asChild
              className="uppercase tracking-wide flex items-center gap-2 bg-[#ed6094] text-[#f5f3ee] hover:bg-[#282828] hover:text-[#ed6094] border border-transparent hover:border-[#ed6094] transition-all px-6 py-3 rounded-lg"
            >
              <span>Hire me</span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="xl:hidden text-3xl focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-black text-white px-6 py-4 space-y-4 overflow-hidden"
          >
            {["/", "/about", "/services", "/work", "/contact"].map((path, i) => (
              <Link
                key={i}
                href={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xl text-white hover:text-[#ed6094] transition-all"
              >
                {path === "/" ? "Home" : path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full uppercase tracking-wide bg-[#ed6094] text-[#f5f3ee] hover:bg-[#282828] hover:text-[#ed6094] border border-transparent hover:border-[#ed6094] mt-2 transition-all">
                Hire me
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;