import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

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

    const baseName = path
      .basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .slice(0, 30) || "document";

    let uploadDir: string;
    let uniqueName: string;
    let publicUrl: string;
    const fileType = isPdf ? "pdf" : "image";

    if (isPdf) {
      uploadDir = path.join(process.cwd(), "public", "brochures");
      uniqueName = `brochure-${baseName}-${Date.now()}.pdf`;
      publicUrl = `/brochures/${uniqueName}`;
    } else {
      const cleanExt = [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(ext)
        ? ext
        : ".jpg";
      uploadDir = path.join(process.cwd(), "public", "images", "uploads");
      uniqueName = `resort-${baseName}-${Date.now()}${cleanExt}`;
      publicUrl = `/images/uploads/${uniqueName}`;
    }

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, uniqueName);
    fs.writeFileSync(filePath, buffer);

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
