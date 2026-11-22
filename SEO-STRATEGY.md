# SEO Strategy — kottayam.smarthomerepair.in

Date: 2026-11-22
Template: Local Service Business (seo-plan skill)
Scope: single-page static landing page on GitHub Pages

## 1. Situation

**Strength:** strong local entity (real Kottayam address, two phone numbers, 50 visible Google
reviews, 6 concrete services), plus an established parent brand at `smarthomerepair.in` that
already ranks in Kochi.

**Weakness:** the page had no canonical/OG tags, no structured data, generic H1/H2s, no FAQ,
no sitemap/robots, and no copy targeting service + city keywords. It is also a single page,
so it can only rank for a limited keyword set without expansion.

**Constraint:** GitHub Pages serves static files and ignores `_headers`. Page updates appear
after the Pages build; the service worker (`shr-v2`) is network-first for HTML so returning
visitors get updates.

## 2. Goals (measured, not guessed)

| Metric | Baseline | 3 months | 6 months | 12 months |
|---|---|---|---|---|
| Verified in GSC | No | Yes | Yes | Yes |
| Indexed pages | Unknown | 1 indexed + sitemap | 1 + service pages if approved | 6–10 |
| Tier-1 keywords with impressions | Unknown | 5+ | 10+ | 15+ |
| Top-10 rankings (service + Kottayam) | Unknown | 1–3 | 3–6 | 6+ |
| Bookings via 6238054003 | Not tracked | Trackable link clicks | Reported monthly | Reported monthly |
| Core Web Vitals | Not measured | Pass LCP/INP/CLS field data | Pass | Pass |

Baselines marked "Unknown" must be captured from GSC/CrUX before they can be treated as
targets. No numbers are fabricated.

## 3. Positioning

> Kottayam's local AC and home-appliance repair team — ₹349 visit charge, waived if you go
> ahead with the repair, same-day response, and a support line that actually answers
> (7428336522).

Differentiate from JustDial/Sulekha aggregators (no direct relationship, no local guarantee)
and from single-brand centres (one appliance only).

## 4. On-page optimization (implemented in `index.html`)

- Title: keyword + city + brand
- Meta description: services + ₹349 + CTA + booking number
- Canonical, robots, Open Graph, Twitter, theme-color
- `lang="en-IN"`
- H1 with primary keyword + city; H2s rewritten to match search intent
- Hero, service and FAQ copy with natural service + Kottayam phrases
- Visible FAQ section with truthful answers from the existing page facts
- JSON-LD `@graph`: `LocalBusiness` (NAP, hours, areaServed, priceRange), `WebSite`, six `Service` entities, `FAQPage`
- Improved banner alt text
- Internal anchors from every service to the booking card

## 5. Technical foundation

- `robots.txt` with sitemap reference; allow all crawlers including AI crawlers
- `sitemap.xml` with canonical URL and lastmod
- Keep service worker network-first for HTML; static assets cache-first
- Keep existing responsive images (AVIF/WebP/srcset) and preload of the hero image
- Verify with Rich Results Test and mobile-friendly test after each deploy
- Add GA4 (or Matomo/Plausible) and GSC verification; track `tel:` and `wa.me` clicks as conversions

## 6. Local SEO / E-E-A-T

- NAP consistency: **Baker Rd, Baker Hill, Kottayam, Keralam 686001** / **6238054003** on
  page, footer and schema. Support number **7428336522** is a separate contact route, not the
  business phone in schema.
- Do not invent geo-coordinates, a GST number, or service towns that are not confirmed.
- The 50 review cards are first-party display of real Google reviews; keep names and text
  verbatim and keep owner replies out (user requirement).
- Build author/technician credibility only with real names and credentials.
- If a Google Business Profile exists for this Kottayam location, make sure its name, address,
  phone, hours and categories match this page exactly.

## 7. Content / expansion (only after core page is verified)

Do **not** create thin location pages. If expanding, each of these needs unique, genuinely
useful content (800+ words, real photos, problem/solution detail):

1. `/ac-repair-kottayam` — biggest query cluster
2. `/washing-machine-repair-kottayam`
3. `/microwave-repair-kottayam`
4. `/refrigerator-repair-kottayam`
5. `/faq` or `/contact` only if a real site structure is launched

Until then, the single-page anchors are the site structure.

## 8. Risks / don'ts

- No paid "trial" data or guessed volumes in reporting
- No fake ratings, no invented service areas, no copied competitor text
- No deletion of existing GitHub content
- No `_headers`-dependent caching assumptions on GitHub Pages
- Check that structured data matches visible content after every edit

## 9. Review cadence

Weekly: GSC impressions/clicks, phone and WhatsApp click counts.
Monthly: query movement for Tier 1/2, search appearance, CWV field data.
Quarterly: repeat keyword research, competitor check, content decisions.
