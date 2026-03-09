# Contributing to OpenICS-Atlas

## Adding Protocols

Edit the `PROTOCOLS` array in `docs/index.html`:

```javascript
{id:'profinet', name:'PROFINET', port:34962, risk:'high',
 desc:'Description...',
 vendors:['Siemens','Phoenix Contact'],
 cves:['CVE-...'],
 mitigations:['...']}
```

Also add exposure data to the `EXPOSURE` object.

## Adding Hardening Controls

Add to the `CHECKLISTS` array with the standard reference.

## Code Standards
- Static HTML/CSS/JS for `docs/` (GitHub Pages)
- Next.js + TypeScript for `app/` (development server)
- All data is synthetic — do not include real exposure data
- Follow the industrial SCADA aesthetic (dark theme, amber/cyan accents)

## Submitting
1. Fork → branch → edit → test → PR
2. Include the standard reference for any new controls
3. Verify all protocols have port, risk, description, vendors, CVEs, mitigations
