import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, company, email, topic, message } = await req.json();

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Japan Entry Legal <onboarding@resend.dev>",
    to: "tttkadoya@gmail.com",
    replyTo: email,
    subject: `[Contact] ${topic || "Inquiry"} — ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nOrganization: ${company}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
