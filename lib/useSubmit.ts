'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

/** POSTs JSON to one of our API routes and tracks progress. */
export function useSubmit(url: string) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function submit(data: unknown) {
    setStatus('sending');
    setError('');
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? 'Could not send your request.');
      setStatus('success');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not send your request. Please try WhatsApp instead.');
      setStatus('error');
    }
  }

  return { status, error, submit };
}
