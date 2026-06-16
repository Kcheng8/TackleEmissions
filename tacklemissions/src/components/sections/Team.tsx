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
              <div className="member__tags">
                {m.expertise.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
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
