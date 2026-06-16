'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { teamMembers, supervisor } from '@/lib/data';

export default function Team() {
  return (
    <SectionWrapper id="team" className="section section--bg">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ 05 — TEAM ]</span>
            <span className="shead__tag tag--amber">UNIVERSITY OF QUEENSLAND</span>
          </div>
          <h2 className="shead__title">
            Built by <em>scientists &amp; engineers</em>
          </h2>
          <p className="shead__lede">
            A multidisciplinary team combining chemical engineering, molecular biology, synthetic
            biology, and computational science — anchored at the University of Queensland.
          </p>
        </motion.header>

        <div className="teamgrid">
          {teamMembers.map((m, i) => (
            <motion.article
              key={`${m.name}-${i}`}
              {...fadeUp(0.08 * i)}
              className="member"
              style={{ ['--c' as string]: m.color }}
            >
              <div className="member__top">
                <span className="member__mono">{m.initials}</span>
                <span className="member__cat">{m.category}</span>
              </div>
              <div className="member__avatar" aria-hidden="true">
                {m.initials}
              </div>
              <h3>{m.name}</h3>
              <p className="member__role">{m.role}</p>
              <p className="member__bio">{m.bio}</p>
              <a
                className="member__linkedin"
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.83v2.19h.05c.53-1 1.84-2.19 3.79-2.19 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.05c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-4V8z" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">Academic Supervision</span>
          <h3>Guided by established UQ research leadership</h3>
        </motion.div>
        <motion.article
          {...fadeUp(0.05)}
          className="supervisor"
          style={{ ['--c' as string]: supervisor.color }}
        >
          <div className="supervisor__avatar" aria-hidden="true">
            {supervisor.initials}
          </div>
          <div className="supervisor__body">
            <div className="supervisor__top">
              <h3>{supervisor.name}</h3>
              <span className="member__cat">Supervisor</span>
            </div>
            <p className="member__role">{supervisor.role}</p>
            <p className="supervisor__affil">{supervisor.affiliation}</p>
            <p className="member__bio">{supervisor.bio}</p>
          </div>
        </motion.article>
      </div>
    </SectionWrapper>
  );
}
