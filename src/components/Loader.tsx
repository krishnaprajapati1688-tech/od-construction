'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('od-loaded')) {
      setLoading(false);
      return;
    }
    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('od-loaded', '1');
    }, 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="blueprint-bg fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight-950"
        >
          {/* Blueprint-to-building: wireframe skyline draws itself, then solidifies gold */}
          <svg width="180" height="120" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[
              { x: 0, y: 70, w: 26, h: 70 },
              { x: 34, y: 40, w: 30, h: 100 },
              { x: 72, y: 10, w: 34, h: 130 },
              { x: 114, y: 35, w: 24, h: 105 },
              { x: 146, y: 55, w: 20, h: 85 },
              { x: 174, y: 65, w: 18, h: 75 },
            ].map((bar, i) => (
              <g key={i}>
                <motion.rect
                  x={bar.x}
                  y={bar.y}
                  width={bar.w}
                  height={bar.h}
                  fill="none"
                  stroke="#C9A24B"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0.6 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.09, ease: 'easeOut' }}
                />
                <motion.rect
                  x={bar.x}
                  y={bar.y}
                  width={bar.w}
                  height={bar.h}
                  fill="#C9A24B"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.07, ease: 'easeOut' }}
                />
              </g>
            ))}
          </svg>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="dim-tick mt-6 text-gold-300"
          >
            OD CONSTRUCTION &middot; EST. 2008
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
