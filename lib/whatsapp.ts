/*
  Small shared module for the WhatsApp deep links used across the site
  (nav, hero, contact section, floating button). Keeping the number and
  message strings here means changing the phone number later is a
  one-line edit instead of a find-and-replace across every component.
*/
export const WHATSAPP_NUMBER = "923398740213";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Hi, I'd like to learn more about RetainIQ.",
  report: "Hi, I'd like to get a retention report for my business.",
} as const;
