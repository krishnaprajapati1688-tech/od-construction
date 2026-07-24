import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Building2, Calendar, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/projects';
import { getProjectMedia } from '@/lib/media';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import ContactCTA from '@/components/home/ContactCTA';
import ProjectGallery from '@/components/ProjectGallery';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const media = getProjectMedia(project);
  const isCompleted = project.status === 'completed';
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative flex h-[70vh] min-h-[480px] w-full items-end overflow-hidden bg-midnight-950">
        {media.heroVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src={media.heroVideo}
            poster={media.heroImage ?? undefined}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : media.heroImage ? (
          <Image src={media.heroImage} alt={project.title} fill priority className="object-cover opacity-70" />
        ) : (
          <div className="blueprint-bg absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/60 to-midnight-950/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-8">
          <Link href={isCompleted ? '/projects/completed' : '/projects/ongoing'} className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-gold-300">
            <ArrowLeft size={14} /> Back to {isCompleted ? 'Completed' : 'Ongoing'} Projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${
                isCompleted ? 'bg-gold-500 text-midnight-950' : 'bg-white/15 text-white backdrop-blur-md'
              }`}
            >
              {isCompleted && <CheckCircle2 size={11} />}
              {isCompleted ? 'Completed' : 'Ongoing'}
            </span>
            <span className="dim-tick text-gold-300">{project.category}</span>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-gold-400" /> {project.location}</span>
            <span className="flex items-center gap-2"><Building2 size={15} className="text-gold-400" /> {project.client}</span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-gold-400" />
              {isCompleted ? `Completed ${project.completionDate ?? project.year}` : project.year}
            </span>
          </div>

          {!isCompleted && typeof project.progress === 'number' && (
            <div className="mt-6 max-w-sm">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-white/50">
                <span>Construction Progress</span>
                <span className="text-gold-300">{project.progress}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-300" style={{ width: `${project.progress}%` }} />
              </div>
            </div>
          )}
          {isCompleted && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-wider text-gold-300 backdrop-blur-md">
              <CheckCircle2 size={14} /> 100% Complete &middot; Handed Over
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-midnight-950 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <Reveal>
            <SectionEyebrow label="Project Overview" />
            <p className="mt-6 text-lg leading-relaxed text-midnight-700 dark:text-white/70">
              {project.longDescription ?? project.description}
            </p>
          </Reveal>
        </div>
      </section>

      {(media.gallery.length > 0 || media.videos.length > 0) && (
        <section className="bg-concrete-50 py-20 dark:bg-midnight-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionEyebrow label="Site Gallery" />
              <h2 className="mt-6 font-display text-2xl font-semibold text-midnight-900 dark:text-white sm:text-3xl">
                From the site
              </h2>
            </Reveal>
            <div className="mt-10">
              <ProjectGallery images={media.gallery} videos={media.videos} title={project.title} />
            </div>
          </div>
        </section>
      )}

      <section className="bg-midnight-950 py-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          <div>
            <p className="dim-tick text-gold-400">Next Project</p>
            <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">{next.title}</p>
          </div>
          <Link
            href={`/projects/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold-400 hover:text-gold-300"
          >
            View <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
