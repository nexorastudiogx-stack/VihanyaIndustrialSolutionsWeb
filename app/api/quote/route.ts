import { handleSubmission } from '@/lib/submissions';

export async function POST(req: Request) {
  return handleSubmission(req, 'quote', { name: 'your name', phone: 'your phone number', product: 'the product you need' });
}
