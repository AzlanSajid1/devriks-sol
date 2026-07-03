"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * Replaces the old .reveal / .in-view CSS classes. Wrap any block in
 * <Reveal> and it fades + slides up the first time it scrolls into view.
 */
type RevealProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Reveal({
  children,
  className = "",
  threshold = 0.15,
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
