"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

type StatValueProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

export default function StatValue({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: StatValueProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="block font-mono text-2xl font-semibold text-green">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
