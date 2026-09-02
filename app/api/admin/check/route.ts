import { NextResponse } from "next/server";
import { isUserAdmin } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const isAdmin = await isUserAdmin();
    return NextResponse.json({ authenticated: isAdmin });
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}
