import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Catalog from '@/components/Catalog';
import { categories, getCategory } from '@/lib/categories';
import { products } from '@/lib/products';

export const generateStaticParams = () => categories.map((c) => ({ slug: c.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = getCategory(params.slug);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();
  return (
    <div className="container-x pt-10">
      <h1 className="text-5xl font-bold">{cat.name}</h1>
      <p className="mt-2 max-w-2xl text-steel">{cat.description}</p>
      <div className="mt-8">
        <Catalog products={products} initialCategory={cat.slug} />
      </div>
    </div>
  );
}
