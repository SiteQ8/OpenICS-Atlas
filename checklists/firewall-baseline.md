# Firewall Baseline (OT Conduits)

- Default-deny; explicit allowlists by source/dest/port/protocol
- Separate rulesets for north-south vs. east-west
- Log drops on OT protocol ports (e.g., 502 Modbus, 20000 DNP3, 44818/2222 CIP)
- Rate-limit new connections and malformed packets
- Prefer application-aware filtering where possible
