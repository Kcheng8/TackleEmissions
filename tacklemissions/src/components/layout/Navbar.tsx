'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#081C2D]/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C16E] to-[#3B82F6] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
                <path d="M10 2C6.686 2 4 4.686 4 8c0 2.21 1.13 4.16 2.847 5.305L6 18h8l-.847-4.695C14.87 12.16 16 10.21 16 8c0-3.314-2.686-6-6-6zm0 2a4 4 0 110 8A4 4 0 0110 4z" />
                <circle cx="10" cy="8" r="2" fill="white" opacity="0.7" />
              </svg>
            </div>
            <span className="font-bold text-white tracking-tight text-lg">
              Tackl<span className="text-[#00C16E]">Emissions</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#investors"
              className="text-sm font-medium text-[#00C16E] border border-[#00C16E]/40 px-4 py-2 rounded-full hover:bg-[#00C16E]/10 transition-all duration-200"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#081C2D]/98 backdrop-blur-lg border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-sm"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/5">
                <a
                  href="#investors"
                  onClick={() => setOpen(false)}
                  className="block text-[#00C16E] font-medium px-3 py-2.5 text-sm"
                >
                  Partner With Us →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
