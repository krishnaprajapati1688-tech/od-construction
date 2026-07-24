import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="blueprint-bg flex min-h-[80vh] flex-col items-center justify-center bg-midnight-950 px-6 text-center text-white">
      <p className="dim-tick text-gold-400">Error 404</p>
      <h1 className="mt-6 font-display text-5xl font-semibold sm:text-7xl">Page Not Found</h1>
      <p className="mt-5 max-w-md text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-midnight-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </section>
  );
}
