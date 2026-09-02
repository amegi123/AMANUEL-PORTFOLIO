import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { validateAdminPassword, generateSessionToken, ADMIN_COOKIE_NAME } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password || !validateAdminPassword(password)) {
      return NextResponse.json(
        { error: "Invalid admin authentication key or password." },
        { status: 401 }
      );
    }

    const token = generateSessionToken();
    const cookieStore = await cookies();

    cookieStore.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Admin authentication successful.",
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "Authentication system error." },
      { status: 500 }
    );
  }
}
