import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body || {};
    if (!name || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // In production: persist message, send email notification, anti-spam
    return NextResponse.json({ success: true, message: "Message received", data: { name, email, phone } });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
