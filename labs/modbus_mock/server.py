# Minimal Modbus/TCP mock (read-only), demo only!
import socket, struct, threading

HOST = "0.0.0.0"
PORT = 502

def handle(conn, addr):
    try:
        while True:
            data = conn.recv(2600)
            if not data:
                break
            # naive: echo a fixed response to simulate 'Read Coils' (fc=1)
            # Modbus/TCP header: 7 bytes (txid, proto, len, unit)
            if len(data) >= 8:
                txid = data[0:2]
                unit = data[6:7]
                # coil byte count = 1, coils = 0b10101010
                pdu = b'\x01\x01\xAA'
                length = struct.pack('>H', len(pdu)+1)  # unit + pdu
                resp = txid + b'\x00\x00' + length + unit + pdu
                conn.sendall(resp)
    except Exception as e:
        pass
    finally:
        conn.close()

def main():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    s.bind((HOST, PORT))
    s.listen(5)
    print(f"Modbus mock listening on {HOST}:{PORT}")
    while True:
        conn, addr = s.accept()
        threading.Thread(target=handle, args=(conn, addr), daemon=True).start()

if __name__ == "__main__":
    main()
