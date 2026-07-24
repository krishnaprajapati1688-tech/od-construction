'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoWrapRef.current, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      if (skylineRef.current) {
        const bars = skylineRef.current.querySelectorAll('.bar');
        gsap.fromTo(
          bars,
          { scaleY: 0 },
          { scaleY: 1, transformOrigin: 'bottom', duration: 1.4, ease: 'expo.out', stagger: 0.12, delay: 0.3 }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-midnight-950">
      <div ref={videoWrapRef} className="absolute inset-0 -top-16 h-[120%] w-full">
        <video
          className="h-full w-full object-cover opacity-[0.55]"
          src="/videos/projects/santacruz-khar/santacruz-khar-hero.mp4"
          poster="/projects/santacruz-khar/hero-01.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/90 via-midnight-950/70 to-midnight-950" />
        <div className="blueprint-bg absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-8 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="dim-line max-w-sm text-gold-300"
        >
          <span className="dim-tick">Mumbai, Maharashtra &middot; Since 2008</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Building Mumbai&apos;s Future
          <span className="block text-gradient-gold">Since 2008.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-7 max-w-xl text-base font-medium uppercase tracking-[0.2em] text-gold-200/90 sm:text-lg"
        >
          Engineering Excellence. Building Tomorrow.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          A civil infrastructure company engineering residential towers, government infrastructure and
          industrial facilities across Mumbai &mdash; 15+ years, 80+ projects, one uncompromising standard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects/completed"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-midnight-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-gold-400 hover:text-gold-300"
          >
            Contact Us
          </Link>
        </motion.div>

        <div className="pointer-events-none absolute bottom-0 right-4 hidden opacity-70 sm:right-10 sm:block lg:right-16">
          <svg ref={skylineRef} width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skylineGrad" x1="0" y1="0" x2="220" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E4C878" />
                <stop offset="1" stopColor="#8A6A29" />
              </linearGradient>
            </defs>
            <rect className="bar" x="0" y="70" width="26" height="70" fill="url(#skylineGrad)" opacity="0.85" />
            <rect className="bar" x="34" y="40" width="30" height="100" fill="url(#skylineGrad)" opacity="0.9" />
            <rect className="bar" x="72" y="10" width="34" height="130" fill="url(#skylineGrad)" />
            <rect className="bar" x="114" y="35" width="24" height="105" fill="url(#skylineGrad)" opacity="0.9" />
            <rect className="bar" x="146" y="55" width="20" height="85" fill="url(#skylineGrad)" opacity="0.8" />
            <rect className="bar" x="174" y="65" width="18" height="75" fill="url(#skylineGrad)" opacity="0.7" />
          </svg>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="text-gold-300">
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
