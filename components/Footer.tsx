import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const FOOTER_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#segments", label: "Segments" },
  { href: "#sample", label: "Sample report" },
  { href: waLink(WA_MESSAGES.general), label: "WhatsApp", external: true },
];

export default function Footer() {
  // Computed once on the server at build/request time. No useEffect needed —
  // unlike the old `document.getElementById('year').textContent = ...`,
  // this doesn't need to touch the DOM at all.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft py-11">
      <div className="mx-auto flex max-w-(--container-maxw) flex-wrap items-center justify-between gap-5 px-7">
        <div>
          <span className="mb-1 block font-display text-[16.5px] font-semibold">
            Devriks Sol
          </span>
          <span className="font-mono text-[10.5px] text-muted-2">
            RetainIQ — customer retention, measured.
          </span>
        </div>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] text-muted hover:text-text"
              {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-2 w-full text-[12.5px] text-muted-2">
          © {year} Devriks Sol. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
