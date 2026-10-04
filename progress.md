# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | New static site merged to `main`. Work continues on the `working` branch (D-011). |
| **Live site** | Will be `https://pradipdj432.github.io/DK-Engineer/` once Pages is on. |
| **Blocked on** | The owner turning on GitHub Pages. |
| **Next step** | Turn on GitHub Pages, then check the live site on a real phone. |

## Log

### 2026-10-04
- Reviewed the old Angular 16 site. Found a broken deploy pipeline (retired `upload-artifact@v2`, a zip file published instead of the site, a workflow name that didn't match), footer links going to the 404 page ("Partner", "Contact" with a capital C), an inquiry form that sent nothing, social icons linking nowhere, and leftover Shipper/MRN login pages from another project.
- The owner chose to rebuild the site as a plain static site with the same content (D-001) and to keep the old app in another folder (D-002).
- Moved the Angular app, its config and its two workflows into `angular-app/`, and added a note there explaining it's archived.
- Created the project docs in the same format as the Aara Culture repo: `README.md`, `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `CLAUDE.md`.
- Built the new site: home, products, services, about, contact and 404 pages. Contact details come from `js/config.js`. The inquiry form opens the customer's email app; WhatsApp buttons are ready but hidden until a number is set (D-006).
- Tested in Chromium at phone (390px) and desktop (1280px) widths, served at a simulated `pradipdj432.github.io/DK-Engineer/` address: no horizontal scrolling, no script errors, no broken images. Checked the mobile menu (opens, closes with Escape), the email the form builds (address, subject, body), form validation, the WhatsApp buttons with and without a number, and the 404 page at a nested wrong address.
- The owner confirmed +91 70969 07413 is the main number and is on WhatsApp. Turned on the WhatsApp buttons (D-010, replaces D-006). Checked that the contact page's WhatsApp link, the "Send on WhatsApp" form button and the floating button all open a chat with that number.
- The owner asked to merge the work into `main`; they will turn on GitHub Pages themselves.
- Set up the `working` branch from `main` and wrote the branch workflow into `CLAUDE.md` and `README.md` (D-011): every feature goes `working` → pull request → merge to `main` → sync `working` back.
- The owner shared the printed catalogue (PDF, 5 pages, 2022) to use as the website's catalogue. Rebuilt the products page from it: 14 sections in the catalogue's order, 33 photos taken from the PDF, item lists, materials, brand names as text, and the gasket sheet specifications. Kept the old site's other categories under "Also available". Added "Download catalogue (PDF)" on the products and home pages. Updated the home page banner photos, tiles and Google listing data, and said "Manufacturer & supplier" (D-012, D-013).
- Found that the catalogue's address (Shop No. 117, Bass Complex, Char Rasta) differs from the website's (Shop No. 08, Arihant Complex). Kept the website's address and asked the owner.
- Tested at 390px and 1280px: all 35 images on the products page load, no horizontal scrolling, no script errors, every jump link and home tile points to a real section, and the PDF link returns the 1.9 MB PDF.
- The owner confirmed the current address is the catalogue's: Shop No. 117, 1st Floor, Bass Complex, G.I.D.C., Char Rasta, Vapi, and that the Google Maps pin is already there. Changed it in `js/config.js` (header, footer, contact page, Google listing data) and in the contact page's search description (D-014).
- The owner decided: no brand logos on the website (names stay as text), but keep the logos in the repo; keep the "Also available" section; keep the catalogue in the repo as a backup. Cut the 41 brand logos out of the PDF at 300 dpi into `catalogue/brand-logos/`, added `catalogue/README.md` (what's there, the PDF's SHA-256, a logo index, steps for a new catalogue) and an `archive/` folder for older catalogues (D-015, D-016). Checked that the PDF in the repo is byte-identical to the one the owner sent.
