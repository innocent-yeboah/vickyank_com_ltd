# VickYank Limited Company — Corporate Website

Premium corporate site for **VickYank Limited Company**.

**Tagline:** Global Standards. Local Expertise.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Supabase (optional enquiry persistence)
- Resend (enquiry email notifications)
- Paystack (GHS checkout)
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
| `/services` | Services hub |
| `/services/mining` | Mining Operations |
| `/services/gold-trading` | Gold Trading |
| `/services/equipment` | Excavator Machines |
| `/services/spare-parts` | Spare Parts |
| `/services/luxury-cars` | Luxury Car Rental |
| `/shop` | E-commerce |
| `/contact` | Contact |

Legacy URLs `/gold-trading`, `/equipment`, `/luxury-cars` permanently redirect to nested service routes.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

See `.env.example` for Paystack, Resend, and Supabase keys.
