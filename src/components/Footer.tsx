import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { company } from '@/lib/data';

const columns = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/clients', label: 'Clients' },
      { href: '/careers', label: 'Careers' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { href: '/projects/completed', label: 'Completed Projects' },
      { href: '/projects/ongoing', label: 'Ongoing Projects' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/machinery', label: 'Machinery' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-midnight-950 text-white">
      <div className="blueprint-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="gold" markClassName="h-11 w-11" className="text-white" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              A trusted civil construction company building residential, commercial, industrial and government
              structures across Mumbai and Thane since 2008 &mdash; ₹5 Crore+ in company value, 80+ projects delivered, 300+ skilled workforce.
            </p>
            <div className="dim-line mt-8 w-40">
              <span className="dim-tick">Since 2008</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="dim-tick mb-5 text-gold-400">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/65 transition hover:text-gold-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="dim-tick mb-5 text-gold-400">Contact</h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-gold-300">{company.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <a href={`mailto:${company.email}`} className="hover:text-gold-300 break-all">{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} OD Construction. All rights reserved.</p>
          <p className="font-mono tracking-wide">GSTIN: {company.gst}</p>
        </div>
      </div>
    </footer>
  );
}
