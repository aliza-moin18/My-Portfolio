

"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090D0B]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-12">

        {/* Left: Name and Profession */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight">
            Aliza
          </span>

          <span className="h-6 w-px bg-white/20" />

          <span className="text-sm font-medium text-[#A8D5B8]">
            AI Developer
          </span>
        </Link>


        {/* Right: Navigation */}
        <nav className="flex items-center gap-5 sm:gap-8">
          {[
            { name: "About", path: "/about" },
            { name: "Work", path: "/work" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-[#A8D5B8]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Email on smaller screens */}
      <div className="border-t border-white/5 px-6 py-2 xl:hidden">
        <a
          href="mailto:alizamoin222@gmail.com"
          className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-[#A8D5B8]"
        >
          alizamoin222@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Header;
