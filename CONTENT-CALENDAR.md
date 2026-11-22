# Content Calendar — Kottayam landing page

Status: single-page site. "Publish" means an edit to `index.html` + push + Pages build check.

## Already published (before this plan)

- Six service cards: microwave, AC, HVAC/VRV, ductable, washing machine, refrigerator
- Support section with complaint/feedback/review routing to 7428336522
- Booking form routing to 6238054003
- 50 verbatim Google review cards (no owner replies)
- Review submission form with star rating
- ₹349 visit charge disclosure

## Phase 1 — Foundation (week 1, 2026-11-22)

| Item | Status | Owner | Note |
|---|---|---|---|
| Keyword research file | Done | Agent | `KEYWORD-RESEARCH.md`, no invented volumes |
| Competitor analysis | Done | Agent | `COMPETITOR-ANALYSIS.md` |
| On-page SEO rewrite (title, meta, H1/H2, FAQ, schema) | Done | Agent | `index.html` |
| robots.txt + sitemap.xml | Done | Agent | Root single-page site |
| GSC verification | Pending | Business | Needs DNS/HTML verification access |
| Analytics + click tracking on `tel:` / `wa.me` | Pending | Business | Required for real baselines |

## Phase 2 — Proof & local signals (weeks 2–4)

| Week | Content action | Why |
|---|---|---|
| 2 | Add 3–5 real, dated service stories (what the fault was, what was fixed, approximate price) to the page or a `/work` section | Information gain; no competitor shows this |
| 2 | Verify Google Business Profile name/address/phone/hours match this page | Local pack consistency |
| 3 | Add technician names/credentials only if real and verifiable | E-E-A-T |
| 3 | Add real location/landmark coverage text **only for areas the business confirms** | Locality keywords |
| 4 | Add photos of actual jobs and team (original, compressed to AVIF/WebP) | Trust + image search |

## Phase 3 — Expansion (weeks 5–12, conditional)

Only start after GSC shows the core page getting impressions for Tier-1 keywords.

| Priority | Page | Minimum unique content |
|---|---|---|
| 1 | AC repair Kottayam | 800+ words, symptoms, gas/ installation/ leakage, real photos, FAQ |
| 2 | Washing machine repair Kottayam | 800+ words, spin/drain/PCB issues, semi vs fully automatic |
| 3 | Microwave oven repair Kottayam | 800+ words, not heating/sparking, brand coverage |
| 4 | Refrigerator repair Kottayam | 800+ words, cooling/compressor/thermostat |
| 5 | HVAC/VRV & ductable Kottayam | 800+ words, maintenance checklist, commercial use cases |

Rule: each page must be materially different, link back to the landing page, and include one
real example. No templated city-swap pages.

## Phase 4 — Authority (months 4–12)

- Monthly: refresh one old review/story block with a new verified job
- Quarterly: answer new real questions in the FAQ, remove outdated ones
- Quarterly: re-run keyword research from GSC impressions (positions 4–15 first)
- Ongoing: ask satisfied customers for Google reviews; keep displaying them verbatim

## Cadence rules

- One meaningful change per week beats five rushed commits
- Every change: edit → local JS/HTML check → commit → wait for Pages build → verify live → verify in browser
- Never publish a claim that cannot be backed by a real invoice, technician, photo or review
