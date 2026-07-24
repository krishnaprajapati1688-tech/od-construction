'use client';

import { motion } from 'framer-motion';
import { company } from '@/lib/data';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${company.phoneRaw}?text=Hello%20OD%20Construction%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with OD Construction on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.36.652 4.57 1.783 6.457L3 29l7.73-2.735A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.727c-1.98 0-3.834-.548-5.417-1.499l-.388-.23-4.588 1.623 1.542-4.47-.253-.404A9.63 9.63 0 0 1 5.727 15c0-5.663 4.61-10.273 10.277-10.273 5.663 0 10.273 4.61 10.273 10.273 0 5.663-4.61 10.727-10.273 10.727zm5.647-7.7c-.31-.155-1.833-.905-2.117-1.01-.284-.103-.492-.155-.698.156-.207.31-.802 1.01-.984 1.217-.181.207-.362.233-.672.078-.31-.156-1.31-.483-2.495-1.54-.923-.822-1.546-1.838-1.727-2.148-.181-.31-.02-.478.136-.633.14-.14.31-.362.465-.543.156-.181.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.156-.698-1.68-.956-2.302-.252-.605-.508-.524-.698-.534-.181-.008-.388-.01-.595-.01-.207 0-.543.078-.828.388-.284.31-1.087 1.063-1.087 2.592 0 1.53 1.113 3.008 1.268 3.216.155.207 2.19 3.343 5.307 4.689.741.32 1.319.512 1.77.655.744.237 1.42.204 1.955.124.596-.089 1.833-.75 2.092-1.474.259-.724.259-1.345.181-1.474-.077-.13-.284-.207-.595-.362z" />
      </svg>
    </motion.a>
  );
}
