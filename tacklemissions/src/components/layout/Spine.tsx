'use client';

import { useEffect, useState } from 'react';

/* Section ids in document order — index drives the spine coordinate readout. */
const SECTION_IDS = [
  'problem',
  'solution',
  'technology',
  'market',
  'research',
  'team',
  'impact',
  'investors',
  'contact',
];

export default function Spine() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = SECTION_IDS.indexOf(e.target.id);
          if (idx >= 0) setActiveIndex(idx);
        });
      },
      { threshold: 0.4, rootMargin: '-30% 0px -55% 0px' },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      io.disconnect();
    };
  }, []);

  const coord = String(activeIndex).padStart(2, '0');

  return (
    <aside className="spine" aria-hidden="true">
      <div className="spine__mark">TE</div>
      <div className="spine__track">
        <span className="spine__progress" style={{ height: `${progress}%` }} />
      </div>
      <div className="spine__coord">
        {coord}
        <span>/</span>08
      </div>
      <div className="spine__rot">TACKLEMISSION · UQ</div>
    </aside>
  );
}
