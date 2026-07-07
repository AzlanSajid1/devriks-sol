import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/*
  Auth tokens expire and need refreshing periodically. Server Components
  can't write cookies (see server.ts above), so nothing refreshes the
  token during normal page rendering — it would just silently go stale.

  This function runs on EVERY request (wired up via the root middleware.ts
  next to this file) and: reads the current session, refreshes it if
  needed via supabase.auth.getUser(), and writes the refreshed cookie
  back onto the response so both the browser and the next Server
  Component see an up-to-date session.
*/
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: this call must not be removed. It's what actually
  // refreshes the token — deleting it (even though the return value
  // looks unused) silently breaks session refresh.
  await supabase.auth.getUser();

  return supabaseResponse;
}
