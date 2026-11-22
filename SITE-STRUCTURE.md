# Site Structure — kottayam.smarthomerepair.in

## Current structure (live)

```
https://kottayam.smarthomerepair.in/            ← single landing page (all content)
  #services      Six appliance/service cards
  #support       Feedback & Complaints (7428336522) + New Bookings & Quotes (6238054003)
  #reviews       50 Google review cards + review submission form
  #lead          Get a Free Quote — address, phone, hours
  /sw.js         Service worker (shr-v2)
  /robots.txt    Crawler directives + sitemap reference
  /sitemap.xml   Single canonical URL
```

Navigation and footer link to the four on-page anchors. Every service card should lead the
user to the booking form in `#support`.

## Recommended structure if the site expands

Only build these when there is unique content for each and GSC shows demand:

```
/
├── /ac-repair-kottayam
├── /washing-machine-repair-kottayam
├── /microwave-repair-kottayam
├── /refrigerator-repair-kottayam
├── /hvac-vrv-ductable-kottayam
├── /faq
└── /contact
```

Hard stop at 50 pages total; warning at 30. No city-swap templates.

## Internal linking rules

- Each new service page links to: the landing page, the booking form anchor, and at most two
  other genuinely related service pages
- Use descriptive anchors ("AC repair in Kottayam"), not "click here"
- Keep the canonical URL on the landing page; new pages canonical to themselves
- Update `sitemap.xml` and cross-check `robots.txt` whenever a page is added

## Quality gates for any new page

| Page type | Minimum words | Unique content |
|---|---|---|
| Landing page | Current | Already live, being enriched with FAQ and copy |
| Service page | 800 | 100% unique |
| FAQ / contact | 400 | 80% unique |

Do not add a page just to target a keyword. Each page must answer a real question better than
a directory listing does.
