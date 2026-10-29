import { handleSubmission } from '@/lib/submissions';

export async function POST(req: Request) {
  return handleSubmission(req, 'bulk-order', { company: 'your company name', name: 'a contact person', phone: 'your phone number' });
}
