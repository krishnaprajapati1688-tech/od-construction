import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { services } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesHome() {
  const preview = services.slice(0, 9);
  return (
    <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionEyebrow label="What We Do" />
            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
              {services.length} disciplines. One accountable contractor.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-midnight-900/15 px-6 py-3 text-sm font-medium text-midnight-900 transition hover:border-gold-500 hover:text-gold-600 dark:border-white/20 dark:text-white dark:hover:text-gold-400"
            >
              View All Services <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-midnight-900/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} y={16}>
              <div className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-midnight-950 dark:bg-midnight-950 dark:hover:bg-midnight-900">
                <span className="dim-tick text-gold-600 dark:text-gold-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-midnight-900 transition-colors group-hover:text-white dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-midnight-600 transition-colors group-hover:text-white/60 dark:text-white/55">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
