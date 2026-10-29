'use client';

import { FormEvent, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useSubmit } from '@/lib/useSubmit';
import Field, { Honeypot } from './Field';
import { ErrorNote, SuccessPanel } from './FormStatus';

interface Line { product: string; size: string; qty: string }
const blank = (): Line => ({ product: '', size: '', qty: '' });

export default function BulkOrderForm({ productNames }: { productNames: string[] }) {
  const { status, error, submit } = useSubmit('/api/bulk-order');
  const [lines, setLines] = useState<Line[]>([blank()]);

  const update = (i: number, key: keyof Line, value: string) =>
    setLines((ls) => ls.map((l, idx) => (idx === i ? { ...l, [key]: value } : l)));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const items = lines.filter((l) => l.product.trim());
    if (!items.length) return;
    submit({ ...data, items });
  }

  if (status === 'success') return <SuccessPanel title="Bulk order request received" />;

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company name" name="company" required />
        <Field label="Contact person" name="name" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" />
        <Field label="GST number (optional)" name="gstin" />
        <Field label="Delivery city" name="city" />
        <Field label="Required by" name="requiredBy" type="date" />
      </div>

      <fieldset>
        <legend className="font-heading text-2xl font-semibold">Items</legend>
        <datalist id="product-names">{productNames.map((n) => <option key={n} value={n} />)}</datalist>
        <div className="mt-3 grid gap-3">
          {lines.map((l, i) => (
            <div key={i} className="grid grid-cols-[1fr_5rem_5rem_auto] items-end gap-2 sm:grid-cols-[1fr_7rem_7rem_auto]">
              <div>
                <label htmlFor={`item-${i}`} className="label">Product</label>
                <input id={`item-${i}`} list="product-names" value={l.product} onChange={(e) => update(i, 'product', e.target.value)} className="field" placeholder="Product name" />
              </div>
              <div>
                <label htmlFor={`size-${i}`} className="label">Size</label>
                <input id={`size-${i}`} value={l.size} onChange={(e) => update(i, 'size', e.target.value)} className="field" />
              </div>
              <div>
                <label htmlFor={`qty-${i}`} className="label">Qty</label>
                <input id={`qty-${i}`} type="number" min={1} value={l.qty} onChange={(e) => update(i, 'qty', e.target.value)} className="field" />
              </div>
              <button
                type="button"
                aria-label={`Remove item ${i + 1}`}
                disabled={lines.length === 1}
                onClick={() => setLines((ls) => ls.filter((_, idx) => idx !== i))}
                className="mb-1 p-2 text-steel hover:text-signal disabled:opacity-30"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => setLines((ls) => [...ls, blank()])} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4">
          <Plus size={16} /> Add another item
        </button>
      </fieldset>

      <Field label="Notes" name="message" multiline placeholder="Certifications needed, branding or printing, delivery schedule" />
      <Honeypot />
      {status === 'error' && <ErrorNote message={error} />}
      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Submit bulk order request'}
      </button>
    </form>
  );
}
