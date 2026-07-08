import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "./actions";

/*
  This is the actual access-control check. It's deliberately simple:
  ask Supabase "who is this?" and if there's no answer, redirect. No
  custom session logic, no JWT parsing by hand — supabase.auth.getUser()
  verifies the token against Supabase's own auth server, which is the
  one Supabase-recommended way to gate a page (getSession() alone is
  NOT sufficient for protecting data — it only reads cookies, it doesn't
  verify them).
*/
export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-(--container-maxw) px-7 py-24">
      <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
        DASHBOARD
      </p>
      <h1 className="mb-2 font-display text-3xl">Welcome back</h1>
      <p className="mb-8 text-muted">{data.user.email}</p>

      <div className="rounded-card border border-border bg-surface p-8 text-muted">
        Report upload and subscription status will live here — wired up
        in Phase 4 (Stripe subscriptions) and Phase 6 (report pipeline).
      </div>

      <form action={signOut} className="mt-8">
        <button className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-green hover:text-green">
          Log out
        </button>
      </form>
    </main>
  );
}
