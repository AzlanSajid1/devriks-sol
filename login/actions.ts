"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

/*
  "use server" at the top of a file marks every exported function in it
  as a Server Action — code that runs ONLY on the server, but that a
  <form action={...}> in a Client or Server Component can call directly,
  no API route needed. Next.js wires the network request up for you.
*/
export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  // The root layout's Nav (once it becomes auth-aware) reads cookies to
  // decide what to show — this tells Next.js "the cached version of
  // every page under this layout is now stale, re-render on next visit."
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
