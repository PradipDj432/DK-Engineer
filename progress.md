# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Live. The new static website is built, merged to `main` and published by GitHub Pages. Seven pull requests merged so far (#1–#7). |
| **Live site** | `https://pradipdj432.github.io/DK-Engineer/`. GitHub Pages publishes every merge to `main` (Actions → "pages build and deployment"); the latest deploy checked, PR #6, succeeded. |
| **Branches** | `working` and `main` are the same (in sync after PR #6; PR #7 in progress). All new work starts on `working` (D-011). |
| **Blocked on** | Nothing. Some business details are still to come from the owner (see `backlog.md` → "Waiting on the business owner"). |
| **Next step** | Owner: open the live site on a phone and add the website link to the Google Maps listing. Dev: link previews and a sitemap. Full list in `backlog.md` → "Next up". |

## Where we are
What's on the live site today:
- **Pages:** Home, Products (catalogue), Services, About, Contact, and a "page not found" page.
- **Business:** DK ENGINEER'S, G.I.D.C. Vapi. Manufacturer of hydraulic hose pipes, SS corrugated hoses and rubber products, and supplier of industrial hardware from leading brands (details in `business.md`).
- **Catalogue:** the products page follows the owner's printed catalogue: 14 sections with photos, materials, brand names (text only) and gasket sheet specs, plus "Also available". Customers can download the PDF.
- **Contact:** Shop No. 117, 1st Floor, Bass Complex, G.I.D.C., Char Rasta, Vapi. Phones +91 70969 07413 (main, WhatsApp) and +91 88498 61164, email dkengineers6@gmail.com, Google map.
- **Inquiries:** call buttons, WhatsApp buttons (including a floating one on phones and an "Ask on WhatsApp" button on every product section), and a form that opens the customer's email app or WhatsApp with the message ready.
- **Repo:** project docs (this file, `README.md`, `business.md`, `decisions.md`, `backlog.md`, `CLAUDE.md`); the catalogue PDF and 41 brand logos kept as a backup in `catalogue/`; the old Angular site archived in `angular-app/`.

## Pull requests
| PR | What | Merged |
|---|---|---|
| #1 | Rebuild the website as a plain static site, with project docs; WhatsApp on | 2026-10-04 |
| #2 | `working`-branch workflow added to the rules | 2026-10-04 |
| #3 | Product catalogue built from the owner's PDF | 2026-10-04 |
| #4 | Shop address changed to Shop No. 117, Bass Complex, Char Rasta | 2026-10-04 |
| #5 | Catalogue and brand logos kept in the repo as a backup | 2026-10-04 |
| #6 | All project docs brought up to date (status, next steps, business summary) | 2026-10-04 |
| #7 | "Ask on WhatsApp" button on each product section | 2026-10-09 |

## Log

### 2026-10-04
- Reviewed the old Angular 16 site. Found a broken deploy pipeline (retired `upload-artifact@v2`, a zip file published instead of the site, a workflow name that didn't match), footer links going to the 404 page ("Partner", "Contact" with a capital C), an inquiry form that sent nothing, social icons linking nowhere, and leftover Shipper/MRN login pages from another project.
- The owner chose to rebuild the site as a plain static site with the same content (D-001) and to keep the old app in another folder (D-002).
- Moved the Angular app, its config and its two workflows into `angular-app/`, and added a note there explaining it's archived.
- Created the project docs in the same format as the Aara Culture repo: `README.md`, `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `CLAUDE.md`.
- Built the new site: home, products, services, about, contact and 404 pages. Contact details come from `js/config.js`. The inquiry form opens the customer's email app; WhatsApp buttons are ready but hidden until a number is set (D-006).
- Tested in Chromium at phone (390px) and desktop (1280px) widths, served at a simulated `pradipdj432.github.io/DK-Engineer/` address: no horizontal scrolling, no script errors, no broken images. Checked the mobile menu (opens, closes with Escape), the email the form builds (address, subject, body), form validation, the WhatsApp buttons with and without a number, and the 404 page at a nested wrong address.
- The owner confirmed +91 70969 07413 is the main number and is on WhatsApp. Turned on the WhatsApp buttons (D-010, replaces D-006). Checked that the contact page's WhatsApp link, the "Send on WhatsApp" form button and the floating button all open a chat with that number.
- The owner asked to merge the work into `main`; they will turn on GitHub Pages themselves. **PR #1 merged.**
- Set up the `working` branch from `main` and wrote the branch workflow into `CLAUDE.md` and `README.md` (D-011): every feature goes `working` → pull request → merge to `main` → sync `working` back. **PR #2 merged.**
- The owner shared the printed catalogue (PDF, 5 pages, 2022) to use as the website's catalogue. Rebuilt the products page from it: 14 sections in the catalogue's order, 33 photos taken from the PDF, item lists, materials, brand names as text, and the gasket sheet specifications. Kept the old site's other categories under "Also available". Added "Download catalogue (PDF)" on the products and home pages. Updated the home page banner photos, tiles and Google listing data, and said "Manufacturer & supplier" (D-012, D-013).
- Found that the catalogue's address (Shop No. 117, Bass Complex, Char Rasta) differs from the website's (Shop No. 08, Arihant Complex). Kept the website's address and asked the owner.
- Tested at 390px and 1280px: all 35 images on the products page load, no horizontal scrolling, no script errors, every jump link and home tile points to a real section, and the PDF link returns the 1.9 MB PDF. **PR #3 merged.**
- The owner confirmed the current address is the catalogue's: Shop No. 117, 1st Floor, Bass Complex, G.I.D.C., Char Rasta, Vapi, and that the Google Maps pin is already there. Changed it in `js/config.js` (header, footer, contact page, Google listing data) and in the contact page's search description (D-014). **PR #4 merged.**
- The owner decided: no brand logos on the website (names stay as text), but keep the logos in the repo; keep the "Also available" section; keep the catalogue in the repo as a backup. Cut the 41 brand logos out of the PDF at 300 dpi into `catalogue/brand-logos/`, added `catalogue/README.md` (what's there, the PDF's SHA-256, a logo index, steps for a new catalogue) and an `archive/` folder for older catalogues (D-015, D-016). Checked that the PDF in the repo is byte-identical to the one the owner sent. **PR #5 merged.**
- Confirmed GitHub Pages is on: GitHub's "pages build and deployment" ran successfully from `main` after each of PRs #1–#5. The owner reviewed the site ("looks good"), so D-003, D-005 and D-008 are now Accepted. Brought every project doc up to date: current status, pull request list, a "Next up" list in `backlog.md`, a business summary in `business.md`, a decision index in `decisions.md`, and the hosting section in `README.md`. **PR #6.**

### 2026-10-09
- Added an "Ask on WhatsApp" button at the bottom of each of the 15 product sections (14 catalogue sections plus "Also available"). It opens a chat with +91 70969 07413 and the message "Hi DK ENGINEER'S, I would like to ask about: <section name>". The number still comes from `js/config.js`. Tested at 390px: all 15 links built correctly, no horizontal scrolling. **PR #7.**
