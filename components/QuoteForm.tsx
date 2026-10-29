'use client';

import { FormEvent } from 'react';
import { useSubmit } from '@/lib/useSubmit';
import Field, { Honeypot } from './Field';
import { ErrorNote, SuccessPanel } from './FormStatus';

export default function QuoteForm({ defaultProduct = '' }: { defaultProduct?: string }) {
  const { status, error, submit } = useSubmit('/api/quote');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submit(Object.fromEntries(new FormData(e.currentTarget)));
  }

  if (status === 'success') return <SuccessPanel title="Quote request received" />;

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Phone / WhatsApp" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" />
      </div>
      <Field label="Product(s) you need" name="product" required defaultValue={defaultProduct} placeholder="e.g. Steel toe safety shoes, size 8 and 9" />
      <Field label="Quantity" name="quantity" placeholder="e.g. 50 pairs" />
      <Field label="Anything else we should know?" name="message" multiline placeholder="Delivery location, timeline, certifications required" />
      <Honeypot />
      {status === 'error' && <ErrorNote message={error} />}
      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send quote request'}
      </button>
    </form>
  );
}
