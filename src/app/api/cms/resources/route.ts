import { NextResponse } from "next/server";
import { getResourceLibraryPreview } from "@/lib/cms";

export async function GET() {
  const resources = await getResourceLibraryPreview();
  return NextResponse.json(resources);
}
