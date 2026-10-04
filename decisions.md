# Decisions

A log of choices made for the DK ENGINEER'S website and why. Add new decisions at the bottom with the next number. Never delete an old one: if it changes, add a new decision that replaces it and set the old one's status to `Replaced by D-xxx`.

**Status values:** `Accepted` (owner agreed) · `Proposed` (suggested, not confirmed by the owner yet) · `Replaced by D-xxx`

---

## D-001 — Rebuild as a plain HTML/CSS/JavaScript site with no build step
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The old site was an Angular 16 app. Its deploy pipeline was broken, so it most likely never went live, and editing it needed Node.js and a build. The site is only five pages of information.
- **Decision:** Rebuild it as a static site in plain HTML, CSS and JavaScript, with the same content. No framework, no build tools, no `npm install`.
- **Alternatives considered:** Fix the Angular site (deploy pipeline, broken links, inquiry form); leave it as it is.
- **Consequences:** Fast on phones, free to host, and editable straight from the GitHub website. The shared header and footer are drawn by a small script (`js/common.js`) instead of being repeated in each page.

## D-002 — Keep the old Angular app in `angular-app/`, archived
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner asked to keep the existing site in another folder of the repo instead of deleting it.
- **Decision:** Move the whole Angular project (source, config, images and its two GitHub workflows) into `angular-app/`. It isn't built or deployed. Moving the workflows out of `.github/workflows/` means GitHub no longer runs them.
- **Alternatives considered:** Delete it (it stays in git history anyway); keep it at the root next to the new site.
- **Consequences:** Its files are still served by GitHub Pages under `/angular-app/`, but nothing links there. Delete the folder once the owner confirms it's no longer needed.

## D-003 — Host on GitHub Pages from `main`, repo root, on the free address
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The site should go live at no cost and update on every commit, without a deploy workflow to maintain.
- **Decision:** GitHub Pages, "Deploy from a branch", `main`, `/ (root)`. Address: `pradipdj432.github.io/DK-Engineer`. A custom domain can be added later.
- **Alternatives considered:** Serve from `/docs` (would split the site from its docs); deploy with a GitHub Actions workflow (more to maintain, and the old one was broken).
- **Consequences:** The owner must turn Pages on once (steps in `README.md`). Links shared now will change if a custom domain is added; GitHub Pages redirects the old address.

## D-004 — Same content as the old site, with light edits
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner asked for the same content.
- **Decision:** Keep the products, services, about and contact text from the old site. Edits: fixed a typo ("At many, we prioritize…" → "At DK ENGINEER'S, we prioritise…"); dropped the "Testimonials" heading, which had no testimonials under it; turned the "Contact Us" service card into the call-to-action band at the bottom of each page.
- **Alternatives considered:** Rewrite the text.
- **Consequences:** The claims on the site ("leading supplier", "years of experience") are the owner's own words from the old site.

## D-005 — Remove the unused parts of the old site
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The old site contained leftovers from an earlier shipping-document project and links that went nowhere.
- **Decision:** Leave out the Shipper/MRN login, registration and forgot-password pages; the ship and port photos; the Facebook/Twitter/LinkedIn icons (they linked to the home page); the footer "Partner", "Terms & Condition" and "Privacy Policy" links (they went to the 404 page or the home page).
- **Alternatives considered:** Keep them as they were.
- **Consequences:** Every link on the new site goes somewhere real. Social links can come back when real accounts exist.

## D-006 — Inquiries by phone, email and an email-based form; WhatsApp ready but off
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The old "Send Inquiry" form sent nothing. A static site has no server to send email.
- **Decision:** "Call now" buttons on every page and a floating call button on phones. The contact page form builds the message and opens the customer's own email app, addressed to `dkengineers6@gmail.com`. A "Send on WhatsApp" button and WhatsApp links appear automatically once `whatsappNumber` is set in `js/config.js`.
- **Alternatives considered:** A free form service such as Web3Forms or Formspree (sends from the website itself, but needs an account and an access key); WhatsApp only (number not confirmed).
- **Consequences:** No accounts or services to manage. Customers without an email app set up have to call or copy the email address, which is shown next to the form.

## D-007 — Page text in the HTML pages; contact details in `js/config.js`
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The owner edits the site on GitHub. Product categories change rarely; contact details appear on every page.
- **Decision:** Products, services and about text are written directly in each page's HTML. Phones, email, address, map and WhatsApp live only in `js/config.js` and are filled into every page by `js/common.js`.
- **Alternatives considered:** A `products.json` data file like the Aara Culture site (a single missing comma would blank the whole product page, and Google reads plain HTML more reliably).
- **Consequences:** Adding a product category means copying an HTML block (guide in `README.md`). Changing a phone number is a one-line edit.

## D-008 — Colours from the logo: navy blue and red
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The old site used yellow buttons that don't appear in the DK logo.
- **Decision:** Navy blue and red taken from the logo, white backgrounds, a light blueprint-grid pattern on dark sections. Fonts: Barlow and Barlow Condensed (Google Fonts).
- **Alternatives considered:** Keep the old yellow and dark grey.
- **Consequences:** The colours are set once at the top of `css/style.css` and can be changed there.

## D-009 — No brand or partner logos until the owner confirms
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The old project had Astral, Polyhose and L&T Valves logo files but never showed them. Showing a brand's logo can suggest an official dealership.
- **Decision:** Don't show brand logos on the site for now.
- **Alternatives considered:** Add a "Brands we deal in" section with the existing logo files.
- **Consequences:** Listed in `backlog.md`. Once the owner confirms which brands to show and that it's allowed, add a brands section.
