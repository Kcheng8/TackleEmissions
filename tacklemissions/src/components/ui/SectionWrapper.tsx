'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({ children, id, className = '', delay = 0 }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
