import { NextResponse } from "next/server";
import { getEmailConfigStatus } from "@/lib/email";

/** GET /api/health/email - Check if email is configured (for Vercel debugging). No secrets exposed. */
export async function GET() {
  const status = getEmailConfigStatus();
  return NextResponse.json(status);
}
