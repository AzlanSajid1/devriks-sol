"use client";

/*
  "use client" at the very top of a file is a Next.js directive that means:
  "this component needs to run in the browser, not just on the server."

  By default, EVERY component in the App Router is a Server Component —
  it renders once on the server (or at build time) into plain HTML, and
  ships zero JavaScript for that component to the browser. That's great
  for speed, but it means Server Components can't use useState, useEffect,
  onClick, or any browser-only API — there's no browser involved yet when
  they run.

  This Nav needs a burger menu that opens/closes on click, so it needs
  state and an event handler, so it needs to be a Client Component.
  Rule of thumb: mark a component "use client" only when it actually needs
  interactivity — everything else should stay a (free, fast) Server
  Component. You'll see this file is the exception, not the rule.
*/

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#segments", label: "Segments" },
  { href: "#sample", label: "Sample report" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  // In the old script.js, "is the mobile menu open" lived in the DOM itself
  // (a CSS class toggled with classList.toggle). In React, that same fact
  // lives in a `useState` variable instead, and the JSX below just
  // describes what the menu should look like FOR EACH possible value of
  // isOpen. React re-renders the markup whenever isOpen changes.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border-soft bg-bg/[.78] backdrop-blur-[10px]"
    >
      <div className="mx-auto flex h-[72px] max-w-(--container-maxw) items-center justify-between px-7">
        <a className="flex items-center gap-2.5" href="#top">
          <span aria-hidden className="shrink-0">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="var(--color-green)"
                strokeWidth="2.4"
              />
              <path
                d="M16 6 A10 10 0 0 1 26 16"
                fill="none"
                stroke="var(--color-amber)"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-[1.1]">
            <span className="font-display text-[16.5px] font-semibold">
              Devriks Sol
            </span>
            <span className="font-mono text-[10.5px] tracking-[.08em] text-muted-2">
              RetainIQ
            </span>
          </span>
        </a>

        <nav className="hidden gap-8 nav:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center gap-2 rounded-full bg-green px-[18px] py-[10px] text-sm font-semibold text-[#04150F] transition-transform hover:-translate-y-px nav:inline-flex"
          href={waLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon size={16} />
          Message us
        </a>

        {/*
          onClick here is a plain React event handler — same idea as
          addEventListener, just written inline. `setIsOpen((prev) => !prev)`
          flips true/false and tells React to re-render.
        */}
        <button
          className="flex flex-col gap-[5px] p-2 nav:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="h-0.5 w-[22px] rounded-full bg-text" />
          <span className="h-0.5 w-[22px] rounded-full bg-text" />
          <span className="h-0.5 w-[22px] rounded-full bg-text" />
        </button>
      </div>

      {/*
        The old CSS used display:none / .open to show/hide this block.
        Here we just don't render it at all when isOpen is false — no
        classList needed, the JSX conditional IS the toggle.
      */}
      {isOpen && (
        <div className="flex flex-col gap-0.5 border-t border-border-soft px-7 pb-5 pt-2 nav:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-border-soft py-3 text-[15px] text-muted"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-3.5 inline-flex items-center justify-center gap-2 rounded-full bg-green px-[18px] py-[10px] text-sm font-semibold text-[#04150F]"
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener"
            onClick={() => setIsOpen(false)}
          >
            Message us on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
