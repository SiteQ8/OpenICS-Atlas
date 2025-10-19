import Image from "next/image";
import Link from "next/link";

export default function Blueprints() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Defense Blueprints</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">Purdue Model (Zones & Conduits)</h3>
          <p className="text-sm text-gray-700">
            A layered approach to segmenting enterprise and industrial networks to limit blast radius.
          </p>
          <div className="mt-2 border rounded-lg overflow-hidden">
            <img src="/blueprints/purdue.svg" alt="Purdue" />
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Remote Access via DMZ + Jump Host</h3>
          <p className="text-sm text-gray-700">
            Two-step access: VPN into the ICS DMZ, then brokered RDP/SSH to ICS. Record sessions, enforce MFA, and restrict copy/paste.
          </p>
          <Link className="text-sm mt-2 inline-block" href="/protocol/modbus">View checklists →</Link>
        </div>
      </div>
    </div>
  );
}
