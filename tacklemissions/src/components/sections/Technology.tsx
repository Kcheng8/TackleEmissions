'use client';

import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { platformComponents, platformAdvantages } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const platformIcons: Record<string, ReactElement> = {
  'PHA Nanoparticle Chassis': (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <circle cx="16" cy="6"  r="2.5" fill="currentColor" opacity="0.8"/>
      <circle cx="16" cy="26" r="2.5" fill="currentColor" opacity="0.8"/>
      <circle cx="6"  cy="16" r="2.5" fill="currentColor" opacity="0.8"/>
      <circle cx="26" cy="16" r="2.5" fill="currentColor" opacity="0.8"/>
      <circle cx="9"  cy="9"  r="2"   fill="currentColor" opacity="0.6"/>
      <circle cx="23" cy="9"  r="2"   fill="currentColor" opacity="0.6"/>
      <circle cx="9"  cy="23" r="2"   fill="currentColor" opacity="0.6"/>
      <circle cx="23" cy="23" r="2"   fill="currentColor" opacity="0.6"/>
      <circle cx="16" cy="16" r="4"   fill="currentColor" opacity="0.2"/>
    </svg>
  ),
  'PeiR Enzyme Payload': (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M8 16 C8 10 12 8 16 8 C20 8 24 10 24 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M8 16 C8 22 12 24 16 24 C20 24 24 22 24 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="12" cy="20" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.5"/>
      <line x1="12" y1="12" x2="20" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
      <line x1="20" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
    </svg>
  ),
  'Synthetic Biology Platform': (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M10 8 L10 24 M22 8 L22 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M10 11 Q16 9 22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M10 14 Q16 16 22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M10 17 Q16 19 22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M10 20 Q16 22 22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  ),
  'Scalable Manufacturing': (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect x="5" y="18" width="6" height="8" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="13" y="12" width="6" height="14" rx="1" fill="currentColor" opacity="0.5"/>
      <rect x="21" y="6" width="6" height="20" rx="1" fill="currentColor" opacity="0.7"/>
      <path d="M6 18 L13 12 L20 12 L27 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    </svg>
  ),
};

const advantageIcons: string[] = ['⊕', '♻', '↑', '⊗', '≡'];

export default function Technology() {
  return (
    <SectionWrapper id="technology" className="py-24 bg-[#030D14] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#00C16E]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#3B82F6] border border-[#3B82F6]/25 bg-[#3B82F6]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            Technology Platform
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A Modular Biotech{' '}
            <span className="gradient-text">Platform</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Four integrated components create a uniquely specific, safe, and scalable methane
            mitigation system — with broad future applications beyond enteric fermentation.
          </motion.p>
        </div>

        {/* Platform components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {platformComponents.map((comp, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.07 * i)}
              className="gradient-border-card p-7 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-105"
                  style={{
                    color: comp.color,
                    borderColor: `${comp.color}30`,
                    background: `${comp.color}10`,
                  }}
                >
                  {platformIcons[comp.title]}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-2">{comp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{comp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {comp.specs.map((s, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full border"
                        style={{
                          color: `${comp.color}CC`,
                          borderColor: `${comp.color}25`,
                          background: `${comp.color}08`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl p-6 sm:p-8 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent mb-16"
        >
          <h3 className="text-white font-bold text-xl mb-6 text-center">Platform Architecture</h3>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col items-center gap-2 sm:hidden">
            {[
              { label: 'Microbial Fermentation',  color: '#00C16E' },
              { label: 'PHA Biosynthesis',         color: '#3B82F6' },
              { label: 'Nanoparticle Formulation', color: '#8B5CF6' },
              { label: 'PeiR Enzyme Expression',   color: '#F59E0B' },
              { label: 'Surface Display',          color: '#00C16E' },
              { label: 'Armed Nanoparticle',       color: '#ffffff' },
            ].map((item, i, arr) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div
                  className="glass rounded-xl px-5 py-3 text-sm font-semibold text-center w-full"
                  style={{ color: item.color, borderColor: `${item.color}30`, border: `1px solid` }}
                >
                  {item.label}
                </div>
                {i < arr.length - 1 && <div className="w-0.5 h-4 bg-white/10" />}
              </div>
            ))}
            <div className="w-0.5 h-4 bg-white/10" />
            <div className="glass rounded-xl px-5 py-4 text-xs font-bold text-white border border-[#00C16E]/30 bg-[#00C16E]/8 text-center w-full leading-relaxed">
              Feed Additive → Rumen → Selective Methanogen Disruption → CH₄ Reduction 60–80%
            </div>
          </div>

          {/* Desktop: original two-row layout */}
          <div className="hidden sm:flex flex-col items-center gap-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="glass rounded-xl px-6 py-3 text-sm font-semibold text-[#00C16E] border border-[#00C16E]/20">Microbial Fermentation</div>
              <span className="text-gray-600">→</span>
              <div className="glass rounded-xl px-6 py-3 text-sm font-semibold text-[#3B82F6] border border-[#3B82F6]/20">PHA Biosynthesis</div>
              <span className="text-gray-600">→</span>
              <div className="glass rounded-xl px-6 py-3 text-sm font-semibold text-[#8B5CF6] border border-[#8B5CF6]/20">Nanoparticle Formulation</div>
            </div>
            <div className="w-0.5 h-6 bg-white/10" />
            <div className="flex items-center gap-4 mb-4">
              <div className="glass rounded-xl px-6 py-3 text-sm font-semibold text-[#F59E0B] border border-[#F59E0B]/20">PeiR Enzyme Expression</div>
              <span className="text-gray-600">→</span>
              <div className="glass rounded-xl px-6 py-3 text-sm font-semibold text-[#00C16E] border border-[#00C16E]/20">Surface Display</div>
              <span className="text-gray-600">→</span>
              <div className="glass rounded-xl px-6 py-3 text-sm font-semibold text-white border border-white/10">Armed Nanoparticle</div>
            </div>
            <div className="w-0.5 h-6 bg-white/10" />
            <div className="glass rounded-xl px-8 py-4 text-sm font-bold text-white border border-[#00C16E]/30 bg-[#00C16E]/8 text-center">
              Feed Additive → Rumen → Selective Methanogen Disruption → CH₄ Reduction 60–80%
            </div>
          </div>
        </motion.div>

        {/* Advantages */}
        <div>
          <motion.h3 {...fadeUp()} className="text-2xl font-bold text-white mb-8 text-center">
            Competitive Advantages
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {platformAdvantages.map((adv, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 * i)}
                className="glass-card rounded-xl p-5 text-center hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="text-2xl mb-3 font-mono font-bold transition-transform group-hover:scale-110"
                  style={{ color: adv.color }}
                >
                  {advantageIcons[i]}
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{adv.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp(0.3)} className="text-center text-gray-500 text-xs mt-6 max-w-lg mx-auto">
            The modular nature of the PHA + enzyme surface-display platform means it can be adapted
            to target other specific microbial populations beyond methanogens.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
