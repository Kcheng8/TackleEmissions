'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', message: '', type: 'Partnership' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00C16E]/50 focus:bg-white/6 transition-all duration-200';

  return (
    <SectionWrapper id="contact" className="py-24 bg-[#030D14] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00C16E]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 text-xs font-medium text-[#00C16E] border border-[#00C16E]/25 bg-[#00C16E]/8 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C16E] animate-pulse-glow" />
            Get in Touch
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s Build the Future{' '}
            <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re an investor, research partner, industry collaborator, or simply
            curious — we&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Info panel */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-8">
            {/* Contact info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Details</h3>
              <div className="space-y-3">
                {[
                  { icon: '📧', label: 'Email', value: 'kierrencheng10@gmail.com' },
                  { icon: '📍', label: 'Location', value: 'Brisbane, Queensland, Australia' },
                  { icon: '🎓', label: 'Affiliation', value: 'University of Queensland' },
                  { icon: '⏱', label: 'Response Time', value: 'Within 48 hours' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to expect */}
            <div className="glass-card rounded-2xl p-5">
              <h4 className="text-white font-semibold text-sm mb-4">What Happens Next?</h4>
              <div className="space-y-3">
                {[
                  { step: '1', text: 'We review your message and identify the best point of contact.' },
                  { step: '2', text: 'We respond within 48 hours with an appropriate next step.' },
                  { step: '3', text: 'We schedule an introductory call or share requested materials.' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00C16E]/15 border border-[#00C16E]/30 flex items-center justify-center text-[10px] font-bold text-[#00C16E] flex-shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.12)} className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle className="w-16 h-16 text-[#00C16E] mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you within 48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-1.5">Organisation</label>
                    <input
                      type="text"
                      placeholder="Company or University"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Enquiry Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className={inputClass + ' cursor-pointer'}
                  >
                    <option value="Partnership">Industry Partnership</option>
                    <option value="Investment">Investment Enquiry</option>
                    <option value="Research">Research Collaboration</option>
                    <option value="Media">Media & Press</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your interest in TacklEmissions, any specific questions, or how you'd like to collaborate…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass + ' resize-none'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#00C16E] to-[#009852] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#00C16E]/25 hover:scale-[1.01] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
                <p className="text-gray-600 text-xs text-center">
                  Your message is sent directly to the TacklEmissions team. We do not share contact details with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
