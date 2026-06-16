'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { name: string; org: string; email: string; type: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const enquiryTypes = [
  'Industry Partnership',
  'Investment Enquiry',
  'Research Collaboration',
  'Media & Press',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState<Fields>({
    name: '',
    org: '',
    email: '',
    type: enquiryTypes[0],
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name: keyof Fields, value: string): string => {
    if (name === 'name' && !value.trim()) return 'This field is required.';
    if (name === 'email') {
      if (!value.trim()) return 'This field is required.';
      if (!EMAIL_RE.test(value.trim())) return 'Enter a valid email address.';
    }
    if (name === 'message' && !value.trim()) return 'This field is required.';
    return '';
  };

  const onBlur = (name: keyof Fields) => () => {
    const msg = validateField(name, form[name]);
    setErrors((e) => ({ ...e, [name]: msg }));
  };

  const onChange = (name: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: validateField(name, value) } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      message: validateField('message', form.message),
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="section section--ink">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ 08 — CONTACT ]</span>
            <span className="shead__tag tag--green">48-HOUR RESPONSE</span>
          </div>
          <h2 className="shead__title">
            Let&apos;s build the future <em>together</em>
          </h2>
          <p className="shead__lede">
            Whether you&apos;re an investor, research partner, industry collaborator, or simply
            curious — we&apos;d love to hear from you.
          </p>
        </motion.header>

        <div className="contact">
          <motion.aside {...fadeUp()} className="contact__info">
            <h3 className="contact__h">Contact details</h3>
            <dl className="contact__dl">
              <div>
                <dt>Email</dt>
                <dd>contact@tacklemission.com</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Brisbane, Queensland, Australia</dd>
              </div>
              <div>
                <dt>Affiliation</dt>
                <dd>University of Queensland</dd>
              </div>
              <div>
                <dt>Response time</dt>
                <dd>Within 48 hours</dd>
              </div>
            </dl>

            <div className="contact__next">
              <h4>What happens next?</h4>
              <ol>
                <li>
                  <span>1</span>We review your message and identify the best point of contact.
                </li>
                <li>
                  <span>2</span>We respond within 48 hours with an appropriate next step.
                </li>
                <li>
                  <span>3</span>We schedule an introductory call or share requested materials.
                </li>
              </ol>
            </div>

            <div className="contact__social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X / Twitter">X</a>
              <a href="#" aria-label="ResearchGate">RG</a>
            </div>
          </motion.aside>

          <motion.form {...fadeUp(0.08)} className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <div className={`field${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="cf-name">
                  Full name <span>*</span>
                </label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange('name')}
                  onBlur={onBlur('name')}
                />
                <p className="field__err">{errors.name}</p>
              </div>
              <div className="field">
                <label htmlFor="cf-org">Organisation</label>
                <input
                  type="text"
                  id="cf-org"
                  name="org"
                  placeholder="Company or University"
                  autoComplete="organization"
                  value={form.org}
                  onChange={onChange('org')}
                />
              </div>
            </div>

            <div className={`field${errors.email ? ' has-error' : ''}`}>
              <label htmlFor="cf-email">
                Email address <span>*</span>
              </label>
              <input
                type="email"
                id="cf-email"
                name="email"
                placeholder="jane@company.com"
                autoComplete="email"
                value={form.email}
                onChange={onChange('email')}
                onBlur={onBlur('email')}
              />
              <p className="field__err">{errors.email}</p>
            </div>

            <div className="field">
              <label htmlFor="cf-type">Enquiry type</label>
              <select id="cf-type" name="type" value={form.type} onChange={onChange('type')}>
                {enquiryTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className={`field${errors.message ? ' has-error' : ''}`}>
              <label htmlFor="cf-msg">
                Message <span>*</span>
              </label>
              <textarea
                id="cf-msg"
                name="message"
                rows={5}
                placeholder="Tell us about your interest in TacklEmission, any specific questions, or how you'd like to collaborate…"
                value={form.message}
                onChange={onChange('message')}
                onBlur={onBlur('message')}
              />
              <p className="field__err">{errors.message}</p>
            </div>

            <button className="btn btn--primary btn--full" type="submit" disabled={submitting}>
              <span className="btn__label">{submitting ? 'Sending…' : 'Send message'}</span>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M14 2L7 9M14 2l-4.5 12-2.5-5-5-2.5L14 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="contact__priv">
              Your message is sent directly to the TacklEmission team. We do not share contact
              details with third parties.
            </p>

            {submitted && (
              <div className="contact__success">
                <div className="contact__success-ic">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                    <path d="M15 24l6 6 12-13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Message sent</h3>
                <p>Thanks for reaching out. We&apos;ll get back to you within 48 hours.</p>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
