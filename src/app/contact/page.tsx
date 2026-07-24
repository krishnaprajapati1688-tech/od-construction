import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import ContactForm from '@/components/ContactForm';
import { company } from '@/lib/data';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with OD Construction \u2014 call, email or visit our Chembur East office in Mumbai to discuss your construction project.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your project."
        description="Call us, WhatsApp us, or fill out the form below \u2014 our team responds within 24 hours."
      />

      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionEyebrow label="Contact Details" />
            <h2 className="mt-6 font-display text-2xl font-semibold text-midnight-900 dark:text-white sm:text-3xl">
              We&apos;re based in Chembur, and we build across Mumbai &amp; Thane.
            </h2>
            <ul className="mt-10 space-y-7">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                  <MapPin size={19} />
                </span>
                <div>
                  <p className="dim-tick text-midnight-500 dark:text-white/45">Office Address</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-midnight-800 dark:text-white/75">{company.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                  <Phone size={19} />
                </span>
                <div>
                  <p className="dim-tick text-midnight-500 dark:text-white/45">Phone</p>
                  <a href={`tel:${company.phoneRaw}`} className="mt-1.5 block text-sm font-medium text-midnight-800 hover:text-gold-600 dark:text-white/75">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                  <Mail size={19} />
                </span>
                <div>
                  <p className="dim-tick text-midnight-500 dark:text-white/45">Email</p>
                  <a href={`mailto:${company.email}`} className="mt-1.5 block break-all text-sm font-medium text-midnight-800 hover:text-gold-600 dark:text-white/75">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                  <Clock size={19} />
                </span>
                <div>
                  <p className="dim-tick text-midnight-500 dark:text-white/45">Working Hours</p>
                  <p className="mt-1.5 text-sm text-midnight-800 dark:text-white/75">Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl bg-concrete-50 p-8 dark:bg-midnight-900 sm:p-10 lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
