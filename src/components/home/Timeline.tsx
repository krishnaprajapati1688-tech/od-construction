import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { timeline } from '@/lib/data';

export default function Timeline() {
  return (
    <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow label="Our Journey" align="center" />
          <h2 className="mx-auto mt-6 max-w-xl text-center font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
            Since 2008
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-gold-500 via-gold-500/40 to-transparent sm:left-1/2" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-2 pl-8 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pr-14 sm:text-right' : 'sm:ml-auto sm:pl-14'
                  }`}
                >
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-white dark:bg-midnight-950 sm:left-1/2 sm:-translate-x-1/2" />
                  <span className="dim-tick text-gold-600 dark:text-gold-400">{t.year}</span>
                  <h3 className="font-display text-xl font-semibold text-midnight-900 dark:text-white">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-midnight-600 dark:text-white/55">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
