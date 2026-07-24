'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { company } from '@/lib/data';

export default function CallButton() {
  return (
    <motion.a
      href={`tel:${company.phoneRaw}`}
      aria-label="Call OD Construction now"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.4, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-midnight-950 shadow-[0_8px_30px_rgba(201,162,75,0.5)] sm:hidden"
    >
      <Phone size={22} strokeWidth={2.2} />
    </motion.a>
  );
}
