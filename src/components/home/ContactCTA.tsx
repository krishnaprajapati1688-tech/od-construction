import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { ArrowRight, Phone } from 'lucide-react';
import { company } from '@/lib/data';

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-midnight-950 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Have a project in mind? <span className="text-gradient-gold">Let&apos;s build it right.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            From residential towers to government infrastructure &mdash; talk to our team about your
            construction requirements today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-midnight-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20"
            >
              Get a Free Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-gold-400 hover:text-gold-300"
            >
              <Phone size={15} /> {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
