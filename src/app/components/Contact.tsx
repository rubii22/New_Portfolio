'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    alert('Thank you for reaching out!');
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a0f2c] text-white flex flex-col items-center justify-center px-6 py-16"
    >
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-10 relative overflow-hidden">
        {/* Decorative Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#4FC3F7_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 z-0 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8">Let&apos;s Connect</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            
            <textarea
              rows={4}
              placeholder="How can we help?"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition duration-300 font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 flex space-x-8 text-3xl">
        <a
          href="https://www.linkedin.com/in/rubab-fatima-3636242b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rubii22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:fati061022@gmail.com"
          className="text-blue-400 hover:text-white transition duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
