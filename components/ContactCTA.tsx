import Button from "./Button";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-[radial-gradient(ellipse_at_50%_0%,rgba(29,158,117,.10),transparent_60%)] py-[120px] text-center"
    >
      <Reveal className="mx-auto max-w-[640px] px-7">
        <p className="mb-3.5 justify-center text-center font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
          GET STARTED
        </p>
        <h2 className="mb-4 text-[clamp(30px,4vw,44px)]">
          Ready to see your own numbers?
        </h2>
        <p className="mb-9 text-[17px] text-muted">
          Send your transactions CSV over WhatsApp. We&apos;ll come back with
          a report, usually within a couple of days.
        </p>
        <Button href={waLink(WA_MESSAGES.report)} variant="primary" size="lg" external>
          <WhatsAppIcon size={18} />
          Chat with us on WhatsApp
        </Button>
        <p className="mt-5 font-mono text-sm text-muted-2">
          +92 339 8740213
        </p>
      </Reveal>
    </section>
  );
}
