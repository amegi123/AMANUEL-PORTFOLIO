import { NextResponse } from "next/server";
import { saveContactSubmission } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submission = await saveContactSubmission({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      projectType: projectType || "General Inquiry",
      message: String(message).trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received.",
      submissionId: submission.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or email directly." },
      { status: 500 }
    );
  }
}
