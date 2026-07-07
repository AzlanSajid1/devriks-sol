import Link from "next/link";
import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-7 py-24">
      <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
        WELCOME BACK
      </p>
      <h1 className="mb-8 font-display text-3xl">Log in to RetainIQ</h1>

      {params.error && (
        <p className="mb-5 rounded-lg border border-red/30 bg-red-soft px-4 py-3 text-sm text-red">
          {params.error}
        </p>
      )}

      {/*
        No "use client" anywhere on this page, no onSubmit handler, no
        useState for the input values — this is a plain HTML form whose
        `formAction` points straight at a Server Action. Next.js
        progressively enhances it: works even with JS disabled, and
        becomes a fetch-based submission once JS loads. This is the
        simplest correct way to build a login form in the App Router.
      */}
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none focus:border-green"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm text-muted">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none focus:border-green"
          />
        </div>
        <button
          formAction={login}
          className="mt-2 rounded-full bg-green px-6 py-3 font-semibold text-[#04150F] transition-transform hover:-translate-y-0.5"
        >
          Log in
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-green hover:underline">
          Sign up
        </Link>
      </p>
    </main>
  );
}
