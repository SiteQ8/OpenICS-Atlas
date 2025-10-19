# OpenICS-Atlas v0.1.0 (MVP)

**Ali AlEnezi (SiteQ8)** — Shodan-aware, vendor-neutral ICS exposure explorer.

## Highlights
- **Exposure Map (demo data)** with protocol facets (Modbus/TCP, DNP3/IEC-104, MMS/IEC-61850, EtherNet/IP).
- **Blueprints**: Purdue levels SVG + DMZ/jump-host pattern (MFA, session recording, copy/paste restrictions).
- **Protocol pages** with baseline controls + starter exports (iptables/nftables, jump-host hardening).
- **Offline mini-lab**: read-only Modbus mock (Docker).

## Shodan mode (optional)
- `/api/shodan` designed for **aggregates only**; falls back to demo data when key is absent.
- Add `SHODAN_API_KEY` in `.env.local`.

## Install
```bash
pnpm install   # or: npm install
pnpm dev       # or: npm run dev
# open http://localhost:3000
