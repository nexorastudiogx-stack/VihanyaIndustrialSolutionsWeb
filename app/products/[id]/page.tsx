import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import CertBadges from '@/components/CertBadges';
import ProductCard from '@/components/ProductCard';
import { categoryName } from '@/lib/categories';
import { formatPrice, getProduct, getRelated, products } from '@/lib/products';
import { site, whatsappLink } from '@/lib/site';

export const generateStaticParams = () => products.map((p) => ({ id: p.id }));

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const p = getProduct(params.id);
  if (!p) return {};
  return {
    title: p.name,
    description: p.shortDesc,
    openGraph: { images: [p.image] },
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const related = getRelated(product);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description ?? product.shortDesc,
    image: new URL(product.image, site.url).toString(),
    category: categoryName(product.category),
    brand: { '@type': 'Brand', name: site.name },
    ...(product.price
      ? { offers: { '@type': 'Offer', priceCurrency: 'INR', price: product.price, availability: 'https://schema.org/InStock' } }
      : {}),
  };

  return (
    <div className="container-x pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-steel">
        <Link href="/products" className="underline underline-offset-4">Products</Link>
        {' / '}
        <Link href={`/categories/${product.category}`} className="underline underline-offset-4">{categoryName(product.category)}</Link>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] border border-steel/25 bg-white">
          <Image src={product.image} alt={product.name} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-contain p-6" />
        </div>

        <div>
          <h1 className="text-5xl font-bold leading-none">{product.name}</h1>
          <div className="mt-4"><CertBadges items={product.certifications} /></div>
          <p className="mt-5 text-lg text-steel">{product.description ?? product.shortDesc}</p>

          <p className="mt-6 font-heading text-3xl font-semibold">{formatPrice(product)}</p>
          {product.moq && <p className="text-sm text-steel">Minimum order: {product.moq}</p>}

          {product.sizes && (
            <div className="mt-5">
              <p className="label">Available sizes</p>
              <ul className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <li key={s} className="min-w-[2.5rem] border border-steel/40 bg-white px-3 py-1.5 text-center text-sm">{s}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/quote?product=${encodeURIComponent(product.name)}`} className="btn btn-primary">Request a quote</Link>
            <a
              href={whatsappLink(`Hello, I would like to enquire about: ${product.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={20} /> Ask on WhatsApp
            </a>
          </div>

          {product.specs && (
            <dl className="mt-10 border-t border-steel/30">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-steel/30 py-2.5 text-sm">
                  <dt className="font-medium">{k}</dt>
                  <dd className="text-steel">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16" aria-labelledby="related-title">
          <h2 id="related-title" className="text-3xl font-bold">Related products</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <li key={p.id}><ProductCard product={p} /></li>
            ))}
          </ul>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
