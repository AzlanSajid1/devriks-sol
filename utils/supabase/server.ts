import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/*
  Server client — used inside Server Components, Server Actions, and
  Route Handlers (anything that runs only on the server, never ships to
  the browser). It reads the logged-in user's session from the incoming
  request's cookies via next/headers, so a Server Component can know
  "who is this?" before it even renders anything.

  Call this fresh every time you need it (don't cache/reuse the client
  across requests) — that's why it's a function, not a single exported
  instance.
*/
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component during rendering, where
            // cookies can't be written. Harmless to ignore here — the
            // middleware below is what actually persists refreshed
            // sessions; this catch just stops Next.js from throwing.
          }
        },
      },
    }
  );
}
