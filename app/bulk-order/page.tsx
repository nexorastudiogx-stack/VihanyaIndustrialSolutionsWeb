import type { Metadata } from 'next';
import BulkOrderForm from '@/components/BulkOrderForm';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Bulk orders',
  description: 'Ordering for a factory, site or contractor team? Send us your item list for bulk pricing.',
};

export default function BulkOrderPage() {
  return (
    <div className="container-x max-w-3xl pt-10">
      <h1 className="text-5xl font-bold">Bulk orders</h1>
      <p className="mt-2 text-steel">Ordering for a factory, site or contractor team? List the items and quantities and we will quote for the whole order.</p>
      <div className="mt-8">
        <BulkOrderForm productNames={products.map((p) => p.name)} />
      </div>
    </div>
  );
}
