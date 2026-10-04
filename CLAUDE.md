# Rules for this project

These rules apply to anyone working on this repo, people or AI. Keep things simple: this is a small business website for an industrial hardware supplier, not an online shop.

## Keep the docs up to date
| When you… | Update |
|---|---|
| Finish any piece of work | `progress.md`: add a line under today's date and refresh "Current status" |
| Start or finish a backlog item | `backlog.md`: tick it when done; add new work you discover |
| Make a choice between options (tech, design, business rule) | `decisions.md`: add a new numbered entry. Never edit an old decision's meaning; replace it with a new one |
| Learn a business fact (contact detail, product range, delivery or payment rule) | `business.md` |
| Change how the code is laid out, run or deployed | `README.md` |

## Business facts
- Never invent business facts (prices, brands, delivery areas, business hours, years in business, customer names, certifications). If a fact isn't in `business.md`, ask the owner and list it in `backlog.md` under "Waiting on the business owner".
- Don't show brand or partner logos (for example Astral, Polyhose, L&T) until the owner confirms the business may use them (D-009).
- Don't add social media links, testimonials or reviews until real ones exist.
- Phone numbers, email, address, map and the WhatsApp number live in one place, `js/config.js`. Don't hard-code them in the pages; use the `data-call`, `data-email`, `data-address` (etc.) attributes described at the bottom of `js/common.js`.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-001).
- The site lives in the repo root and is served by GitHub Pages from `main` (D-003). The old Angular app in `angular-app/` is archived: don't change it, don't link to it (D-002).
- Mobile first: check every page at phone width (390px) with no horizontal scrolling.
- Page text (products, services, about) is plain HTML in each page, so the owner can edit it on GitHub and Google can read it (D-007). Keep the example comments in `products.html` up to date.
- Text from `js/config.js` goes through `escapeHtml()` before it's put into the page.
- `404.html` must load its own files through the script in its `<head>`, because GitHub Pages shows it at any wrong address, at any folder depth.
