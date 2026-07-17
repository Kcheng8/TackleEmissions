'use client';

import { motion } from 'framer-motion';
import { fadeUpOnMount } from '@/lib/motion';

const readout = [
  { k: 'TARGET CH₄ ↓', v: '30', small: '%+' },
  { k: 'SELECTIVITY', v: 'Archaea', small: '-only' },
  { k: 'PARTICLE Ø', v: '50–500', small: 'nm' },
  { k: 'CARRIER', v: 'PHA', small: ' bead' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__lead">
          <motion.h1 {...fadeUpOnMount(0)} className="hero__title">
            A feed additive that cuts methane in the cattle <em>rumen</em>
          </motion.h1>

          <motion.p {...fadeUpOnMount(0.08)} className="hero__sub">
            TacklEmission is developing biodegradable nanoparticles that carry an enzyme against the
            methane-producing archaea in a cow&apos;s rumen, while leaving the rest of the microbiome
            it needs to digest food intact.
          </motion.p>

          <motion.p {...fadeUpOnMount(0.14)} className="hero__note">
            Built by a University of Queensland student team through the{' '}
            <strong>Australasian Synthetic Biology Challenge</strong>. The work is at an early
            research stage: enzyme expression and in vitro validation, not yet animal trials.
          </motion.p>

          <motion.div {...fadeUpOnMount(0.2)} className="hero__cta">
            <a className="btn btn--primary" href="#solution">
              How it works
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h9M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn--outline" href="#contact">
              Contact the team
            </a>
          </motion.div>
        </div>

        <motion.aside {...fadeUpOnMount(0.2)} className="hero__readout" aria-label="Key figures">
          {readout.map((r) => (
            <div className="readout__row" key={r.k}>
              <span className="readout__k">{r.k}</span>
              <span className="readout__v">
                {r.v}
                <small>{r.small}</small>
              </span>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}
