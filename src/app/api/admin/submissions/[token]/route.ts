import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/supabase/admin";
import { createServiceClient } from "@/lib/supabase/server";

export async function GET(
  _request: Request,
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

  const supabase = createServiceClient();
  if (!supabase) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { data: submission, error: subError } = await supabase
    .from("submissions")
    .select("*")
    .eq("token", token)
    .single();

  if (subError || !submission) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { data: messages } = await supabase
    .from("messages")
    .select("id, from_role, body, created_at")
    .eq("submission_id", submission.id)
    .order("created_at", { ascending: true });

  return NextResponse.json({
    submission,
    messages: messages || [],
  });
}
