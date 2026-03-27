import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, projectType, message } = await req.json();

  if (!name || !email || !projectType || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "True Brew Contact Form <onboarding@resend.dev>",
    to: "hello@squatch.in",
    replyTo: email,
    subject: `New Inquiry from ${name} — True Brew`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1510;">
        <h2 style="margin-bottom: 4px;">New Project Inquiry</h2>
        <p style="color: #8C7B6B; margin-top: 0;">Submitted via truebrewdesigns.com</p>
        <hr style="border: none; border-top: 1px solid #E8E0D8; margin: 24px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #8C7B6B; width: 130px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8C7B6B; vertical-align: top;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C8956C;">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 8px 0; color: #8C7B6B; vertical-align: top;">Phone</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; color: #8C7B6B; vertical-align: top;">Project Type</td>
            <td style="padding: 8px 0;">${projectType}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #E8E0D8; margin: 24px 0;" />
        <p style="color: #8C7B6B; margin-bottom: 8px;">Message</p>
        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        <hr style="border: none; border-top: 1px solid #E8E0D8; margin: 24px 0;" />
        <p style="color: #8C7B6B; font-size: 13px;">Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
