'use client';

import { useState } from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ApplyModal from '@/components/ApplyModal';
import { careers } from '@/lib/data';

export default function CareersList() {
  const [activeJob, setActiveJob] = useState<string | null>(null);

  return (
    <>
      <div className="mt-10 space-y-5">
        {careers.openings.map((job, i) => (
          <Reveal key={job.title} delay={i * 0.07}>
            <div className="blueprint-corners flex flex-col gap-4 rounded-2xl bg-concrete-50 p-7 dark:bg-midnight-900 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                  <Briefcase size={18} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-midnight-900 dark:text-white">{job.title}</h3>
                  <p className="dim-tick mt-1 text-gold-600 dark:text-gold-400">{job.type}</p>
                  <p className="mt-2 max-w-xl text-sm text-midnight-600 dark:text-white/55">{job.desc}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveJob(job.title)}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-midnight-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 hover:shadow-lg dark:bg-gold-500 dark:text-midnight-950 dark:hover:bg-gold-400 sm:self-center"
              >
                Apply Now <ArrowRight size={14} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {activeJob && <ApplyModal jobTitle={activeJob} onClose={() => setActiveJob(null)} />}
    </>
  );
}
