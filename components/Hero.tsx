"use client";

/*
  This one needs "use client" too, but for a different reason than Nav:
  it doesn't respond to clicks, but it DOES need to run an animation after
  the page loads (drawing the donut chart, counting up to 300). That's a
  "side effect" — something that happens outside of just rendering JSX —
  and side effects are exactly what useEffect is for.
*/

import { useEffect, useState } from "react";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const DONUT_SEGMENTS = [
  { key: "champions", color: "var(--color-green)", len: 86.71, gap: 491.35, offset: 0 },
  { key: "loyal", color: "var(--color-blue)", len: 150.29, gap: 427.76, offset: -86.71 },
  { key: "atrisk", color: "var(--color-amber)", len: 260.12, gap: 317.93, offset: -237.0 },
  { key: "lost", color: "var(--color-red)", len: 80.93, gap: 497.13, offset: -497.13 },
];

const LEGEND = [
  { key: "champions", color: "bg-green", label: "Champions" },
  { key: "loyal", color: "bg-blue", label: "Loyal" },
  { key: "atrisk", color: "bg-amber", label: "At risk" },
  { key: "lost", color: "bg-red", label: "Lost" },
];

export default function Hero() {
  // Whether the donut ring segments have "drawn in" yet. Starts false so
  // the very first paint matches the old CSS default (dasharray "0 578" —
  // an invisible ring), then flips true a frame later so the CSS
  // transition actually has something to animate FROM.
  const [drawn, setDrawn] = useState(false);

  // The live number shown in the center of the donut, counting 0 -> 300.
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Flip the ring on, one animation frame after mount.
    const drawFrame = requestAnimationFrame(() => setDrawn(true));

    // Same easing/duration math as the original animateDonutNumber().
    const target = 300;
    const duration = 1400;
    const start = performance.now();
    let countFrame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) countFrame = requestAnimationFrame(tick);
    }
    countFrame = requestAnimationFrame(tick);

    // useEffect's return value is a CLEANUP function — React calls it if
    // the component unmounts before the animation finishes, so we don't
    // leak a requestAnimationFrame loop that tries to update state on a
    // component that no longer exists.
    return () => {
      cancelAnimationFrame(drawFrame);
      cancelAnimationFrame(countFrame);
    };
  }, []); // empty dependency array = "run once, after the first render"

  return (
    <section className="overflow-hidden px-0 pb-10 pt-[88px]">
      <div className="mx-auto grid max-w-(--container-maxw) grid-cols-1 items-center gap-14 px-7 tab:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
            CUSTOMER RETENTION, MEASURED
          </p>
          <h1 className="mb-[22px] text-[clamp(36px,4.6vw,58px)] leading-[1.08] tracking-[-.015em]">
            Some customers leave <em className="text-amber italic">quietly.</em>
            <br />
            We tell you who — <span className="whitespace-nowrap">and when.</span>
          </h1>
          <p className="mb-[34px] max-w-[46ch] text-lg text-muted">
            Send us a year of transactions. We run predictive retention models on top
            and hand back a report that shows exactly which customers are slipping away,
            and what each one is worth to keep.
          </p>
          <div className="mb-4 flex flex-wrap gap-3.5">
            <Button href={waLink(WA_MESSAGES.report)} variant="primary" external>
              <WhatsAppIcon size={17} />
              Get your report
            </Button>
            <Button href="#sample" variant="ghost">
              See a sample report
            </Button>
          </div>
          <p className="text-[13.5px] text-muted-2">
            No integration. No dashboard login. Just a CSV in, a report out.
          </p>
        </div>

        <div aria-hidden className="tab:order-first flex flex-col items-center gap-[22px]">
          <div className="relative w-[min(280px,80vw)]">
            <svg viewBox="0 0 240 240" className="w-full -rotate-90">
              <circle cx="120" cy="120" r="92" fill="none" stroke="var(--color-surface-2)" strokeWidth="20" />
              {DONUT_SEGMENTS.map((seg) => (
                <circle
                  key={seg.key}
                  cx="120"
                  cy="120"
                  r="92"
                  fill="none"
                  strokeWidth="20"
                  strokeLinecap="butt"
                  stroke={seg.color}
                  strokeDasharray={drawn ? `${seg.len} ${seg.gap}` : "0 578"}
                  strokeDashoffset={seg.offset}
                  className="transition-[stroke-dasharray] duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)]"
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-[34px] font-semibold">
                {count.toLocaleString("en-US")}
              </span>
              <span className="mt-1 text-[11.5px] leading-tight text-muted">
                customers
                <br />
                segmented
              </span>
            </div>
          </div>
          <ul className="flex flex-wrap justify-center gap-[18px]">
            {LEGEND.map((item) => (
              <li key={item.key} className="flex items-center gap-[7px] text-[13px] text-muted">
                <span className={`h-[9px] w-[9px] rounded-full ${item.color}`} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
