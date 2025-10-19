import ProtocolSelector from "@/components/ProtocolSelector";
import MapView from "@/components/MapView";
import Link from "next/link";
import protocolsData from "@/data/demo/protocols.json";
import counts from "@/data/demo/exposure_counts.json";

export default function Page() {
  const protocols = [
    { key: "modbus", label: "Modbus/TCP" },
    { key: "dnp3", label: "DNP3 / IEC-104" },
    { key: "mms", label: "MMS / IEC-61850" },
    { key: "enetip", label: "EtherNet/IP" }
  ];

  const selected = "modbus";
  const exposure = counts[selected as keyof typeof counts] || {};

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Exposure Map</h2>
        <ProtocolSelector protocols={protocols} value={selected} onChange={() => {}} />
      </div>

      <MapView exposure={exposure as any} />

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">What am I seeing?</h3>
          <p className="text-sm text-gray-700">
            Aggregated counts of internet-exposed services by country for the selected ICS protocol.
            In demo mode, values come from bundled JSON.
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Blueprints</h3>
          <p className="text-sm text-gray-700">
            Explore Purdue, DMZ, and jump-host patterns. Toggle controls and see how blast radius changes.
          </p>
          <Link className="text-sm mt-2 inline-block" href="/blueprints">Open blueprints →</Link>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Exports</h3>
          <p className="text-sm text-gray-700">
            Generate starter iptables/nftables and a jump-host hardening checklist to operationalize defenses.
          </p>
          <a className="text-sm mt-2 inline-block" href="/protocol/modbus">See protocol guidance →</a>
        </div>
      </div>
    </div>
  );
}
