# joshhorn.net

Personal portfolio for Josh Horn, built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + static build into dist/
npm run preview   # serve the production build
```

## Editing content

All site content lives in plain TypeScript data files, so updates don't require touching markup:

| File | What it controls |
|------|------------------|
| `src/data/profile.ts` | Name, contact links, summary, stats, experience, education, skills, projects |
| `src/data/services.ts` | Services page cards and the "process" steps |

Pages are in `src/pages/`, shared UI in `src/components/`, and design tokens (colors, fonts, spacing) in `src/styles/global.css`.

## Deploy

Pushing to `main` builds an nginx image with the static site and publishes it to ghcr.io; see [DEPLOY.md](DEPLOY.md).
