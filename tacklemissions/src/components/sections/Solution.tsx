'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { solutionSteps } from '@/lib/data';
import SectionWrapper from '@/components/ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const icons = ['⬡', '⬡', '⬡', '⬡', '⬡'];

export default function Solution() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="solution" className="py-24 bg-[#081C2D] relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00C16E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#00C16E] border border-[#00C16E]/25 bg-[#00C16E]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C16E] animate-pulse-glow" />
            Our Solution
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How <span className="gradient-text">TacklEmission</span> Works
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A five-step biological pathway from engineered nanoparticles to sustained methane
            reduction — without disrupting rumen ecology or animal productivity.
          </motion.p>
        </div>

        {/* Step selector tabs */}
        <motion.div {...fadeUp(0.15)} className="flex flex-wrap justify-center gap-2 mb-12">
          {solutionSteps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-gradient-to-r from-[#00C16E] to-[#3B82F6] text-white shadow-lg shadow-[#00C16E]/20'
                  : 'text-gray-400 border border-white/10 hover:border-white/25 hover:text-white'
              }`}
            >
              <span className="text-xs opacity-60">{s.step}</span>
              <span className="hidden sm:inline">{s.title.split(' ').slice(0, 2).join(' ')}</span>
            </button>
          ))}
        </motion.div>

        {/* Main content: stepper + detail */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Steps list */}
          <div className="lg:col-span-2 space-y-3">
            {solutionSteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 * i)}
                onClick={() => setActive(i)}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  active === i
                    ? 'border bg-gradient-to-r from-[#00C16E]/10 to-[#3B82F6]/8'
                    : 'glass-card hover:-translate-y-0.5'
                }`}
                style={active === i ? { borderColor: `${step.color}40` } : {}}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border"
                    style={{
                      color: step.color,
                      borderColor: `${step.color}40`,
                      background: `${step.color}12`,
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active step detail */}
          <div className="lg:col-span-3">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl p-8 h-full border"
              style={{
                background: `linear-gradient(135deg, ${solutionSteps[active].color}08, ${solutionSteps[active].color}04)`,
                borderColor: `${solutionSteps[active].color}25`,
              }}
            >
              {/* Step number + illustration */}
              <div className="flex items-start gap-6 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold border flex-shrink-0"
                  style={{
                    color: solutionSteps[active].color,
                    borderColor: `${solutionSteps[active].color}40`,
                    background: `${solutionSteps[active].color}12`,
                  }}
                >
                  {solutionSteps[active].step}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Step {parseInt(solutionSteps[active].step)}</p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {solutionSteps[active].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {solutionSteps[active].description}
              </p>

              {/* Technical spec */}
              <div
                className="rounded-xl p-4 border"
                style={{
                  background: `${solutionSteps[active].color}08`,
                  borderColor: `${solutionSteps[active].color}20`,
                }}
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Technical Parameters</p>
                <p className="text-sm font-mono" style={{ color: solutionSteps[active].color }}>
                  {solutionSteps[active].detail}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mt-6 flex items-center gap-3">
                <p className="text-xs text-gray-600">Progress</p>
                <div className="flex-1 h-1 rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: solutionSteps[active].color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${((active + 1) / solutionSteps.length) * 100}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <p className="text-xs text-gray-600">{active + 1}/{solutionSteps.length}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
