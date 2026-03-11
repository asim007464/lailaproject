import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { sendEmailToAdminNewSubmission, sendEmailToCustomerConfirmation } from "@/lib/email";
import { randomBytes } from "crypto";

function generateToken() {
  return randomBytes(24).toString("hex");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      full_name,
      email,
      phone,
      company_name,
      project_type,
      budget_min,
      budget_max,
      website_url,
      message,
    } = body;

    if (!full_name || !email || !project_type || !message) {
      return NextResponse.json(
        { error: "Missing required fields: full_name, email, project_type, message" },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();
    if (!supabase) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const token = generateToken();

    const { data: submission, error: insertError } = await supabase
      .from("submissions")
      .insert({
        token,
        full_name: String(full_name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: phone ? String(phone).trim() : null,
        company_name: company_name ? String(company_name).trim() : null,
        project_type: String(project_type).trim(),
        budget_min: budget_min != null ? Number(budget_min) : null,
        budget_max: budget_max != null ? Number(budget_max) : null,
        website_url: website_url ? String(website_url).trim() : null,
        message: String(message).trim(),
      })
      .select("id")
      .single();

    if (insertError) {
      console.error(insertError);
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }

    await supabase.from("messages").insert({
      submission_id: submission.id,
      from_role: "customer",
      body: String(message).trim(),
    });

    await sendEmailToAdminNewSubmission({
      full_name: String(full_name),
      email: String(email),
      project_type: String(project_type),
      message: String(message),
      id: submission.id,
    }).catch((e) => console.error("[Contact] Admin notification email failed:", e));

    await sendEmailToCustomerConfirmation({
      email: String(email),
      full_name: String(full_name),
    }).catch((e) => console.error("[Contact] Customer confirmation email failed:", e));

    return NextResponse.json({ token });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
