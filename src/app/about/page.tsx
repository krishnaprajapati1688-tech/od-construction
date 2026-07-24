import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import Timeline from '@/components/home/Timeline';
import LeadershipTeam from '@/components/home/LeadershipTeam';
import ContactCTA from '@/components/home/ContactCTA';
import Image from 'next/image';
import { company, whyChooseUs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about OD Construction \u2014 a trusted civil construction company founded in 2008 by Omprakash Prajapati, based in Chembur East, Mumbai.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OD Construction"
        title="Fifteen years of building with integrity."
        description="A civil construction company founded on-site, run by engineers who still visit every project personally."
      />

      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal className="blueprint-corners relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image src="/projects/new-tilak-nagar-residential/hero-01.jpg" alt="Completed OD Construction residential tower" fill className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow label="Our Story" />
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
              From a single site in Chembur to 80+ projects across Mumbai
            </h2>
            <p className="mt-6 text-base leading-relaxed text-midnight-700 dark:text-white/65">
              {company.name} was established in 2008 by <strong className="text-midnight-900 dark:text-white">Omprakash Prajapati</strong>,
              a civil contractor who built the company&apos;s reputation the traditional way &mdash; on-site, project by
              project, client by client. What began as a building contracting outfit has grown into a full-service
              civil construction company entrusted with residential towers, commercial complexes, defence
              infrastructure and municipal works.
            </p>
            <p className="mt-4 text-base leading-relaxed text-midnight-700 dark:text-white/65">
              Today the company is led by a close-knit family leadership team: <strong className="text-midnight-900 dark:text-white">Ankit
              Prajapati</strong> as Director, overseeing execution and client relationships, and <strong className="text-midnight-900 dark:text-white">Krishna
              Prajapati</strong> as Digital Operations Manager, modernising how the company documents and reports
              progress. Together, they maintain the founder&apos;s original standard: quality construction, delivered
              on time, without excuses.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-midnight-900/10 pt-8 dark:border-white/10 sm:grid-cols-4">
              <div>
                <p className="font-display text-2xl font-semibold text-gold-500">2008</p>
                <p className="dim-tick mt-1 text-midnight-500 dark:text-white/45">Founded</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-gold-500">₹5 Cr+</p>
                <p className="dim-tick mt-1 text-midnight-500 dark:text-white/45">Company Value</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-gold-500">80+</p>
                <p className="dim-tick mt-1 text-midnight-500 dark:text-white/45">Projects</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-gold-500">300+</p>
                <p className="dim-tick mt-1 text-midnight-500 dark:text-white/45">Workforce</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-concrete-50 py-24 dark:bg-midnight-900 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Reveal>
              <div className="blueprint-corners h-full rounded-2xl bg-white p-9 dark:bg-midnight-950">
                <SectionEyebrow label="Our Mission" />
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-3xl">
                  To engineer structures that outlast the contract.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-midnight-600 dark:text-white/55">
                  Every project we take on is executed with the same standard, whether it&apos;s a single-storey
                  renovation or a ground-plus-26 government tower &mdash; disciplined engineering, transparent
                  reporting, and a handover our clients never have to think about again.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="blueprint-corners h-full rounded-2xl bg-white p-9 dark:bg-midnight-950">
                <SectionEyebrow label="Our Vision" />
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-3xl">
                  To be Mumbai&apos;s most trusted civil construction partner.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-midnight-600 dark:text-white/55">
                  We want OD Construction to be the name government bodies, developers and institutions call
                  first &mdash; known not just for what we build, but for how reliably we build it, project after
                  project, decade after decade.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <SectionEyebrow label="Safety & Quality" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
              Non-negotiable, on every site.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <Reveal key={item.title} className="rounded-2xl bg-concrete-50 p-7 dark:bg-midnight-900">
                <h3 className="font-display text-lg font-semibold text-midnight-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-midnight-600 dark:text-white/55">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <LeadershipTeam />
      <ContactCTA />
    </>
  );
}
