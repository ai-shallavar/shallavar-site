import { NextResponse } from "next/server";
import { Resend } from "resend";

// Configure RESEND_API_KEY in Vercel
// force redeploy
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const budget = formData.get("budget")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    // Validate required fields - return specific messages
    const missingFields: string[] = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!message) missingFields.push("message");

    if (missingFields.length > 0) {
      const fieldLabels: Record<string, string> = { name: "Name", email: "Email", message: "Message" };
      const fieldNames = missingFields.map((f) => fieldLabels[f] || f);
      let errorMessage = "";
      if (missingFields.length === 1) {
        errorMessage = `${fieldNames[0]} is required.`;
      } else if (missingFields.length === 2) {
        errorMessage = `${fieldNames[0]} and ${fieldNames[1]} are required.`;
      } else {
        errorMessage = `${fieldNames[0]}, ${fieldNames[1]}, and ${fieldNames[2]} are required.`;
      }
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log the submission
    console.log("=== New Contact Form Submission ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Company: ${company}`);
    console.log(`Service: ${service}`);
    console.log(`Budget: ${budget}`);
    console.log(`Message: ${message}`);
    console.log("=======================");

    const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL || "ai.shallavar@gmail.com";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    // Track email sending status
    const emailStatus: { adminSent: boolean; customerSent: boolean } = { adminSent: false, customerSent: false };

    // Build HTML email template
    const buildHTML = () => {
      return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>New Contact Form Inquiry</title>
  <style>
    .message-text { white-space:pre-wrap; word-break:break-word; }
    @media (max-width:600px) {
      .container-width { width:100% !important; }
      .stack-column { display:block !important; max-width:100% !important; width:100% !important; }
      .padding-mobile { padding-left:20px !important; padding-right:20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;width:100%;background-color:#f1f5f9;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:30px 10px;">
        <table class="container-width" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td align="center" style="background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);padding:36px 40px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="font-size:36px;line-height:1;margin-right:12px;">📬</td>
                        <td style="font-size:26px;font-weight:700;color:#ffffff;padding-bottom:6px;">New Contact Form Inquiry</td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;">
                      <tr>
                        <td style="font-size:14px;color:rgba(255,255,255,0.85);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Shallavar Technology Website</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="height:4px;background:linear-gradient(to right, #2563eb, #3b82f6, #2563eb);"></td></tr></table></td></tr>
          <tr>
            <td class="padding-mobile" style="padding:36px 40px 20px;">
              <table class="reset-table" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom:20px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:4px;height:24px;background-color:#2563eb;border-radius:2px;"></td>
                        <td style="padding-left:12px;font-size:18px;font-weight:700;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Inquiry Details</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#f8fafc;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr><td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Name</td></tr>
                        <tr><td style="padding-top:6px;font-size:15px;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;"><strong>${name}</strong></td></tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#ffffff;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr><td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Email</td></tr>
                        <tr><td style="padding-top:6px;font-size:15px;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></td></tr>
                      </table>
                    </td>
                  </tr>
                  ${phone ? `<tr><td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#f8fafc;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">Phone</td></tr><tr><td style="padding-top:6px;font-size:15px;"><a href="tel:${phone}" style="color:#2563eb;text-decoration:none;">${phone}</a></td></tr></table></td></tr>` : ""}
                  ${company ? `<tr><td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#ffffff;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">Company</td></tr><tr><td style="padding-top:6px;font-size:15px;color:#1e293b;">${company}</td></tr></table></td></tr>` : ""}
                  ${service ? `<tr><td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#f8fafc;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">Service of Interest</td></tr><tr><td style="padding-top:6px;font-size:15px;color:#1e293b;">${service}</td></tr></table></td></tr>` : ""}
                  ${budget ? `<tr><td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#ffffff;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">Estimated Budget</td></tr><tr><td style="padding-top:6px;font-size:15px;color:#1e293b;">${budget}</td></tr></table></td></tr>` : ""}
                </table>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
                  <tr><td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;padding-bottom:10px;">Message</td></tr>
                  <tr><td style="background-color:#f0f7ff;border-left:4px solid #2563eb;padding:20px;border-radius:0 8px 8px 0;"><p class="message-text" style="margin:0;font-size:14px;line-height:1.7;color:#1e293b;">${message}</p></td></tr>
                </table>
              </table>
            </td>
          </tr>
          <tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="height:1px;background-color:#e2e8f0;"></td></tr></table></td></tr>
          <tr>
            <td align="center" style="background-color:#f8fafc;padding:24px 40px;border-radius:0 0 12px 12px;">
              <p style="font-size:12px;color:#94a3b8;margin:0;">This is an automated notification from the Shallavar contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
    };

    const plainText = `New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Service: ${service || "Not selected"}
Budget: ${budget || "Not selected"}

Message:
${message}

---
This email was sent from the Shallavar contact form.`;

    let sent = false;
    let emailError: string | null = null;

    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);
        const resendResponse = await resend.emails.send({
          from: `Shallavar Contact <no-reply@shallavar.com>`,
          to: [TO_EMAIL],
          cc: [email],
          subject: `New Contact Form Inquiry from ${name}${service ? ` - ${service}` : ""}`,
          text: plainText,
          html: buildHTML(),
        });
        console.log(`✅ Email sent via Resend`);
        console.log(`   To: ${TO_EMAIL}, CC: ${email}`);
        emailStatus.adminSent = true;
        emailStatus.customerSent = true;
        sent = true;
      } catch (e: unknown) {
        emailError = e instanceof Error ? e.message : String(e);
        console.error(`❌ Resend API failed: ${emailError}`);
      }
    }

    if (!sent) {
      const configured = RESEND_API_KEY ? "Resend" : "none";
      console.error(`No email sent. Providers configured: [${configured}]. Error: ${emailError || "unknown"}`);
    }

    // If email completely failed, return error with helpful message
    if (!emailStatus.adminSent) {
      console.warn("Email sending failed but form submission succeeded. Data logged but not emailed.");
      // Don't fail the request - the data is logged above
      // Return success but with a note that email delivery may have failed
      return NextResponse.json(
        { 
          success: true, 
          message: "Your message has been received. We'll get back to you shortly!",
          _emailWarning: emailError ? "Delivery issue detected. We're looking into it." : undefined,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been sent successfully! We'll get back to you shortly.",
        emailSent: true,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    return NextResponse.json(
        { error: "Internal server error. Please try again or email us directly at hello@shallavar.com" },
      { status: 500 }
    );
  }
}
