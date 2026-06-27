# laranjeira.pt

Personal website of [Sérgio Laranjeira](https://laranjeira.pt) — Engineering Leader based in Berlin.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

---

## Stack

- **Framework:** Astro v5
- **Styling:** Tailwind CSS v4
- **Analytics:** Google Analytics (via Partytown)
- **Hosting:** Vercel

---

## Getting started

**Prerequisites:** Node.js ≥ 18

```bash
# Install dependencies
npm install

# Start local dev server at localhost:4321
npm run dev

# Type-check .astro files
npm run astro check
```

---

## Build & deploy

```bash
# Production build → output in dist/
npm run build

# Preview the production build locally
npm run preview
```

Deployments are triggered automatically on every push to `main` via Vercel.

---

## Content

All page content lives in a single JSON file:

```
content/data.json
```

To update the site — bio, experience, articles, podcasts, social links — edit that file and push. Vercel will rebuild and redeploy automatically within ~30 seconds.

---

## Project structure

```
laranjeira.pt/
├── content/
│   └── data.json          # All page content
├── public/
│   ├── images/            # Static assets
│   ├── robots.txt
│   └── og.png             # Open Graph image
├── src/
│   ├── components/        # Astro components
│   ├── layouts/           # Page layouts
│   └── pages/
│       └── index.astro    # Homepage
├── tests/                 # Playwright E2E tests
├── astro.config.mjs
└── tailwind.config.ts
```

---

## Tests

```bash
# Run E2E tests (requires a running dev or preview server)
npm run test

# Run in headed mode for debugging
npm run test -- --headed
```

---

## License

Personal site — feel free to reuse the template but please change all content. If you have any questions please reach out. 
