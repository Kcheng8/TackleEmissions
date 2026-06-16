const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Shared reveal-on-scroll preset for the Precision Dossier redesign.
 * Replaces the vanilla `.reveal` / `whenInView` system from the design
 * handoff with framer-motion's `whileInView`. Stagger children by passing
 * `0.08 * i` (mirrors the design's data-reveal-delay steps).
 */
export const fadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: EASE },
  }) as const;

/** Same easing/timing but driven on mount (used above-the-fold in the hero). */
export const fadeUpOnMount = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  }) as const;
