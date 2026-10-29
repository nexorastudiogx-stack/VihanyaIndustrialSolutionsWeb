# Vihanya Industrial Solutions: website

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, lucide-react.
Industrial safety equipment catalog for Vihanya Industrial Solutions, Pune.

## 1. Run it locally

You need Node.js 18.17 or newer.

```bash
npm install
cp .env.example .env.local     # Windows: copy .env.example .env.local
npm run dev
```

Open http://localhost:3000. Before pushing changes, run `npm run build` to make sure it compiles.

## 2. Add products

All products are in **`lib/products.ts`**. Adding one product = one new entry + one image.

1. Put the photo in `public/images/products/` (for example `steel-toe-shoe.jpg`).
2. Add an entry to the `products` array:

```ts
{
  id: 'steel-toe-safety-shoes',          // unique, lowercase, hyphens only. Becomes /products/<id>
  name: 'Steel Toe Safety Shoes',
  category: 'safety-shoes',              // one of the slugs in lib/categories.ts
  image: '/images/products/steel-toe-shoe.jpg',
  certifications: ['ISI', 'CE', 'EN'],
  shortDesc: 'One line shown on the product card.',
  // Optional:
  description: 'Longer text for the product page.',
  specs: { Standard: 'IS 15298 / EN ISO 20345', Sole: 'PU' },
  sizes: ['6', '7', '8'],
  price: 1450,                           // INR. Leave out to show "Price on request"
  priceUnit: 'per pair',
  moq: 10,                               // minimum order quantity
  featured: true,                        // appears on the home page (first 4 are shown)
}
```

Search, filters, category pages, product pages, the sitemap and structured data all update automatically.
The catalog loads 24 products at a time with a "Show more" button, so 100 to 500 products is fine.

Photos: use roughly 4:3 images (for example 1200 x 900), JPG or WebP, under 300 KB each. Next.js resizes them.

For a very large catalog, importing from a spreadsheet is easy to add later: convert a CSV to the same `Product[]` shape.

## 3. Brand colors, fonts and logo

* **Colors:** edit the five RGB values at the top of `app/globals.css`. Everything uses those tokens.
* **Fonts:** Barlow Condensed (headings) and Inter (body), set in `app/layout.tsx`.
* **Logo:** the header and footer currently show a text wordmark. Replace it in `components/Header.tsx` (marked TODO) with the logo file from `/public`.
* **Brochure:** replace `public/brochure.pdf` with the real PDF, keeping the same file name.

## 4. TODO list before launch (Nov 9, 2026)

Search the project for `TODO` to find all of these.

| What | Where |
| --- | --- |
| Real phone, email | `lib/site.ts` |
| WhatsApp number (digits only, with country code, e.g. `919876543210`) | `lib/site.ts` |
| Real address (also drives the Google Maps embed) and business hours | `lib/site.ts`, shown on `/contact` |
| **Where quote and bulk-order submissions go** | `lib/submissions.ts` and `SUBMISSION_WEBHOOK_URL` (see below) |
| Real testimonials. The current ones are placeholders and must not be published as real feedback | `lib/testimonials.ts` |
| Real products, specs, prices and photos. Current entries are placeholders | `lib/products.ts` |
| Gallery photos | `app/gallery/page.tsx` |
| Review the starter blog articles | `lib/blog.ts` |
| Logo | `components/Header.tsx` |
| Brochure PDF | `public/brochure.pdf` |
| Social preview image (1200 x 630) | `app/layout.tsx` |
| Confirm every product is really ISI, CE or EN certified before showing the badge | `lib/products.ts` |

## 5. Where quote and bulk-order submissions go

The forms post to `/api/quote` and `/api/bulk-order`. Both use `lib/submissions.ts`, which validates the request, blocks simple spam (honeypot field), and then forwards it as JSON to the URL in the environment variable `SUBMISSION_WEBHOOK_URL`.

Options that work without writing code: a Formspree endpoint, a Zapier or Make webhook (then send an email or add a Google Sheets row), or a Google Apps Script web app. To send email directly instead, replace the `fetch` call in `lib/submissions.ts` with Resend, SendGrid or SMTP.

Until `SUBMISSION_WEBHOOK_URL` is set, submissions are only printed to the server log, so **requests will not reach the client**. Set it before launch and send a test request.

## 6. Deploy on Vercel

1. Push this project to the `main` branch of the GitHub repo.
2. In Vercel: **Add New, Project**, import `VihanyaIndustrialSolutionsWeb`. Framework is detected as Next.js. No build settings need changing.
3. Add environment variables (Settings, Environment Variables):
   * `NEXT_PUBLIC_SITE_URL` = the final site address, e.g. `https://www.yourdomain.com`
   * `SUBMISSION_WEBHOOK_URL` = your webhook (section 5)
4. Click **Deploy**. Every later push to `main` redeploys automatically.
5. When the domain is bought: Vercel, Settings, Domains, add it and follow the DNS instructions. Then update `NEXT_PUBLIC_SITE_URL` and redeploy.

## 7. Project layout

```
app/                 pages, API routes, sitemap, robots
components/          Header, Footer, Hero, Catalog, forms, cards
lib/site.ts          contact details and site settings
lib/products.ts      product data and types
lib/categories.ts    the 11 categories
lib/blog.ts          blog posts
lib/testimonials.ts  testimonials
public/              images, brochure.pdf
```

## 8. Motion

One orchestrated moment: the category tiles assemble in the hero. Catalog filtering animates cards in and out, and product cards lift slightly on hover. All animation respects the visitor's reduced-motion setting.
