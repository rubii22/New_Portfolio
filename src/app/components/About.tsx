'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBullseye, FaBrain, FaHandshake, FaBolt } from 'react-icons/fa';

const zoomInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const qualities = [
  { icon: <FaRocket size={28} />, title: 'Fast Learner' },
  { icon: <FaBullseye size={28} />, title: 'Goal Focused' },
  { icon: <FaBrain size={28} />, title: 'Creative Thinking' },
  { icon: <FaHandshake size={28} />, title: 'Team Player' },
  { icon: <FaBolt size={28} />, title: 'Problem Solver' },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 px-6 md:px-20 text-white font-body"
    >
      {/* Intro */}
      <motion.div
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-5xl font-extrabold leading-tight text-white">
          Meet{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Rubab Fatima
          </span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A passionate front-end developer and AI learner, driven to create elegant user experiences with clean, accessible code. I enjoy building things that live on the web, from websites to apps and everything in between.
        </p>
        <div className="mt-4">
          <a href="\Rubab Fatima .pdf" download target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              Download CV
            </button>
          </a>
        </div>
      </motion.div>

      {/* Vision & Mission */}
      <div className="mt-28 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {[
          {
            title: 'My Vision',
            text: 'To continuously grow as a developer by creating meaningful digital experiences that solve real-world problems and inspire others.',
          },
          {
            title: 'My Mission',
            text: 'To contribute to the tech world by building intuitive and responsive user interfaces while expanding my knowledge in modern web technologies.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={zoomInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl border border-cyan-400 p-6 shadow-md hover:shadow-cyan-500/20 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-3 text-cyan-300">{item.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Who Am I */}
      <motion.div
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mt-28 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-white">Who Am I?</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a motivated developer with a focus on crafting interactive digital solutions. My journey blends AI, front-end development, and continuous learning — helping me build projects that combine beauty and function.
        </p>
      </motion.div>

      {/* Qualities */}
      <motion.div
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-24"
      >
        <h2 className="text-4xl text-white font-bold text-center mb-10">
          My <span className="text-cyan-400">Qualities</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center justify-center bg-white/5 rounded-lg p-5 border border-cyan-400 text-center hover:scale-105 transition-transform shadow-md"
            >
              <div className="text-cyan-400 mb-3">{item.icon}</div>
              <p className="text-sm font-medium text-white">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
