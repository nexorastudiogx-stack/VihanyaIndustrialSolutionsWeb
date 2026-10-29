import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos of our products, warehouse and deliveries.',
};

// TODO(client): replace with real photos. Put files in /public/images/gallery/
// and update src, alt and caption for each entry.
const photos = [
  { src: '/images/gallery/placeholder.svg', alt: 'Warehouse stock', caption: 'Warehouse stock' },
  { src: '/images/gallery/placeholder.svg', alt: 'Safety shoes display', caption: 'Safety shoes range' },
  { src: '/images/gallery/placeholder.svg', alt: 'Helmets and harnesses', caption: 'Helmets and harnesses' },
  { src: '/images/gallery/placeholder.svg', alt: 'Order ready for dispatch', caption: 'Order ready for dispatch' },
  { src: '/images/gallery/placeholder.svg', alt: 'Delivery to a client site', caption: 'Delivery to a client site' },
  { src: '/images/gallery/placeholder.svg', alt: 'Team at work', caption: 'Our team' },
];

export default function GalleryPage() {
  return (
    <div className="container-x pt-10">
      <h1 className="text-5xl font-bold">Gallery</h1>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <li key={i}>
            <figure>
              <div className="relative aspect-[4/3] bg-steel/10">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-steel">{p.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
