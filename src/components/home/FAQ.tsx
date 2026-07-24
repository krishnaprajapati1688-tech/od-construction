'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { faqs } from '@/lib/data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow label="Frequently Asked" align="center" />
          <h2 className="mx-auto mt-6 max-w-xl text-center font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <div className="mt-14 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl bg-white dark:bg-midnight-950">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-midnight-900 dark:text-white sm:text-lg">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600 dark:text-gold-400"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-midnight-600 dark:text-white/60 sm:px-7">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
