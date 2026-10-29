'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { categories, categoryName } from '@/lib/categories';
import type { CertificationCode, Product } from '@/lib/products';
import ProductCard from './ProductCard';

const PAGE_SIZE = 24;
const CERTS: CertificationCode[] = ['ISI', 'CE', 'EN'];

interface Props {
  products: Product[];
  initialCategory?: string;
  initialQuery?: string;
}

export default function Catalog({ products, initialCategory = '', initialQuery = '' }: Props) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [certs, setCerts] = useState<CertificationCode[]>([]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    products.forEach((p) => (map[p.category] = (map[p.category] ?? 0) + 1));
    return map;
  }, [products]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (category && p.category !== category) return false;
      if (!certs.every((c) => p.certifications.includes(c))) return false;
      if (!q) return true;
      return `${p.name} ${p.shortDesc} ${p.id} ${categoryName(p.category)}`.toLowerCase().includes(q);
    });
  }, [products, category, query, certs]);

  const shown = filtered.slice(0, visible);
  const hasFilters = Boolean(category || query || certs.length);

  const reset = () => {
    setCategory('');
    setQuery('');
    setCerts([]);
    setVisible(PAGE_SIZE);
  };
  const chip = (active: boolean) =>
    `whitespace-nowrap border px-3 py-1.5 text-sm font-medium transition-colors ${
      active ? 'border-charcoal bg-charcoal text-offwhite' : 'border-steel/40 bg-white hover:border-charcoal'
    }`;

  return (
    <div>
      <div className="grid gap-4">
        <div className="relative">
          <label htmlFor="catalog-search" className="sr-only">Search products</label>
          <Search size={20} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel" />
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setVisible(PAGE_SIZE); }}
            placeholder="Search products, e.g. helmet, gloves, EN 397"
            className="field !pl-10"
          />
        </div>

        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Category">
          <button type="button" aria-pressed={!category} onClick={() => { setCategory(''); setVisible(PAGE_SIZE); }} className={chip(!category)}>
            All ({products.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={category === c.slug}
              onClick={() => { setCategory(c.slug); setVisible(PAGE_SIZE); }}
              className={chip(category === c.slug)}
            >
              {c.name} ({counts[c.slug] ?? 0})
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Certification">
          <span className="text-sm text-steel">Certified:</span>
          {CERTS.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={certs.includes(c)}
              onClick={() => { setCerts((cs) => (cs.includes(c) ? cs.filter((x) => x !== c) : [...cs, c])); setVisible(PAGE_SIZE); }}
              className={chip(certs.includes(c))}
            >
              {c}
            </button>
          ))}
          {hasFilters && (
            <button type="button" onClick={reset} className="ml-auto inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4">
              <X size={14} /> Clear filters
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-steel" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
      </p>

      <motion.ul layout className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <ProductCard product={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 && (
        <div className="mt-6 border-l-4 border-amber bg-white p-6">
          <p className="font-heading text-2xl font-semibold">No products match these filters</p>
          <p className="mt-1 text-steel">Try a different search, or tell us what you need and we will source it.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={reset} className="btn btn-outline">Clear filters</button>
            <Link href="/quote" className="btn btn-primary">Request a quote</Link>
          </div>
        </div>
      )}

      {filtered.length > visible && (
        <div className="mt-8 text-center">
          <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className="btn btn-outline">
            Show more ({filtered.length - visible} left)
          </button>
        </div>
      )}
    </div>
  );
}
