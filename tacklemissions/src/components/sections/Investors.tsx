'use client';

import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { partnershipTiers } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const tierIcons: Record<string, ReactElement> = {
  'Research Partner': (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.7"/>
      <line x1="14" y1="4"  x2="14" y2="7"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="14" y1="21" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="4"  y1="14" x2="7"  y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="21" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  'Industry Pilot Partner': (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <path d="M4 20 L4 10 L10 6 L16 10 L22 6 L22 20 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" fill="currentColor" fillOpacity="0.08"/>
      <rect x="11" y="14" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
      <line x1="14" y1="6" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  'Strategic Investor': (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <path d="M4 20 L9 13 L14 16 L20 7 L24 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      <circle cx="24" cy="11" r="3" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
};

export default function Investors() {
  return (
    <SectionWrapper id="investors" className="py-24 bg-[#081C2D] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-t from-[#00C16E]/6 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#00C16E] border border-[#00C16E]/25 bg-[#00C16E]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C16E] animate-pulse-glow" />
            Investors & Partners
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Seeking <span className="gradient-text">Strategic Partners</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We are actively seeking partners in agriculture, biotechnology, climate technology,
            and sustainable food production. Early partners receive preferential commercial rights.
          </motion.p>
        </div>

        {/* Headline statement */}
        <motion.div
          {...fadeUp(0.12)}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <blockquote className="text-xl text-gray-300 leading-relaxed border-l-2 border-[#00C16E]/40 pl-6 text-left italic">
            &ldquo;TacklEmissions represents an early-stage opportunity in one of the largest
            untapped climate mitigation markets — with a biologically novel, IP-protected approach
            positioned ahead of regulatory and ESG tailwinds.&rdquo;
          </blockquote>
        </motion.div>

        {/* Partnership tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {partnershipTiers.map((tier, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.08 * i)}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group ${
                tier.featured
                  ? 'border-2 shadow-xl'
                  : 'border'
              }`}
              style={{
                borderColor: tier.featured ? tier.color : `${tier.color}25`,
                background: `linear-gradient(135deg, ${tier.color}${tier.featured ? '14' : '08'}, ${tier.color}04)`,
                boxShadow: tier.featured ? `0 0 60px ${tier.color}15` : undefined,
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: tier.color, color: '#081C2D' }}
                >
                  Most Popular
                </div>
              )}

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{
                    color: tier.color,
                    borderColor: `${tier.color}30`,
                    background: `${tier.color}12`,
                  }}
                >
                  {tierIcons[tier.tier]}
                </div>
                <h3 className="text-white font-bold text-base">{tier.tier}</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">{tier.description}</p>

              {/* Benefits */}
              <ul className="space-y-2.5 mb-5">
                {tier.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: tier.color }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-gray-600 mb-1 uppercase tracking-wider">Ideal for</p>
                <p className="text-xs text-gray-400">{tier.idealFor}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-5 flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 border"
                style={{
                  color: tier.featured ? '#081C2D' : tier.color,
                  background: tier.featured ? tier.color : 'transparent',
                  borderColor: tier.featured ? tier.color : `${tier.color}40`,
                }}
              >
                {tier.featured ? 'Start a Conversation' : 'Get in Touch →'}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Due diligence CTA */}
        <motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl p-8 border border-white/5 bg-white/[0.015] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Ready to conduct due diligence?</h3>
            <p className="text-gray-400 text-sm">
              We provide a detailed investor deck, technical brief, and literature synthesis on request.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00C16E] to-[#009852] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#00C16E]/25 transition-all duration-200"
            >
              Request Investor Deck
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
