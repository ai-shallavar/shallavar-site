import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    console.log("=========================");

    // Send email using Gmail SMTP (no third-party email service needed)
    const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL || "ai.shallavar@gmail.com";
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

    if (GMAIL_USER && GMAIL_APP_PASSWORD) {
      try {
        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD,
          },
        });

        // Verify SMTP connection
        await transporter.verify();

        // HTML email template with table-based layout for maximum email client compatibility
        const html = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>New Contact Form Inquiry</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    .reset-table { border-collapse:collapse; padding:0; }
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
        <!-- Main Container -->
        <table class="container-width" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td align="center" style="background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);padding:36px 40px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="font-size:36px;line-height:1;margi-right:12px;">📬</td>
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

          <!-- Divider Line -->
          <tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="height:4px;background:linear-gradient(to right, #2563eb, #3b82f6, #2563eb);"></td></tr></table></td></tr>

          <!-- Content Body -->
          <tr>
            <td class="padding-mobile" style="padding:36px 40px 20px;">
              <table class="reset-table" width="100%" cellpadding="0" cellspacing="0" border="0">
                <!-- Field Header -->
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

                <!-- Info Table -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
                  
                  <!-- Name -->
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#f8fafc;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Name</td>
                        </tr>
                        <tr>
                          <td style="padding-top:6px;font-size:15px;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;"><strong>${name}</strong></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Email -->
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#ffffff;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Email</td>
                        </tr>
                        <tr>
                          <td style="padding-top:6px;font-size:15px;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">${email}</a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  ${phone ? `<tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#f8fafc;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Phone</td>
                        </tr>
                        <tr>
                          <td style="padding-top:6px;font-size:15px;"><a href="tel:${phone}" style="color:#2563eb;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">${phone}</a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ""}

                  ${company ? `<tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#ffffff;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Company</td>
                        </tr>
                        <tr>
                          <td style="padding-top:6px;font-size:15px;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">${company}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ""}

                  ${service ? `<tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#f8fafc;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Service of Interest</td>
                        </tr>
                        <tr>
                          <td style="padding-top:6px;font-size:15px;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">${service}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ""}

                  ${budget ? `<tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background-color:#ffffff;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Estimated Budget</td>
                        </tr>
                        <tr>
                          <td style="padding-top:6px;font-size:15px;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">${budget}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ""}
                </table>

                <!-- Message Section -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
                  <tr>
                    <td style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding-bottom:10px;">Message</td>
                  </tr>
                  <tr>
                    <td style="background-color:#f0f7ff;border-left:4px solid #2563eb;padding:20px;border-radius:0 8px 8px 0;">
                      <p class="message-text" style="margin:0;font-size:14px;line-height:1.7;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">${message}</p>
                    </td>
                  </tr>
                </table>

              </table>
            </td>
          </tr>

          <!-- Divider Line -->
          <tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="height:1px;background-color:#e2e8f0;"></td></tr></table></td></tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color:#f8fafc;padding:24px 40px;border-radius:0 0 12px 12px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:12px;color:#94a3b8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;text-align:center;">
                    This is an automated notification from the Shallavar contact form.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- End Main Container -->
      </td>
    </tr>
  </table>
</body>
</html>`;

        // Send email to admin
        await transporter.sendMail({
          from: `"${name}" <${GMAIL_USER}>`,
          to: TO_EMAIL,
          cc: email,
          subject: `New Contact Form Inquiry from ${name}${service ? ` - ${service}` : ""}`,
          text: `New Contact Form Submission\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCompany: ${company || "Not provided"}\nService: ${service || "Not selected"}\nBudget: ${budget || "Not selected"}\n\nMessage:\n${message}\n\n---\nThis email was sent from the Shallavar contact form.`,
          html,
        });

        console.log(`Email sent successfully to ${TO_EMAIL}`);
      } catch (emailError: any) {
        console.error("Failed to send email:", emailError.message);
        // Don't fail the request if email fails
      }
    } else {
      console.log("Gmail SMTP not configured. Email sending is disabled.");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}