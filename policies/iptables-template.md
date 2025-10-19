# iptables baseline template (example)
*filter
:INPUT DROP [0:0]
:FORWARD DROP [0:0]
:OUTPUT ACCEPT [0:0]

# Allow established
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow SSH from jump host (replace IP)
-A INPUT -p tcp -s 10.0.3.10 --dport 22 -j ACCEPT

# Modbus/TCP (example conduit allow)
-A FORWARD -p tcp -s 10.0.3.20 -d 10.0.0.50 --dport 502 -m state --state NEW,ESTABLISHED -j ACCEPT

# Drop everything else and log rate-limited
-A INPUT -m limit --limit 5/min -j LOG --log-prefix "DROP-IN "
-A FORWARD -m limit --limit 5/min -j LOG --log-prefix "DROP-FWD "
COMMIT
