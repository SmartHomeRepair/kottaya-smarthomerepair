# Implementation Roadmap — 4 phases

Repo: `SmartHomeRepair/kottaya-smarthomerepair` (GitHub Pages, `main` at `/`)

## Phase 1 — Foundation (weeks 1–4)

| # | Task | Status | Acceptance |
|---|---|---|---|
| 1 | Keep service worker network-first for HTML (`shr-v2`) | Done | New edits visible without manual cache clear |
| 2 | Keyword research + competitor analysis | Done | Files committed, no invented volumes |
| 3 | On-page SEO rewrite | Done | Title/meta/canonical/OG/H1/H2/FAQ/schema live |
| 4 | `robots.txt` + `sitemap.xml` | Done | Both return HTTP 200 with correct content-type |
| 5 | Verify Pages build and live HTML after every push | Done for current commit | Build `built` on matching SHA; live HTML contains the change |
| 6 | Connect GSC property + analytics | Pending | Property verified, click events recorded |
| 7 | Validate JSON-LD in Rich Results Test | Pending | No errors; warnings understood |

## Phase 2 — Expansion (weeks 5–12)

- Collect 3–5 real service stories with dates and approximate prices
- Add original job photos (AVIF/WebP, descriptive alt text)
- Align Google Business Profile NAP/hours with the page
- Confirm which nearby areas are genuinely served before adding locality copy
- Set up click tracking for 6238054003 (bookings) and 7428336522 (support)

## Phase 3 — Scale (weeks 13–24)

- If GSC justifies it, build standalone service pages (one per Tier-1 service)
- Add internal links from each service page to the booking form on this landing page
- Improve pages in positions 4–15 first (title, first paragraph, FAQ)
- Monitor Core Web Vitals field data; keep hero preload and responsive images

## Phase 4 — Authority (months 7–12)

- Publish genuine expertise content (maintenance guides, real case notes)
- Earn local mentions/links from Kerala home-improvement and community sites
- Keep schema, NAP and reviews accurate; prune anything unverifiable
- Quarterly strategy review against the KPI table in `SEO-STRATEGY.md`

## Deployment checklist (repeat every change)

1. `node --check` on extracted inline scripts
2. `git add -A` and commit with a descriptive message
3. `git push origin main`
4. Poll `gh api repos/SmartHomeRepair/kottaya-smarthomerepair/pages/builds/latest` until status is `built` on the new SHA
5. `Invoke-WebRequest https://kottayam.smarthomerepair.in/` and assert markers are present
6. Reload the browser tab and verify in-page

## Rollback

Nothing on GitHub is deleted. If an edit regresses, revert that commit with a new commit
(`git revert <sha>`) rather than force-pushing or deleting files.
