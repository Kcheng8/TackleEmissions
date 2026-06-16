'use client';

import { useState } from 'react';
import Image from 'next/image';
import { navLinks } from '@/lib/data';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setMsg({ text: 'Please enter a valid email address.', ok: false });
      return;
    }
    setMsg({ text: 'Thanks — you’re on the list.', ok: true });
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <div className="footer__top">
            <span className="footer__logo">
              <Image src="/logo.png" alt="TacklEmission logo" width={44} height={44} />
            </span>
            <span className="brand__word footer__word">
              Tackl<span>Emission</span>
            </span>
          </div>
          <p className="footer__blurb">
            Engineering targeted, biodegradable nanotechnology to eliminate methane emissions from
            livestock agriculture.
          </p>
          <p className="footer__org">University of Queensland · Brisbane, Australia</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <h4>Navigation</h4>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__news">
          <h4>Stay updated</h4>
          <p>Occasional progress notes on our research and partnerships.</p>
          <form className="footer__form" onSubmit={onSubmit} noValidate>
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Email for newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
          {msg && (
            <p className={`footer__news-msg ${msg.ok ? 'ok' : 'err'}`} role="status">
              {msg.text}
            </p>
          )}
        </div>
      </div>

      <div className="wrap footer__bar">
        <p>© {year} TacklEmission. All rights reserved. University of Queensland research project.</p>
        <p className="footer__disc">
          * Efficacy projections based on literature data. Not yet validated in vivo.
        </p>
      </div>
    </footer>
  );
}
