'use client';

import { motion } from 'framer-motion';
import { impactMetrics } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

export default function Impact() {
  return (
    <SectionWrapper id="impact" className="py-24 bg-[#030D14] relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-r from-[#00C16E]/6 to-[#3B82F6]/6 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#00C16E] border border-[#00C16E]/25 bg-[#00C16E]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C16E] animate-pulse-glow" />
            Projected Impact
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Numbers That{' '}
            <span className="gradient-text">Matter</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            If adopted at scale, TacklEmission technology could represent one of the
            largest single-source methane reductions ever achieved in agriculture.
          </motion.p>
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.08 * i)}
              className="relative rounded-2xl p-8 text-center overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${metric.color}10, ${metric.color}05)`,
                border: `1px solid ${metric.color}25`,
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `${metric.color}15` }}
              />

              <div className="relative">
                <div
                  className="text-6xl font-bold mb-2 tracking-tight leading-none"
                  style={{ color: metric.color }}
                >
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals ?? 0}
                    duration={2.5}
                  />
                </div>
                <div className="text-white font-semibold text-sm mb-2">{metric.label}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The big picture */}
        <motion.div
          {...fadeUp(0.15)}
          className="rounded-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#00C16E]/10 via-[#3B82F6]/8 to-[#8B5CF6]/10 p-8 md:p-12 border border-white/5">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  A Pathway to Carbon Credits for Farmers
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Beyond direct methane reduction, TacklEmission enables farmers to participate
                  in emerging voluntary carbon markets. Each tonne of CO₂-equivalent avoided
                  can be monetised as carbon credits, creating a new revenue stream while the
                  planet benefits.
                </p>
                <div className="space-y-3">
                  {[
                    'Measurable, verifiable methane reduction (GreenFeed / SF₆ tracer)',
                    'Compatible with leading carbon credit methodologies (ACCUs, Gold Standard)',
                    'Farmer-friendly: no infrastructure changes required',
                    'Stacks with other sustainability credentials for ESG reporting',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="mt-1 w-4 h-4 rounded-full bg-[#00C16E]/20 border border-[#00C16E]/40 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C16E]" />
                      </span>
                      <p className="text-gray-300 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual element */}
              <div className="flex items-center justify-center">
                <div className="relative w-44 h-44 sm:w-64 sm:h-64">
                  {/* Rings */}
                  {[0, 1, 2].map((ring) => (
                    <div
                      key={ring}
                      className="absolute inset-0 rounded-full border opacity-20 animate-spin-slow"
                      style={{
                        borderColor: ['#00C16E', '#3B82F6', '#8B5CF6'][ring],
                        margin: `${ring * 14}px`,
                        animationDelay: `${ring * -4}s`,
                        animationDuration: `${20 + ring * 8}s`,
                      }}
                    />
                  ))}
                  {/* Centre */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl sm:text-5xl font-bold gradient-text-green leading-none">
                        Net
                      </div>
                      <div className="text-3xl sm:text-5xl font-bold text-white leading-none">Zero</div>
                      <div className="text-xs text-gray-400 mt-2">Agriculture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
