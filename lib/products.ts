import type { CategorySlug } from './categories';

export type CertificationCode = 'ISI' | 'CE' | 'EN';

export interface Product {
  /** URL-safe and unique. Becomes /products/<id>. */
  id: string;
  name: string;
  category: CategorySlug;
  /** Path under /public, e.g. '/images/products/steel-toe-shoe.jpg' */
  image: string;
  certifications: CertificationCode[];
  shortDesc: string;
  // ---- optional fields ----
  description?: string;
  /** Free-form key/value table shown on the product page. */
  specs?: Record<string, string>;
  sizes?: string[];
  /** Price in INR. Leave out to show "Price on request". */
  price?: number;
  priceUnit?: string;
  /** Minimum order quantity. */
  moq?: number;
  /** Shown on the home page. */
  featured?: boolean;
}

export const PLACEHOLDER_IMAGE = '/images/products/placeholder.svg';

/**
 * ADD A PRODUCT: copy one entry below, give it a new unique `id`, point `image`
 * at a file in /public/images/products/, and save. That is all.
 *
 * TODO(client): everything below is PLACEHOLDER data (names, specs, prices).
 * Replace with the real catalog before launch.
 */
export const products: Product[] = [
  {
    id: 'steel-toe-safety-shoes',
    name: 'Steel Toe Safety Shoes',
    category: 'safety-shoes',
    image: PLACEHOLDER_IMAGE,
    certifications: ['ISI', 'CE', 'EN'],
    shortDesc: 'Steel toe cap, oil and slip-resistant sole for factory floors.',
    description:
      'Leather upper safety shoes with a steel toe cap and a dual-density sole. Suitable for general manufacturing, warehouses and workshops.',
    specs: { Standard: 'IS 15298 / EN ISO 20345', 'Toe cap': 'Steel', Upper: 'Leather', Sole: 'PU, oil and slip resistant' },
    sizes: ['6', '7', '8', '9', '10', '11'],
    price: 1450,
    priceUnit: 'per pair',
    moq: 10,
    featured: true,
  },
  {
    id: 'industrial-safety-helmet',
    name: 'Industrial Safety Helmet',
    category: 'helmets',
    image: PLACEHOLDER_IMAGE,
    certifications: ['ISI', 'EN'],
    shortDesc: 'Ratchet-adjustable helmet for impact and falling-object protection.',
    description: 'HDPE shell with a four-point suspension and ratchet adjustment. Available in multiple colors for role identification.',
    specs: { Standard: 'IS 2925 / EN 397', Shell: 'HDPE', Suspension: '4-point, ratchet adjust' },
    sizes: ['Free size'],
    price: 250,
    priceUnit: 'per piece',
    moq: 20,
    featured: true,
  },
  {
    id: 'full-body-safety-harness',
    name: 'Full Body Safety Harness',
    category: 'harness-fall-protection',
    image: PLACEHOLDER_IMAGE,
    certifications: ['CE', 'EN'],
    shortDesc: 'Full body harness with dorsal D-ring for work at height.',
    description: 'Padded full body harness with dorsal attachment point and adjustable leg and chest straps. Use with a suitable lanyard or lifeline.',
    specs: { Standard: 'EN 361', Webbing: 'Polyester', Attachment: 'Dorsal D-ring' },
    sizes: ['M/L', 'XL'],
    featured: true,
  },
  {
    id: 'cut-resistant-gloves',
    name: 'Cut Resistant Gloves',
    category: 'gloves',
    image: PLACEHOLDER_IMAGE,
    certifications: ['CE', 'EN'],
    shortDesc: 'Coated work gloves with cut protection for sharp-edge handling.',
    description: 'Knitted liner with a nitrile palm coating for grip. For sheet metal, glass and general handling of sharp parts.',
    specs: { Standard: 'EN 388', Liner: 'HPPE blend', Coating: 'Nitrile palm' },
    sizes: ['S', 'M', 'L', 'XL'],
    price: 180,
    priceUnit: 'per pair',
    moq: 24,
    featured: true,
  },
  {
    id: 'hi-vis-safety-jacket',
    name: 'Hi-Vis Safety Jacket',
    category: 'protective-clothing',
    image: PLACEHOLDER_IMAGE,
    certifications: ['CE', 'EN'],
    shortDesc: 'High-visibility jacket with reflective tape for site and road work.',
    description: 'Fluorescent jacket with reflective bands, front zip and chest pocket.',
    specs: { Standard: 'EN ISO 20471', Fabric: 'Polyester', Closure: 'Front zip' },
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 380,
    priceUnit: 'per piece',
    moq: 10,
  },
  {
    id: 'anti-fog-safety-goggles',
    name: 'Anti-Fog Safety Goggles',
    category: 'eye-face-protection',
    image: PLACEHOLDER_IMAGE,
    certifications: ['CE', 'EN'],
    shortDesc: 'Wrap-around goggles with anti-fog, scratch-resistant lens.',
    description: 'Clear polycarbonate lens with indirect ventilation and an adjustable strap. Fits over most prescription glasses.',
    specs: { Standard: 'EN 166', Lens: 'Polycarbonate, anti-fog', Fit: 'Over-glasses' },
    sizes: ['Universal'],
  },
  {
    id: 'ear-defender-muffs',
    name: 'Ear Defender Muffs',
    category: 'ear-protection',
    image: PLACEHOLDER_IMAGE,
    certifications: ['CE', 'EN'],
    shortDesc: 'Padded ear muffs for high-noise machinery areas.',
    description: 'Adjustable headband ear muffs with soft cushions for long wear in noisy areas.',
    specs: { Standard: 'EN 352', Type: 'Headband' },
    sizes: ['Universal'],
  },
  {
    id: 'ffp2-respirator-mask',
    name: 'FFP2 Respirator Mask',
    category: 'respiratory-masks',
    image: PLACEHOLDER_IMAGE,
    certifications: ['CE', 'EN'],
    shortDesc: 'Folded particulate respirator for dust and fine particles.',
    description: 'Disposable particulate respirator with a nose clip and elastic head straps.',
    specs: { Standard: 'EN 149 (FFP2)', Type: 'Disposable' },
    price: 60,
    priceUnit: 'per piece',
    moq: 50,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getRelated = (product: Product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);

export const formatPrice = (p: Product) =>
  p.price ? `₹${p.price.toLocaleString('en-IN')}${p.priceUnit ? ` ${p.priceUnit}` : ''}` : 'Price on request';
