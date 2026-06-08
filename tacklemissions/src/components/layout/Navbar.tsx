'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { navLinks } from '@/lib/data';

const NAV_HEIGHT = 64;

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

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
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="TacklEmission logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-white tracking-tight text-lg">
              Tackl<span className="text-[#00C16E]">Emission</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(l.href); }}
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
              onClick={(e) => { e.preventDefault(); scrollToSection('#investors'); }}
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
                  onClick={(e) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToSection(l.href), 300); }}
                  className="block text-gray-300 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-sm"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/5">
                <a
                  href="#investors"
                  onClick={(e) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToSection('#investors'), 300); }}
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
