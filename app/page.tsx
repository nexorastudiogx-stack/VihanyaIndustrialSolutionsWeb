import Link from 'next/link';
import { Boxes, Headset, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import { products } from '@/lib/products';
import { site } from '@/lib/site';

const reasons = [
  { icon: ShieldCheck, title: 'Certified gear', text: 'Products marked to ISI, CE and EN standards. Check the marks on each product page.' },
  { icon: Boxes, title: 'Orders of every size', text: 'From a single pair of shoes to a full shift’s kit. Use the bulk order form for large requirements.' },
  { icon: Headset, title: 'Help choosing', text: 'Not sure which rating or size you need? Message us and we will help you pick.' },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Hero />

      <div className="border-y border-charcoal/10 bg-amber text-charcoal">
        <ul className="container-x flex flex-wrap justify-between gap-x-8 gap-y-1 py-3 text-[11px] font-bold uppercase tracking-[0.14em]">
          <li>{site.yearsInBusiness} years in business</li>
          <li>ISI, CE and EN certified products</li>
          <li>Based in {site.address.city}, {site.address.state}</li>
        </ul>
      </div>

      <section className="container-x mt-20" aria-labelledby="featured-title">
        <div className="flex flex-col gap-3 border-b border-charcoal/20 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-steel">Field-tested essentials</p>
            <h2 id="featured-title" className="text-5xl font-bold">Popular safety gear</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold underline underline-offset-4">View all products</Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <li key={p.id}><ProductCard product={p} /></li>
          ))}
        </ul>
      </section>

      <section className="container-x mt-24" aria-labelledby="why-title">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-steel">Built for the worksite</p>
          <h2 id="why-title" className="text-5xl font-bold">Why buyers choose {site.shortName}</h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t-2 border-amber pt-5">
              <Icon className="text-steel" size={28} />
              <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
              <p className="mt-1 text-steel">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="mt-20 bg-charcoal text-offwhite">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-bold">Need a price for your site?</h2>
            <p className="mt-2 text-offwhite/70">Send us your list and we will reply with a quote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="btn btn-primary">Request a quote</Link>
            <a href="/brochure.pdf" download className="btn btn-outline-light">Download brochure</a>
          </div>
        </div>
      </section>
    </>
  );
}
