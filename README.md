# Deck Repair Gaithersburg MD — Astro Site

Static Astro site for **deckrepairgaithersburgmd.com**, optimized for Cloudflare Pages.

## Features

* Responsive, mobile-first design
* Forest green + warm amber color theme
* OpenStreetMap embed for 105 W Diamond Ave, Gaithersburg, MD 20877
* SEO: meta tags, canonical, JSON-LD LocalBusiness schema, sitemap, robots.txt
* Blog section with Markdown posts (src/content/blog/)
* Fast static build for Google indexing
* Cloudflare Pages ready (static output)

## Phone number

Placeholder: **(301) 555-0199** — replace across the site (search for `3015550199` and `555-0199`).

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub/GitLab repo.
2. In Cloudflare Dashboard → Workers & Pages → Create → Connect to Git.
3. Build settings:
   * **Framework preset:** Astro
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
4. Add custom domain deckrepairgaithersburgmd.com.
5. Submit https://deckrepairgaithersburgmd.com/sitemap-index.xml in Google Search Console.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Notes

* Fully static — ideal for Pages and SEO.
* `@astrojs/sitemap` generates `/sitemap-index.xml` at build time.
* `public/robots.txt` points crawlers to the sitemap.
* Blog posts live in `src/content/blog/` as Markdown files with frontmatter.
