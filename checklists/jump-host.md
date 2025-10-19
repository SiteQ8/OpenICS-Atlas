# Jump Host Hardening Checklist

- Enforce MFA for all interactive sessions
- Record sessions (keystroke + screen) and store in tamper-evident logs
- Restrict clipboard, drive mapping, file transfers by default
- Time-bound access windows with auto-termination
- Baseline OS hardening (CIS/NIST-aligned), minimal software footprint
- Centralize logs to the ICS DMZ SIEM/collector
- Daily integrity checks for critical binaries/configs (FIM)
- Disable local admin except for break-glass accounts with auditing
