import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/home/ContactCTA';
import { ongoingProjects } from '@/data/projects';
import { getProjectMedia } from '@/lib/media';

export const metadata: Metadata = {
  title: 'Ongoing Projects',
  description:
    'See OD Construction\u2019s active construction sites \u2014 including residential towers currently under execution across Mumbai and Thane.',
};

export default function OngoingProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Currently Under Construction"
        title="Ongoing Projects"
        description="Live sites, active cranes, and teams working to programme right now."
      />
      <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} image={getProjectMedia(p).heroImage} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
