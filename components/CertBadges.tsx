import type { CertificationCode } from '@/lib/products';

export default function CertBadges({ items, light = false }: { items: CertificationCode[]; light?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Certifications">
      {items.map((c) => (
        <li
          key={c}
          className={`border px-1.5 py-0.5 text-xs font-semibold ${
            light ? 'border-offwhite/50 text-offwhite' : 'border-steel text-steel'
          }`}
        >
          {c}
        </li>
      ))}
    </ul>
  );
}
