# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | New static site merged to `main`. Not live until GitHub Pages is turned on. |
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
