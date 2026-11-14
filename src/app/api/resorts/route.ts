import { NextResponse } from "next/server";
import { getAllResorts, createResort, updateResort, deleteResortById } from "@/lib/resorts-storage";

export async function GET() {
  try {
    const resorts = getAllResorts();
    return NextResponse.json(resorts);
  } catch (error) {
    console.error("GET /api/resorts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch resorts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.destination) {
      return NextResponse.json(
        { error: "Resort name and destination are required" },
        { status: 400 }
      );
    }

    const newResort = createResort(body);
    return NextResponse.json(
      { success: true, resort: newResort },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/resorts error:", error);
    return NextResponse.json(
      { error: "Failed to create resort" },
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
        { error: "Resort id is required for updating" },
        { status: 400 }
      );
    }

    const updated = updateResort(id, updates);
    if (!updated) {
      return NextResponse.json(
        { error: "Resort not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, resort: updated });
  } catch (error) {
    console.error("PUT /api/resorts error:", error);
    return NextResponse.json(
      { error: "Failed to update resort" },
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
        { error: "Resort id is required for deletion" },
        { status: 400 }
      );
    }

    const success = deleteResortById(id);
    if (!success) {
      return NextResponse.json(
        { error: "Failed to delete resort" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, deletedId: id });
  } catch (error) {
    console.error("DELETE /api/resorts error:", error);
    return NextResponse.json(
      { error: "Failed to delete resort" },
      { status: 500 }
    );
  }
}
