import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow label="Client Voices" align="center" />
          <h2 className="mx-auto mt-6 max-w-xl text-center font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
            Trusted by developers &amp; institutions
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm dark:bg-midnight-950">
                <Quote className="text-gold-500" size={28} />
                <p className="mt-5 text-sm leading-relaxed text-midnight-700 dark:text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-midnight-900/10 pt-4 dark:border-white/10">
                  <p className="font-display text-base font-semibold text-midnight-900 dark:text-white">{t.name}</p>
                  <p className="dim-tick mt-1 text-gold-600 dark:text-gold-400">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
