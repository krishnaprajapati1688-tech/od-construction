import SectionEyebrow from './SectionEyebrow';

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="blueprint-bg relative overflow-hidden bg-midnight-950 pb-20 pt-40 text-white sm:pb-24 sm:pt-48">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <SectionEyebrow label={eyebrow} />
        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
