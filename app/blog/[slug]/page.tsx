import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, posts } from '@/lib/blog';
import { site } from '@/lib/site';

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Organization', name: site.name },
  };

  return (
    <article className="container-x max-w-2xl pt-10">
      <Link href="/blog" className="text-sm text-steel underline underline-offset-4">All safety tips</Link>
      <h1 className="mt-4 text-5xl font-bold leading-none">{post.title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed">
        {post.body.map((para, i) => <p key={i}>{para}</p>)}
      </div>
      <div className="mt-12 border-l-4 border-amber pl-5">
        <p className="font-heading text-2xl font-semibold">Need help choosing equipment?</p>
        <Link href="/quote" className="btn btn-primary mt-3">Request a quote</Link>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
