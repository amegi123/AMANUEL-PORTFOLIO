import { NextResponse } from "next/server";
import { isUserAdmin } from "@/lib/auth/admin";
import { getContactSubmissions, updateContactStatus, deleteContactSubmission } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contacts = await getContactSubmissions();
  return NextResponse.json({ contacts });
}

export async function PATCH(request: Request) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const success = await updateContactStatus(id, status);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const success = await deleteContactSubmission(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete submission" }, { status: 500 });
  }
}
