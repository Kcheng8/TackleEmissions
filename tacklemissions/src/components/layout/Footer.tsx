import Image from 'next/image';
import { navLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

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
