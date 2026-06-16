'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { partnershipTiers } from '@/lib/data';

const tierIcons: ReactNode[] = [
  <svg key="t1" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14" cy="14" r="3" fill="currentColor" />
  </svg>,
  <svg key="t2" viewBox="0 0 28 28" fill="none">
    <path d="M4 20V10l6-4 6 4 6-4v14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="11" y="14" width="6" height="6" rx="1" fill="currentColor" />
  </svg>,
  <svg key="t3" viewBox="0 0 28 28" fill="none">
    <path d="M4 20l5-7 5 3 6-9 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="11" r="2.5" fill="currentColor" />
  </svg>,
];

export default function Investors() {
  return (
    <SectionWrapper id="investors" className="section section--bg">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ 07 — INVESTORS ]</span>
            <span className="shead__tag tag--green">SEEKING PARTNERS</span>
          </div>
          <h2 className="shead__title">
            Seeking <em>strategic partners</em>
          </h2>
          <p className="shead__lede">
            We are actively seeking partners in agriculture, biotechnology, climate technology, and
            sustainable food production. Early partners receive preferential commercial rights.
          </p>
        </motion.header>

        <div className="tiers">
          {partnershipTiers.map((t, i) => {
            const featured = !!t.featured;
            return (
              <motion.article
                key={t.tier}
                {...fadeUp(0.08 * i)}
                className={`tier${featured ? ' tier--featured' : ''}`}
                style={{ ['--c' as string]: t.color }}
              >
                <div className="tier__head">
                  <span className="tier__icon">{tierIcons[i]}</span>
                  <h3>{t.tier}</h3>
                </div>
                <p className="tier__desc">{t.description}</p>
                <ul className="tier__list">
                  {t.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tier__for">
                  <span className="mono-label">IDEAL FOR</span>
                  <p>{t.idealFor}</p>
                </div>
                <a
                  className={`btn ${featured ? 'btn--primary' : 'btn--outline'} btn--full`}
                  href="#contact"
                >
                  {featured ? 'Start a conversation' : 'Get in touch →'}
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div {...fadeUp()} className="dd">
          <div>
            <h3>Ready to conduct due diligence?</h3>
            <p>We provide a detailed investor deck, technical brief, and literature synthesis on request.</p>
          </div>
          <a className="btn btn--primary" href="#contact">
            Request investor deck
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
