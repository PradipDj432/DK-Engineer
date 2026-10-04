# Old Angular website (archived)

This folder holds the first version of the DK ENGINEER'S website, built with Angular 16. It was replaced by the plain HTML site in the repo root (see `../decisions.md`, D-001 and D-002).

**It is not deployed.** GitHub Pages serves the new site from the repo root. The old build and deploy workflows were moved to `angular-app/.github/workflows/`, so GitHub no longer runs them. They were broken anyway (retired `upload-artifact@v2`, a workflow name that didn't match, and a zip file published instead of the site).

It's kept for reference only: the original text, images and the unused Shipper/MRN login pages. Delete this folder once the owner confirms it's no longer needed (tracked in `../backlog.md`).

## Run it locally (optional)
Needs Node.js 18.

```bash
cd angular-app
npm install
npx ng serve
```

Then open http://localhost:4200.
