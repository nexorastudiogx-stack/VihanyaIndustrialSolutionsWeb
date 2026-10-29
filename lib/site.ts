/**
 * Central site settings. Everything the client needs to confirm lives here.
 */
export const site = {
  name: 'Vihanya Industrial Solutions',
  shortName: 'Vihanya',
  tagline: 'Your safety, our responsibility.',
  description:
    'Industrial safety equipment supplier in Pune: safety shoes, helmets, harnesses, gloves, protective clothing and more. ISI, CE and EN certified products for factories and contractors.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  yearsInBusiness: 7,

  // TODO(client): real contact details. Placeholders below are NOT real.
  phone: '+91 00000 00000',
  email: 'sales@example.com',

  // TODO(client): WhatsApp number, digits only, country code first (India = 91).
  whatsappNumber: '910000000000',

  // TODO(client): real address. It also drives the Google Maps embed on /contact.
  address: {
    line1: 'Street address, area',
    city: 'Pune',
    state: 'Maharashtra',
    postalCode: '411000',
    country: 'IN',
  },

  // TODO(client): confirm business hours.
  hours: 'Mon to Sat, 9:30 am to 6:30 pm',
};

export const addressText = () =>
  [site.address.line1, site.address.city, site.address.state, site.address.postalCode]
    .filter(Boolean)
    .join(', ');

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
