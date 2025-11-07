import { NextResponse } from "next/server";
import { getFeaturedInsightsPreview } from "@/lib/cms";

export async function GET() {
  const insights = await getFeaturedInsightsPreview();
  return NextResponse.json(insights);
}
