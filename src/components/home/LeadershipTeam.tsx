import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { team } from '@/data/team';

export default function LeadershipTeam() {
  return (
    <section className="blueprint-bg relative bg-midnight-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow label="Leadership" align="center" />
          <h2 className="mx-auto mt-6 max-w-xl text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The people behind every handover
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {team.map((person, i) => (
            <Reveal key={person.slug} delay={i * 0.1}>
              <div className="blueprint-corners group relative h-full overflow-hidden rounded-2xl glass shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/10">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={`/team/${person.image}`}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-7 text-center">
                  <h3 className="font-display text-xl font-semibold">{person.name}</h3>
                  <p className="dim-tick mt-1.5 text-gold-400">{person.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{person.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
