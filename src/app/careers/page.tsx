import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import CareersList from '@/components/CareersList';
import GeneralApplyButton from '@/components/GeneralApplyButton';
import { careers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join OD Construction \u2014 we\u2019re hiring site engineers, supervisors, civil engineers and project managers across our Mumbai and Thane sites.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Join Our Team" title="Careers at OD Construction" description={careers.intro} />

      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Reveal>
            <SectionEyebrow label="Current Openings" />
          </Reveal>

          <CareersList />

          <Reveal delay={0.3}>
            <div className="mt-14 rounded-2xl bg-midnight-950 p-10 text-center text-white sm:p-14">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">Don&apos;t see your role?</h3>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/60 sm:text-base">
                We&apos;re always open to meeting skilled construction professionals. Send us your resume and we&apos;ll
                reach out when a matching role opens up.
              </p>
              <GeneralApplyButton />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
