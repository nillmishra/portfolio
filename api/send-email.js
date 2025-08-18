// api/send-email.js (CommonJS for Vercel)
const sgMail = require("@sendgrid/mail");
const { z } = require("zod");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const escapeHtml = (str = "") =>
  str.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  let body = req.body;
  if (!body || typeof body === "string") {
    try { body = JSON.parse(body || "{}"); } catch { body = {}; }
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input.", issues: parsed.error.flatten().fieldErrors });
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
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL, // must be a verified Single Sender in SendGrid
      replyTo: { email, name },
      subject,
      text,
      html,
    });
    return res.status(200).json({ message: "Email sent successfully!", id: resp.headers["x-message-id"] });
  } catch (err) {
    console.error("SendGrid error:", err?.response?.body || err.message || err);
    return res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
};