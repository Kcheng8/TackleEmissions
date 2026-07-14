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
            A student research team developing a biological feed additive to reduce methane emissions
            from cattle.
          </p>
          <p className="footer__org">University of Queensland · Brisbane, Australia</p>
          <a
            className="footer__linkedin"
            href="https://www.linkedin.com/company/tacklemission/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TacklEmission on LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.83v2.19h.05c.53-1 1.84-2.19 3.79-2.19 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.05c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-4V8z" />
            </svg>
            LinkedIn
          </a>
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

      <div className="wrap footer__partners">
        <span className="footer__partners-label">Affiliated with</span>
        <div className="footer__partners-logos">
          <span className="footer__partner">
            <Image
              src="/AIBN.png"
              alt="Australian Institute for Bioengineering and Nanotechnology (AIBN)"
              width={30}
              height={30}
            />
          </span>
          <span className="footer__partner">
            <Image
              src="/ASBC.png"
              alt="Australasian Synthetic Biology Challenge (ASBC)"
              width={73}
              height={30}
            />
          </span>
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
