import type { CategorySlug } from './categories';

export type CertificationCode = 'ISI' | 'CE' | 'EN';

export interface Product {
  /** URL-safe and unique. Becomes /products/<id>. */
  id: string;
  name: string;
  category: CategorySlug;
  brand?: string;
  subcategory?: string;
  catalogue?: string;
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

const catalogSafetyShoes: Product[] = [
  // JCB Safety Footwear
  ['jcb', 'Rumble', 'Rumble', 'Single-density DIP PU sole, padded collar, reflective strip, oil and chemical resistant.', '5-12'],
  ['jcb', 'Ounce', 'Ounce', 'Double-density DIP PU sole, padded collar, reflective strip, oil and chemical resistant.', '5-12'],
  ['jcb', 'Earthmover', 'Earthmover', 'Double-density DIP PU sole, padded collar and lightweight oil-resistant construction.', '5-12'],
  ['jcb', 'Sitemaster', 'Sitemaster', 'Double-density DIP PU sole with padded collar and oil and chemical resistance.', '5-12'],
  ['jcb', 'Mighty', 'Mighty', 'Double-density DIP PU sole, five-eyelet fit and lightweight worksite protection.', '5-12'],
  ['jcb', 'All-Terrain', 'All-Terrain', 'Apollo leather upper, DIP PU plus nitrile sole, 35J heel and acid/alkali resistance.', '5-12'],
  ['jcb', 'Exec', 'Exec', 'Full-grain leather upper, double-density DIP PU plus PU sole and 35J heel.', '5-12'],
  ['jcb', 'Vent', 'Vent', 'Suede leather with scuff cap, double-density sole, 35J heel and lightweight build.', '5-12'],
  ['jcb', 'Ecoboost', 'Ecoboost', 'Suede leather upper, single-density DIP PU sole and lightweight oil-resistant build.', '5-12'],
  ['jcb', 'Countess', 'Ladies', 'Ladies full-grain leather safety shoe with Velcro fastening and 35J heel.', '2-8'],
  ['jcb', 'Access', 'Access', 'Full-grain Apollo leather shoe with Velcro fastening and lightweight sole.', '5-12'],
  ['jcb', 'Hydromaster', 'Hydromaster', 'Quick-drying microfiber upper, slip-on elastic gusset and oil-resistant sole.', '5-12'],
  ['jcb', 'Powerboom', 'Powerboom', 'High-tenacity fly-net upper, padded collar and highly comfortable lightweight fit.', '5-12'],
  ['jcb', 'Fastrac', 'Fastrac', 'High-tenacity fly-net upper with padded collar, oil resistance and lightweight comfort.', '5-12'],
  ['jcb', 'Loadall', 'Loadall', 'Full-grain printed leather, double-density DIP PU sole and metal eyelets with hooks.', '5-12'],
  ['jcb', 'Excavator', 'Excavator', 'Full-grain Apollo leather, D-rings and hooks, antistatic protection and 35J heel.', '5-12'],
  ['jcb', 'Trekker', 'Trekker', 'Nubuck leather upper, double-density DIP PU sole, hooks and antistatic 35J heel.', '5-12'],
  ['jcb', 'Speedmax', 'Speedmax', 'Textured leather upper, thermoplastic toe stiffener, double-density PU sole and Velcro fastening.', '5-12'],
  ['jcb', 'Heatmax', 'Heatmax', 'Apollo leather, DIP nitrile sole, 15kV electrical protection and 25J heel.', '5-12'],
  ['jcb', 'Heatking', 'Heatking', 'Apollo leather, DIP nitrile sole, 15kV electrical protection and 25J heel.', '5-12'],
  ['jcb', 'Gutso', 'Low ankle', 'Apollo leather, double-density DIP PU sole, antistatic properties and 130°C sole.', '5-12'],
  ['jcb', 'Electron', 'Electrical', 'Apollo leather with double-density DIP PU sole and electrical testing up to 15kV.', '5-12'],
  ['jcb', 'Exvolt', 'Electrical', 'Apollo leather, double-density DIP PU sole, 35J heel and 15kV electrical protection.', '5-12'],
  ['jcb', 'Rush', 'ESD', 'High-tenacity fly-net upper, very lightweight construction and ESD sole resistance.', '5-12'],
  ['jcb', 'Clean Pro', 'Cleanroom', 'Washable microfiber upper, antistatic and anti-slip sole for cleanroom use.', '5-12'],
  ['jcb', 'Agile', 'Low ankle', 'Apollo leather, double-density DIP PU sole and fuel and chemical resistance.', '5-12'],
  ['jcb', 'Duchess', 'Ladies', 'Ladies Apollo leather shoe with single-density DIP PU sole and padded collar.', '2-8'],
  ['jcb', 'My Micros', 'Ladies', 'Washable microfiber upper, double-density sole and very lightweight fit.', '2-8'],
  // Everest Safety footwear
  ['everest', 'EVE-101', 'Low ankle', 'Industrial safety shoe with single-density sole and steel-toe protection.', '38-46'],
  ['everest', 'EVE-102', 'Low ankle', 'Industrial safety shoe with double-density sole and steel-toe protection.', '38-46'],
  ['everest', 'EVE-103', 'Low ankle', 'Industrial safety shoe with breathable lining and protective toe cap.', '38-46'],
  ['everest', 'EVE-104-DD', 'Double density', 'Double-density PU safety shoe for general industrial applications.', '38-46'],
  ['everest', 'EVE-104-A-SD', 'Antistatic', 'Antistatic single-density industrial safety shoe.', '38-46'],
  ['everest', 'EVE-104-A-DD', 'Antistatic', 'Antistatic double-density industrial safety shoe.', '38-46'],
  ['everest', 'EVE-105-A-DD', 'Antistatic', 'Double-density antistatic safety shoe with brown mesh lining.', '38-46'],
  ['everest', 'EVE-106-A-SD', 'Antistatic', 'Antistatic single-density safety shoe for industrial work.', '38-46'],
  ['everest', 'EVE-106-A-DD', 'Antistatic', 'Antistatic double-density safety shoe for industrial work.', '38-46'],
  ['everest', 'EVE-107-DD', 'Double density', 'Double-density PU safety shoe with steel-toe protection.', '38-46'],
  ['everest', 'EVE-108-SD', 'Single density', 'Single-density PU safety shoe for everyday industrial use.', '38-46'],
  ['everest', 'EVE-202-SD', 'Single density', 'Single-density industrial safety shoe with durable upper.', '38-46'],
  ['everest', 'EVE-203-DD', 'Double density', 'Double-density PU sole safety shoe for heavy-duty use.', '38-46'],
  ['everest', 'EVE-204-A-DD', 'Antistatic', 'Antistatic double-density safety shoe with industrial toe protection.', '38-46'],
  ['everest', 'EVE-206-A-SD', 'Antistatic', 'Antistatic single-density safety shoe with lightweight construction.', '38-46'],
  ['everest', 'EVE-301-SD', 'Single density', 'Single-density safety shoe for general industrial applications.', '38-46'],
  ['everest', 'EVE-402-SD', 'Single density', 'Single-density safety shoe with durable industrial outsole.', '38-46'],
  ['everest', 'EVE-403-SD', 'Single density', 'Single-density safety shoe for warehouse and factory work.', '38-46'],
  ['everest', 'EVE-601-SD', 'Single density', 'Single-density industrial safety shoe with comfortable lining.', '38-46'],
  ['everest', 'EVE-602-SD', 'Single density', 'Single-density PU safety shoe for everyday protection.', '38-46'],
  ['everest', 'EVE-602-DD', 'Double density', 'Double-density PU safety shoe for enhanced cushioning.', '38-46'],
  ['everest', 'EVE-603-SD', 'Single density', 'Single-density safety shoe with steel-toe option.', '38-46'],
  ['everest', 'EVE-604-DD', 'Double density', 'Double-density safety shoe with steel-toe protection.', '38-46'],
  ['everest', 'EVE-605-SD', 'Single density', 'Single-density PU safety shoe with industrial grip.', '38-46'],
  ['everest', 'EVE-607-SD', 'Single density', 'Single-density safety shoe for industrial floor work.', '38-46'],
  ['everest', 'EVE-701-SD', 'Single density', 'Single-density PU sole safety shoe.', '38-46'],
  ['everest', 'EVE-701-DD', 'Double density', 'Double-density PU sole safety shoe.', '38-46'],
  ['everest', 'EVE-702-SD', 'Single density', 'Single-density safety shoe with practical worksite fit.', '38-46'],
  ['everest', 'EVE-703-SD', 'Metal free', 'TPU and leather upper, black mesh lining and optional metal-free construction.', '38-46'],
  ['everest', 'EVE-704-DD', 'Metal free', 'TPU and leather upper, black mesh lining and double-density sole.', '38-46'],
  ['everest', 'EVE-801-SD', 'Single density', 'Black single-density safety shoe for industrial applications.', '38-46'],
  ['everest', 'EVE-802', 'Chef / clog', 'Chef and clog shoe designed for all-day support and comfort.', '38-46'],
  ['everest', 'Nitrile Low Ankle', 'Nitrile', 'Full-grain leather, Cambrella lining and 300°C nitrile sole.', '38-46'],
  ['everest', 'Nitrile High Ankle', 'Nitrile', 'Full-grain leather, mesh lining and 300°C nitrile sole.', '38-46'],
  ['everest', 'Toe Guard', 'Toe guard', 'Synthetic leather, black mesh lining, steel toe and PVC sole.', '38-46'],
].map(([brand, name, subcategory, description, size]) => ({
  id: `${brand}-${String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, 
  name: String(name),
  brand: brand === 'jcb' ? 'JCB' : 'Everest Safety',
  subcategory: String(subcategory),
  category: 'safety-shoes' as const,
  catalogue: brand === 'jcb' ? '/catalogue/jcb.pdf' : '/catalogue/everest.pdf',
  image: brand === 'jcb' ? '/products/jcb-safety-shoe.png' : '/products/everest-safety-shoe.png',
  certifications: ['ISI', 'EN'] as CertificationCode[],
  shortDesc: String(description),
  description: String(description),
  specs: { Brand: brand === 'jcb' ? 'JCB' : 'Everest Safety', Subcategory: String(subcategory), Sizes: String(size) },
  sizes: String(size).split('-'),
  featured: false,
}));

const canvasClubProducts: Product[] = [
  ['parma', 'Parma S1', 'S1', 'DIP PU and foam cushion with steel toe protection.', '40-46'],
  ['trento', 'Trento S1', 'S1', 'DIP PU and foam cushion with steel toe protection.', '40-46'],
  ['pisa', 'Pisa S1', 'S1', 'Phylon and rubber outsole with fiberglass toe protection.', '39-46'],
  ['siena', 'Siena S1', 'S1', 'Double-density PU outsole with fiberglass toe protection.', '37-48'],
  ['turin', 'Turin S2', 'S2', 'Double-density PU outsole with fiberglass toe protection.', '37-48'],
  ['milan', 'Milan S1', 'S1', 'DIP PU with air cushion and steel toe protection.', '38-46'],
  ['palermo', 'Palermo S2', 'S2', 'DIP PU outsole with steel toe protection.', '40-46'],
  ['genoa', 'Genoa S2', 'S2', 'DIP PU outsole with steel toe protection.', '40-46'],
  ['florence', 'Florence S1', 'S1', 'Double-density PU outsole with steel toe protection.', '40-46'],
  ['rimini', 'Rimini S1', 'S1', 'Phylon and rubber outsole with fiberglass toe protection.', '39-48'],
  ['sorrento', 'Sorrento ESD', 'ESD', 'DIP PU and foam cushion with steel toe protection.', '40-46'],
  ['venice', 'Venice S1', 'S1', 'Phylon and rubber outsole with fiberglass toe protection.', '39-46'],
  ['riva', 'Riva', 'S1', 'Phylon and rubber outsole with steel toe protection.', '39-46'],
  ['rome', 'Rome S2', 'S2', 'Phylon and rubber outsole with fiberglass toe protection.', '39-46'],
  ['verona', 'Verona', 'S1', 'DIP PU outsole with fiberglass toe protection.', '37-42'],
].map(([slug, name, subcategory, description, size]) => ({
  id: `canvas-club-${slug}`,
  name,
  brand: 'Canvas Club',
  subcategory,
  catalogue: '/catalogue/canvas-club.pdf',
  category: 'safety-shoes',
  image: '/products/canvas-club-safety-shoe.png',
  certifications: ['ISI', 'EN'],
  shortDesc: description,
  description,
  specs: { Brand: 'Canvas Club', Subcategory: subcategory, Sizes: size },
  sizes: size.split('-'),
}));

products.push(...catalogSafetyShoes, ...canvasClubProducts);

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getRelated = (product: Product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);

export const formatPrice = (p: Product) =>
  p.price ? `₹${p.price.toLocaleString('en-IN')}${p.priceUnit ? ` ${p.priceUnit}` : ''}` : 'Price on request';
