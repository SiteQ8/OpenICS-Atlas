# Remote Access via DMZ + Jump Host

**Objective:** provide controlled maintenance access to ICS without exposing control networks directly.

## Pattern
1. **VPN** terminates into the **ICS DMZ**.
2. **Jump Host** (broker) provides RDP/SSH to Level 3 assets.
3. Session **recording**, **file transfer restriction**, **MFA**, and **time-bound** access.
4. Strict ACLs from DMZ → L3; **no inbound from internet to L3**.

## Guardrails
- Non-persistent admin accounts; approvals via change tickets.
- Break-glass process with post-access review.
- Patch and AV definitions staged in DMZ, pulled by L3 on schedule.
