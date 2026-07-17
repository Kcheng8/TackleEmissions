'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { platformComponents, platformAdvantages } from '@/lib/data';

export default function Technology() {
  return (
    <SectionWrapper id="technology" className="section section--ink">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ TECHNOLOGY ]</span>
          </div>
          <h2 className="shead__title">
            A modular biotech <em>platform</em>
          </h2>
          <p className="shead__lede">
            Four components that make the system specific to rumen methanogens and, if it works,
            manufacturable at scale. The same surface-display approach could later extend beyond
            enteric fermentation.
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
              <span className="techcard__rule" aria-hidden="true" />
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

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">DIFFERENTIATION</span>
          <h3>Where the approach differs</h3>
        </motion.div>

        <div className="advgrid">
          {platformAdvantages.map((a, i) => (
            <motion.article
              key={a.title}
              {...fadeUp(0.08 * i)}
              className="adv"
              style={{ ['--c' as string]: a.color }}
            >
              <span className="adv__sym">{String(i + 1).padStart(2, '0')}</span>
              <h4>{a.title}</h4>
              <p>{a.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
