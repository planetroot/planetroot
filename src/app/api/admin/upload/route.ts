import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const originalName = file.name || "upload";
    const ext = path.extname(originalName).toLowerCase();
    const isPdf = ext === ".pdf" || file.type === "application/pdf";

    const baseName =
      path
        .basename(originalName, ext)
        .toLowerCase()
        .replace(/[^a-z0-9_-]/g, "-")
        .slice(0, 30) || "document";

    const fileType = isPdf ? "pdf" : "image";
    let mimeType: string;

    if (isPdf) {
      mimeType = "application/pdf";
    } else {
      const cleanExt = [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(ext)
        ? ext.replace(".", "")
        : "jpeg";
      mimeType = cleanExt === "jpg" ? "image/jpeg" : `image/${cleanExt}`;
    }

    const uniqueName = isPdf
      ? `brochure-${baseName}-${Date.now()}.pdf`
      : `resort-${baseName}-${Date.now()}${ext || ".jpg"}`;

    // Base64 Data URL (100% Vercel & serverless compatible without filesystem writes)
    const base64Data = buffer.toString("base64");
    const publicUrl = `data:${mimeType};base64,${base64Data}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: uniqueName,
      fileType,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
