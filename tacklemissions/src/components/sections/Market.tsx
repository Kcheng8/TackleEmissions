'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { fadeUp } from '@/lib/motion';
import { competitors } from '@/lib/data';

const metrics = [
  { prefix: '$', value: 2.7, decimals: 1, suffix: 'B', heading: 'Current market size', note: '2024 global market', color: '#00C16E' },
  { prefix: '$', value: 5.2, decimals: 1, suffix: 'B', heading: 'Projected by 2034', note: '10-year outlook', color: '#3B82F6' },
  { prefix: '', value: 7.5, decimals: 1, suffix: '%', heading: 'CAGR', note: '2024–2034', color: '#8B5CF6' },
];

const revenueBars = [
  { label: 'Feed Additives', pct: 35, color: '#00C16E' },
  { label: 'Carbon Markets', pct: 25, color: '#3B82F6' },
  { label: 'Tech Licensing', pct: 20, color: '#8B5CF6' },
  { label: 'Direct Sales', pct: 20, color: '#F59E0B' },
];

export default function Market() {
  return (
    <SectionWrapper id="market" className="section section--bg">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ 03 — MARKET ]</span>
            <span className="shead__tag tag--amber">OPPORTUNITY</span>
          </div>
          <h2 className="shead__title">
            A <em>$5.2B market</em> by 2034
          </h2>
          <p className="shead__lede">
            The livestock methane-mitigation market is expanding rapidly, driven by net-zero
            commitments, carbon pricing, and regulatory pressure on agriculture.
          </p>
        </motion.header>

        <div className="mktmetrics">
          {metrics.map((m, i) => (
            <motion.article
              key={m.heading}
              {...fadeUp(0.08 * i)}
              className="mktm"
              style={{ ['--c' as string]: m.color }}
            >
              <div className="mktm__num">
                {m.prefix}
                <AnimatedCounter value={m.value} decimals={m.decimals} suffix={m.suffix} />
              </div>
              <h3>{m.heading}</h3>
              <p>{m.note}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="revenue">
          <div className="revenue__head">
            <h3>Revenue-stream breakdown</h3>
            <span className="mono-label">INDICATIVE MIX</span>
          </div>
          <div className="bars">
            {revenueBars.map((b) => (
              <div className="bar" key={b.label} style={{ ['--c' as string]: b.color }}>
                <span className="bar__label">{b.label}</span>
                <span className="bar__track">
                  <motion.span
                    className="bar__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.pct}%` }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                <span className="bar__val">{b.pct}%</span>
              </div>
            ))}
          </div>
          <p className="revenue__note">
            * Revenue projections are indicative. TacklEmission intends to pursue multiple parallel
            revenue streams including feed additives, carbon-credit generation, and technology
            licensing.
          </p>
        </motion.div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">LANDSCAPE</span>
          <h3>Competitive landscape</h3>
          <p>
            TacklEmission occupies a unique position with targeted biodegradable nanotechnology —
            differentiated from both chemical and supply-chain-constrained solutions.
          </p>
        </motion.div>

        <motion.div {...fadeUp()} className="ctable">
          <div className="ctable__row ctable__row--head">
            <span>Company</span>
            <span>Technology</span>
            <span>Stage</span>
            <span>Funding</span>
            <span>Key limitation</span>
          </div>
          {competitors.map((c) => {
            const ours = !!c.isOurs;
            return (
              <div key={c.company} className={`ctable__row${ours ? ' ctable__row--ours' : ''}`}>
                <span data-th="Company" className="ctable__co">
                  {c.company}
                  {ours && <i className="us">US</i>}
                </span>
                <span data-th="Technology">{c.technology}</span>
                <span data-th="Stage">
                  <i className={`pill ${ours ? 'pill--green' : 'pill--amber'}`}>{c.stage}</i>
                </span>
                <span data-th="Funding" className="mono">
                  {c.funding}
                </span>
                <span data-th="Limitation">{c.limitation.replace(/^—\s*/, '')}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
