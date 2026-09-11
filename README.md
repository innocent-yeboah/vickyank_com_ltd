# VickYank Limited Company — Corporate Website

Premium corporate site for **VickYank Limited Company**.

**Tagline:** Global Standards. Local Expertise.

## Goal

Help visitors look around, trust the company, and understand what VickYank does.

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

## Sitemap

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/about` | About |
| `/services` | Our Business hub |
| `/services/mining` | Mining |
| `/services/gold-trading` | Gold trading |
| `/services/equipment` | Digging machines |
| `/services/spare-parts` | Spare parts |
| `/services/luxury-cars` | Fancy cars |
| `/newsletter` | Newsletter |
| `/contact` | Enquire |

Top menu: Home · About · Our Business · Contact · Newsletter. Services open only from Our Business.

No shop, cart, or online prices. Legacy `/shop` URLs redirect to `/services`.

## Contact

- Phones: 024 411 2193 · 055 700 4112
- WhatsApp (floating): 055 700 4112
- Email: info@vickyanklimitedcompany.com
- Location: Agona Nkwanta, Ahanta West, Ghana
- Domain: vickyanklimitedcompany.com

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

See `.env.example` for Resend and Supabase keys.
