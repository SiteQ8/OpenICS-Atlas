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
