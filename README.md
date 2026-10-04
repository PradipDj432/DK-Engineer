# DK ENGINEER'S — Website

The website for **DK ENGINEER'S**, G.I.D.C. Vapi, Gujarat: manufacturer of hydraulic hose pipes, SS corrugated hoses and rubber products, and supplier of industrial hardware. It shows what the business makes and supplies and makes it easy for customers to call, email or send an inquiry. There's no online ordering or payment.

## Project docs
| File | What's in it |
|---|---|
| `README.md` | This file: how the code works and how to run and edit it |
| `business.md` | What the business is, what it sells, how customers contact it |
| `decisions.md` | Every choice made and why (numbered D-001, D-002, …) |
| `backlog.md` | Everything still to do, with priority |
| `progress.md` | Current status and a dated work log |
| `CLAUDE.md` | Rules for keeping these docs and the code up to date |

## How it works
- A static website: plain **HTML, CSS and JavaScript**. No framework and no build step (D-001).
- Hosted free on **GitHub Pages** from the `main` branch, repo root. The address will be `pradipdj432.github.io/DK-Engineer` (D-003).
- Page text (products, services, about) is written directly in each `.html` file (D-007).
- The **products page follows the printed catalogue**, `catalogue/DK-Engineers-Catalogue.pdf`: the same 14 sections, with photos taken from it, and a button to download the PDF (D-012).
- Contact details (phones, email, address, map, WhatsApp) are in **one file, `js/config.js`**. The header, footer, call buttons and contact page all read from it.
- The **inquiry form** on the contact page has no server behind it. "Send by email" opens the customer's email app with the message ready to send to the business email; "Send on WhatsApp" opens a WhatsApp chat with the main number (D-010). Clearing `whatsappNumber` in `js/config.js` hides every WhatsApp button.
- The old Angular website is kept in `angular-app/` for reference. It isn't deployed (D-002).

## How we work (branches)
All changes are made on the **`working`** branch, one feature at a time: sync `working` with `main` → build the feature → open a pull request from `working` into `main` → merge it → sync `working` with `main` again. The exact steps are in `CLAUDE.md` → "Branches and pull requests" (D-011).

## Folder layout
```
DK-Engineer/
├── index.html        Home: intro, the 14 catalogue sections, why us, about, call to action
├── products.html     Product catalogue: 14 sections from the PDF, plus "Also available"
├── services.html     The services we offer
├── about.html        About us, mission, vision, values, team, sustainability
├── contact.html      Address, phones, email, inquiry form, map
├── 404.html          "Page not found" (GitHub Pages shows it for any wrong address)
├── .nojekyll         Tells GitHub Pages to serve the files as they are
├── css/style.css     All styles (mobile first)
├── js/
│   ├── config.js     Business details: phones, email, address, map, WhatsApp
│   ├── common.js     Used on every page: header, menu, footer, contact details
│   └── contact.js    Contact page: turns the inquiry form into an email / WhatsApp message
├── images/           Logo and the About page photo
│   └── catalogue/    Product photos taken from the PDF catalogue
├── catalogue/        The PDF catalogue customers can download
└── angular-app/      The old Angular website (archived, not deployed)
```

## Run it on your computer
Open `index.html` in a browser (double-click it). Everything works from the file, except the map, which needs an internet connection.

To test it the way GitHub Pages serves it, start a small local server in the project folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Edit the website (from the GitHub website or app)
All changes go through the `working` branch (D-011). On GitHub, pick **`working`** in the branch menu (top left) before you open a file, commit your change there, then open a pull request into `main` and merge it. The steps below assume you're on `working`.

### Change a phone number, email, address or WhatsApp
Open `js/config.js` → pencil icon (✏️) → change the value inside the quotes → **Commit changes**. It updates on every page.

- `phones`: `number` is used for the call link (`+91` and the number, no spaces); `display` is what people see. The first phone is used for all "Call now" buttons.
- `whatsappNumber`: country code + number, no `+` or spaces, for example `"917096907413"`. Leave it as `""` to hide the WhatsApp buttons.

### Change page text
Open the page (`products.html`, `services.html`, `about.html` or `index.html`) → pencil icon → change the words between the tags. For example, in `<p>Helmets, gloves, goggles, etc.</p>` change only the text between `<p>` and `</p>`. → **Commit changes**.

### Add an item to a product category
In `products.html`, find the category. Most have a list like this:

```html
<li>Ball valve</li>
```

Copy one line, paste it under the line you copied, and change the words between `<li>` and `</li>`.

Some categories (pipes, hand tools, "Also available") use a name and examples instead:

```html
<div><dt>Pipes</dt><dd>ERW and seamless. MS, GI, SS, HDPE, PP, PVC and UPVC.</dd></div>
```

Change the name between `<dt>` and `</dt>` and the examples between `<dd>` and `</dd>`.

The **Material** and **Brands** lines at the bottom of a category work the same way.

### Add a new product category
In `products.html`, copy a whole block from `<li id="...">` to its closing `</li>`. Give it a new `id` (lowercase, no spaces, for example `id="fasteners"`) and the next number. Then add a link to it:
- in the short list at the top of `products.html` (`<li><a href="#fasteners">Fasteners</a></li>`), and
- on the home page (`index.html`, the "What we supply" list).

### Add or change a photo
Upload the photo to `images/catalogue/` (**Add file → Upload files**). Keep it under about 300 KB so the site stays fast on phones. Then change the `src="images/catalogue/…"` in the page to the new file name, the `width` and `height` to the photo's size in pixels, and the `alt="…"` text to describe the photo.

### Replace the PDF catalogue
Upload the new PDF to the `catalogue/` folder with the **same name**, `DK-Engineers-Catalogue.pdf`, so the download buttons keep working. If its size changes a lot, update "(PDF, 1.9 MB)" on the products page. Then update the products page to match the new catalogue (CLAUDE.md rule).

The live site updates about a minute after each commit to `main`.

## Go live (GitHub Pages)
GitHub Pages serves the `main` branch from the repo root. Turn it on once:

1. Merge this work into `main`.
2. Open the repo on GitHub → **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Pick branch **`main`** and folder **`/ (root)`** → **Save**.
5. After a minute or two the site is live at `https://pradipdj432.github.io/DK-Engineer/`.

After that, every change on `main` goes live automatically.

### Adding a custom domain later
Settings → Pages → **Custom domain**, then follow GitHub's DNS steps. Nothing in the site's code needs to change: all links are relative, and `404.html` works out its own base folder.
