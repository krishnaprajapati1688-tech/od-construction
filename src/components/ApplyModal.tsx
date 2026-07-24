'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Paperclip, CheckCircle2 } from 'lucide-react';
import { company } from '@/lib/data';

export default function ApplyModal({ jobTitle, onClose }: { jobTitle: string; onClose: () => void }) {
  const [fields, setFields] = useState({ name: '', phone: '', email: '', experience: '', city: '' });
  const [resumeName, setResumeName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const validExt = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!validExt) {
      setErrors((prev) => ({ ...prev, resume: 'Please upload a PDF, DOC or DOCX file.' }));
      setResumeName('');
      return;
    }
    setErrors((prev) => ({ ...prev, resume: '' }));
    setResumeName(file.name);
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (fields.name.trim().length < 2) newErrors.name = 'Please enter your full name.';
    if (!/^[0-9+\s-]{8,15}$/.test(fields.phone)) newErrors.phone = 'Please enter a valid phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) newErrors.email = 'Please enter a valid email.';
    if (fields.experience.trim().length < 1) newErrors.experience = 'Please enter your experience.';
    if (fields.city.trim().length < 2) newErrors.city = 'Please enter your current city.';
    if (!resumeName) newErrors.resume = 'Please select your resume file.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const subject = `Application for ${jobTitle}`;
    const body = [
      `Dear OD Construction Hiring Team,`,
      '',
      `I would like to apply for the position of ${jobTitle} at OD Construction.`,
      '',
      `Full Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email}`,
      `Experience: ${fields.experience}`,
      `Current City: ${fields.city}`,
      '',
      `My resume (${resumeName}) is attached to this email.`,
      '',
      `Regards,`,
      fields.name,
    ].join('\n');

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.setTimeout(() => {
      window.location.href = mailto;
    }, 700);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[95] flex items-center justify-center bg-midnight-950/80 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 dark:bg-midnight-900 sm:p-9"
        >
          <button onClick={onClose} aria-label="Close" className="absolute right-5 top-5 text-midnight-400 hover:text-gold-500 dark:text-white/50">
            <X size={22} />
          </button>

          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="text-gold-500" size={44} />
              <h3 className="mt-5 font-display text-xl font-semibold text-midnight-900 dark:text-white">Opening your email app&hellip;</h3>
              <p className="mt-2 max-w-xs text-sm text-midnight-600 dark:text-white/60">
                Please attach <strong>{resumeName}</strong> to the email before sending.
              </p>
            </div>
          ) : (
            <>
              <p className="dim-tick text-gold-600 dark:text-gold-400">Apply Now</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-midnight-900 dark:text-white sm:text-2xl">{jobTitle}</h3>

              <form onSubmit={handleSend} noValidate className="mt-7 space-y-4">
                <div>
                  <label className="dim-tick mb-1.5 block text-midnight-500 dark:text-white/45">Full Name *</label>
                  <input
                    value={fields.name}
                    onChange={update('name')}
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-2.5 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-950 dark:text-white"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="dim-tick mb-1.5 block text-midnight-500 dark:text-white/45">Phone *</label>
                    <input
                      value={fields.phone}
                      onChange={update('phone')}
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-2.5 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-950 dark:text-white"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="dim-tick mb-1.5 block text-midnight-500 dark:text-white/45">Email *</label>
                    <input
                      value={fields.email}
                      onChange={update('email')}
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-2.5 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-950 dark:text-white"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="dim-tick mb-1.5 block text-midnight-500 dark:text-white/45">Experience *</label>
                    <input
                      value={fields.experience}
                      onChange={update('experience')}
                      type="text"
                      placeholder="e.g. 3 years"
                      className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-2.5 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-950 dark:text-white"
                    />
                    {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience}</p>}
                  </div>
                  <div>
                    <label className="dim-tick mb-1.5 block text-midnight-500 dark:text-white/45">Current City *</label>
                    <input
                      value={fields.city}
                      onChange={update('city')}
                      type="text"
                      placeholder="e.g. Mumbai"
                      className="w-full rounded-xl border border-midnight-900/15 bg-white px-4 py-2.5 text-sm text-midnight-900 outline-none transition focus:border-gold-500 dark:border-white/15 dark:bg-midnight-950 dark:text-white"
                    />
                    {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                  </div>
                </div>

                <div>
                  <label className="dim-tick mb-1.5 block text-midnight-500 dark:text-white/45">Resume (PDF, DOC, DOCX) *</label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-midnight-900/20 bg-concrete-50 px-4 py-3.5 text-sm text-midnight-600 transition hover:border-gold-500 dark:border-white/20 dark:bg-midnight-950 dark:text-white/60">
                    <Paperclip size={16} className="text-gold-500 shrink-0" />
                    <span className="truncate">{resumeName || 'Choose a file to upload'}</span>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="hidden" />
                  </label>
                  {errors.resume && <p className="mt-1 text-xs text-red-500">{errors.resume}</p>}
                </div>

                <p className="text-xs leading-relaxed text-midnight-500 dark:text-white/40">
                  This opens your email app with the position, your details and subject line pre-filled. You&apos;ll
                  just need to attach your resume file and hit send.
                </p>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-midnight-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20"
                >
                  Send Resume <Send size={15} />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
