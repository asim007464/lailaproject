import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/supabase/admin";
import { createServiceClient } from "@/lib/supabase/server";

export async function GET() {
  const user = await getAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceClient();
  if (!supabase) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("submissions")
    .select("id, token, full_name, email, project_type, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Failed to load submissions" }, { status: 500 });
  }

  return NextResponse.json({ submissions: data });
}
