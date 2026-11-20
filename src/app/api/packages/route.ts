import { NextResponse } from "next/server";
import { getAllPackages, createPackage, updatePackage, deletePackageById } from "@/lib/packages-storage";

export async function GET() {
  try {
    const packages = getAllPackages();
    return NextResponse.json(packages);
  } catch (error) {
    console.error("GET /api/packages error:", error);
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.destination) {
      return NextResponse.json(
        { error: "Package title and destination are required" },
        { status: 400 }
      );
    }

    const newPackage = createPackage(body);
    return NextResponse.json(
      { success: true, package: newPackage },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/packages error:", error);
    return NextResponse.json(
      { error: "Failed to create package" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Package id is required for updating" },
        { status: 400 }
      );
    }

    const updated = updatePackage(id, updates);
    if (!updated) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, package: updated });
  } catch (error) {
    console.error("PUT /api/packages error:", error);
    return NextResponse.json(
      { error: "Failed to update package" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const idFromQuery = searchParams.get("id");

    let id = idFromQuery;
    if (!id) {
      const body = await request.json().catch(() => ({}));
      id = body.id;
    }

    if (!id) {
      return NextResponse.json(
        { error: "Package id is required for deletion" },
        { status: 400 }
      );
    }

    const success = deletePackageById(id);
    if (!success) {
      return NextResponse.json(
        { error: "Failed to delete package" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, deletedId: id });
  } catch (error) {
    console.error("DELETE /api/packages error:", error);
    return NextResponse.json(
      { error: "Failed to delete package" },
      { status: 500 }
    );
  }
}
