'use client';

import { useEffect, useState } from 'react';

export default function Spine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <aside className="spine" aria-hidden="true">
      <div className="spine__mark">TE</div>
      <div className="spine__track">
        <span className="spine__progress" style={{ height: `${progress}%` }} />
      </div>
      <div className="spine__rot">TACKLEMISSION · UQ</div>
    </aside>
  );
}
