import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import ContactCTA from '@/components/home/ContactCTA';
import { machinery, shuttering } from '@/lib/data';
import { Wrench, Layers3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Machinery & Equipment',
  description:
    'OD Construction operates a self-owned fleet of construction machinery and shuttering materials \u2014 concrete mixers, winch lifts, vibrators, steel cutting and bending machines, jack props and more.',
};

export default function MachineryPage() {
  return (
    <>
      <PageHero
        eyebrow="Self-Owned Fleet"
        title="Machinery & Shuttering Inventory"
        description="OD Construction owns and maintains its own machinery and shuttering stock \u2014 reducing downtime and keeping every site on schedule."
      />

      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                <Wrench size={20} />
              </span>
              <SectionEyebrow label="Machinery" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
              Equipment on Site
            </h2>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-midnight-900/10 dark:border-white/10">
            {machinery.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.03}>
                <div
                  className={`flex items-center justify-between px-6 py-4 sm:px-8 ${
                    i % 2 === 0 ? 'bg-concrete-50 dark:bg-midnight-900' : 'bg-white dark:bg-midnight-950'
                  }`}
                >
                  <span className="font-mono text-xs text-gold-600 dark:text-gold-400">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 px-4 text-sm font-medium text-midnight-800 dark:text-white/85 sm:text-base">
                    {m.name}
                  </span>
                  <span className="dim-tick text-midnight-500 dark:text-white/45">{m.qty}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                <Layers3 size={20} />
              </span>
              <SectionEyebrow label="Shuttering Materials" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
              Formwork & Shuttering Stock
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {shuttering.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.04}>
                <div className="blueprint-corners flex items-center justify-between rounded-xl bg-white p-6 dark:bg-midnight-950">
                  <span className="text-sm font-medium text-midnight-800 dark:text-white/85">{s.name}</span>
                  <span className="dim-tick text-gold-600 dark:text-gold-400">{s.qty}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
