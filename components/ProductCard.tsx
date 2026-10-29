import Image from 'next/image';
import Link from 'next/link';
import { categoryName } from '@/lib/categories';
import { formatPrice, type Product } from '@/lib/products';
import CertBadges from './CertBadges';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex h-full flex-col border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:border-charcoal hover:shadow-[8px_8px_0_rgb(var(--c-amber))] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-offwhite">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-contain p-3"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t-2 border-amber p-4">
        <p className="text-xs text-steel">{categoryName(product.category)}</p>
        <h3 className="font-heading text-xl font-semibold leading-tight">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-steel">{product.shortDesc}</p>
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <CertBadges items={product.certifications} />
          <span className="text-sm font-medium">{formatPrice(product)}</span>
        </div>
      </div>
    </Link>
  );
}
