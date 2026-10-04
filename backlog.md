# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it here and add a line to `progress.md`.

**Priority:** `P1` needed for first launch · `P2` soon after launch · `P3` later / nice to have
**Owner:** `Owner` (business owner must provide or decide) · `Dev` (build work)

## Waiting on the business owner
- [ ] **P1 · Owner** Review the new site and confirm the `Proposed` decisions in `decisions.md` (D-003, D-005, D-007 to D-009).
- [x] **P1 · Owner** WhatsApp number: +91 70969 07413, the main number (D-010).
- [x] **P1 · Owner** Merge to `main`.
- [ ] **P1 · Owner** Turn on GitHub Pages (steps in `README.md` → Go live).
- [ ] **P2 · Owner** Business hours and days open.
- [ ] **P2 · Owner** Real photos of the shop, stock and products (the site uses three small pictures from the old site).
- [ ] **P2 · Owner** Brands sold, and whether their logos may be shown (D-009).
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
- [ ] **P1 · Dev** After merge: check the live site on a real phone (call button, menu, form, map).

## Build — after launch
- [ ] **P2 · Dev** Add business hours to the contact page and footer.
- [ ] **P2 · Dev** Replace the product pictures with real photos; add a photo to each product category.
- [ ] **P2 · Dev** Share preview image (`og:image`) so links look good on WhatsApp. Needs the final address, because it must be a full URL.
- [ ] **P2 · Dev** Link the website from the Google Maps / Google Business Profile listing.
- [ ] **P2 · Dev** `sitemap.xml` and `robots.txt` once the final address is decided.
- [ ] **P3 · Dev** Brands section, if the owner confirms (D-009).
- [ ] **P3 · Dev** Optional form service (Web3Forms) so inquiries send from the website itself (D-006).
- [ ] **P3 · Dev** Connect a custom domain once bought.
- [ ] **P3 · Dev** Delete `angular-app/` once the owner confirms.
