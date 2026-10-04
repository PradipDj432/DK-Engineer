# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it here and add a line to `progress.md`.

**Priority:** `P1` needed for first launch · `P2` soon after launch · `P3` later / nice to have
**Owner:** `Owner` (business owner must provide or decide) · `Dev` (build work)

## Waiting on the business owner
- [ ] **P1 · Owner** Review the new site and confirm the `Proposed` decisions in `decisions.md` (D-003, D-005, D-007, D-008).
- [x] **P1 · Owner** WhatsApp number: +91 70969 07413, the main number (D-010).
- [x] **P1 · Owner** Merge to `main`.
- [ ] **P1 · Owner** Turn on GitHub Pages (steps in `README.md` → Go live).
- [ ] **P2 · Owner** Business hours and days open.
- [ ] **P2 · Owner** Real photos of the shop, stock and own products (the site uses small photos from the catalogue).
- [x] **P2 · Owner** Brands sold: listed in the catalogue (D-012, D-013).
- [x] **P1 · Owner** Address: Shop No. 117, 1st Floor, Bass Complex, G.I.D.C., Char Rasta (the catalogue's address); the Google Maps pin is already correct (D-014).
- [x] **P2 · Owner** Brand logos: not shown on the website; keep them in the repo as a backup (D-015).
- [x] **P2 · Owner** "Also available" section: keep it (D-016).
- [ ] **P2 · Owner** Delivery area, delivery charge, minimum order, payment terms.
- [ ] **P3 · Owner** Social media accounts, if any.
- [ ] **P3 · Owner** Decide on a custom domain (for example `dkengineers.in`).
- [ ] **P3 · Owner** Confirm the old Angular app in `angular-app/` can be deleted.

## Build — first launch
- [x] **P1 · Dev** Move the old Angular app into `angular-app/` and stop its broken workflows (D-002).
- [x] **P1 · Dev** Project docs: `README.md`, `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `CLAUDE.md`.
- [x] **P1 · Dev** Site skeleton: shared header with mobile menu, footer, mobile-first styles, business settings file (`js/config.js`).
- [x] **P1 · Dev** Home page: intro, 12 product categories, why us, about, call to action.
- [x] **P1 · Dev** Products page: 12 categories with jump links.
- [x] **P1 · Dev** Services page and About page with the old site's text (D-004).
- [x] **P1 · Dev** Contact page: address, phones, email, map, inquiry form that opens an email (D-006).
- [x] **P1 · Dev** 404 page that works at any wrong address on GitHub Pages.
- [x] **P1 · Dev** Turn on WhatsApp with the main number (D-010).
- [x] **P1 · Dev** Business details for Google (schema.org `HardwareStore` data on the home page).
- [x] **P1 · Dev** README guide for the owner: how to edit text, contact details, products and photos.
- [x] **P1 · Dev** `working` branch and pull-request workflow written into the rules (D-011).
- [x] **P1 · Dev** Products page rebuilt from the PDF catalogue: 14 sections, photos, materials, brands, gasket sheet specs, "Also available" (D-012).
- [x] **P1 · Dev** "Download catalogue (PDF)" on the products and home pages.
- [x] **P1 · Dev** Home page: catalogue sections as tiles, catalogue photos in the banner, "Manufacturer & supplier".
- [ ] **P1 · Dev** After merge: check the live site on a real phone (call button, menu, form, map).

## Build — after launch
- [ ] **P2 · Dev** Add business hours to the contact page and footer.
- [x] **P2 · Dev** A photo for each product category (from the PDF catalogue).
- [ ] **P2 · Dev** Replace the catalogue photos with the business's own photos when the owner sends them.
- [x] **P1 · Dev** Change the website address to Shop No. 117, Bass Complex, Char Rasta (D-014).
- [ ] **P2 · Dev** Update the site if the owner sends a new catalogue.
- [ ] **P2 · Dev** Share preview image (`og:image`) so links look good on WhatsApp. Needs the final address, because it must be a full URL.
- [ ] **P2 · Dev** Link the website from the Google Maps / Google Business Profile listing.
- [ ] **P2 · Dev** `sitemap.xml` and `robots.txt` once the final address is decided.
- [x] **P2 · Dev** Save the brand logos from the catalogue in `catalogue/brand-logos/` (backup only, not shown) and document the catalogue backup in `catalogue/README.md` (D-015).
- [ ] **P3 · Dev** Optional form service (Web3Forms) so inquiries send from the website itself (D-006).
- [ ] **P3 · Dev** Connect a custom domain once bought.
- [ ] **P3 · Dev** Delete `angular-app/` once the owner confirms.
