'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { safetyPillars, regulatoryPath } from '@/lib/data';

const pillarCodes = ['S1', 'S2', 'S3', 'S4'];

const pillarIcons: ReactNode[] = [
  <svg key="s1" viewBox="0 0 32 32" fill="none">
    <path d="M16 4l10 4v7c0 6.5-4.3 10.8-10 13-5.7-2.2-10-6.5-10-13V8l10-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M11.5 16l3.2 3.2L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="s2" viewBox="0 0 32 32" fill="none">
    <path d="M24 8c-9 0-15 4-15 12 0 3 1 5 1 5s-2 1-3 4M10 25c8 0 14-4 14-13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="17" cy="15" r="1.6" fill="currentColor" />
  </svg>,
  <svg key="s3" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 16.2l3.6 3.6L22 11.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="s4" viewBox="0 0 32 32" fill="none">
    <path d="M16 26C9 21.5 5 17.5 5 12.8 5 9.6 7.4 7 10.5 7c2.1 0 3.9 1.1 5.5 3 1.6-1.9 3.4-3 5.5-3C24.6 7 27 9.6 27 12.8c0 4.7-4 8.7-11 13.2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
];

const pillClass = (statusColor: string) =>
  statusColor === 'green' ? 'pill pill--green' : 'pill pill--amber';

export default function Safety() {
  return (
    <SectionWrapper id="safety" className="section section--bg">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ SAFETY &amp; REGULATORY ]</span>
            <span className="shead__tag tag--blue">DE-RISKED</span>
          </div>
          <h2 className="shead__title">
            Safe by design, <em>built for approval</em>
          </h2>
          <p className="shead__lede">
            Safety is engineered into the platform — not bolted on. Targeted biology, biodegradable
            materials, and a non-invasive delivery route minimise risk to animals, consumers, and the
            environment, with a clear regulatory pathway in our priority markets.
          </p>
        </motion.header>

        <div className="techgrid">
          {safetyPillars.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp(0.08 * i)}
              className="techcard"
              style={{ ['--c' as string]: p.color }}
            >
              <span className="techcard__no">{pillarCodes[i]}</span>
              <div className="techcard__icon">{pillarIcons[i]}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="speclist">
                {p.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">REGULATORY PATHWAY</span>
          <h3>Engaging regulators early</h3>
          <p>
            We are proactively scoping the feed-additive approval route in our priority markets to
            de-risk commercialisation well ahead of trials.
          </p>
        </motion.div>

        <div className="cites">
          {regulatoryPath.map((r, i) => (
            <motion.article
              key={r.agency}
              {...fadeUp(0.08 * i)}
              className="cite"
              style={{ ['--c' as string]: r.color }}
            >
              <div className="cite__ref">
                {r.agency}
                <i className={pillClass(r.statusColor)} style={{ marginLeft: 10 }}>
                  {r.status}
                </i>
              </div>
              <p className="cite__find">{r.detail}</p>
            </motion.article>
          ))}
        </div>

        <motion.p {...fadeUp()} className="revenue__note">
          * Regulatory engagement is in early stages. Timelines and pathways are indicative and
          subject to the outcomes of in vitro validation and animal feeding trials.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
