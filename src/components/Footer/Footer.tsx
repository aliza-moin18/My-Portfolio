
"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D0B] px-6 py-5">
      <div className="flex items-center justify-center gap-7">
        <a
          href="https://github.com/aliza-moin18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 transition-colors duration-300 hover:text-[#A8D5B8]"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/aliza-moin-b975a6276/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 transition-colors duration-300 hover:text-[#A8D5B8]"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="YOUR_INSTAGRAM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-400 transition-colors duration-300 hover:text-[#A8D5B8]"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
