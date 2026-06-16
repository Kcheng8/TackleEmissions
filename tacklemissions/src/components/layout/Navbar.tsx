'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { navLinks } from '@/lib/data';

const NAV_HEIGHT = 66;

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

const num = (i: number) => String(i + 1).padStart(2, '0');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.4, rootMargin: '-30% 0px -55% 0px' },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.replace('#', ''));
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  const go = (href: string, closeMenu = false) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (closeMenu) {
      setOpen(false);
      setTimeout(() => scrollToSection(href), 300);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="TacklEmission home" onClick={go('#top')}>
          <span className="brand__mark" aria-hidden="true">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 7 }}
            />
          </span>
          <span className="brand__word">
            Tackl<span>Emission</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={go(l.href)}
              className={active === l.href ? 'is-current' : undefined}
            >
              <span>{num(i)}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--ghost btn--sm" href="#investors" onClick={go('#investors')}>
            Partner With Us
          </a>
          <button
            className="nav__toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobileMenu"
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} onClick={go(l.href, true)}>
                <span>{num(i)}</span> {l.label}
              </a>
            ))}
            <a className="nav__mobile-cta" href="#investors" onClick={go('#investors', true)}>
              Partner With Us →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
