import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCTA from '@/components/home/ContactCTA';
import { services } from '@/lib/data';
import {
  Building2,
  Store,
  Home,
  Factory,
  Landmark,
  Route,
  Compass,
  Layers,
  Anchor,
  Shovel,
  Construction,
  Waves,
  Ruler,
  Wrench,
  Hammer,
  Droplets,
  MapPinned,
  ClipboardList,
  KeyRound,
} from 'lucide-react';

const icons = [
  Building2,
  Store,
  Home,
  Factory,
  Landmark,
  Route,
  Compass,
  Layers,
  Anchor,
  Shovel,
  Construction,
  Waves,
  Ruler,
  Hammer,
  Wrench,
  Droplets,
  MapPinned,
  ClipboardList,
  KeyRound,
];

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'OD Construction offers Building Construction, Commercial & Residential Construction, RCC Work, Road Works, Sewer Line Works, Industrial Projects, Renovation and Turnkey Solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Nineteen disciplines. One accountable contractor."
        description="From foundation to finish, OD Construction manages every stage of civil construction under a single, accountable roof."
      />

      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="blueprint-corners group h-full rounded-2xl bg-concrete-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-midnight-950 dark:bg-midnight-900 dark:hover:bg-midnight-800">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-midnight-950 dark:text-gold-400">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-midnight-900 transition-colors group-hover:text-white dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-midnight-600 transition-colors group-hover:text-white/60 dark:text-white/55">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-concrete-50 py-20 dark:bg-midnight-900">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Reveal>
            <div className="rounded-2xl bg-midnight-950 p-10 text-white sm:p-14">
              <p className="dim-tick text-gold-400">Our Process</p>
              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                Consultation &rarr; Planning &rarr; Execution &rarr; Quality Check &rarr; Handover
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Every OD Construction project runs through the same five-stage discipline &mdash; whether it&apos;s a
                single-storey renovation or a ground-plus-26 government tower. That consistency is why clients
                return, and why government bodies re-award us contracts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
