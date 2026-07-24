'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';
import { company } from '@/lib/data';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects/completed', label: 'Completed Projects' },
  { href: '/projects/ongoing', label: 'Ongoing Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/machinery', label: 'Machinery' },
  { href: '/clients', label: 'Clients' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 transition-all duration-500 ${
          scrolled ? 'glass rounded-b-2xl mx-3 sm:mx-6 lg:mx-auto' : ''
        }`}
      >
        <Link href="/" className="group flex items-center py-2 text-midnight-900 dark:text-white">
          <Logo
            variant="gold"
            wordmarkSize="lg"
            markClassName="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:rotate-[8deg] sm:h-12 sm:w-12"
            className="gap-4"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group/link relative py-1 text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${
                pathname === l.href ? 'text-gold-500' : 'text-midnight-800 dark:text-white/85'
              }`}
            >
              {l.label}
              {pathname === l.href ? (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 h-[1.5px] w-full bg-gold-500" />
              ) : (
                <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-gold-500/70 transition-all duration-300 group-hover/link:w-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-midnight-900/10 text-midnight-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:text-gold-500 hover:shadow-md dark:border-white/15 dark:text-white/85"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={`tel:${company.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full bg-midnight-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 hover:shadow-lg dark:bg-gold-500 dark:text-midnight-950 dark:hover:bg-gold-400 sm:flex"
          >
            <Phone size={14} /> Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-midnight-900/10 text-midnight-800 transition-all duration-300 hover:border-gold-500 hover:text-gold-500 dark:border-white/15 dark:text-white/85 xl:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-3 mt-2 rounded-2xl glass xl:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === l.href
                      ? 'bg-gold-500/15 text-gold-500'
                      : 'text-midnight-800 hover:bg-midnight-900/5 dark:text-white/85 dark:hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
