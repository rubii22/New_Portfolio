'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Nike E-Commerce Website',
    description: 'A modern e-commerce site built with Next.js and Tailwind CSS, inspired by Nike’s clean and bold UI.',
    image: '/nike.png',
    liveLink: 'https://nike-hackathon-template.vercel.app/',
  },
  {
    title: 'Teacher Hiring Website',
    description: 'A responsive React.js platform for connecting schools with qualified educators.',
    image: '/teacher.png',
    liveLink: 'https://teacher-hiring-website.vercel.app/',
  },
  {
    title: 'Growth Mindset Challenge',
    description: 'A Python + Streamlit app encouraging daily habit tracking through interactive challenges.',
    image: '/mindset.png',
    liveLink: 'https://growth-mindset-challenge-njocpbwqmk97epheytptra.streamlit.app/',
  },
  {
    title: 'ATM Machine (CLI)',
    description: 'A TypeScript-based CLI ATM system offering deposit, withdrawal, and balance features.',
    image: '/atm.png',
    liveLink: 'https://github.com/rubii22/Colorfull-ATM-Machine.git',
  },
  {
    title: 'Password Strength Meter',
    description: 'A Streamlit app that visually analyzes and rates the strength of passwords.',
    image: '/pass.png',
    liveLink: 'https://password-strength-meter-kr7uw5ea63b263cd4hjkt4.streamlit.app/',
  },
  {
    title: 'Agentic AI Blog',
    description: 'A sleek blog built using Next.js + Tailwind CSS focusing on modern AI developments.',
    image: '/blog.png',
    liveLink: 'https://agentic-ai-six-rose.vercel.app/',
  },
  {
    title: 'Secure Data Encryption',
    description: 'Python-based encryption tool for securing and decrypting sensitive user data.',
    image: '/data.png',
    liveLink: 'https://securedataencryption-hybtb7v9ee3ssbok3u3uug.streamlit.app/',
  },
  {
    title: 'Figma UI Template Ecommerce',
    description: 'A clean and organized Figma-based ecommerce UI with reusable components.',
    image: '/figma.png',
    liveLink: 'https://figma-ecommerce-template-seven.vercel.app/',
  },
  {
    title: 'To-Do List (CLI)',
    description: 'A CLI task manager built in TypeScript, allowing efficient task tracking from terminal.',
    image: '/todo.png',
    liveLink: 'https://github.com/rubii22/Todo-List.git',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-tr from-slate-900 to-indigo-900 py-16 px-6 md:px-20 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-14">
          Featured Projects
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center hover:scale-[1.02] transition duration-500">
                <div className="w-full md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg h-[250px] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-white">
                  <span className="uppercase text-sm text-teal-400 font-semibold tracking-widest mb-2 block">
                    Project Showcase
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-base md:text-lg mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-teal-400 to-cyan-300 text-black font-medium px-6 py-2 rounded-full shadow-md hover:brightness-90 transition duration-300"
                  >
                    🔗 Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-16">
          <p className="text-white text-lg mb-4">Interested in more of my work?</p>
          <a
            href="https://github.com/rubii22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-800 font-semibold px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300"
          >
            Browse GitHub Profile
          </a>
        </div>

        {/* Swiper Custom Bullets */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #d1d5db !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            background: #22d3ee !important;
          }
        `}</style>
      </div>
    </section>
  );
}
