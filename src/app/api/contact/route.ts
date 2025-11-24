import { NextResponse } from "next/server";
import { z } from "zod";

const noLinks = (val: string) => !/(https?:\/\/|www\.|\.[a-z]{2,})(\S*)/i.test(val);
const schema = z.object({
  message: z.string().min(10).refine(noLinks, "Links are not allowed"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const { message } = parsed.data;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM = process.env.RESEND_FROM; // e.g. "Portfolio <hello@yourdomain>"
    const RESEND_TO = process.env.RESEND_TO; // your inbox

    if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
      // Missing config; accept request but skip sending in dev
      console.warn("Resend env vars missing; skipping email send.");
      return NextResponse.json({ ok: true, skipped: true });
    }

    const subject = `New portfolio message`;
    const html = `
      <div>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [RESEND_TO],
        // No reply_to because we don't collect user emails
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", res.status, text);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
