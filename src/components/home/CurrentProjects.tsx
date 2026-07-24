import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { featuredProjects } from '@/data/projects';
import { getProjectMedia } from '@/lib/media';
import { ArrowUpRight, MapPin, PlayCircle } from 'lucide-react';

export default function CurrentProjects() {
  return (
    <section className="bg-midnight-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow label="Live On Site" />
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Current Projects &mdash; real sites, real progress
          </h2>
          <p className="mt-4 max-w-xl text-sm text-white/55 sm:text-base">
            No stock photography. What you see below is footage and photography from our own active sites,
            updated as construction progresses.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, i) => {
            const media = getProjectMedia(project);
            const hasVideo = Boolean(media.heroVideo);
            return (
              <Reveal key={project.slug} delay={i * 0.1}>
                <Link href={`/projects/${project.slug}`} className="blueprint-corners group relative block overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-midnight-900 sm:aspect-[4/5]">
                    {hasVideo ? (
                      <video
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={media.heroVideo!}
                        poster={media.heroImage ?? undefined}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : media.heroImage ? (
                      <Image
                        src={media.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/20 to-transparent" />

                    {hasVideo && (
                      <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                        <PlayCircle size={12} /> Live Site Video
                      </span>
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-midnight-950">
                      Ongoing
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <p className="dim-tick text-gold-300">{project.category} &middot; {project.year}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                        <MapPin size={14} className="text-gold-300" /> {project.location}
                      </p>
                      {typeof project.progress === 'number' && (
                        <div className="mt-4 max-w-xs">
                          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-wider text-white/50">
                            <span>Progress</span>
                            <span className="text-gold-300">{project.progress}%</span>
                          </div>
                          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/15">
                            <div className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-300" style={{ width: `${project.progress}%` }} />
                          </div>
                        </div>
                      )}
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300">
                        View Live Site <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
