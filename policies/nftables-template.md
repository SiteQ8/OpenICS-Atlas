# nftables baseline template (example)
table inet filter {
  sets {
    jumphosts { type ipv4_addr; elements = { 10.0.3.10 } }
  }
  chains {
    input {
      type filter hook input priority 0;
      policy drop;
      ct state established,related accept
      tcp dport 22 ip saddr @jumphosts accept
      limit rate 5/minute counter log prefix "DROP-IN " drop
    }
    forward {
      type filter hook forward priority 0;
      policy drop;
      tcp dport 502 ip saddr 10.0.3.20 ip daddr 10.0.0.50 ct state new,established accept
      limit rate 5/minute counter log prefix "DROP-FWD " drop
    }
    output { type filter hook output priority 0; policy accept; }
  }
}
