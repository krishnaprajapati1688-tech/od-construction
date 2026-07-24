import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';
import { clients } from '@/lib/data';
import { Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    'OD Construction has been trusted by MMRDA, MES, BARC, Lodha Group and leading commercial developers across Mumbai.',
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trusted Partnerships"
        title="Our Clients"
        description="Government bodies, defence institutions and premium developers who have trusted OD Construction with their most demanding projects."
      />

      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {clients.map((c, i) => (
              <Reveal key={c} delay={i * 0.06}>
                <div className="blueprint-corners flex items-center gap-4 rounded-2xl bg-concrete-50 p-7 dark:bg-midnight-900">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                    <Building size={20} />
                  </span>
                  <span className="text-sm font-medium leading-snug text-midnight-800 dark:text-white/85 sm:text-base">
                    {c}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCTA />
    </>
  );
}
