'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/projects';

export default function ProjectCard({
  project,
  image,
  index = 0,
}: {
  project: Project;
  image: string | null;
  index?: number;
}) {
  const isCompleted = project.status === 'completed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="blueprint-corners group relative block overflow-hidden rounded-2xl bg-midnight-900 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-midnight-950/30"
      >
        <div className="relative h-64 w-full overflow-hidden sm:h-72">
          {image && (
            <Image
              src={image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/30 to-transparent" />
          <span
            className={`absolute left-4 top-4 flex items-center gap-1 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${
              isCompleted ? 'bg-gold-500 text-midnight-950' : 'bg-white/15 text-white backdrop-blur-md'
            }`}
          >
            {isCompleted && <CheckCircle2 size={11} />}
            {isCompleted ? 'Completed' : 'Ongoing'}
          </span>
          <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-medium text-white/80 backdrop-blur-md">
            <Calendar size={11} /> {project.year}
          </span>
        </div>
        <div className="p-6">
          <p className="dim-tick text-gold-400">{project.category}</p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-white">{project.title}</h3>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-white/55">
            <MapPin size={14} className="text-gold-400" /> {project.location}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/50">{project.description}</p>

          {!isCompleted && typeof project.progress === 'number' && (
            <div className="mt-5">
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-wider text-white/40">
                <span>Progress</span>
                <span className="text-gold-400">{project.progress}%</span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-300" style={{ width: `${project.progress}%` }} />
              </div>
            </div>
          )}
          {isCompleted && (
            <div className="mt-5 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-gold-400/90">
              <CheckCircle2 size={12} /> Completed {project.completionDate ?? project.year}
            </div>
          )}

          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Project <ArrowUpRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
