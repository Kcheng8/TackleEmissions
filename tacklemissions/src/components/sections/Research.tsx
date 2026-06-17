'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import References from '@/components/ui/References';
import { researchTimeline, references } from '@/lib/data';

const citations: { ref: string; color: string; finding: ReactNode; source: string; doi: string }[] = [
  {
    ref: 'Altermann et al., 2018',
    color: '#00C16E',
    finding: (
      <>
        PeiR-displaying nanoparticles reduced methane by up to <strong>97% in pure culture</strong>{' '}
        over five days, selectively lysing methanogenic archaea via pseudomurein cleavage.
      </>
    ),
    source:
      'Inhibition of Rumen Methanogens by a Novel Archaeal Lytic Enzyme Displayed on Tailored Bionanoparticles. Front. Microbiol.',
    doi: '10.3389/fmicb.2018.02378',
  },
  {
    ref: 'Altermann et al., 2022',
    color: '#3B82F6',
    finding: (
      <>
        Scaled into a continuous-flow rumen model, the nanoparticles achieved a{' '}
        <strong>5–15% methane reduction</strong> over 11 days — the lab-to-rumen gap our work targets.
      </>
    ),
    source:
      'Tailored Nanoparticles With the Potential to Reduce Ruminant Methane Emissions. Front. Microbiol. 13:816695.',
    doi: '10.3389/fmicb.2022.816695',
  },
  {
    ref: 'Henderson et al., 2015',
    color: '#8B5CF6',
    finding: (
      <>
        Across 32 ruminant species, ~74% of rumen archaea are <em>Methanobrevibacter</em> — a small,
        conserved set of methanogen targets for a selective therapeutic.
      </>
    ),
    source:
      'Rumen microbial community composition varies with diet and host, but a core microbiome is found across a wide geographical range. Sci. Rep. 5:14567.',
    doi: '10.1038/srep14567',
  },
];

export default function Research() {
  return (
    <SectionWrapper id="research" className="section section--ink">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ RESEARCH ]</span>
          </div>
          <h2 className="shead__title">
            Literature-backed. <em>Scientifically rigorous.</em>
          </h2>
          <p className="shead__lede">
            Our approach is grounded in published research on PeiR enzyme activity, PHA
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

        <References items={references} />
      </div>
    </SectionWrapper>
  );
}
