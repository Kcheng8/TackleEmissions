'use client';

import { motion } from 'framer-motion';
import { Fragment, ReactNode } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { researchTimeline } from '@/lib/data';

const citations: { ref: string; color: string; finding: ReactNode }[] = [
  {
    ref: 'Pfister et al., 2020',
    color: '#00C16E',
    finding: (
      <>
        PeiR specifically cleaves pseudomurein in vitro — validated lytic activity against{' '}
        <em>Methanobrevibacter ruminantium</em>.
      </>
    ),
  },
  {
    ref: 'Koller et al., 2022',
    color: '#3B82F6',
    finding:
      'PHA nanoparticles demonstrate stability across rumen pH ranges (5.5–7.0) with controlled surface functionalisation.',
  },
  {
    ref: 'Johnson et al., 2017',
    color: '#8B5CF6',
    finding:
      'Enteric methane constitutes the largest single source of agricultural greenhouse-gas emissions globally.',
  },
];

const dbtl = [
  { b: 'D', label: 'Design', color: '#00C16E' },
  { b: 'B', label: 'Build', color: '#22d87a' },
  { b: 'T', label: 'Test', color: '#3B82F6' },
  { b: 'L', label: 'Learn', color: '#60A5FA' },
  { b: 'O', label: 'Optimise', color: '#8B5CF6' },
];

export default function Research() {
  return (
    <SectionWrapper id="research" className="section section--ink">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ 04 — RESEARCH ]</span>
            <span className="shead__tag tag--purple">PEER-REVIEWED</span>
          </div>
          <h2 className="shead__title">
            Literature-backed. <em>Scientifically rigorous.</em>
          </h2>
          <p className="shead__lede">
            Our approach is grounded in peer-reviewed research on PeiR enzyme activity, PHA
            nanoparticle engineering, and rumen methanogenesis biology.
          </p>
        </motion.header>

        <div className="cites">
          {citations.map((c, i) => (
            <motion.article
              key={c.ref}
              {...fadeUp(0.08 * i)}
              className="cite"
              style={{ ['--c' as string]: c.color }}
            >
              <p className="cite__ref">{c.ref}</p>
              <p className="cite__find">{c.finding}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">ROADMAP</span>
          <h3>Development timeline</h3>
        </motion.div>

        <ol className="timeline">
          {researchTimeline.map((t, i) => {
            const current = t.status === 'current';
            return (
              <motion.li
                key={t.year}
                {...fadeUp(0.08 * i)}
                className={`tl${current ? ' tl--current' : ''}`}
              >
                <div className="tl__year">{t.year.slice(2)}</div>
                <div className="tl__card">
                  <div className="tl__meta">
                    <span className={`pill${current ? ' pill--green' : ''}`}>
                      {current ? 'In Progress' : t.year}
                    </span>
                    <h4>{t.phase}</h4>
                  </div>
                  <ul>
                    {t.milestones.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <motion.div {...fadeUp()} className="dbtl">
          <span className="mono-label">FIG.03 — SYNTHETIC BIOLOGY DESIGN WORKFLOW</span>
          <div className="dbtl__row">
            {dbtl.map((n, i) => (
              <Fragment key={n.b}>
                <span className="dbtl__node" style={{ ['--c' as string]: n.color }}>
                  <b>{n.b}</b>
                  {n.label}
                </span>
                {i < dbtl.length - 1 && <span className="dbtl__arrow">→</span>}
              </Fragment>
            ))}
            <span className="dbtl__loop">↺</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
