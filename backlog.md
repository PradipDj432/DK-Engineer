# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it, move it to "Done" with its pull request number, and add a line to `progress.md`.

**Priority:** `P1` needed now · `P2` soon · `P3` later / nice to have
**Owner:** `Owner` (business owner must provide or decide) · `Dev` (build work)

## Next up
The few things to do next, in order. Keep this list short and current.

1. **Owner:** open the live site on a phone and try the menu, call and WhatsApp buttons, the inquiry form and the map.
2. **Owner:** add `https://pradipdj432.github.io/DK-Engineer/` as the website on the Google Maps / Google Business Profile listing for "DK ENGINEER'S".
3. **Dev:** link previews for WhatsApp/Facebook (`og:image`, `og:url`), plus `sitemap.xml` and `robots.txt`.
4. **Owner:** send the business hours, so they can go on the contact page, the footer and Google.

## Waiting on the business owner
- [ ] **P2 · Owner** Business hours and days open.
- [ ] **P2 · Owner** Real photos of the shop, stock and own products (the site uses small photos from the catalogue).
- [ ] **P2 · Owner** Delivery area, delivery charge, minimum order, payment terms.
- [ ] **P3 · Owner** Social media accounts, if any.
- [ ] **P3 · Owner** Decide on a custom domain (for example `dkengineers.in`).
- [ ] **P3 · Owner** Confirm the old Angular app in `angular-app/` can be deleted.
- [ ] **P1 · Owner** Check the live site on a real phone (menu, call and WhatsApp buttons, inquiry form, map).
- [ ] **P2 · Owner** Add the website link to the Google Maps / Google Business Profile listing (needs the owner's Google account).
- [ ] **P3 · Owner** Confirm D-007 (page text kept in the HTML pages; contact details in `js/config.js`). Technical, so only if the owner wants a say.
- [ ] **P3 · Owner** Copyright line: the old site said "DK Solution's"; the new one says "DK ENGINEER'S". Confirm.
- [ ] **P3 · Owner** If a form that sends straight from the website is wanted: sign up for Web3Forms (free) and share the access key.

## To build
- [ ] **P2 · Dev** Link previews: `og:image`, `og:url` and `og:type` on every page, using the `pradipdj432.github.io/DK-Engineer` address (change it if a custom domain is added).
- [ ] **P2 · Dev** `sitemap.xml` and `robots.txt` for Google, using the same address.
- [ ] **P2 · Dev** Add business hours to the contact page, the footer and the Google listing data (once the owner sends them).
- [ ] **P2 · Dev** Replace the catalogue photos with the business's own photos when the owner sends them.
- [ ] **P2 · Dev** Update the site if the owner sends a new catalogue (steps in `catalogue/README.md`).
- [ ] **P3 · Dev** Search box on the products page (type "gasket" or "ball valve" to jump to it).
- [ ] **P3 · Dev** Form service (Web3Forms) so inquiries send from the website itself (once the owner has an access key; see D-010).
- [ ] **P3 · Dev** Free, privacy-friendly visitor counter (for example GoatCounter) so the owner can see visits per page.
- [ ] **P3 · Dev** Connect a custom domain once bought.
- [ ] **P3 · Dev** Delete `angular-app/` once the owner confirms.

## Done

### Owner
- [x] **P1 · Owner** WhatsApp number: +91 70969 07413, the main number (D-010).
- [x] **P1 · Owner** Merge to `main` (PR #1).
- [x] **P1 · Owner** Turn on GitHub Pages: it publishes `main` after every merge (D-003).
- [x] **P1 · Owner** Review the new site: "looks good" (D-003, D-005, D-008 accepted).
- [x] **P2 · Owner** Brands sold: listed in the catalogue (D-012, D-013).
- [x] **P1 · Owner** Address: Shop No. 117, 1st Floor, Bass Complex, G.I.D.C., Char Rasta (the catalogue's address); the Google Maps pin is already correct (D-014).
- [x] **P2 · Owner** Brand logos: not shown on the website; keep them in the repo as a backup (D-015).
- [x] **P2 · Owner** "Also available" section: keep it (D-016).

### Dev
- [x] **P1 · Dev** Move the old Angular app into `angular-app/` and stop its broken workflows (D-002). PR #1.
- [x] **P1 · Dev** Project docs: `README.md`, `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `CLAUDE.md`. PR #1.
- [x] **P1 · Dev** Site skeleton: shared header with mobile menu, footer, mobile-first styles, business settings file (`js/config.js`). PR #1.
- [x] **P1 · Dev** Home page: intro, product categories, why us, about, call to action. PR #1 (categories replaced by the catalogue's 14 sections in PR #3).
- [x] **P1 · Dev** Products page with jump links. PR #1 (rebuilt from the catalogue in PR #3).
- [x] **P1 · Dev** Services page and About page with the old site's text (D-004). PR #1.
- [x] **P2 · Dev** "Ask on WhatsApp" button at the bottom of each product section, opening a chat that names the section. PR #7.
- [x] **P1 · Dev** Contact page: address, phones, email, map, inquiry form that opens an email or WhatsApp (D-006, D-010). PR #1.
- [x] **P1 · Dev** 404 page that works at any wrong address on GitHub Pages. PR #1.
- [x] **P1 · Dev** Turn on WhatsApp with the main number (D-010). PR #1.
- [x] **P1 · Dev** Business details for Google (schema.org `HardwareStore` data on the home page). PR #1.
- [x] **P1 · Dev** README guide for the owner: how to edit text, contact details, products and photos. PR #1.
- [x] **P1 · Dev** `working` branch and pull-request workflow written into the rules (D-011). PR #2.
- [x] **P1 · Dev** Products page rebuilt from the PDF catalogue: 14 sections, photos, materials, brands, gasket sheet specs, "Also available" (D-012). PR #3.
- [x] **P1 · Dev** "Download catalogue (PDF)" on the products and home pages. PR #3.
- [x] **P1 · Dev** Home page: catalogue sections as tiles, catalogue photos in the banner, "Manufacturer & supplier". PR #3.
- [x] **P2 · Dev** A photo for each product category (from the PDF catalogue). PR #3.
- [x] **P1 · Dev** Change the website address to Shop No. 117, Bass Complex, Char Rasta (D-014). PR #4.
- [x] **P2 · Dev** Save the brand logos from the catalogue in `catalogue/brand-logos/` (backup only, not shown) and document the catalogue backup in `catalogue/README.md` (D-015). PR #5.
- [x] **P2 · Dev** Bring all project docs up to date: status, pull requests, next steps, business summary, decision index. PR #6.
