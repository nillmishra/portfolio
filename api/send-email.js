// api/send-email.js (ESM)
import sgMail from "@sendgrid/mail";
import { z } from "zod";

const DEBUG = process.env.DEBUG_MAILER === "1";

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY is not set");
}

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const escapeHtml = (str = "") =>
  str.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Handle raw/string body if needed
  let body = req.body;
  if (!body || typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      body = {};
    }
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid input.",
      issues: parsed.error.flatten().fieldErrors,
    });
  }

  const { name, email, message } = parsed.data;

  const subject = `New message from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const html = `
    <h2>New message from your portfolio</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const [resp] = await sgMail.send({
      to: process.env.TO_EMAIL || process.env.FROM_EMAIL,
      from: { email: process.env.FROM_EMAIL, name: "Portfolio Contact" }, // must be verified in SendGrid
      replyTo: { email, name },
      subject,
      text,
      html,
    });

    return res.status(200).json({
      message: "Email sent successfully!",
      id: resp?.headers?.["x-message-id"] || null,
    });
  } catch (err) {
    const sgDetail =
      err?.response?.body?.errors?.map((e) => e.message).join("; ") ||
      err?.response?.body ||
      err.message ||
      "Unknown error";

    console.error("SendGrid error:", sgDetail);

    return res.status(500).json({
      message: DEBUG ? `Mailer error: ${sgDetail}` : "Failed to send email. Please try again later.",
    });
  }
}