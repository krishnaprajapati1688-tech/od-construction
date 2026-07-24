'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const serviceOptions = [
  'Building Construction',
  'Commercial Construction',
  'Residential Construction',
  'RCC Work',
  'Road Works',
  'Sewer Line Works',
  'Industrial Projects',
  'Renovation',
  'Turnkey Projects',
  'Other',
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const newErrors: Record<string, string> = {};
    if (name.length < 2) newErrors.name = 'Please enter your full name.';
    if (!/^[0-9+\s-]{8,15}$/.test(phone)) newErrors.phone = 'Please enter a valid phone number.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email.';
    if (message.length < 10) newErrors.message = 'Tell us a little more about your project.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl bg-gold-500/10 p-12 text-center"
      >
        <CheckCircle2 className="text-gold-500" size={44} />
        <h3 className="mt-5 font-display text-xl font-semibold text-midnight-900 dark:text-white">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-midnight-600 dark:text-white/60">
          Your enquiry has been received. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-gold-600 underline underline-offset-4 dark:text-gold-400"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="dim-tick mb-2 block text-midnight-500 dark:text-white/45">Full Name *</label>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-3 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-900 dark:text-white"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="dim-tick mb-2 block text-midnight-500 dark:text-white/45">Phone Number *</label>
          <input
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-3 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-900 dark:text-white"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="dim-tick mb-2 block text-midnight-500 dark:text-white/45">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-3 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-900 dark:text-white"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="dim-tick mb-2 block text-midnight-500 dark:text-white/45">Service Required</label>
          <select
            name="service"
            className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-3 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-900 dark:text-white"
          >
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="dim-tick mb-2 block text-midnight-500 dark:text-white/45">Project Details *</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your project \u2014 location, scope, and timeline."
          className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-3 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-900 dark:text-white"
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-midnight-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20 disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Enquiry <Send size={15} />
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-500">Something went wrong. Please call us directly instead.</p>
      )}
    </form>
  );
}
