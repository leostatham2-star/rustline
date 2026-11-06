# Rustline — Weathering Steel Landscape Edging

Marketing and shop site for Rustline Steel Co. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, and shadcn/ui, with Framer Motion transitions and self hosted fonts (Cormorant Garamond and Jost).

The site is a single route with a client side view router covering the storefront: product catalog with a cart drawer, installation guide, about, FAQ, contact, and legal pages. Cart state lives on the client, so no database is required to run or deploy it.

## Local development

```bash
bun install
bun run dev      # http://localhost:3000
bun run lint
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. On vercel.com, choose **Add New → Project** and import the repository.
3. Deploy. Zero configuration is needed: Vercel detects Next.js automatically and no environment variables are required.

Every push to the connected branch redeploys the site automatically.

## Project structure

- `src/app` — the Next.js app (root layout, global styles, metadata)
- `src/components/site` — the storefront: header, footer, cart, page views, shared bits
- `public/fonts` — self hosted variable fonts
- `prisma` — scaffolded for future backend work; unused by the site itself
