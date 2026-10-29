'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/lib/site';

const nav = [
  { href: '/products', label: 'Products' },
  { href: '/bulk-order', label: 'Bulk orders' },
  { href: '/blog', label: 'Safety tips' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-offwhite/15 bg-charcoal text-offwhite">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* TODO(client): replace this wordmark with the real logo (put the file in /public and use next/image). */}
        <Link href="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block font-heading text-2xl font-bold tracking-wide">{site.shortName}</span>
          <span className="block text-[11px] text-offwhite/70">Industrial Solutions</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`py-2 text-sm font-medium transition-colors hover:text-amber ${
                  active ? 'text-amber' : 'text-offwhite'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/quote" className="btn btn-primary !min-h-[40px] !py-1.5 !text-base">
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-steel bg-charcoal md:hidden">
          <div className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-steel/60 py-3 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/quote" onClick={() => setOpen(false)} className="btn btn-primary my-3">
              Request a quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
