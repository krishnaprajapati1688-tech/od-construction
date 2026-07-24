import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { whyChooseUs } from '@/lib/data';
import { Users, ShieldCheck, HardHat, Clock3 } from 'lucide-react';

const icons = [Users, ShieldCheck, HardHat, Clock3];

export default function WhyChooseUs() {
  return (
    <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow label="Why Choose Us" align="center" />
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
            Built on standards that don&apos;t bend
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="blueprint-corners group h-full rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-midnight-950">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-midnight-950 dark:text-gold-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-midnight-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-midnight-600 dark:text-white/55">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
