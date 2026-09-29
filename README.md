# Amora Properties Rwanda

Amora Properties™ is a Rwanda real-estate portfolio website built with React, Vite, Tailwind CSS, and PNPM.

## Run locally

```bash
pnpm install
PORT=22829 BASE_PATH=/ pnpm --filter @workspace/amora run dev
```

## Build for production

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/amora run build
```

The production output is generated in `artifacts/amora/dist/public`.

## Deploy with Vercel

The root `vercel.json` is configured for the Amora package:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `PORT=3000 BASE_PATH=/ pnpm --filter @workspace/amora run build`
- Output directory: `artifacts/amora/dist/public`
- SPA rewrites are enabled for property detail routes.