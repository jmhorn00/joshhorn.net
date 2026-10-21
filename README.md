# joshhorn.net

Personal portfolio for Josh Horn, built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # type-check
npm run build     # static build into dist/
npm run preview   # serve the production build
```

## Editing content

All site content lives in plain TypeScript data files, so updates don't require touching markup:

| File | What it controls |
|------|------------------|
| `src/data/profile.ts` | Name, contact links, summary, stats, experience, education, skills, projects |
| `src/data/services.ts` | Services page cards and the "process" steps |

Pages are in `src/pages/`, the header and footer in `src/components/`, and colors and fonts in `src/styles/global.css`.

## Deploy

Pushing to `main` builds an nginx image with the static site and publishes it to ghcr.io; see [DEPLOY.md](DEPLOY.md).

The site can also be deployed to Cloudflare Workers as static assets; `wrangler.jsonc` builds the site and serves `dist/`.
