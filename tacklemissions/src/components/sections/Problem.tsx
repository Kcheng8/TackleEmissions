'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { fadeUp } from '@/lib/motion';
import { problemStats, currentSolutions } from '@/lib/data';

/* Split a display value like "14.5%", "28×", "~100M" into animatable parts. */
function StatNumber({ value }: { value: string }) {
  const m = value.match(/^(\D*)([\d.]+)(.*)$/);
  if (!m) return <>{value}</>;
  const [, prefix, num, suffix] = m;
  const decimals = num.includes('.') ? num.split('.')[1].length : 0;
  return (
    <>
      {prefix}
      <AnimatedCounter value={parseFloat(num)} decimals={decimals} suffix={suffix} />
    </>
  );
}

export default function Problem() {
  return (
    <SectionWrapper id="problem" className="section section--ink">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ PROBLEM ]</span>
            <span className="shead__tag tag--danger">CLIMATE EMERGENCY</span>
          </div>
          <h2 className="shead__title">
            Livestock methane is a <em>climate emergency</em>
          </h2>
          <p className="shead__lede">
            Agriculture contributes 14.5% of all global greenhouse-gas emissions. Methane from
            cattle is one of the largest — and most tractable — near-term reduction targets.
          </p>
        </motion.header>

        <div className="statgrid">
          {problemStats.map((s, i) => (
            <motion.article
              key={s.label}
              {...fadeUp(0.08 * i)}
              className="stat"
              style={{ ['--c' as string]: s.color }}
            >
              <div className="stat__num">
                <StatNumber value={s.value} />
              </div>
              <h3 className="stat__label">{s.label}</h3>
              <p className="stat__desc">{s.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="subhead">
          <span className="mono-label">EXISTING APPROACHES</span>
          <h3>Current solutions fall short</h3>
          <p>
            Each existing mitigation approach carries limitations that prevent it from reaching the
            scale and reliability needed for global impact.
          </p>
        </motion.div>

        <div className="solgrid">
          {currentSolutions.map((c, i) => {
            const ours = !!c.isOurs;
            const eff = ours ? c.effectiveness.replace(/\*$/, '') : c.effectiveness;
            return (
              <motion.article
                key={c.name}
                {...fadeUp(0.08 * i)}
                className={`solcard${ours ? ' solcard--ours' : ''}`}
                style={{ ['--c' as string]: c.statusColor }}
              >
                <div className="solcard__top">
                  <div>
                    <h4>{c.name}</h4>
                    <p className="solcard__co">{c.company}</p>
                  </div>
                  <span className={`chip${ours ? ' chip--ours' : ''}`}>{c.status}</span>
                </div>
                <p className="solcard__eff-k">{ours ? 'Projected efficacy' : 'Reported efficacy'}</p>
                <p className="solcard__eff">
                  {eff}
                  {ours && <sup>*</sup>}
                </p>
                <ul className={`solcard__lim${ours ? ' solcard__lim--ours' : ''}`}>
                  {c.limitations.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                {ours && <p className="solcard__flag">OUR APPROACH ↑</p>}
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
