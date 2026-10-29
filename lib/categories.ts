import {
  Anchor,
  Ear,
  Flame,
  Footprints,
  Glasses,
  Grid3x3,
  Hand,
  HardHat,
  Shirt,
  TriangleAlert,
  Wind,
  type LucideIcon,
} from 'lucide-react';

export type CategorySlug =
  | 'safety-shoes'
  | 'safety-nets'
  | 'helmets'
  | 'harness-fall-protection'
  | 'gloves'
  | 'protective-clothing'
  | 'eye-face-protection'
  | 'ear-protection'
  | 'respiratory-masks'
  | 'fire-safety'
  | 'signage';

export interface Category {
  slug: CategorySlug;
  name: string;
  icon: LucideIcon;
  description: string;
}

export const categories: Category[] = [
  { slug: 'safety-shoes', name: 'Safety Shoes', icon: Footprints, description: 'Toe-protected, slip-resistant footwear for factory floors, sites and workshops.' },
  { slug: 'safety-nets', name: 'Safety Nets', icon: Grid3x3, description: 'Fall arrest and debris nets for construction and high-level work.' },
  { slug: 'helmets', name: 'Helmets', icon: HardHat, description: 'Industrial safety helmets for impact and falling-object protection.' },
  { slug: 'harness-fall-protection', name: 'Harness / Fall Protection', icon: Anchor, description: 'Full body harnesses, lanyards and fall arrest equipment for work at height.' },
  { slug: 'gloves', name: 'Gloves', icon: Hand, description: 'Cut, heat, chemical and general-purpose work gloves.' },
  { slug: 'protective-clothing', name: 'Protective Clothing', icon: Shirt, description: 'Hi-vis jackets, coveralls and protective workwear.' },
  { slug: 'eye-face-protection', name: 'Eye / Face Protection', icon: Glasses, description: 'Safety goggles, spectacles and face shields.' },
  { slug: 'ear-protection', name: 'Ear Protection', icon: Ear, description: 'Ear muffs and plugs for noisy industrial environments.' },
  { slug: 'respiratory-masks', name: 'Respiratory Masks', icon: Wind, description: 'Dust masks, respirators and filters for airborne hazards.' },
  { slug: 'fire-safety', name: 'Fire Safety', icon: Flame, description: 'Extinguishers, fire blankets and fire-fighting accessories.' },
  { slug: 'signage', name: 'Signage', icon: TriangleAlert, description: 'Safety signs, floor markings and warning boards.' },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const categoryName = (slug: string) => getCategory(slug)?.name ?? slug;
