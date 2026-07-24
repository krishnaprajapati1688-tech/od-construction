'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ApplyModal from '@/components/ApplyModal';

export default function GeneralApplyButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-midnight-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20"
      >
        Send Your Resume <ArrowRight size={16} />
      </button>
      {open && <ApplyModal jobTitle="General Application" onClose={() => setOpen(false)} />}
    </>
  );
}
