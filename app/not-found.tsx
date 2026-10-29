import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-x py-24">
      <h1 className="text-6xl font-bold">Page not found</h1>
      <p className="mt-3 text-steel">The page you are looking for does not exist or has moved.</p>
      <Link href="/products" className="btn btn-dark mt-6">Browse products</Link>
    </div>
  );
}
