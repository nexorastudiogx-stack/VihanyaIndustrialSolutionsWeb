import type { Metadata } from 'next';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { addressText, site, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${site.name} in ${site.address.city}. Phone, WhatsApp, email and map.`,
};

export default function ContactPage() {
  // Embeds the address from lib/site.ts. No API key needed.
  // TODO(client): once the real address is set, check the map pin is correct.
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(addressText())}&output=embed`;

  return (
    <div className="container-x pt-10">
      <h1 className="text-5xl font-bold">Contact us</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-5">
          <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-amber" /><span>{addressText()}</span></li>
          <li className="flex gap-3"><Phone className="mt-1 shrink-0 text-amber" /><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="underline underline-offset-4">{site.phone}</a></li>
          <li className="flex gap-3"><Mail className="mt-1 shrink-0 text-amber" /><a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a></li>
          <li className="flex gap-3"><Clock className="mt-1 shrink-0 text-amber" /><span>{site.hours}</span></li>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </li>
        </ul>
        <div className="aspect-[4/3] w-full border border-steel/25 bg-steel/10">
          <iframe
            title={`Map showing ${site.name}`}
            src={mapSrc}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
