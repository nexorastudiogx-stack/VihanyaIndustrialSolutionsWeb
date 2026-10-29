import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a quote',
  description: 'Tell us which safety equipment you need and we will send you a quote.',
};

export default function QuotePage({ searchParams }: { searchParams: { product?: string } }) {
  return (
    <div className="container-x max-w-3xl pt-10">
      <h1 className="text-5xl font-bold">Request a quote</h1>
      <p className="mt-2 text-steel">Tell us what you need. We will reply with pricing and availability.</p>
      <div className="mt-8">
        <QuoteForm defaultProduct={searchParams.product ?? ''} />
      </div>
    </div>
  );
}
