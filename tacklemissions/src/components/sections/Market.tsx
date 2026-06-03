'use client';

import { motion } from 'framer-motion';
import { competitors } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const marketSegments = [
  { label: 'Feed Additives',   pct: 35, color: '#00C16E' },
  { label: 'Carbon Markets',   pct: 25, color: '#3B82F6' },
  { label: 'Tech Licensing',   pct: 20, color: '#8B5CF6' },
  { label: 'Direct Sales',     pct: 20, color: '#F59E0B' },
];

export default function Market() {
  return (
    <SectionWrapper id="market" className="py-24 bg-[#081C2D] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full bg-[#3B82F6]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#F59E0B] border border-[#F59E0B]/25 bg-[#F59E0B]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            Market Opportunity
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A <span className="gradient-text">$5.2B Market</span> by 2034
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The livestock methane mitigation market is expanding rapidly, driven by net-zero
            commitments, carbon pricing, and regulatory pressure on agriculture.
          </motion.p>
        </div>

        {/* Market metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { label: 'Current Market Size', value: 2.7, prefix: '$', suffix: 'B', desc: '2024 global market', color: '#00C16E' },
            { label: 'Projected by 2034',   value: 5.2, prefix: '$', suffix: 'B', desc: '10-year outlook',   color: '#3B82F6' },
            { label: 'CAGR',                value: 7.5, prefix: '',  suffix: '%', desc: '2024–2034',         color: '#8B5CF6', decimals: 1 },
          ].map((m, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.08 * i)}
              className="gradient-border-card p-8 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl font-bold mb-2 tracking-tight" style={{ color: m.color }}>
                {m.prefix}
                <AnimatedCounter value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} duration={2.5} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
              <div className="text-gray-500 text-xs">{m.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Market segments */}
        <motion.div {...fadeUp(0.1)} className="glass-card rounded-2xl p-8 mb-16">
          <h3 className="text-white font-bold text-xl mb-8">Revenue Stream Breakdown</h3>
          <div className="space-y-4">
            {marketSegments.map((seg, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-36 text-sm text-gray-300 text-right">{seg.label}</div>
                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: seg.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${seg.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 * i }}
                  />
                </div>
                <div className="w-10 text-sm font-bold" style={{ color: seg.color }}>
                  {seg.pct}%
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-6">
            * Revenue projections are indicative. TacklEmissions intends to pursue multiple
            parallel revenue streams including feed additives, carbon credit generation, and
            technology licensing.
          </p>
        </motion.div>

        {/* Competitive landscape */}
        <div>
          <motion.h3 {...fadeUp()} className="text-2xl font-bold text-white mb-2">Competitive Landscape</motion.h3>
          <motion.p {...fadeUp(0.05)} className="text-gray-400 text-sm mb-8">
            TacklEmissions occupies a unique position with targeted biodegradable nanotechnology
            — differentiating from both chemical and supply-chain-constrained solutions.
          </motion.p>

          <motion.div {...fadeUp(0.1)} className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left py-3 pr-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">Company</th>
                  <th className="text-left py-3 pr-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">Technology</th>
                  <th className="text-left py-3 pr-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">Stage</th>
                  <th className="text-left py-3 pr-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">Funding</th>
                  <th className="text-left py-3 text-gray-500 text-xs font-semibold uppercase tracking-wider">Key Limitation</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr
                    key={i}
                    className={`border-b transition-colors duration-200 ${
                      c.isOurs
                        ? 'border-[#00C16E]/20 bg-[#00C16E]/5 hover:bg-[#00C16E]/8'
                        : 'border-white/5 hover:bg-white/[0.02]'
                    }`}
                  >
                    <td className="py-4 pr-4">
                      <span className={`font-semibold text-sm ${c.isOurs ? 'text-[#00C16E]' : 'text-white'}`}>
                        {c.company}
                        {c.isOurs && <span className="ml-2 text-[10px] bg-[#00C16E]/20 text-[#00C16E] px-1.5 py-0.5 rounded-full">US</span>}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-gray-300 text-sm">{c.technology}</td>
                    <td className="py-4 pr-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        c.isOurs
                          ? 'bg-[#00C16E]/15 text-[#00C16E] border border-[#00C16E]/30'
                          : 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20'
                      }`}>
                        {c.stage}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-gray-400 text-sm font-mono">{c.funding}</td>
                    <td className="py-4 text-gray-400 text-xs">{c.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
