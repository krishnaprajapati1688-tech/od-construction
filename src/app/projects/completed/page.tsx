import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/home/ContactCTA';
import { completedProjects } from '@/data/projects';
import { getProjectMedia } from '@/lib/media';

export const metadata: Metadata = {
  title: 'Completed Projects',
  description:
    'Explore OD Construction\u2019s portfolio of completed projects \u2014 residential towers, government staff quarters, commercial buildings and institutional structures across Mumbai and Thane.',
};

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow={`${completedProjects.length}+ Handovers`}
        title="Completed Projects"
        description="A portfolio built on precision, discipline and delivering exactly what was promised."
      />
      <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} image={getProjectMedia(p).heroImage} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
