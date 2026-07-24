import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { company } from '@/lib/data';

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-midnight-950 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionEyebrow label="Who We Are" />
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-midnight-900 dark:text-white sm:text-4xl md:text-[2.75rem]">
            Fifteen years of structural
            <span className="text-gradient-gold"> discipline</span>, built brick by brick from Chembur.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-midnight-700 dark:text-white/65 sm:text-lg">
            Founded in 2008 by Omprakash Prajapati, {company.name} has grown from a single-site contractor
            into a full-scale civil construction company trusted with residential towers, commercial
            landmarks, defence infrastructure and municipal works across Mumbai and Thane.
          </p>
          <p className="mt-4 text-base leading-relaxed text-midnight-700 dark:text-white/65 sm:text-lg">
            Today, with a company value exceeding ₹5 Crore and over 100 completed projects, we remain a
            hands-on, engineering-led team &mdash; specialising in Building Construction, RCC Structures,
            Road Works, Sewer Line Projects, Commercial & Residential Buildings, Government Projects,
            Industrial Construction and Turnkey Solutions.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-midnight-900/10 pt-8 dark:border-white/10 sm:grid-cols-4">
            {['Building Construction', 'RCC Structures', 'Government Projects', 'Turnkey Solutions'].map((item) => (
              <div key={item} className="dim-tick text-midnight-600 dark:text-white/50">
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="blueprint-corners relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/projects/manpada-thane-mmrda/hero-01.jpg"
              alt="OD Construction completed residential tower"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="glass absolute -bottom-8 -left-6 rounded-2xl px-6 py-5 sm:-left-10">
            <p className="font-display text-3xl font-semibold text-gold-400">2008</p>
            <p className="dim-tick mt-1 text-midnight-900 dark:text-white/70">Company Founded</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
