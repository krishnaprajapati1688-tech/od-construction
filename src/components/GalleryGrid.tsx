'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowUpRight } from 'lucide-react';
import type { ProjectCategory, ProjectStatus } from '@/data/projects';

type GalleryImage = {
  src: string;
  caption: string;
  category: ProjectCategory;
  status: ProjectStatus;
  projectSlug: string;
  projectTitle: string;
};

type Filter = 'All' | ProjectCategory | 'Completed' | 'Ongoing';

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState<number | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(images.map((i) => i.category))).sort(),
    [images]
  );
  const filters: Filter[] = ['All', ...categories, 'Ongoing', 'Completed'];

  const filtered = useMemo(() => {
    if (filter === 'All') return images;
    if (filter === 'Ongoing' || filter === 'Completed') {
      return images.filter((i) => i.status === filter.toLowerCase());
    }
    return images.filter((i) => i.category === filter);
  }, [images, filter]);

  const close = () => setActive(null);
  const prev = () => setActive((a) => (a === null ? null : (a - 1 + filtered.length) % filtered.length));
  const next = () => setActive((a) => (a === null ? null : (a + 1) % filtered.length));

  return (
    <>
      <div className="flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
              filter === f
                ? 'bg-gold-500 text-midnight-950'
                : 'bg-concrete-50 text-midnight-600 hover:bg-concrete-100 dark:bg-midnight-900 dark:text-white/60 dark:hover:bg-midnight-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              layout
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="blueprint-corners group relative block w-full overflow-hidden rounded-2xl break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-midnight-950/85 via-midnight-950/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="self-start rounded-full bg-white/15 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {img.category}
                </span>
                <p className="text-left text-sm font-medium text-white">{img.caption}</p>
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                <ZoomIn size={16} />
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active !== null && filtered[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-midnight-950/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button onClick={close} className="absolute right-5 top-5 text-white/70 hover:text-gold-400" aria-label="Close">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 text-white/60 hover:text-gold-400 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={active}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[80vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[active].src}
                alt={filtered[active].caption}
                width={1200}
                height={900}
                className="max-h-[70vh] w-auto rounded-xl object-contain"
              />
              <div className="mt-4 flex flex-col items-center gap-2 text-center">
                <p className="text-sm text-white/70">{filtered[active].caption}</p>
                <Link
                  href={`/projects/${filtered[active].projectSlug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300"
                >
                  View {filtered[active].projectTitle} <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 text-white/60 hover:text-gold-400 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
