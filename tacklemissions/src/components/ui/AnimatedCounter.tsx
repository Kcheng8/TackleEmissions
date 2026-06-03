'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({ value, suffix = '', duration = 2, decimals = 0 }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const end = start + duration * 1000;
    const raf = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(eased * value);
      if (now < end) requestAnimationFrame(raf);
      else setDisplay(value);
    };
    requestAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
