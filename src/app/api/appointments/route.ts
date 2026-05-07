import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, date } = body || {};
    if (!name || !phone || !service) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // In a real app: validate, persist, notify staff, send confirmation SMS/email
    return NextResponse.json({ success: true, message: "Appointment request received", data: { name, phone, email, service, date } });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
