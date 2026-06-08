import { navLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#030D14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C16E] to-[#3B82F6] flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
                  <path d="M10 2C6.686 2 4 4.686 4 8c0 2.21 1.13 4.16 2.847 5.305L6 18h8l-.847-4.695C14.87 12.16 16 10.21 16 8c0-3.314-2.686-6-6-6zm0 2a4 4 0 110 8A4 4 0 0110 4z" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Tackl<span className="text-[#00C16E]">Emission</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Engineering targeted biodegradable nanotechnology to eliminate methane emissions from livestock agriculture.
            </p>
            <p className="text-gray-500 text-xs">
              University of Queensland · Brisbane, Australia
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-[#00C16E] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                Interested in partnership, investment, or collaboration?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#00C16E] border border-[#00C16E]/30 px-4 py-2 rounded-full hover:bg-[#00C16E]/10 transition-all"
              >
                Get in Touch →
              </a>
              <p className="text-gray-500 text-xs pt-2">
                We respond within 48 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} TacklEmission. All rights reserved. University of Queensland research project.</p>
          <p className="text-gray-600">* Efficacy projections based on literature data. Not yet validated in vivo.</p>
        </div>
      </div>
    </footer>
  );
}
