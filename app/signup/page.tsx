import Link from "next/link";
import { signup } from "./actions";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-7 py-24">
      <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
        GET STARTED
      </p>
      <h1 className="mb-8 font-display text-3xl">Create your account</h1>

      {params.error && (
        <p className="mb-5 rounded-lg border border-red/30 bg-red-soft px-4 py-3 text-sm text-red">
          {params.error}
        </p>
      )}
      {params.message && (
        <p className="mb-5 rounded-lg border border-green/30 bg-green-soft px-4 py-3 text-sm text-green">
          {params.message}
        </p>
      )}

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
            minLength={6}
            autoComplete="new-password"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none focus:border-green"
          />
        </div>
        <button
          formAction={signup}
          className="mt-2 rounded-full bg-green px-6 py-3 font-semibold text-[#04150F] transition-transform hover:-translate-y-0.5"
        >
          Sign up
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="text-green hover:underline">
          Log in
        </Link>
      </p>
    </main>
  );
}
