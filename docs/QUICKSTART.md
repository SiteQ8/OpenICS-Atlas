# QUICK START

## Prereqs
- Node.js 18+ (or 20+)
- pnpm (recommended) or npm

## Install & run (offline demo)
```bash
pnpm install   # or npm install
pnpm dev       # or npm run dev
```

Open http://localhost:3000 — the map uses bundled demo data.

## Optional: Shodan mode
Create `.env.local` with:
```
SHODAN_API_KEY=YOUR_KEY
```

The app will prefer live aggregated counts (facets) when the key is present. The API only emits **aggregates**; no host data.
