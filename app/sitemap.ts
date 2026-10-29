import type { MetadataRoute } from 'next';
import { posts } from '@/lib/blog';
import { categories } from '@/lib/categories';
import { products } from '@/lib/products';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['', '/products', '/quote', '/bulk-order', '/blog', '/gallery', '/contact'];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: now })),
    ...categories.map((c) => ({ url: `${site.url}/categories/${c.slug}`, lastModified: now })),
    ...products.map((p) => ({ url: `${site.url}/products/${p.id}`, lastModified: now })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date) })),
  ];
}
