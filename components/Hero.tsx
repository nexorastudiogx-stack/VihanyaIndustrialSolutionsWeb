'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { categories } from '@/lib/categories';
import { site } from '@/lib/site';

/** Deterministic scatter positions so server and client render the same markup. */
const scatter = (i: number) => ({
  x: ((i * 53) % 9 - 4) * 60,
  y: -180 - ((i * 29) % 5) * 40,
  rotate: ((i * 17) % 9 - 4) * 7,
});

export default function Hero() {
  return (
    <section className="blueprint bg-charcoal text-offwhite">
      <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <h1 className="text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            Your safety, our responsibility.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-offwhite/80">
            Industrial safety equipment for factories, contractors and site teams, supplied from Pune. Gear marked to ISI, CE and EN standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/quote" className="btn btn-primary">Request a quote</Link>
            <Link href="/products" className="btn btn-outline-light">Browse products</Link>
          </div>
          <p className="mt-6 text-sm text-offwhite/60">{site.yearsInBusiness} years supplying safety equipment</p>
        </div>

        {/* The one orchestrated moment: category tiles assemble on load. */}
        <ul className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-4">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.li
                key={c.slug}
                initial={{ opacity: 0, ...scatter(i) }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.15 + i * 0.06 }}
              >
                <Link
                  href={`/categories/${c.slug}`}
                  className="flex aspect-square flex-col justify-between border border-steel bg-steel/40 p-2.5 transition-colors hover:border-amber hover:bg-steel/70 sm:p-3"
                >
                  <Icon className="text-amber" size={30} strokeWidth={1.75} />
                  <span className="font-heading text-sm font-semibold leading-tight sm:text-lg">{c.name}</span>
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            initial={{ opacity: 0, ...scatter(categories.length) }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.15 + categories.length * 0.06 }}
          >
            <div className="flex aspect-square flex-col justify-between bg-amber p-2.5 text-charcoal sm:p-3">
              <ShieldCheck size={30} strokeWidth={1.75} />
              <span className="font-heading text-sm font-bold leading-tight sm:text-lg">ISI, CE and EN certified</span>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
