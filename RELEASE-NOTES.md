# Release Notes

## v2.0.0 — March 2026

### New Features
- **8 ICS/SCADA protocols** (was 4) — added IEC 104, OPC UA, BACnet/IP, S7comm
- **Interactive Purdue Model** — 7 levels with risk %, technologies, zone indicators
- **72 hardening controls** across 6 checklists with progress tracking
- **Protocol reference cards** — port, risk, description, vendors, CVEs, mitigations
- **Industrial SCADA aesthetic** — dark control room theme with scanline overlay
- **Chart.js integration** — doughnut (protocol distribution) + bar (Purdue risk)
- **Leaflet.js map** — world heatmap with dark tiles, sized/colored markers
- **Country risk table** — top 15 countries with severity badges
- **30+ countries** with synthetic exposure data
- **Responsive design** — desktop, tablet, mobile
- **GitHub Pages** — standalone `docs/index.html` (zero build required)

### Improved
- Expanded demo data (30+ countries, 8 protocols, richer distributions)
- IBM Plex Mono + Sans typography (replacing system fonts)
- Professional CVE references per protocol
- Vendor-specific mitigation guidance
- Standards alignment (IEC 62443, NIST 800-82, NERC CIP, MITRE ATT&CK)

## v1.0.0 — 2025

### Initial Release
- 4 ICS protocols (Modbus, DNP3, MMS, EtherNet/IP)
- Basic world map with protocol facets
- Purdue/DMZ/jump-host blueprints
- iptables/nftables export templates
- Offline Modbus mock lab
- Next.js + Tailwind CSS framework

## v2.5.0 — March 2026

### New Features
- **Login screen** with demo credentials (admin / OpenICS2025)
- **Analyst role** with read-only access (analyst / ICS@Secure)
- **Exposure Trend chart** — 12-month line chart (total, Modbus, S7comm)
- **Asset Inventory** — 12 demo ICS assets (PLCs, RTUs, HMIs, servers, switches)
  - Asset stats: total, online, vulnerable, unpatched
  - Full table with ID, name, type, vendor, protocol, Purdue level, status
- **Threat Intelligence** feed with simulated data
  - 8 ICS-CERT advisories with severity and dates
  - 6 known ICS APT groups (CHERNOVITE, ELECTRUM, XENOTIME, SANDWORM, etc.)
  - Active/inactive status tracking
- **Risk Matrix** — interactive 5x5 likelihood vs impact grid
  - Color-coded risk cells (Critical/High/Medium/Low)
  - Risk distribution bar chart
  - Risk register with 8 entries (description, L/I scoring, mitigation)
- **User badge** with logout in header
- **Toast notifications** for login/actions

### Fixed
- **Chart.js version** pinned to 4.4.0 (was loading broken version)
- **Doughnut chart** — fixed responsive sizing, proper container height
- **Bar chart** (Purdue) — proper destroy/recreate on re-render
- **Trend chart** — new line chart with fill, proper axis styling
- **Risk chart** — new bar chart with proper colors
- All charts use explicit destroy() before recreate to prevent canvas reuse errors

### Improved
- 7 navigation tabs (was 5): Dashboard, Protocols, Purdue, Assets, Threats, Hardening, Risk
- Compact styling — smaller padding, tighter grid gaps
- Protocol pills use shorter class names for performance
- Login screen with grid background and radial glow
- Demo credentials shown directly on login with click-to-fill
- Header shows logged-in user with logout button
- Map popup now shows risk level per country
