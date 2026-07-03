/*
  This is a plain function component with no state and no browser APIs, so
  it stays a Server Component by default (no "use client" needed). It's
  reused at four different sizes across the site (nav: 16px, hero btn:
  17px, floating btn: 28px), so a `size` prop replaces the old
  copy-pasted <svg> markup that appeared four times in index.html.
*/
export default function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.34z" />
      <path d="M12.02 2C6.5 2 2.03 6.47 2.03 12c0 1.87.51 3.63 1.4 5.13L2 22l4.99-1.31A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.53 22 12S17.53 2 12.02 2zm0 18.13c-1.68 0-3.28-.46-4.66-1.28l-.33-.2-3.11.82.83-3.03-.22-.34a8.14 8.14 0 0 1-1.28-4.4c0-4.5 3.66-8.16 8.17-8.16A8.13 8.13 0 0 1 20.15 12c0 4.5-3.66 8.13-8.13 8.13z" />
    </svg>
  );
}
