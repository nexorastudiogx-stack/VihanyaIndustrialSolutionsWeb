export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  body: string[]; // paragraphs
}

// TODO(client): review these starter articles and add your own.
export const posts: Post[] = [
  {
    slug: 'choosing-the-right-safety-shoes',
    title: 'Choosing the right safety shoes for your site',
    excerpt: 'Toe caps, soles and midsoles: match the shoe to the hazard, not just the price.',
    date: '2026-10-01',
    readMinutes: 3,
    body: [
      'Start with the hazard. Falling or rolling objects call for a protective toe cap (steel or composite). Sharp objects on the floor call for a penetration-resistant midsole. Wet or oily floors need a slip-resistant sole, and areas with static-sensitive equipment may need anti-static footwear.',
      'Check the markings. Look for the relevant standard on the shoe or its label, such as IS 15298 or EN ISO 20345, and the symbols that show which protections it offers.',
      'Fit matters as much as rating. Try shoes on at the end of the day when feet are slightly swollen, wear the socks you work in, and make sure toes have room without the heel slipping.',
      'Replace shoes when the sole is worn smooth, the toe cap is exposed or dented, or the upper has split. A damaged shoe no longer protects as rated.',
    ],
  },
  {
    slug: 'inspecting-a-safety-harness',
    title: 'How to inspect a safety harness before every use',
    excerpt: 'A two-minute check before each climb can catch damage that puts a worker at risk.',
    date: '2026-10-08',
    readMinutes: 3,
    body: [
      'Inspect the webbing along its full length. Look for cuts, fraying, burns, stiffness, discoloration and chemical damage. Check that stitching is intact and not pulled or broken.',
      'Check the hardware: D-rings, buckles and adjusters should be free of cracks, sharp edges, corrosion and deformation, and should operate smoothly.',
      'Make sure the label is present and readable. If the harness has been used to arrest a fall, remove it from service and follow the manufacturer’s instructions before any further use.',
      'Always follow the manufacturer’s guidance on inspection intervals and service life, and have a trained person carry out periodic formal inspections.',
    ],
  },
  {
    slug: 'when-to-replace-a-safety-helmet',
    title: 'When to replace a safety helmet',
    excerpt: 'Impact, age and sunlight all reduce a helmet’s protection. Know the warning signs.',
    date: '2026-10-15',
    readMinutes: 2,
    body: [
      'Replace any helmet that has taken a significant impact, even if no damage is visible. The shell and suspension may be weakened.',
      'Look for cracks, dents, chalky or faded shell material, and a suspension that is frayed or no longer holds the helmet at the right height.',
      'Check the manufacturer’s stated service life, which often depends on the shell material and working conditions such as heat and sunlight.',
      'Do not paint, drill or stick unapproved labels on a helmet, since solvents and adhesives can weaken the shell.',
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
