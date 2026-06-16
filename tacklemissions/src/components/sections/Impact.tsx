'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { fadeUp } from '@/lib/motion';
import { impactMetrics } from '@/lib/data';

const checklist = [
  'Measurable, verifiable methane reduction (GreenFeed / SF₆ tracer)',
  'Compatible with leading methodologies (ACCUs, Gold Standard)',
  'Farmer-friendly: no infrastructure changes required',
  'Stacks with other sustainability credentials for ESG reporting',
];

export default function Impact() {
  return (
    <SectionWrapper id="impact" className="section section--ink section--dots">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ 06 — IMPACT ]</span>
            <span className="shead__tag tag--green">PROJECTED</span>
          </div>
          <h2 className="shead__title">
            The numbers that <em>matter</em>
          </h2>
          <p className="shead__lede">
            If adopted at scale, TacklEmission technology could represent one of the largest
            single-source methane reductions ever achieved in agriculture.
          </p>
        </motion.header>

        <div className="impactgrid">
          {impactMetrics.map((m, i) => (
            <motion.article
              key={m.label}
              {...fadeUp(0.08 * i)}
              className="impactm"
              style={{ ['--c' as string]: m.color }}
            >
              <div className="impactm__num">
                <AnimatedCounter value={m.value} decimals={m.decimals ?? 0} suffix={m.suffix} />
              </div>
              <h3>{m.label}</h3>
              <p>{m.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp()} className="bigpic">
          <div className="bigpic__text">
            <h3>A pathway to carbon credits for farmers</h3>
            <p>
              Beyond direct methane reduction, TacklEmission enables farmers to participate in
              emerging voluntary carbon markets. Each tonne of CO₂-equivalent avoided can be
              monetised as carbon credits — a new revenue stream while the planet benefits.
            </p>
            <ul className="bigpic__list">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bigpic__viz" aria-hidden="true">
            <div className="rings">
              <span className="ring" style={{ ['--c' as string]: '#00C16E' }} />
              <span className="ring" style={{ ['--c' as string]: '#3B82F6' }} />
              <span className="ring" style={{ ['--c' as string]: '#8B5CF6' }} />
              <div className="rings__center">
                <span className="rings__net">Net</span>
                <span className="rings__zero">Zero</span>
                <span className="rings__cap">Agriculture</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
