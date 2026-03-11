import { Resend } from "resend";
import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";

/** Resend client (used when RESEND_API_KEY is set) */
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

/** Nodemailer transporter for Gmail (used when GMAIL_USER + GMAIL_APP_PASSWORD are set) */
function getGmailTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

/** Check email configuration (for diagnostics). Does not expose secrets. */
export function getEmailConfigStatus(): {
  senderConfigured: boolean;
  method: "gmail" | "resend" | "none";
  adminEmailSet: boolean;
  hint?: string;
} {
  const hasGmail = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  const hasResend = !!process.env.RESEND_API_KEY;
  const adminSet = !!process.env.ADMIN_EMAIL;

  if (hasGmail) {
    return {
      senderConfigured: true,
      method: "gmail",
      adminEmailSet: adminSet,
      hint: !adminSet ? "Set ADMIN_EMAIL in Vercel to receive notifications." : undefined,
    };
  }
  if (hasResend) {
    const usingOnboarding = !process.env.EMAIL_FROM || process.env.EMAIL_FROM.includes("onboarding@resend.dev");
    return {
      senderConfigured: true,
      method: "resend",
      adminEmailSet: adminSet,
      hint: usingOnboarding
        ? "Using onboarding@resend.dev: Resend only allows sending TO your Resend signup email. Verify your domain in Resend to send to any address."
        : !adminSet
          ? "Set ADMIN_EMAIL in Vercel to receive notifications."
          : undefined,
    };
  }
  return {
    senderConfigured: false,
    method: "none",
    adminEmailSet: adminSet,
    hint: "Set GMAIL_USER + GMAIL_APP_PASSWORD, or RESEND_API_KEY in Vercel env vars. Redeploy after adding.",
  };
}

/** Which sender to use: Gmail (Nodemailer) takes precedence over Resend if both are set */
function getFromAddress(): string {
  if (process.env.GMAIL_USER) {
    const name = process.env.EMAIL_FROM_NAME || "NWstudios";
    return `${name} <${process.env.GMAIL_USER}>`;
  }
  return process.env.EMAIL_FROM || "NWstudios <onboarding@resend.dev>";
}

type SendMailOptions = {
  to: string;
  subject: string;
  html: string;
};

async function sendMail(options: SendMailOptions): Promise<void> {
  const { to, subject, html } = options;
  const from = getFromAddress();

  const gmail = getGmailTransporter();
  if (gmail) {
    const info = await gmail.sendMail({ from, to, subject, html });
    if (info.rejected?.length) {
      const err = new Error(`Gmail rejected: ${info.rejected.join(", ")}`);
      console.error("[Email] Gmail send failed:", err);
      throw err;
    }
    return;
  }

  const resend = getResend();
  if (resend) {
    const { error } = await resend.emails.send({ from, to, subject, html });
    if (error) {
      console.error("[Email] Resend send failed:", error);
      throw error;
    }
    return;
  }

  const err = new Error(
    "[Email] No sender configured. Set GMAIL_USER + GMAIL_APP_PASSWORD, or RESEND_API_KEY in Vercel env vars."
  );
  console.error(err.message);
  throw err;
}

/** Notify admin when a new contact form is submitted */
export async function sendEmailToAdminNewSubmission(submission: {
  full_name: string;
  email: string;
  project_type: string;
  message: string;
  id: string;
}) {
  if (!ADMIN_EMAIL) {
    console.warn("[Email] ADMIN_EMAIL is not set. Admin was not notified of the new submission.");
    return;
  }
  const adminDashboardLink = `${APP_URL.replace(/\/$/, "")}/admin`;
  const safeMessage = escapeHtml(submission.message);

  await sendMail({
    to: ADMIN_EMAIL,
    subject: `New contact form: ${submission.full_name} – ${submission.project_type}`,
    html: `
      <p><strong>New submission from your website:</strong></p>
      <ul>
        <li>Name: ${escapeHtml(submission.full_name)}</li>
        <li>Email: ${escapeHtml(submission.email)}</li>
        <li>Project type: ${escapeHtml(submission.project_type)}</li>
      </ul>
      <p>Message:</p>
      <p>${safeMessage}</p>
      <p><a href="${adminDashboardLink}">Reply from admin panel</a></p>
    `,
  });
  console.log("[Email] Admin new-submission notification sent to", ADMIN_EMAIL);
}

export async function sendEmailToCustomerConfirmation(submission: {
  email: string;
  full_name: string;
}) {
  await sendMail({
    to: submission.email,
    subject: "We received your message – NWstudios",
    html: `
      <p>Hi ${escapeHtml(submission.full_name)},</p>
      <p>Thank you for getting in touch. We've received your project details and will get back to you via email within 24 hours.</p>
      <p>— NWstudios</p>
    `,
  });
}

/** Send admin reply to customer's email */
export async function sendEmailToCustomerReply(submission: {
  email: string;
  full_name: string;
  replyBody: string;
}) {
  const safeBody = escapeHtml(submission.replyBody);

  await sendMail({
    to: submission.email,
    subject: "Reply from NWstudios",
    html: `
      <p>Hi ${escapeHtml(submission.full_name)},</p>
      <p>We've replied to your message:</p>
      <div style="margin:1em 0; padding:1em; background:#f5f5f5; border-radius:8px;">${safeBody}</div>
      <p>You can reply directly to this email if you have any follow-up questions.</p>
      <p>— NWstudios</p>
    `,
  });
}
