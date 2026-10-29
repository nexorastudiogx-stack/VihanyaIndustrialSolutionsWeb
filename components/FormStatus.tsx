import Link from 'next/link';
import { whatsappLink } from '@/lib/site';

export function SuccessPanel({ title }: { title: string }) {
  return (
    <div role="status" className="border-l-4 border-amber bg-white p-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-2 text-steel">Our team will get back to you shortly. For urgent requirements, message us on WhatsApp.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Chat on WhatsApp</a>
        <Link href="/products" className="btn btn-outline">Keep browsing</Link>
      </div>
    </div>
  );
}

export function ErrorNote({ message }: { message: string }) {
  return (
    <p role="alert" className="border-l-4 border-signal bg-white p-3 text-sm text-signal">
      {message}
    </p>
  );
}
