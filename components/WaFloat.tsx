import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

// Pure CSS animation (the pulsing ring), no interactivity — stays a
// Server Component, ships as static HTML.
export default function WaFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-[60] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-[#04150F] shadow-[0_10px_26px_-8px_rgba(0,0,0,.55)] transition-transform duration-200 hover:scale-[1.08] nav:right-6 nav:bottom-6 nav:h-[58px] nav:w-[58px]"
    >
      <span className="absolute inset-0 animate-[waPulse_2.2s_ease-out_infinite] rounded-full border-2 border-[#25D366]" />
      <WhatsAppIcon size={28} />
    </a>
  );
}
