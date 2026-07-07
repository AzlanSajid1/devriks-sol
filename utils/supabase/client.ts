import { createBrowserClient } from "@supabase/ssr";

/*
  Browser client — used inside Client Components ("use client" files),
  e.g. the login/signup forms while they're checking input, or anything
  that needs to react to auth state live in the browser.

  This replaces the old app/supabaseClient.ts. That file used the plain
  @supabase/supabase-js createClient(), which stores the session in
  localStorage — invisible to the server, so Server Components and
  middleware couldn't tell if someone was logged in. createBrowserClient
  from @supabase/ssr stores the session in cookies instead, which the
  server CAN read. That's the whole reason this package exists.
*/
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
