# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | New static site built on branch `claude/vigilant-euler-7ajyep`. Not live yet. |
| **Live site** | Not live. Needs merging to `main` and GitHub Pages turned on. |
| **Blocked on** | Owner review, and confirming whether a phone number is on WhatsApp. |
| **Next step** | Owner reviews the site, then merge to `main` and turn on GitHub Pages. |

## Log

### 2026-10-04
- Reviewed the old Angular 16 site. Found a broken deploy pipeline (retired `upload-artifact@v2`, a zip file published instead of the site, a workflow name that didn't match), footer links going to the 404 page ("Partner", "Contact" with a capital C), an inquiry form that sent nothing, social icons linking nowhere, and leftover Shipper/MRN login pages from another project.
- The owner chose to rebuild the site as a plain static site with the same content (D-001) and to keep the old app in another folder (D-002).
- Moved the Angular app, its config and its two workflows into `angular-app/`, and added a note there explaining it's archived.
- Created the project docs in the same format as the Aara Culture repo: `README.md`, `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `CLAUDE.md`.
- Built the new site: home, products, services, about, contact and 404 pages. Contact details come from `js/config.js`. The inquiry form opens the customer's email app; WhatsApp buttons are ready but hidden until a number is set (D-006).
- Tested in Chromium at phone (390px) and desktop (1280px) widths, served at a simulated `pradipdj432.github.io/DK-Engineer/` address: no horizontal scrolling, no script errors, no broken images. Checked the mobile menu (opens, closes with Escape), the email the form builds (address, subject, body), form validation, the WhatsApp buttons with and without a number, and the 404 page at a nested wrong address.
