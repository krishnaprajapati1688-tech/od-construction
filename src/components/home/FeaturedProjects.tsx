import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import ProjectCard from '@/components/ProjectCard';
import { completedProjects } from '@/data/projects';
import { getProjectMedia } from '@/lib/media';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedProjects() {
  const featured = completedProjects.slice(0, 4);

  return (
    <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionEyebrow label="Delivered" />
            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
              Landmarks we&apos;ve built across Mumbai
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects/completed"
              className="inline-flex items-center gap-2 rounded-full border border-midnight-900/15 px-6 py-3 text-sm font-medium text-midnight-900 transition hover:border-gold-500 hover:text-gold-600 dark:border-white/20 dark:text-white dark:hover:text-gold-400"
            >
              View All Projects <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} image={getProjectMedia(p).heroImage} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
