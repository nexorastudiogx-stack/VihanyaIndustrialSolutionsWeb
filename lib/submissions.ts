import { NextResponse } from 'next/server';

/**
 * Shared handler for the quote and bulk-order API routes.
 *
 * TODO(client): decide where submissions should be sent. Easiest options:
 *  1. Set SUBMISSION_WEBHOOK_URL (Formspree, Zapier, Make, Google Apps Script
 *     web app) and this handler forwards every submission there as JSON.
 *  2. Replace the fetch() below with an email provider (Resend, SendGrid, SMTP).
 * Until one is set, submissions are only printed to the server log.
 */
export async function handleSubmission(
  req: Request,
  kind: 'quote' | 'bulk-order',
  required: Record<string, string>,
) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.website) return NextResponse.json({ ok: true });
  delete body.website;

  if (JSON.stringify(body).length > 20000) {
    return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
  }

  for (const [field, label] of Object.entries(required)) {
    const value = body[field];
    if (typeof value !== 'string' || !value.trim()) {
      return NextResponse.json({ error: `Please enter ${label}.` }, { status: 400 });
    }
  }

  const payload = { kind, receivedAt: new Date().toISOString(), ...body };
  const webhook = process.env.SUBMISSION_WEBHOOK_URL;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (e) {
      console.error('[submission] forward failed', e);
      return NextResponse.json(
        { error: 'We could not send your request. Please contact us on WhatsApp.' },
        { status: 502 },
      );
    }
  } else {
    console.log('[submission]', JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}
