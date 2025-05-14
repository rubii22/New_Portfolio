"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] text-white shadow-lg backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Tooltip */}
        <div
          className="relative flex items-center cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg transition-transform duration-300 group-hover:scale-110">
            RF
          </div>
          {hovered && (
            <span className="absolute left-14 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-white text-black rounded-md shadow-lg text-sm font-medium whitespace-nowrap animate-fade-in">
              Rubab Fatima
            </span>
          )}
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-medium text-white hover:text-cyan-400 transition duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e293b] px-6 py-6 space-y-4 transition-all duration-300 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white text-lg font-medium hover:text-cyan-400 transition duration-200"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block w-full text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
