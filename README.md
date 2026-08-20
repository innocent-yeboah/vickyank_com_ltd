# VickYank Limited Company — Corporate Website

Premium corporate site for **VickYank Limited Company**.

**Tagline:** Global Standards. Local Expertise.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Supabase (optional enquiry persistence)
- Resend (enquiry email notifications)
- Deploy target: Vercel

## Brand

| Token | Hex |
|-------|-----|
| Gold | `#D4AF37` |
| Dark Navy | `#1A1A2E` |
| White | `#FFFFFF` |
| Charcoal | `#2D2D2D` |

## Sitemap

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/about` | Company story |
| `/services` | Our Business hub |
| `/services/mining` | Mining Operations |
| `/services/gold-trading` | Gold Trading |
| `/services/equipment` | Excavator Machines |
| `/services/spare-parts` | Spare Parts |
| `/services/luxury-cars` | Luxury Car Rental |
| `/services/shop` | Parts & equipment pre-order catalogue |
| `/newsletter` | Newsletter |
| `/contact` | Enquire |

Legacy URLs `/shop`, `/gold-trading`, `/equipment`, `/luxury-cars` permanently redirect to nested service routes. Former checkout/success URLs redirect to the shop.

The shop is **pre-order only** — no online cart or payment. Prices are available upon request; enquiries go to the desk.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

See `.env.example` for Resend and Supabase keys.
