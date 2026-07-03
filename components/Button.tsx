import type { ReactNode } from "react";

/*
  All external/download links in the original site (WhatsApp CTAs, the
  sample report download) shared two visual styles: .btn-primary and
  .btn-ghost, sometimes with a .btn-lg size modifier. Rather than repeating
  that class soup on every <a> tag, this component takes `variant`/`size`
  props — this is the core idea of a React component: turn a repeated
  chunk of markup + styling into a single reusable piece with a small,
  typed API.
*/
type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  size?: "default" | "lg";
  external?: boolean;
  download?: string;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  size = "default",
  external = false,
  download,
  children,
}: ButtonProps) {
  const sizeClasses =
    size === "lg" ? "px-8 py-[17px] text-base" : "px-6 py-[14px] text-[15px]";

  const variantClasses =
    variant === "primary"
      ? "bg-green text-[#04150F] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(29,158,117,.55)]"
      : "border border-border bg-transparent text-text hover:border-green hover:text-green";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-[9px] whitespace-nowrap rounded-full font-semibold transition-all duration-[180ms] ${sizeClasses} ${variantClasses}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...(download !== undefined ? { download } : {})}
    >
      {children}
    </a>
  );
}
