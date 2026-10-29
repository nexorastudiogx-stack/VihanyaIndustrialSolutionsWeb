export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// TODO(client): PLACEHOLDER testimonials. Replace with real, permissioned quotes
// before launch. Do not publish these as real customer feedback.
export const testimonials: Testimonial[] = [
  { quote: 'Replace with a real customer quote about delivery, product quality or service.', name: 'Customer name', role: 'Procurement Manager', company: 'Company name' },
  { quote: 'Replace with a real customer quote about bulk ordering or certification support.', name: 'Customer name', role: 'Safety Officer', company: 'Company name' },
  { quote: 'Replace with a real customer quote from a contractor.', name: 'Customer name', role: 'Site Contractor', company: 'Company name' },
];
