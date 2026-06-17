'use client';

import { motion } from 'framer-motion';
import { fadeUpOnMount } from '@/lib/motion';

/* Deterministic particles — no SSR/hydration mismatch. Mirrors design/script.js. */
const COLORS = ['#00C16E', '#3B82F6', '#8B5CF6'];
const PARTICLES = Array.from({ length: 28 }, (_, i) => {
  const size = ((i % 3) + 1) * 2;
  const o = Number((0.12 + ((i * 0.013) % 0.28)).toFixed(2));
  return {
    id: i,
    left: (i * 13.7 + 5) % 100,
    top: (i * 17.3 + 3) % 100,
    size,
    color: COLORS[i % 3],
    o,
    duration: 10 + ((i * 0.53) % 12),
    delay: (i * 0.37) % 9,
  };
});

const flowNodes = [
  {
    idx: '01',
    color: '#9DB2C4',
    label: 'Cattle',
    sub: 'Enteric fermentation',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M9 13c0-3 3-5 7-5s7 2 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 13c-2-1-3-3-3-5M23 13c2-1 3-3 3-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="16" cy="18" rx="7" ry="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13" cy="17" r="1" fill="currentColor" />
        <circle cx="19" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    idx: '02',
    color: '#3B82F6',
    label: 'Rumen',
    sub: 'Methanogen habitat',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="14" r="1.6" fill="currentColor" />
        <circle cx="19" cy="13" r="1.2" fill="currentColor" />
        <circle cx="20" cy="19" r="1.6" fill="currentColor" />
        <circle cx="13" cy="20" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    idx: '03',
    color: '#8B5CF6',
    label: 'Methanogens',
    sub: 'Archaea → CH₄',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="8" ry="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        <path d="M16 10V6M16 22v4M8 16H4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    idx: '04',
    color: '#4A8DDE',
    label: 'PHA + PeiR',
    sub: 'Bio-nanoparticle',
    key: true,
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="1.8" fill="currentColor" />
        <circle cx="16" cy="24" r="1.8" fill="currentColor" />
        <circle cx="8" cy="16" r="1.8" fill="currentColor" />
        <circle cx="24" cy="16" r="1.8" fill="currentColor" />
        <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    idx: '05',
    color: '#00C16E',
    label: 'Lower Emissions',
    sub: 'CH₄ reduced 30%+',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M8 17l5 5 11-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

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
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="p"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              opacity: p.o,
              ['--o' as string]: p.o,
              animation: `floatp ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__lead">
          <motion.p {...fadeUpOnMount(0)} className="kicker kicker--green">
            <span className="kicker__dot" />
            Synthetic Biology · Climate Technology · Pre-Seed
          </motion.p>

          <motion.h1 {...fadeUpOnMount(0.08)} className="hero__title">
            Engineering biology to <span className="grad">eliminate methane</span> from livestock
          </motion.h1>

          <motion.p {...fadeUpOnMount(0.16)} className="hero__sub">
            TacklEmission develops targeted, biodegradable PHA nanoparticles that selectively reduce
            methane-producing archaea in the cattle rumen — helping agriculture reach net zero
            without disrupting animal health.
          </motion.p>

          <motion.div {...fadeUpOnMount(0.24)} className="hero__cta">
            <a className="btn btn--primary" href="#solution">
              Discover the science
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h9M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn--outline" href="#contact">
              Partner with us
            </a>
          </motion.div>
        </div>

        <motion.aside {...fadeUpOnMount(0.24)} className="hero__readout" aria-label="Key figures">
          {readout.map((r) => (
            <div className="readout__row" key={r.k}>
              <span className="readout__k">{r.k}</span>
              <span className="readout__v">
                {r.v}
                <small>{r.small}</small>
              </span>
            </div>
          ))}
          <p className="readout__note">FIG.00 — Platform parameters · illustrative</p>
        </motion.aside>
      </div>

      <motion.div {...fadeUpOnMount(0.32)} className="hero__flow">
        <div className="flow__head">
          <span className="mono-label">FIG.01 — MECHANISM OF ACTION</span>
          <span className="mono-label flow__head-right">RUMEN PATHWAY</span>
        </div>
        <ol className="flow">
          {flowNodes.map((n) => (
            <li
              key={n.idx}
              className={`flow__node${n.key ? ' flow__node--key' : ''}`}
              style={{ ['--c' as string]: n.color }}
            >
              <span className="flow__idx">{n.idx}</span>
              <span className="flow__icon">{n.icon}</span>
              <span className="flow__label">{n.label}</span>
              <span className="flow__sub">{n.sub}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
