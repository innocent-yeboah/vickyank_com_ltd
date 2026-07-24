# VICKYANK LIMITED COMPANY — Corporate Website

Professional corporate demo website for **Vickyank Limited Company**, a
multi-service industrial enterprise in Ghana:

- Mining operations
- Gold trading (buy & sell raw and refundable gold)
- Excavator machines (renting & selling)
- Excavator spare parts
- Luxury car rental

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org) (strict)
- [Tailwind CSS](https://tailwindcss.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or push the repository to GitHub and import it at
[vercel.com/new](https://vercel.com/new) — zero configuration required.

## Pages

| Route        | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| `/`          | Homepage — hero, stats, services preview, why choose us    |
| `/about`     | Company story, mission, values, leadership                 |
| `/services`  | Detailed sections for all five service lines (with anchors)|
| `/equipment` | Excavator fleet, spare parts categories, luxury car gallery|
| `/contact`   | Enquiry form, WhatsApp, phone, email, map                  |

## Before Final Launch — Replace Placeholders

1. **Images** — all photos are Unsplash placeholders. Search the code for
   `REPLACE:` comments and swap in real photos of the client's sites,
   machines, and vehicles.
2. **Stats** — homepage trust indicators (years, fleet size, projects) are
   placeholders; confirm real figures.
3. **Leadership** — `/about` team profiles are placeholders.
4. **Testimonials** — homepage quotes are placeholders.
5. **Map** — update the Google Maps embed in `app/contact/page.tsx` with
   the exact office address.
6. **Contact form** — currently logs submissions to the browser console
   (demo mode). Connect to [Resend](https://resend.com) or a backend API
   route for production — see `components/ContactForm.tsx`.
7. **Logo** — the "V" mark in the navbar/footer is a placeholder; swap in
   the real logo.

## Contact Details Used

- Phone: 055 700 4112 (`+233 55 700 4112`)
- WhatsApp: [wa.me/233557004112](https://wa.me/233557004112)
- Email: vickyanklimitedcompany@gmail.com

All contact details are centralised in `lib/site.ts`.
