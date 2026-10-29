import type { Metadata } from 'next';
import Catalog from '@/components/Catalog';
import { getCategory } from '@/lib/categories';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Industrial safety products',
  description: 'Browse safety shoes, helmets, harnesses, gloves, protective clothing and more. Filter by category and certification.',
};

export default function ProductsPage({ searchParams }: { searchParams: { category?: string; q?: string } }) {
  const category = searchParams.category && getCategory(searchParams.category) ? searchParams.category : '';
  return (
    <div className="container-x pt-10">
      <h1 className="text-5xl font-bold">All products</h1>
      <p className="mt-2 max-w-2xl text-steel">Search the catalog or filter by category and certification. Request a quote on any product.</p>
      <div className="mt-8">
        <Catalog products={products} initialCategory={category} initialQuery={searchParams.q ?? ''} />
      </div>
    </div>
  );
}
