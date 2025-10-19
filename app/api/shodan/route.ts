import { NextResponse } from "next/server";
import counts from "@/data/demo/exposure_counts.json";

export async function GET(request: Request) {
  // In a real setup, if SHODAN_API_KEY is present,
  // call Shodan facets API and return aggregated counts.
  // Here we always return demo data.
  const { searchParams } = new URL(request.url);
  const protocol = searchParams.get("protocol") || "modbus";
  const data = (counts as any)[protocol] || {};
  return NextResponse.json({ protocol, counts: data, source: "demo" });
}
