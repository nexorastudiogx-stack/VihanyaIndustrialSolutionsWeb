import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Safety tips',
  description: 'Practical guidance on choosing, inspecting and replacing industrial safety equipment.',
};

const fmt = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPage() {
  return (
    <div className="container-x max-w-3xl pt-10">
      <h1 className="text-5xl font-bold">Safety tips</h1>
      <ul className="mt-8 divide-y divide-steel/30 border-y border-steel/30">
        {posts.map((p) => (
          <li key={p.slug} className="py-6">
            <p className="text-sm text-steel">{fmt(p.date)}, {p.readMinutes} min read</p>
            <h2 className="mt-1 text-3xl font-semibold">
              <Link href={`/blog/${p.slug}`} className="hover:text-steel">{p.title}</Link>
            </h2>
            <p className="mt-2 text-steel">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
