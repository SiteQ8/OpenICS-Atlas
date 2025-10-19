# Lab: Modbus Mock (Offline)

This lab spins a tiny **read-only Modbus/TCP mock** (no real devices) to illustrate exposed vs segmented flows.

## Run with Docker
```bash
docker build -t modbus-mock .
docker run -p 502:502/tcp modbus-mock
```

Then, from another host (or container), try connecting to TCP/502. Use segmentation/ACL examples to allow/deny flows and observe logs.
