'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import PhaExpressionAnimation from '@/components/ui/PhaExpressionAnimation';
import { fadeUp } from '@/lib/motion';
import { solutionSteps } from '@/lib/data';

export default function Solution() {
  const [active, setActive] = useState(0);
  const total = solutionSteps.length;
  const s = solutionSteps[active];
  const pct = ((active + 1) / total) * 100;

  return (
    <SectionWrapper id="solution" className="section section--bg">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ SOLUTION ]</span>
          </div>
          <h2 className="shead__title">
            How <em>TacklEmission</em> works
          </h2>
          <p className="shead__lede">
            A five-step biological pathway from engineered nanoparticles to sustained methane
            reduction, without disrupting rumen ecology or animal productivity.
          </p>
        </motion.header>

        <motion.div {...fadeUp()} className="stepper">
          <div className="stepper__rail" role="tablist" aria-label="Solution steps">
            {solutionSteps.map((step, i) => (
              <button
                key={step.step}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`steprow${active === i ? ' is-active' : ''}`}
                style={{ ['--c' as string]: step.color }}
              >
                <span className="steprow__no">{step.step}</span>
                <span className="steprow__body">
                  <span className="steprow__title">{step.title}</span>
                  <span className="steprow__desc">{step.description}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="stepdetail" role="tabpanel" style={{ ['--c' as string]: s.color }}>
            <div className="sd__head">
              <div className="sd__no">{s.step}</div>
              <div>
                <p className="sd__kicker">
                  Step {active + 1} of {total}
                </p>
                <h3 className="sd__title">{s.title}</h3>
              </div>
            </div>
            <p className="sd__desc">{s.description}</p>
            <div className="sd__params">
              <p className="sd__params-k">Technical parameters</p>
              <p className="sd__params-v">{s.detail}</p>
            </div>
            <div className="sd__progress">
              <span className="sd__progress-k">PROGRESS</span>
              <span className="sd__bar">
                <motion.span
                  initial={false}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <span className="sd__progress-k">
                {active + 1}/{total}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">Construct pPHB01</span>
          <h3>
            Inducible expression of the <em>phaA–phaB–phaC–peiR</em> operon
          </h3>
          <p>
            A lac-regulated operon in <em>E. coli</em> BL21 stays silent until IPTG lifts the
            repressor. Transcription then yields the PHA biosynthesis enzymes, which build a
            bionanoparticle displaying the PeiR lytic enzyme on its surface.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.05)}>
          <PhaExpressionAnimation />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
