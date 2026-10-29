import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { categories } from '@/lib/categories';
import { addressText, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-offwhite">
      <div className="hazard h-2" aria-hidden />
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-3xl font-bold">{site.name}</p>
          <p className="mt-2 text-offwhite/80">{site.tagline}</p>
          <p className="mt-4 text-sm text-offwhite/60">
            Industrial safety equipment supplier in Pune for {site.yearsInBusiness} years. ISI, CE and EN certified products.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold">Products</h2>
          <ul className="mt-3 grid grid-cols-1 gap-1.5 text-sm text-offwhite/80 sm:grid-cols-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="hover:text-amber">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold">Contact</h2>
          <ul className="mt-3 space-y-3 text-sm text-offwhite/80">
            <li className="flex gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-amber" />
              <span>{addressText()}</span>
            </li>
            <li className="flex gap-2">
              <Phone size={18} className="mt-0.5 shrink-0 text-amber" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-amber">{site.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail size={18} className="mt-0.5 shrink-0 text-amber" />
              <a href={`mailto:${site.email}`} className="hover:text-amber">{site.email}</a>
            </li>
          </ul>
          <a href="/brochure.pdf" download className="btn btn-outline-light mt-5 !min-h-[44px] !text-base">
            Download brochure (PDF)
          </a>
        </div>
      </div>
      <div className="border-t border-steel/60 py-4 text-center text-xs text-offwhite/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
