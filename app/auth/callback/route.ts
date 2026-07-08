import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

/*
  Supabase sends users here after they click the confirmation link in
  their signup email, with a one-time `code` in the URL. This route
  trades that code for a real session (sets the auth cookies), then
  bounces the user on to the dashboard.
*/
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(
    `${origin}/login?error=${encodeURIComponent(
      "Could not verify your email. Try signing up again."
    )}`
  );
}
