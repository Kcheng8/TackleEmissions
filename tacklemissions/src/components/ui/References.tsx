'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export interface Reference {
  ref: string;
  source: string;
  url: string;
  cite: string;
}

export default function References({ items }: { items: Reference[] }) {
  return (
    <motion.div {...fadeUp()} className="refs">
      <span className="mono-label">REFERENCES</span>
      <ol>
        {items.map((r) => (
          <li key={r.url}>
            <span className="refs__author">{r.ref}.</span> {r.source}{' '}
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.cite}
            </a>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
