# Amora Properties™

A responsive real-estate marketing site for Amora Properties™ in Kigali, Rwanda.

## Run & Operate

- `pnpm install --frozen-lockfile` — install the locked workspace dependencies
- `pnpm --filter @workspace/amora run dev` — run the Amora web frontend through its managed `artifacts/amora: web` workflow
- `pnpm --filter @workspace/api-server run dev` — run the API through its managed `artifacts/api-server: API Server` workflow
- `pnpm run typecheck` — full typecheck across all packages
- Web preview: `/`
- API health check: `/api/healthz`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Web: React, Vite, Tailwind CSS
- API: Express 5, bundled with esbuild
- Shared libraries include an OpenAPI contract and PostgreSQL/Drizzle support

## Where things live

- `artifacts/amora/` — public-facing React web app
- `artifacts/api-server/` — Express API, including `/api/healthz`
- `lib/` — shared API client, contract, validation, and database packages

## Current setup notes

- The running site does not currently call the local API. The API exposes a health endpoint and starts without a database connection.
- Start artifact services via their managed workflows rather than a root-level `pnpm dev` command.
