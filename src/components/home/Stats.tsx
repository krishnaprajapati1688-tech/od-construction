import AnimatedCounter from '@/components/AnimatedCounter';
import { stats } from '@/lib/data';

const extra = ['Professional Team', 'Quality Assurance', 'Safety First', 'On-Time Delivery'];

export default function Stats() {
  return (
    <section className="blueprint-bg relative bg-midnight-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-y-12 border-b border-white/10 pb-16 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <AnimatedCounter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                className="font-display text-4xl font-semibold text-gold-400 sm:text-5xl"
              />
              <p className="dim-tick mt-3 text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 pt-12 sm:grid-cols-4">
          {extra.map((e) => (
            <div key={e} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span className="text-sm text-white/70">{e}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
