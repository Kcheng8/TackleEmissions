'use client';

import { motion } from 'framer-motion';
import { problemStats, currentSolutions } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

export default function Problem() {
  return (
    <SectionWrapper id="problem" className="py-24 bg-[#030D14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#EF4444] border border-[#EF4444]/25 bg-[#EF4444]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
            The Scale of the Problem
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Livestock Methane Is a{' '}
            <span className="gradient-text">Climate Emergency</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Agriculture contributes 14.5% of all global greenhouse gas emissions. Methane from
            cattle is one of the largest and most tractable near-term reduction targets.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {problemStats.map((stat, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.05 * i)}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div
                className="text-5xl font-bold mb-2 tracking-tight"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-2">{stat.label}</div>
              <p className="text-gray-400 text-xs leading-relaxed">{stat.description}</p>
              <div
                className="mt-4 h-0.5 w-12 rounded-full group-hover:w-20 transition-all duration-500"
                style={{ background: stat.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Current solutions */}
        <div>
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">
              Existing Solutions Fall Short
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Current methane mitigation approaches each carry significant limitations that prevent
              them from achieving the scale and reliability needed for global impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentSolutions.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.06 * i)}
                className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  s.isOurs
                    ? 'bg-gradient-to-b from-[#00C16E]/12 to-[#3B82F6]/8 border border-[#00C16E]/25'
                    : 'glass-card'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-white font-semibold text-sm leading-tight">{s.name}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{s.company}</p>
                  </div>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full border"
                    style={{ color: s.statusColor, borderColor: `${s.statusColor}40`, background: `${s.statusColor}12` }}
                  >
                    {s.status}
                  </span>
                </div>

                {/* Effectiveness */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Reported Efficacy</p>
                  <p className="text-xl font-bold" style={{ color: s.isOurs ? '#00C16E' : '#F0F4F8' }}>
                    {s.effectiveness}
                  </p>
                </div>

                {/* Limitations */}
                <ul className="space-y-1.5">
                  {s.limitations.map((lim, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-400">
                      <span
                        className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: s.isOurs ? '#00C16E' : '#EF4444', opacity: 0.7 }}
                      />
                      {lim}
                    </li>
                  ))}
                </ul>

                {s.isOurs && (
                  <div className="mt-4 text-[10px] font-semibold text-[#00C16E] uppercase tracking-wider">
                    Our Approach ↑
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
