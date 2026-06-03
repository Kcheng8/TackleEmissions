'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const categoryOrder = ['Undergraduate', 'Masters', 'Advisor'];

export default function Team() {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    members: teamMembers.filter((m) => m.category === cat),
  }));

  return (
    <SectionWrapper id="team" className="py-24 bg-[#081C2D] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00C16E]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#F59E0B] border border-[#F59E0B]/25 bg-[#F59E0B]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            Our Team
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built by{' '}
            <span className="gradient-text">Scientists & Engineers</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A multidisciplinary team combining chemical engineering, molecular biology,
            synthetic biology, and computational science — anchored at the University of Queensland.
          </motion.p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.07 * i)}
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold border-2 flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}25, ${member.color}10)`,
                    borderColor: `${member.color}40`,
                    color: member.color,
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{member.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{member.role}</p>
                </div>
              </div>

              {/* Category badge */}
              <span
                className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-3"
                style={{
                  color: member.color,
                  borderColor: `${member.color}30`,
                  background: `${member.color}10`,
                }}
              >
                {member.category} · {member.affiliation.split(' ').slice(-2).join(' ')}
              </span>

              {/* Bio */}
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{member.bio}</p>

              {/* Expertise tags */}
              <div className="flex flex-wrap gap-1.5">
                {member.expertise.map((tag, j) => (
                  <span key={j} className="text-[10px] text-gray-500 border border-white/8 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* University affiliation */}
        <motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl p-8 border border-white/5 bg-gradient-to-r from-white/[0.015] to-transparent flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C16E]/15 to-[#3B82F6]/10 flex items-center justify-center border border-[#00C16E]/20 flex-shrink-0">
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#00C16E]">
              <path d="M24 6 L44 16 L24 26 L4 16 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
              <path d="M10 20 L10 36 Q24 42 38 36 L38 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
              <line x1="44" y1="16" x2="44" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">University of Queensland</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              TacklEmissions is an undergraduate research initiative within the School of Chemical
              Engineering at the University of Queensland, Brisbane, Australia. Our work is supported
              by access to state-of-the-art molecular biology and bioprocess engineering facilities.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-500 uppercase tracking-wider">We are hiring</span>
            <a
              href="#contact"
              className="text-sm font-medium text-[#00C16E] border border-[#00C16E]/30 px-4 py-2 rounded-full hover:bg-[#00C16E]/10 transition-all whitespace-nowrap"
            >
              Join the Team →
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
