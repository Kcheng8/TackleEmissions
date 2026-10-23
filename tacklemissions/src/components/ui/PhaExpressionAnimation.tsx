'use client';

import { useCallback, useEffect, useId, useMemo, useState } from 'react';

/* Animated explainer of IPTG induction of the phaA–phaB–phaC–peiR operon and
   the resulting PHA bionanoparticle.

   The stage machine is deliberately CSS-driven: `data-stage` on the scene
   wrapper is the single source of truth and every transition is a CSS rule in
   globals.css keyed off it. React only owns which stage is current — it never
   animates anything itself, and never mutates the DOM directly. */

interface Stage {
  readonly tag: string;
  readonly name: string;
  readonly dur: number;
  readonly text: string;
}

const STAGES = [
  {
    tag: 'Stage 01',
    name: 'Repressed',
    dur: 3200,
    text: 'The repressor occupies the operator. RNA polymerase binds the promoter but cannot clear it, so the operon stays silent.',
  },
  {
    tag: 'Stage 02',
    name: 'Induction',
    dur: 3200,
    text: 'IPTG binds the repressor as a gratuitous inducer, changing its shape so it releases the operator DNA.',
  },
  {
    tag: 'Stage 03',
    name: 'Transcription',
    dur: 3600,
    text: 'With the operator free, polymerase reads through phaA, phaB and the phaC-peiR fusion into a single transcript.',
  },
  {
    tag: 'Stage 04',
    name: 'Assembly',
    dur: 4600,
    text: 'PhaA and PhaB feed acetyl-CoA to PhaC, which polymerises PHA and stays anchored to the granule, displaying PeiR on the surface.',
  },
] as const satisfies readonly Stage[];

type StageTuple = typeof STAGES;

/* The valid stage indices, derived from the tuple rather than hand-written, so
   adding a stage above widens the state type automatically. */
type StageIndex = Extract<keyof StageTuple, `${number}`> extends infer K
  ? K extends `${infer N extends number}`
    ? N
    : never
  : never;

const STAGE_COUNT = STAGES.length;

/** Wraps any integer into a valid stage index (negatives included). */
function toStageIndex(n: number): StageIndex {
  const i = ((Math.trunc(n) % STAGE_COUNT) + STAGE_COUNT) % STAGE_COUNT;
  // i is 0..STAGE_COUNT-1 by construction, which is exactly StageIndex.
  return i as StageIndex;
}

const LIPID_COUNT = 44;
const SPIKE_COUNT = 16;

export interface PhaExpressionAnimationProps {
  autoPlay?: boolean;
  loop?: boolean;
  initialStage?: number;
  className?: string;
}

export default function PhaExpressionAnimation({
  autoPlay = true,
  loop = true,
  initialStage = 0,
  className,
}: PhaExpressionAnimationProps) {
  const uid = useId();
  const [stage, setStage] = useState<StageIndex>(() => toStageIndex(initialStage));
  const [playing, setPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  /* Read prefers-reduced-motion in an effect, never during render, so the
     server and the first client paint agree. When it is on we start paused,
     exactly as the standalone version does. */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (mq.matches) setPlaying(false);
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const goTo = useCallback((n: number) => {
    setStage(toStageIndex(n));
    setProgress(0);
  }, []);

  /* One rAF loop per (stage, playing) pair. Re-running on stage change is what
     resets the clock, and the cleanup cancels the pending frame on unmount, on
     pause and between stages. */
  useEffect(() => {
    if (!playing) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const p = (now - start) / STAGES[stage].dur;
      if (p >= 1) {
        if (stage === STAGE_COUNT - 1 && !loop) {
          // Nothing left to advance to — hold the final stage fully drawn.
          setProgress(1);
          setPlaying(false);
          return;
        }
        setStage(toStageIndex(stage + 1));
        setProgress(0);
        return;
      }
      setProgress(p);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, stage, loop]);

  /* Built once: these are the two heaviest subtrees, and stable element
     identity lets React skip them on every progress frame. */
  const lipids = useMemo(
    () =>
      Array.from({ length: LIPID_COUNT }, (_, k) => {
        const a = (k / LIPID_COUNT) * Math.PI * 2;
        const rx = 62 + (k % 2 ? 6 : 0);
        const ry = 53 + (k % 2 ? 6 : 0);
        return (
          <circle
            key={k}
            cx={Number((150 + Math.cos(a) * rx).toFixed(1))}
            cy={Number((150 + Math.sin(a) * ry).toFixed(1))}
            r={7}
            fill={k % 11 === 0 ? 'var(--pha-misc)' : 'var(--pha-lipid)'}
          />
        );
      }),
    [],
  );

  const spikes = useMemo(
    () =>
      Array.from({ length: SPIKE_COUNT }, (_, s) => (
        <g key={s} transform={`rotate(${s * (360 / SPIKE_COUNT)} 150 150) translate(150 150)`}>
          <rect x={-9} y={-92} width={18} height={30} rx={6} fill="var(--pha-phac)" />
          <path
            d="M0,-92 q-6,-6 0,-12 q6,-6 0,-12"
            fill="none"
            stroke="var(--pha-link)"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <path
            d="M-9,-122 a10,10 0 1,1 17,5"
            fill="none"
            stroke="var(--pha-peir)"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </g>
      )),
    [],
  );

  const current = STAGES[stage];
  const arrowGrey = `${uid}-ah-grey`;
  const arrowAccent = `${uid}-ah-accent`;
  const circuitTitle = `${uid}-circuit-title`;
  const particleTitle = `${uid}-particle-title`;

  return (
    <div className={`pha${className ? ` ${className}` : ''}`}>
      <div className="pha__scene" data-stage={stage}>
        {/* ---- Panel A: gene circuit ---- */}
        <div className="pha__panel pha__panel--circuit">
          <svg viewBox="0 0 600 300" role="img" aria-labelledby={circuitTitle}>
            <title id={circuitTitle}>
              lac-regulated phaA-phaB-phaC-peiR operon with RNA polymerase and repressor
            </title>
            <defs>
              <marker
                id={arrowGrey}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="var(--faint)" />
              </marker>
              <marker
                id={arrowAccent}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="var(--primary)" />
              </marker>
            </defs>

            <g className="pha-mv pha-rnap">
              <ellipse cx={106} cy={196} rx={80} ry={56} fill="var(--pha-rnap)" />
              <text className="pha-t-lab" x={106} y={190} textAnchor="middle" fill="var(--pha-rnap-ink)">
                RNA
              </text>
              <text className="pha-t-lab" x={106} y={210} textAnchor="middle" fill="var(--pha-rnap-ink)">
                polymerase
              </text>
            </g>

            <g>
              <rect x={30} y={172} width={142} height={48} fill="var(--pha-dna)" stroke="var(--pha-gene)" strokeWidth={2} />
              <text className="pha-t-box" x={101} y={202} textAnchor="middle" fill="var(--fg)">
                Promoter
              </text>

              <rect x={172} y={172} width={112} height={48} fill="var(--pha-dna)" stroke="var(--pha-gene)" strokeWidth={2} />
              <text className="pha-t-box" x={228} y={202} textAnchor="middle" fill="var(--fg)">
                Operator
              </text>

              <rect x={284} y={172} width={68} height={48} fill="var(--pha-gene)" stroke="var(--pha-gene)" strokeWidth={2} />
              <text className="pha-t-box" x={318} y={202} textAnchor="middle" fill="var(--pha-gene-ink)">
                phaA
              </text>

              <rect x={352} y={172} width={68} height={48} fill="var(--pha-gene)" stroke="var(--pha-gene)" strokeWidth={2} />
              <text className="pha-t-box" x={386} y={202} textAnchor="middle" fill="var(--pha-gene-ink)">
                phaB
              </text>

              <rect x={420} y={172} width={150} height={48} fill="var(--pha-gene)" stroke="var(--pha-gene)" strokeWidth={2} />
              <text className="pha-t-box" x={495} y={202} textAnchor="middle" fill="var(--pha-gene-ink)">
                phaC-peiR
              </text>
            </g>

            <g className="pha-fd pha-blocked">
              <path
                d="M288,166 L288,120 L470,120"
                fill="none"
                stroke="var(--faint)"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd={`url(#${arrowGrey})`}
              />
              <text className="pha-t-state" x={378} y={78} textAnchor="middle" fill="var(--danger)">
                No transcription
              </text>
              <g stroke="var(--danger)" strokeWidth={7} strokeLinecap="round">
                <line x1={365} y1={107} x2={391} y2={133} />
                <line x1={391} y1={107} x2={365} y2={133} />
              </g>
            </g>

            <g className="pha-fd pha-tx">
              <path
                className="pha-draw pha-txpath"
                d="M288,166 L288,120 L470,120"
                fill="none"
                stroke="var(--primary)"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd={`url(#${arrowAccent})`}
              />
              <text className="pha-t-state" x={378} y={78} textAnchor="middle" fill="var(--primary)">
                Transcription
              </text>
            </g>

            <path
              className="pha-draw pha-mrna"
              fill="none"
              stroke="var(--pha-rna)"
              strokeWidth={4}
              strokeLinecap="round"
              d="M292,248 q16,-13 32,0 t32,0 t32,0 t32,0 t32,0 t32,0 t32,0 t32,0"
            />
            <text className="pha-t-mini" x={292} y={278} fill="var(--pha-rna)" opacity={stage >= 2 ? 1 : 0}>
              mRNA
            </text>

            <g className="pha-mv pha-repressor">
              <rect x={178} y={130} width={104} height={38} rx={9} fill="var(--pha-repressor)" />
              <text className="pha-t-lab" x={230} y={155} textAnchor="middle" fill="#fff">
                Repressor
              </text>
              <g className="pha-fd pha-iptg">
                <circle cx={288} cy={166} r={13} fill="var(--amber)" stroke="var(--panel)" strokeWidth={2} />
                <text className="pha-t-mini" x={306} y={171} fill="var(--fg)">
                  IPTG
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* ---- Panel B: bionanoparticle ---- */}
        <div className="pha__panel pha__panel--particle">
          <svg viewBox="0 0 300 300" role="img" aria-labelledby={particleTitle}>
            <title id={particleTitle}>PHA bionanoparticle displaying PeiR on its surface</title>
            <g className="pha-particle">
              <g>{lipids}</g>
              <ellipse cx={150} cy={150} rx={56} ry={47} fill="var(--pha-core)" />
              <g stroke="var(--panel)" strokeWidth={2} fill="none" opacity={0.35}>
                <path d="M118,142 q16,-14 32,2 t32,-4" />
                <path d="M114,158 q18,12 36,-4 t34,8" />
                <path d="M128,170 q14,-10 28,4 t26,-6" />
              </g>
              <g className="pha-spikes">{spikes}</g>
            </g>
            <text className="pha-t-mini pha-ghost" x={150} y={288} textAnchor="middle" fill="var(--faint)">
              awaiting induction
            </text>
          </svg>
        </div>
      </div>

      <div className="pha__rail">
        <div className="pha__progress">
          <span style={{ width: `${Math.min(progress, 1) * 100}%` }} />
        </div>

        <div className="pha__steps">
          {STAGES.map((st, i) => (
            <button
              key={st.tag}
              type="button"
              className="pha__step"
              aria-current={i === stage ? 'true' : 'false'}
              onClick={() => {
                goTo(i);
                setPlaying(false);
              }}
            >
              <b>{st.tag}</b>
              <em>{st.name}</em>
            </button>
          ))}
        </div>

        <div className="pha__controls">
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? 'Pause' : 'Play'}
          </button>
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => {
              goTo(0);
              setPlaying(true);
            }}
          >
            Restart
          </button>
          <p className="pha__caption" aria-live="polite">
            {current.text}
          </p>
        </div>
      </div>

      <div className="pha__legend">
        <span className="pha__key">
          <i style={{ background: 'var(--pha-core)' }} />
          <b>PHA core</b>
        </span>
        <span className="pha__key">
          <i style={{ background: 'var(--pha-lipid)' }} />
          <b>Phospholipid layer</b>
        </span>
        <span className="pha__key">
          <i style={{ background: 'var(--pha-phac)' }} />
          <b>PhaC synthase</b>
        </span>
        <span className="pha__key">
          <i style={{ background: 'var(--pha-peir)' }} />
          <b>PeiR</b> C39 peptidase
        </span>
        <span className="pha__key">
          <i style={{ background: 'var(--pha-link)' }} />
          <b>PMBRs</b> cell-wall binding
        </span>
        <span className="pha__key">
          <i style={{ background: 'var(--pha-misc)' }} />
          <b>Other proteins</b>
        </span>
      </div>

      <p className="pha__foot">
        phaA · β-ketothiolase — phaB · acetoacetyl-CoA reductase — phaC · PHA synthase (C-terminal
        PeiR fusion)
      </p>
    </div>
  );
}
