import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/supabase/admin";
import { createServiceClient } from "@/lib/supabase/server";
import { sendEmailToCustomerReply } from "@/lib/email";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const user = await getAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { token } = await params;
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const body = await request.json();
  const { message } = body;
  if (!message || typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const supabase = createServiceClient();
  if (!supabase) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { data: submission, error: subError } = await supabase
    .from("submissions")
    .select("id, full_name, email, token")
    .eq("token", token)
    .single();

  if (subError || !submission) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { error: msgError } = await supabase.from("messages").insert({
    submission_id: submission.id,
    from_role: "admin",
    body: message.trim(),
  });

  if (msgError) {
    return NextResponse.json({ error: "Failed to save reply" }, { status: 500 });
  }

  await sendEmailToCustomerReply({
    email: submission.email,
    full_name: submission.full_name,
    replyBody: message.trim(),
  }).catch((e) => console.error("Email to customer failed:", e));

  return NextResponse.json({ ok: true });
}
