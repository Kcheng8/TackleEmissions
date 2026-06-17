'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { platformComponents, platformAdvantages } from '@/lib/data';

const cardCodes = ['A1', 'A2', 'A3', 'A4'];

const cardIcons: ReactNode[] = [
  <svg key="a1" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="6" r="2" fill="currentColor" />
    <circle cx="16" cy="26" r="2" fill="currentColor" />
    <circle cx="6" cy="16" r="2" fill="currentColor" />
    <circle cx="26" cy="16" r="2" fill="currentColor" />
    <circle cx="16" cy="16" r="3.5" fill="currentColor" opacity="0.5" />
  </svg>,
  <svg key="a2" viewBox="0 0 32 32" fill="none">
    <path d="M8 16c0-6 4-8 8-8s8 2 8 8M8 16c0 6 4 8 8 8s8-2 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    <circle cx="20" cy="20" r="1.8" fill="currentColor" />
  </svg>,
  <svg key="a3" viewBox="0 0 32 32" fill="none">
    <path d="M11 7v18M21 7v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 11q5-2 10 0M11 16q5 2 10 0M11 21q5-2 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="a4" viewBox="0 0 32 32" fill="none">
    <rect x="5" y="18" width="5" height="8" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="13" y="12" width="5" height="14" rx="1" fill="currentColor" opacity="0.7" />
    <rect x="21" y="6" width="5" height="20" rx="1" fill="currentColor" />
  </svg>,
];

const advSymbols = ['⊕', '♻', '↗', '⊘', '≡'];

export default function Technology() {
  return (
    <SectionWrapper id="technology" className="section section--ink">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ TECHNOLOGY ]</span>
            <span className="shead__tag tag--blue">PLATFORM</span>
          </div>
          <h2 className="shead__title">
            A modular biotech <em>platform</em>
          </h2>
          <p className="shead__lede">
            Four integrated components create a uniquely specific, safe, and scalable methane
            mitigation system — with broad future applications beyond enteric fermentation.
          </p>
        </motion.header>

        <div className="techgrid">
          {platformComponents.map((c, i) => (
            <motion.article
              key={c.title}
              {...fadeUp(0.08 * i)}
              className="techcard"
              style={{ ['--c' as string]: c.color }}
            >
              <span className="techcard__no">{cardCodes[i]}</span>
              <div className="techcard__icon">{cardIcons[i]}</div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="speclist">
                {c.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="arch">
          <div className="arch__head">
            <span className="mono-label">FIG.02 — PLATFORM ARCHITECTURE</span>
          </div>
          <div className="arch__flow">
            <span className="arch__node" style={{ ['--c' as string]: '#00C16E' }}>Microbial Fermentation</span>
            <span className="arch__arrow">→</span>
            <span className="arch__node" style={{ ['--c' as string]: '#3B82F6' }}>PHA Biosynthesis</span>
            <span className="arch__arrow">→</span>
            <span className="arch__node" style={{ ['--c' as string]: '#8B5CF6' }}>Nanoparticle Formulation</span>
          </div>
          <div className="arch__flow">
            <span className="arch__node" style={{ ['--c' as string]: '#F59E0B' }}>PeiR Expression</span>
            <span className="arch__arrow">→</span>
            <span className="arch__node" style={{ ['--c' as string]: '#00C16E' }}>Surface Display</span>
            <span className="arch__arrow">→</span>
            <span className="arch__node arch__node--w">Armed Nanoparticle</span>
          </div>
          <div className="arch__result">
            Feed Additive → Rumen → Selective Methanogen Disruption →{' '}
            <strong>Target: 60–80% CH₄ Reduction</strong>
          </div>
        </motion.div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">WHY IT WINS</span>
          <h3>Competitive advantages</h3>
        </motion.div>

        <div className="advgrid">
          {platformAdvantages.map((a, i) => (
            <motion.article
              key={a.title}
              {...fadeUp(0.08 * i)}
              className="adv"
              style={{ ['--c' as string]: a.color }}
            >
              <span className="adv__sym">{advSymbols[i]}</span>
              <h4>{a.title}</h4>
              <p>{a.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
