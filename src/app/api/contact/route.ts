import { NextResponse } from "next/server";
import { Resend } from "resend";

// Contact form endpoint. Reads RESEND_API_KEY from the environment.
// The "from" address must use a domain verified on the Resend account.
const FROM_EMAIL = "Rafin Solutions <contact@rafinsolutions.com>";
const TO_EMAIL = "rafinsolutions@outlook.com";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Escape user-provided values before inserting into the HTML email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Branded HTML notification email sent to Rafin Solutions
 * when a visitor submits the contact form.
 */
function buildEnquiryEmail(opts: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): string {
  const rows = [
    { label: "Full Name", value: escapeHtml(opts.fullName) },
    { label: "Email Address", value: escapeHtml(opts.email) },
    { label: "Phone Number", value: opts.phone ? escapeHtml(opts.phone) : "—" },
    { label: "Subject", value: escapeHtml(opts.subject) },
  ];

  const detailRows = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:12px 24px;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#94a3b8;background:#f8fafc;border-bottom:1px solid #e2e8f0;white-space:nowrap;vertical-align:top;width:160px;">
            ${row.label}
          </td>
          <td style="padding:12px 24px;font-size:15px;color:#1e293b;background:#f8fafc;border-bottom:1px solid #e2e8f0;vertical-align:top;">
            ${row.value}
          </td>
        </tr>`,
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <body style="margin:0;padding:0;background-color:#f1f5f9;">
        <div style="font-family:Inter, Arial, Helvetica, sans-serif;background-color:#f1f5f9;padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
            <!-- Header -->
            <tr>
              <td style="background-color:#0f172a;padding:28px 32px;">
                <div style="color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.02em;">
                  Rafin <span style="color:#facc15;">Solutions</span>
                </div>
                <div style="color:#94a3b8;font-size:13px;margin-top:4px;font-weight:600;">
                  New website enquiry
                </div>
              </td>
            </tr>

            <!-- Intro -->
            <tr>
              <td style="padding:32px 32px 8px;">
                <h1 style="margin:0;color:#0f172a;font-size:20px;font-weight:800;letter-spacing:-0.01em;">
                  A visitor has sent a message
                </h1>
                <p style="margin:10px 0 0;color:#475569;font-size:15px;line-height:1.6;">
                  Someone submitted the contact form on rafinsolutions.com. Details are below — reply to
                  them directly using the email address provided.
                </p>
              </td>
            </tr>

            <!-- Details -->
            <tr>
              <td style="padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
                  ${detailRows}
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:0 32px 32px;">
                <div style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#94a3b8;margin-bottom:10px;">
                  Message
                </div>
                <div style="background-color:#fefce8;border:1px solid #fef08a;border-radius:12px;padding:20px 24px;color:#1e293b;font-size:15px;line-height:1.7;white-space:pre-wrap;">
                  ${escapeHtml(opts.message)}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size:12px;color:#94a3b8;line-height:1.6;">
                      <strong style="color:#475569;">Rafin Solutions</strong><br />
                      Compliance Consultancy for Regulated Financial Businesses<br />
                      <a href="https://rafinsolutions.com" style="color:#f59e0b;text-decoration:none;font-weight:700;">rafinsolutions.com</a>
                    </td>
                    <td align="right" style="font-size:12px;color:#94a3b8;vertical-align:top;">
                      Enquiry via contact form
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  let body: {
    fullName?: unknown;
    email?: unknown;
    phone?: unknown;
    subject?: unknown;
    message?: unknown;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const subject =
    typeof body.subject === "string" && body.subject.trim()
      ? body.subject.trim()
      : "General Inquiry";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { error: "Full name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject: `New website enquiry: ${subject}`,
    html: buildEnquiryEmail({ fullName, email, phone, subject, message }),
  });

  if (error) {
    console.error("Resend send error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
