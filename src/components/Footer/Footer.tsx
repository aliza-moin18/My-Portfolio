"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e0e0e] text-[#b3b4b0] py-4 mt-10 text-center border-t border-[#282828]">
      <div className="text-sm space-y-1">
        <p>© 2025 <span className="text-[#f5f3ee] font-medium">My Portfolio</span>. All rights reserved.</p>
        <p>
          Built with <span className="text-[#ed6094]">❤</span> by <span className="text-[#f5f3ee] font-semibold">Aliza Moin</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;