'use client';

import { motion } from 'framer-motion';
import { researchTimeline } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

export default function Research() {
  return (
    <SectionWrapper id="research" className="py-24 bg-[#030D14] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#8B5CF6] border border-[#8B5CF6]/25 bg-[#8B5CF6]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            Research & Development
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Literature-Backed.{' '}
            <span className="gradient-text">Scientifically Rigorous.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our approach is grounded in peer-reviewed research on PeiR enzyme activity,
            PHA nanoparticle engineering, and rumen methanogenesis biology.
          </motion.p>
        </div>

        {/* Key citations */}
        <motion.div {...fadeUp(0.12)} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { ref: 'Pfister et al., 2020', finding: 'PeiR specifically cleaves pseudomurein in vitro — validated lytic activity against Methanobrevibacter ruminantium', color: '#00C16E' },
            { ref: 'Koller et al., 2022', finding: 'PHA nanoparticles demonstrate stability across rumen pH ranges (5.5–7.0) with controlled surface functionalisation', color: '#3B82F6' },
            { ref: 'Johnson et al., 2017', finding: 'Enteric methane constitutes the largest single source of agricultural greenhouse gas emissions globally', color: '#8B5CF6' },
          ].map((c, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-5 border-l-2"
              style={{ borderLeftColor: c.color }}
            >
              <p className="text-xs font-semibold mb-2" style={{ color: c.color }}>{c.ref}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{c.finding}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#00C16E]/40 via-[#3B82F6]/30 to-transparent" />

          <div className="space-y-12">
            {researchTimeline.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 * i)}
                className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}
              >
                {/* Year bubble */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 z-10 transition-all ${
                      item.status === 'current'
                        ? 'bg-[#00C16E] border-[#00C16E] text-white shadow-lg shadow-[#00C16E]/30'
                        : 'bg-[#030D14] border-white/20 text-gray-400'
                    }`}
                  >
                    {item.year.slice(2)}
                  </div>
                </div>

                {/* Spacer for md */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                      item.status === 'current'
                        ? 'bg-gradient-to-br from-[#00C16E]/12 to-[#3B82F6]/8 border border-[#00C16E]/25'
                        : 'glass-card'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          item.status === 'current'
                            ? 'bg-[#00C16E]/15 text-[#00C16E] border-[#00C16E]/30'
                            : 'bg-white/5 text-gray-500 border-white/10'
                        }`}
                      >
                        {item.status === 'current' ? 'In Progress' : `${item.year}`}
                      </span>
                      <h3 className="text-white font-bold text-base">{item.phase}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.milestones.map((m, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              item.status === 'current' ? 'bg-[#00C16E]' : 'bg-gray-600'
                            }`}
                          />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <motion.div {...fadeUp(0.15)} className="mt-16 glass-card rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Synthetic Biology Design Workflow</h3>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {['Design', 'Build', 'Test', 'Learn', 'Optimise'].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border"
                    style={{
                      color: ['#00C16E','#22d87a','#3B82F6','#60A5FA','#8B5CF6'][i],
                      borderColor: `${['#00C16E','#22d87a','#3B82F6','#60A5FA','#8B5CF6'][i]}30`,
                      background: `${['#00C16E','#22d87a','#3B82F6','#60A5FA','#8B5CF6'][i]}10`,
                    }}
                  >
                    {['D','B','T','L','O'][i]}
                  </div>
                  <span className="text-xs text-gray-400">{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-gray-600 text-xl mb-4">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
