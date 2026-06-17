'use client';

import Image from 'next/image';
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
            <span className="shead__coord">[ TEAM ]</span>
            <span className="shead__tag tag--amber">UNIVERSITY OF QUEENSLAND</span>
          </div>
          <h2 className="shead__title">
            Meet the <em>team</em>
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
              <div className="member__photo-wrap" aria-hidden={!m.photo}>
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 240px"
                    className="member__photo"
                  />
                ) : (
                  <span className="member__initials">{m.initials}</span>
                )}
              </div>
              <div className="member__body">
                <span className="member__cat">{m.category}</span>
                <h3>{m.name}</h3>
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
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">Academic Supervision</span>
          <h3>Meet the <em>supervisor</em></h3>
        </motion.div>
        <motion.article
          {...fadeUp(0.05)}
          className="supcard"
          style={{ ['--c' as string]: supervisor.color }}
        >
          <div className="supcard__photo" aria-hidden={!supervisor.photo}>
            {supervisor.photo ? (
              <Image
                src={supervisor.photo}
                alt={supervisor.name}
                fill
                sizes="(max-width: 560px) 100vw, 200px"
                className="member__photo"
              />
            ) : (
              <span className="member__initials">{supervisor.initials}</span>
            )}
          </div>
          <div className="supcard__body">
            <span className="member__cat">Supervisor</span>
            <h3>{supervisor.name}</h3>
            <p className="member__role">{supervisor.role}</p>
            <p className="supcard__affil">{supervisor.affiliation}</p>
          </div>
        </motion.article>
      </div>
    </SectionWrapper>
  );
}
