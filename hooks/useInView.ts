"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has scrolled into view. Fires once, then stops
 * observing (matches the original script.js behavior: reveal/count-up
 * animations play once, not every time you scroll back over them).
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView } as const;
}
