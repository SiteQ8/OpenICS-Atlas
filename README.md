# OpenICS-Atlas

**Map, simulate, and harden ICS exposure — Shodan-aware, vendor-neutral, open source.**

- **Author:** Ali AlEnezi · GitHub: [SiteQ8](https://github.com/SiteQ8) · LinkedIn: [alenizi](https://www.linkedin.com/in/alenizi/)
- **License:** Apache-2.0

## What is this?
OpenICS-Atlas helps defenders **visualize internet exposure** of common ICS/OT protocols, connect those findings to **defense blueprints** (Purdue, ICS DMZ, jump hosts), and **export** practical checklists/policies.

It can run entirely **offline** using demo datasets — or **online** using the Shodan API (aggregations only).

## Quick start (offline demo)
```bash
# 1) Install Node 18+ and pnpm or npm
# 2) Install deps
pnpm install  # or: npm install
# 3) Run dev server
pnpm dev      # or: npm run dev
```

Then open http://localhost:3000

## Quick start (with Shodan, optional)
Create `.env.local` with your key:
```
SHODAN_API_KEY=YOUR_KEY_HERE
```

The app will use local demo data by default, and will **fallback** to demo data if API calls fail. When enabled, the `/api/shodan` endpoint **only returns aggregated counts** (no host details).

## Repo layout
```
/app/                 # Next.js UI (map, protocol pages, blueprints)
/app/api/shodan/      # Aggregation proxy (counts/facets only)
/blueprints/          # Purdue/DMZ/jump-host diagrams + notes
/checklists/          # Hardening checklists (MD templates)
/policies/            # Export templates (iptables/nftables)
/labs/                # Offline mini-labs (mock services, logs, PCAPs)
/data/demo/           # Seed data for offline mode
/docs/                # How-to, ethics, setup
```

## MVP features
- World map with **protocol facets** (Modbus, DNP3/IEC-104, MMS/IEC-61850, EtherNet/IP)
- **Blueprints**: Purdue/DMZ/jump-host visual guides
- **Exports**: baseline iptables/nftables templates; jump-host hardening checklist
- **Offline mini-lab**: simple Modbus mock to compare exposed vs segmented

## Ethics & Safety
OpenICS-Atlas is for **defensive education**. The Shodan proxy exposes **only aggregated statistics**. Do not use this project to target devices. See [/docs/ETHICS.md](./docs/ETHICS.md).

---

© 2025 Ali AlEnezi
