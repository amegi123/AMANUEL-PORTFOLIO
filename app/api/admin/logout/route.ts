import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(ADMIN_COOKIE_NAME);
    return NextResponse.json({ success: true, message: "Logged out successfully." });
  } catch {
    return NextResponse.json({ success: true });
  }
}
