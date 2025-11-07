import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

const DOWNLOAD_ROOT = path.join(process.cwd(), "public", "downloads");

const SUPPORTED_EXTENSIONS: Array<{ extension: string; contentType: string }> = [
  { extension: ".pdf", contentType: "application/pdf" },
  { extension: ".txt", contentType: "text/plain; charset=utf-8" },
  { extension: ".docx", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
  { extension: ".xlsx", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ category: string; slug: string }> }
) {
  const { category, slug } = await params;
  const normalisedCategory = category.toLowerCase();
  const normalisedSlug = slug.toLowerCase();

  for (const { extension, contentType } of SUPPORTED_EXTENSIONS) {
    const filePath = path.join(DOWNLOAD_ROOT, normalisedCategory, `${normalisedSlug}${extension}`);
    try {
      const file = await fs.readFile(filePath);
      const filename = `${normalisedSlug}${extension}`.replace(/\s+/g, "-");

      return new NextResponse(file, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `attachment; filename="${filename}"`,
          "Cache-Control": "public, max-age=3600, immutable",
        },
      });
    } catch (error: unknown) {
      if ((error as NodeJS.ErrnoException)?.code !== "ENOENT") {
        console.error(`Failed to read download for ${normalisedCategory}/${normalisedSlug}`, error);
        return NextResponse.json(
          { error: "Unable to process download at this time." },
          { status: 500 }
        );
      }
    }
  }

  return NextResponse.json(
    { error: "Download not found. Ensure the resource asset has been uploaded." },
    { status: 404 }
  );
}
