import protocols from "@/data/demo/protocols.json";
import Link from "next/link";

type Params = { params: Promise<{ name: string }> };

export default async function ProtocolPage({ params }: Params) {
  const { name } = await params;
  const meta = (protocols as any)[name] || null;
  if (!meta) {
    return <div className="card">Unknown protocol.</div>;
  }
  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-lg font-semibold">{meta.title}</h2>
        <p className="text-sm text-gray-700">{meta.description}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Baseline Controls</h3>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            {meta.controls.map((c: string, i: number) => <li key={i}>{c}</li>)}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Exports</h3>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            <li><a href="/policies/iptables-template.md">iptables baseline</a></li>
            <li><a href="/policies/nftables-template.md">nftables baseline</a></li>
            <li><a href="/checklists/jump-host.md">Jump-host hardening checklist</a></li>
          </ul>
        </div>
      </div>
      <Link href="/">← Back to map</Link>
    </div>
  );
}
