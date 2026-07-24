import Reveal from '@/components/Reveal';
import SectionEyebrow from '@/components/SectionEyebrow';
import { company } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow label="Get In Touch" />
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-midnight-900 dark:text-white sm:text-4xl">
            Visit our Chembur office
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, label: 'Address', value: company.address },
            { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phoneRaw}` },
            { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
            { icon: Clock, label: 'Working Hours', value: 'Mon \u2013 Sat: 9:00 AM \u2013 7:00 PM' },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="blueprint-corners h-full rounded-2xl bg-concrete-50 p-7 dark:bg-midnight-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
                  <item.icon size={19} />
                </span>
                <p className="dim-tick mt-5 text-midnight-500 dark:text-white/45">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-2 block break-words text-sm font-medium text-midnight-800 hover:text-gold-600 dark:text-white/80">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-midnight-800 dark:text-white/80">{item.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
