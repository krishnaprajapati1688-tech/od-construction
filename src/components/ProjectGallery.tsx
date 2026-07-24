'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, PlayCircle } from 'lucide-react';

type Item = { src: string; kind: 'image' | 'video' };

export default function ProjectGallery({
  images,
  videos,
  title,
}: {
  images: string[];
  videos: string[];
  title: string;
}) {
  const items: Item[] = [
    ...videos.map((src) => ({ src, kind: 'video' as const })),
    ...images.map((src) => ({ src, kind: 'image' as const })),
  ];
  const [active, setActive] = useState<number | null>(null);

  if (items.length === 0) return null;

  const close = () => setActive(null);
  const prev = () => setActive((a) => (a === null ? null : (a - 1 + items.length) % items.length));
  const next = () => setActive((a) => (a === null ? null : (a + 1) % items.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.button
            key={item.src}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
            className="blueprint-corners group relative aspect-square overflow-hidden rounded-xl bg-midnight-900"
          >
            {item.kind === 'video' ? (
              <video src={item.src} className="h-full w-full object-cover" muted playsInline preload="metadata" />
            ) : (
              <Image src={item.src} alt={`${title} \u2014 site photo`} fill sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-midnight-950/0 transition-colors group-hover:bg-midnight-950/30">
              {item.kind === 'video' ? (
                <PlayCircle className="text-white opacity-90" size={28} />
              ) : (
                <ZoomIn className="text-white opacity-0 transition-opacity group-hover:opacity-100" size={20} />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
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
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 text-white/60 hover:text-gold-400 sm:left-8" aria-label="Previous">
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
              {items[active].kind === 'video' ? (
                <video src={items[active].src} className="max-h-[78vh] w-auto rounded-xl" controls autoPlay playsInline />
              ) : (
                <Image src={items[active].src} alt={title} width={1200} height={900} className="max-h-[78vh] w-auto rounded-xl object-contain" />
              )}
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 text-white/60 hover:text-gold-400 sm:right-8" aria-label="Next">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
