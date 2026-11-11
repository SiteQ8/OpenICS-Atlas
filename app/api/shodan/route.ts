import { NextResponse } from "next/server";
import counts from "@/data/demo/exposure_counts.json";

export async function GET(request: Request) {
  // Demo data only. SHODAN_API_KEY is not used yet.
  const { searchParams } = new URL(request.url);
  const protocol = searchParams.get("protocol") || "modbus";
  const data = (counts as any)[protocol] || {};
  return NextResponse.json({ protocol, counts: data, source: "demo" });
}
