'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const zoomInVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start bg-black font-body overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          {/* ✅ Using Next.js Image with same styling */}
          <Image
            src="/bg.png"
            alt="Digital background"
            layout="fill"
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 px-6 sm:px-10 md:px-20 max-w-3xl text-left text-white"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg">
          Rubab Fatima
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-medium mb-6 tracking-wide">
          Front-End Developer · Creative Thinker · Tech Explorer
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
          Crafting interactive digital experiences with precision and creativity. I specialize in building sleek, performant, and accessible web interfaces using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong>. Passionate about clean code, user-centric design, and continuous learning.
        </p>
        <button className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300">
          Discover My Work
        </button>
      </motion.div>
    </section>
  );
}
