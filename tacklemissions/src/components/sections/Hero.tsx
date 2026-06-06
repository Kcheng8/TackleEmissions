'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

/* Deterministic particles — no SSR/hydration mismatch */
const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: (i * 13.7 + 5) % 100,
  top:  (i * 17.3 + 3) % 100,
  size: ((i % 3) + 1) * 2,
  delay: (i * 0.37) % 9,
  duration: 18 + (i * 0.53 % 12),
  color: i % 3 === 0 ? '#00C16E' : i % 3 === 1 ? '#3B82F6' : '#8B5CF6',
  opacity: 0.1 + (i * 0.013 % 0.25),
}));

const flowSteps = [
  {
    label: 'Cattle',
    sublabel: 'Enteric fermentation',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <ellipse cx="16" cy="18" rx="10" ry="7" fill="currentColor" opacity="0.3" />
        <circle cx="24" cy="13" r="5" fill="currentColor" opacity="0.4" />
        <rect x="9"  y="23" width="3" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
        <rect x="14" y="23" width="3" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
        <rect x="19" y="23" width="3" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
        <path d="M23 9 L27 7 M25 9 L29 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: 'Rumen',
    sublabel: 'Methanogen habitat',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="11" cy="14" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="18" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="21" cy="18" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="13" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
        <path d="M8 16 Q16 10 24 16 Q16 22 8 16Z" fill="currentColor" opacity="0.08"/>
      </svg>
    ),
  },
  {
    label: 'Methanogens',
    sublabel: 'Archaea → CH₄',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <ellipse cx="16" cy="16" rx="8" ry="6" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.5" />
        <line x1="16" y1="10" x2="16" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="16" y1="22" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="8"  y1="16" x2="4"  y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="24" y1="16" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    label: 'PHA + PeiR',
    sublabel: 'Bio-nanoparticles',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="16" cy="8"  r="2" fill="currentColor" opacity="0.8" />
        <circle cx="16" cy="24" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="8"  cy="16" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="24" cy="16" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="10.3" cy="10.3" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="21.7" cy="10.3" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="10.3" cy="21.7" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="21.7" cy="21.7" r="1.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Net Zero',
    sublabel: 'CH₄ reduced 60-80%',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M8 8 L16 24 L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
        <circle cx="16" cy="6" r="3" fill="currentColor" opacity="0.3" />
        <line x1="16" y1="26" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <text x="10" y="5" fontSize="6" fill="currentColor" opacity="0.6" fontFamily="monospace">CH₄↓</text>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#081C2D]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] rounded-full bg-gradient-radial from-[#00C16E]/8 via-[#3B82F6]/4 to-transparent blur-3xl" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: p.color,
              opacity: p.opacity,
              animation: `particle-rise ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#00C16E] border border-[#00C16E]/30 bg-[#00C16E]/8 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C16E] animate-pulse-glow" />
            Synthetic Biology · Climate Technology · Pre-Seed Stage
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto mb-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white">
            Engineering Biology to{' '}
            <span className="gradient-text">Eliminate Methane</span>{' '}
            from Livestock
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          TacklEmissions develops targeted biodegradable nanotechnology that reduces
          methane-producing microbes in cattle, helping agriculture reach net zero.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#solution"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00C16E] to-[#009852] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#00C16E]/25 hover:scale-[1.02] transition-all duration-200"
          >
            Discover Our Science
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#investors"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Partner With Us
          </a>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6 font-medium">
            How It Works
          </p>
          <div className="overflow-x-auto pb-2">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:min-w-max mx-auto">
            {flowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="glass rounded-xl p-4 flex flex-col items-center gap-2 w-[120px] hover:border-[#00C16E]/30 transition-all duration-300 group"
                >
                  <div className="text-[#00C16E] group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-white text-xs font-semibold leading-tight">{step.label}</p>
                    <p className="text-gray-500 text-[10px] mt-0.5 leading-tight">{step.sublabel}</p>
                  </div>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <>
                    {/* Mobile: down arrow */}
                    <div className="flex sm:hidden items-center justify-center py-2 text-gray-600">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                        <path d="M8 3v10M3 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Desktop: horizontal connector */}
                    <div className="hidden sm:flex items-center mx-1">
                      <div className="w-6 h-[1px] bg-gradient-to-r from-[#00C16E]/40 to-[#3B82F6]/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60" />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
