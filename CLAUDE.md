# Rules for this project

These rules apply to anyone working on this repo, people or AI. Keep things simple: this is a small business website for an industrial hardware supplier, not an online shop.

## Branches and pull requests (D-011)
All work happens on one branch, **`working`**. Every feature or fix goes through the same loop:

1. **Sync first:** `git checkout working && git pull origin working && git merge origin/main` (after `git fetch origin`), so `working` starts from the latest `main`.
2. **Build** the feature on `working`. Commit with a clear message. Update the docs (table below) in the same branch.
3. **Push** `working` and **open a pull request** from `working` into `main`. One feature per pull request.
4. **Merge** the pull request into `main` (GitHub Pages then publishes it).
5. **Sync back:** `git fetch origin && git merge --ff-only origin/main` on `working`, then push `working`, so it matches `main` again.
6. Start the next feature at step 2.

Never commit straight to `main`, and don't create other feature branches unless the owner asks.

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
- The products page follows the printed catalogue, `catalogue/DK-Engineers-Catalogue.pdf` (D-012). When the owner sends a new catalogue, update `products.html`, the home page tiles in `index.html` and `business.md` together. Brand names may be listed as text; brand logos still need the owner's OK (D-009, D-013).
- Phone numbers, email, address, map and the WhatsApp number live in one place, `js/config.js`. Don't hard-code them in the pages; use the `data-call`, `data-email`, `data-address` (etc.) attributes described at the bottom of `js/common.js`.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-001).
- The site lives in the repo root and is served by GitHub Pages from `main` (D-003). The old Angular app in `angular-app/` is archived: don't change it, don't link to it (D-002).
- Mobile first: check every page at phone width (390px) with no horizontal scrolling.
- Page text (products, services, about) is plain HTML in each page, so the owner can edit it on GitHub and Google can read it (D-007). Keep the example comments in `products.html` up to date.
- Text from `js/config.js` goes through `escapeHtml()` before it's put into the page.
- `404.html` must load its own files through the script in its `<head>`, because GitHub Pages shows it at any wrong address, at any folder depth.
